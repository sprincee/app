import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import type { TranslateRequest, TranslateResponse } from "@/types";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const body: TranslateRequest = await req.json();
    const { text } = body;

    if (!text?.trim()) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: `You are an expert resume writer and career coach. You transform casual job descriptions into powerful, concise resume bullet points.

Rules you must follow:
- Lead with a strong action verb (Spearheaded, Orchestrated, Engineered, Drove, Optimized, etc.)
- Keep it to 1-2 lines max — brevity is critical, recruiters skim
- Use the "Did X using Y to achieve Z" structure OR STAR format
- Show impact through metrics wherever reasonable (%, volume, time saved, users served, scale, etc.)
- Include industry-relevant technical jargon naturally
- No filler words, no fluff, no full sentences that start with "I"
- Output only the bullet point itself, nothing else

Respond with valid JSON only, no markdown code fences:
{
  "translation": "the single polished resume bullet point",
  "buzzwords": ["5-8 power words used"]
}`,
      messages: [
        {
          role: "user",
          content: `Transform this into a strong resume bullet point: "${text}"`,
        },
      ],
    });

    const raw =
      message.content[0].type === "text" ? message.content[0].text : "";

    const cleaned = raw.trim().replace(/^```json\s*/i, "").replace(/```\s*$/i, "");
    const parsed: TranslateResponse = JSON.parse(cleaned);

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Translate API error:", err);
    return NextResponse.json(
      { error: "Translation failed. Please try again." },
      { status: 500 }
    );
  }
}