interface BuzzwordStripProps {
  buzzwords: string[];
}

export function BuzzwordStrip({ buzzwords }: BuzzwordStripProps) {
  if (!buzzwords.length) return null;

  return (
    <div className="flex flex-wrap gap-2 px-5 py-4 border border-t-0 border-gray-200 rounded-b-lg bg-slate-50">
      <span className="w-full text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
        🔑 Buzzwords Injected
      </span>
      {buzzwords.map((word, i) => (
        <span
          key={word}
          className="px-3 py-1 rounded-full border border-google-blue text-google-blue bg-blue-50 text-sm font-medium animate-pop-in"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
