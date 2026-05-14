import type { Metadata } from "next";
import AdvocacyNav from "@/components/AdvocacyNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResumeAI",
  description: "Translate your experience into corporate speak.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen relative overflow-x-hidden">
        <div className="relative z-10">
          <AdvocacyNav />
          {children}
        </div>
      </body>
    </html>
  );
}