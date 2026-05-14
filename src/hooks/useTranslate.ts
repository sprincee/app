"use client";

import { useState } from "react";
import type { ToneMode, TranslateResponse } from "@/types";

interface UseTranslateReturn {
  result: TranslateResponse | null;
  isLoading: boolean;
  error: string | null;
  translate: (text: string, tone: ToneMode) => Promise<void>;
  reset: () => void;
}

export function useTranslate(): UseTranslateReturn {
  const [result, setResult] = useState<TranslateResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translate = async (text: string, tone: ToneMode) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, tone }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Translation failed");
      }

      const data: TranslateResponse = await res.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return { result, isLoading, error, translate, reset };
}
