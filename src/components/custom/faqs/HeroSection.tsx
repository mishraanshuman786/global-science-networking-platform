// components/faq/FaqHero.tsx

import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
          Help Centre
        </p>

        <h1 className="mb-6 text-4xl ">
          Frequently asked questions
        </h1>

        <div className="mx-auto flex max-w-lg items-center rounded-full border bg-white px-4 py-3 shadow-sm">
          <Search className="mr-2 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search for answers..."
            className="w-full outline-none"
          />
        </div>
      </div>
    </section>
  );
}