"use client";

import { EXAMPLES } from "@/lib/constants";

interface ExamplesGridProps {
  onSelect: (text: string) => void;
}

export function ExamplesGrid({ onSelect }: ExamplesGridProps) {
  return (
    <div className="mt-8">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
        Try an Example
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {EXAMPLES.map((ex) => (
          <button
            key={ex.raw}
            onClick={() => onSelect(ex.raw)}
            className="text-left bg-white border border-gray-200 rounded-lg p-4 hover:border-google-blue hover:shadow-md transition-all group"
          >
            <p className="text-sm text-gray-400 mb-2 leading-relaxed">
              &ldquo;{ex.raw}&rdquo;
            </p>
            <p className="text-xs text-gray-300 mb-1">↓ Corporate Speak</p>
            <p className="text-sm text-google-blue font-medium leading-relaxed group-hover:text-blue-700">
              &ldquo;{ex.pro}&rdquo;
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
