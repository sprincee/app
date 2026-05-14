# Resume Translate 📄

> Google Translate, but for making your resume sound impressive.

Turn "I made sandwiches at Subway" into "Orchestrated high-volume food production operations in a dynamic customer-facing environment." Built as a joke. Works surprisingly well.

## Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Anthropic SDK** — Claude handles the translation server-side

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up env
cp .env.example .env.local
# Add your ANTHROPIC_API_KEY

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── api/translate/route.ts   # API route — Anthropic call lives here
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── LanguageBar.tsx
│   ├── ToneSelector.tsx
│   ├── InputPanel.tsx
│   ├── OutputPanel.tsx
│   ├── BuzzwordStrip.tsx
│   ├── ExamplesGrid.tsx
│   └── TranslatorView.tsx      # Main orchestrator
├── hooks/
│   ├── useTranslate.ts
│   └── useCopyToClipboard.ts
├── lib/
│   └── constants.ts
└── types/
    └── index.ts
```

## Tone Modes

| Mode | Vibe |
|------|------|
| 😌 Mild | Honest upgrade, still believable |
| 😤 Medium | Polished and impressive |
| 🚀 Extra | Legendary, maximalist |
| 💀 Absurd | Parody mode — satirically unhinged |

## Deploy

Push to GitHub and import in [Vercel](https://vercel.com). Add `ANTHROPIC_API_KEY` to your Vercel environment variables. Done.
