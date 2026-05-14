"use client";

import { useState } from "react";
import { Grid3x3, X } from "lucide-react";

const COMING_SOON = [
  { label: "Bullet Points", desc: "Translate a whole list at once" },
  { label: "Cover Letter", desc: "Generate a full cover letter" },
  { label: "LinkedIn Bio", desc: "Optimize your LinkedIn summary" },
  { label: "Tone Modes", desc: "Mild, Extra, and Absurd intensity" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 h-20 flex items-center px-8 relative">
      <a href="/" className="flex items-center gap-3 no-underline">
        {/* Custom brand mark */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="10" fill="#1557b0"/>
          <path d="M10 11h10M10 11v14M10 11l6 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 18h6M23 15v6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="27" cy="26" r="1.2" fill="white" opacity="0.6"/>
        </svg>
        <span className="text-[30px] font-bold tracking-tight text-gray-800 leading-none">
          Resume<span className="text-google-blue">AI</span>
        </span>
      </a>

      <div className="ml-auto relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <Grid3x3 className="w-5 h-5" />
        </button>

        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-12 z-20 bg-white border border-gray-200 rounded-2xl shadow-xl w-72 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Coming Soon
                </span>
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {COMING_SOON.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 p-3 rounded-xl bg-gray-50 opacity-60 cursor-not-allowed">
                    <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                    <span className="text-xs text-gray-400 font-normal">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}