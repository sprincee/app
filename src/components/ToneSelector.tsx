"use client";

import { TONE_OPTIONS } from "@/lib/constants";
import type { ToneMode } from "@/types";

interface ToneSelectorProps {
  value: ToneMode;
  onChange: (tone: ToneMode) => void;
}

export function ToneSelector({ value, onChange }: ToneSelectorProps) {
  return (
    <div className="mb-4">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">
        Translation Intensity
      </span>
      <div className="flex flex-wrap gap-2">
        {TONE_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all ${
              value === opt.value
                ? "bg-google-blue border-google-blue text-white"
                : "bg-white border-gray-300 text-gray-500 hover:border-google-blue hover:text-google-blue"
            }`}
          >
            {opt.emoji} {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
