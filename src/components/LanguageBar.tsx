import { ArrowLeftRight } from "lucide-react";

export function LanguageBar() {
  return (
    <div className="bg-white border-gray-200 flex items-stretch">
      {/* Left */}
      <div className="flex-1 flex items-center px-6 min-h-[52px]">
        <span className="text-sm font-semibold text-google-blue pb-3 pt-3 border-b-2 border-google-blue -mb-px">
          Casual English
        </span>
      </div>

      {/* Swap icon */}
      <div className="flex items-center px-5 text-gray-300 border-l border-r border-gray-200">
        <ArrowLeftRight className="w-4 h-4" />
      </div>

      {/* Right */}
      <div className="flex-1 flex items-center px-6 bg-[#ffffff]">
        <span className="text-sm font-semibold text-google-blue pb-3 pt-3 border-b-2 border-google-blue -mb-px">
          Corporate Speak
        </span>
      </div>
    </div>
  );
}