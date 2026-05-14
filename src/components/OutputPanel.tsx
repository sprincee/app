"use client";

import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import type { TranslateResponse } from "@/types";

interface OutputPanelProps {
  result: TranslateResponse | null;
  isLoading: boolean;
  loadingMessage: string;
  error: string | null;
}

export function OutputPanel({ result, isLoading, loadingMessage, error }: OutputPanelProps) {
  const { copy, copied } = useCopyToClipboard();

  return (
    <div className="flex-1 flex flex-col bg-[#f0f4ff]">
      <div className="flex-1 px-6 pt-6 overflow-auto">
        {isLoading && (
          <div className="space-y-4">
            <p className="text-sm text-google-blue animate-pulse font-medium">
              {loadingMessage}
            </p>
            <div className="space-y-3 pt-1">
              {[88, 68, 44].map((w) => (
                <div
                  key={w}
                  className="h-5 rounded-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 animate-shimmer bg-[length:800px_100%]"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </div>
        )}
        {!isLoading && error && <p className="text-red-400 text-xl">{error}</p>}
        {!isLoading && !error && result && (
          <p className="text-[#1557b0] text-2xl leading-relaxed animate-fade-in">
            {result.translation}
          </p>
        )}
        {!isLoading && !error && !result && (
          <p className="text-gray-400 text-2xl font-medium">Translation</p>
        )}
      </div>

      <div className="h-14 flex items-center px-5 border-t border-blue-100">
        {result && (
          <button
            onClick={() => copy(result.translation)}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-google-blue transition-colors"
            title="Copy"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>
    </div>
  );
}