// TermsHero.tsx

import {
  CalendarDays,
  Clock3,
  RefreshCcw,
  FileText,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#0D2040] text-white py-20">
      <div className="page-container">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-primary">
            <FileText className="h-4 w-4" />
            Legal document
          </div>

          <h1 className="mt-6 text-4xl tracking-tight md:text-5xl">
            Terms & Conditions
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-primary">
            <div className="flex items-center  gap-2">
              <CalendarDays className="h-4 w-4" />
              Effective: 1 January 2025
            </div>

            <div className="flex items-center gap-2">
              <RefreshCcw className="h-4 w-4" />
              Last updated: 8 June 2025
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              ~15 min read
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}