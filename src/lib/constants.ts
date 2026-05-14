import type { ToneMode, Example } from "@/types";

export const TONE_PROMPTS: Record<ToneMode, string> = {
  mild: "Upgrade this resume bullet slightly — make it sound professional but still believable and honest. Keep it realistic.",
  medium:
    "Transform this into polished resume language. Use strong action verbs, quantify where reasonable, and make it impressive.",
  extra:
    "Make this sound absolutely legendary for a resume. Use the most powerful corporate language, impressive metrics, and strong framing. Go hard.",
  absurd:
    "Translate this into the most ridiculously over-the-top corporate resume speak imaginable. Make it satirically absurd but still resume-formatted. Be funny.",
};

export const TONE_OPTIONS: { value: ToneMode; label: string; emoji: string }[] =
  [
    { value: "mild", label: "Mild", emoji: "😌" },
    { value: "medium", label: "Medium", emoji: "😤" },
    { value: "extra", label: "Extra", emoji: "🚀" },
    { value: "absurd", label: "Absurd", emoji: "💀" },
  ];

export const EXAMPLES: Example[] = [
  {
    raw: "Made coffee at Starbucks",
    pro: "Orchestrated high-volume beverage production in a fast-paced customer-facing environment",
  },
  {
    raw: "Helped customers at Walmart",
    pro: "Delivered end-to-end client success solutions across a diverse stakeholder portfolio",
  },
  {
    raw: "Babysat my neighbor's kids",
    pro: "Managed cross-functional youth development initiatives and mitigated operational risk",
  },
  {
    raw: "Mowed lawns on weekends",
    pro: "Spearheaded scalable green-space optimization services with proven client retention",
  },
  {
    raw: "Posted on the company Instagram",
    pro: "Drove organic content strategy and brand narrative across key social channels",
  },
  {
    raw: "Fixed a printer",
    pro: "Diagnosed and resolved critical infrastructure bottlenecks, restoring operational continuity with zero downtime",
  },
];

export const MAX_CHARS = 2000;
