"use client";

import { X } from "lucide-react";

interface InputPanelProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
}

export function InputPanel({ value, onChange, onClear }: InputPanelProps) {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={2000}
        placeholder="Enter text"
        className="flex-1 resize-none border-none outline-none px-6 pt-6 text-2xl text-gray-800 placeholder-gray-300 bg-transparent leading-relaxed"
      />
      <div className="h-14 flex items-center px-5 border-t border-gray-100">
        {value && (
          <button
            onClick={onClear}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}