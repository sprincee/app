"use client";

import { useState, useRef } from "react";
import { InputPanel } from "@/components/InputPanel";
import { OutputPanel } from "@/components/OutputPanel";
import { useTranslate } from "@/hooks/useTranslate";
import { Clock, X } from "lucide-react";

const LOADING_MESSAGES = [
  "Consulting the corporate handbook…",
  "Adding synergy…",
  "Polishing your bullet point…",
  "Translating to LinkedIn speak…",
  "Injecting buzzwords…",
  "Making it recruiter-friendly…",
  "Optimizing for ATS systems…",
  "Sprinkling in some jargon…",
];

const EXAMPLE_CHIPS = [
  "Worked at McDonald's drive-thru",
  "Posted on the company Instagram",
  "Helped customers find stuff at Target",
  "Fixed computers for coworkers",
  "Trained new employees at my job",
  "Answered phones at a dentist office",
];

interface HistoryItem {
  input: string;
  output: string;
  timestamp: Date;
}

export function TranslatorView() {
  const [inputText, setInputText] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const loadingInterval = useRef<NodeJS.Timeout | null>(null);
  const { result, isLoading, error, translate, reset } = useTranslate();

  const handleClear = () => {
    setInputText("");
    reset();
  };

  const startLoadingMessages = () => {
    let i = Math.floor(Math.random() * LOADING_MESSAGES.length);
    setLoadingMessage(LOADING_MESSAGES[i]);
    loadingInterval.current = setInterval(() => {
      i = (i + 1) % LOADING_MESSAGES.length;
      setLoadingMessage(LOADING_MESSAGES[i]);
    }, 1800);
  };

  const stopLoadingMessages = () => {
    if (loadingInterval.current) {
      clearInterval(loadingInterval.current);
      loadingInterval.current = null;
    }
    setLoadingMessage("");
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    startLoadingMessages();
    await translate(inputText, "medium");
    stopLoadingMessages();
  };

  // Save to history when result comes in
  const prevResultRef = useRef<string | null>(null);
  if (result && result.translation !== prevResultRef.current) {
    prevResultRef.current = result.translation;
    if (!history.find((h) => h.output === result.translation)) {
      setHistory((prev) =>
        [{ input: inputText, output: result.translation, timestamp: new Date() }, ...prev].slice(0, 5)
      );
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleTranslate();
  };

  return (
    <div onKeyDown={handleKeyDown}>
      {/* Two-panel translate area */}
      <div className="flex" style={{ minHeight: "300px" }}>
        <InputPanel value={inputText} onChange={setInputText} onClear={handleClear} />
        <div className="w-px bg-gray-200 shrink-0" />
        <OutputPanel
          result={result}
          isLoading={isLoading}
          loadingMessage={loadingMessage}
          error={error}
        />
      </div>

      {/* Translate button row */}
      <div className="border-t border-gray-200 flex items-center justify-between px-6 py-3">
        <span className="text-xs text-gray-300 hidden sm:block">Ctrl+Enter</span>
        <button
          onClick={handleTranslate}
          disabled={!inputText.trim() || isLoading}
          className="px-6 py-2 bg-google-blue text-white text-sm font-semibold rounded-full hover:bg-blue-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Translating…" : "Translate"}
        </button>
      </div>

      {/* Example chips */}
      <div className="border-t border-gray-100 px-6 py-5">
        <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-3">
          Try an example
        </p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_CHIPS.map((chip) => (
            <button
              key={chip}
              onClick={() => { setInputText(chip); reset(); }}
              className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-500 hover:border-google-blue hover:text-google-blue transition-colors bg-white"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Translation history */}
      {history.length > 0 && (
        <div className="border-t border-gray-100 px-6 py-5">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setShowHistory((s) => !s)}
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 uppercase tracking-widest hover:text-gray-400 transition-colors"
            >
              <Clock className="w-3.5 h-3.5" />
              Recent translations {showHistory ? "▲" : "▼"}
            </button>
            {showHistory && (
              <button
                onClick={() => setHistory([])}
                className="text-xs text-gray-300 hover:text-red-400 transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {showHistory && (
            <div className="space-y-2">
              {history.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setInputText(item.input)}
                  className="w-full text-left p-3 rounded-xl border border-gray-100 hover:border-google-blue bg-white transition-colors group"
                >
                  <p className="text-xs text-gray-400 truncate mb-1">{item.input}</p>
                  <p className="text-sm text-google-blue truncate">{item.output}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}