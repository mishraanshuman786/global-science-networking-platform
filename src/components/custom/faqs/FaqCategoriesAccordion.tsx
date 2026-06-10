// components/faq/FaqCategoriesAccordion.tsx

"use client";

import { useState } from "react";
import { faqCategories } from "@/data/faqs";
import {
  ChevronDown,
  User,
  Lock,
  Shield,
} from "lucide-react";

const icons = {
  user: User,
  lock: Lock,
  shield: Shield,
};

export default function FaqCategoriesAccordion() {
  const [activeCategory, setActiveCategory] = useState(
    faqCategories[0].id
  );

  const category = faqCategories.find(
    (item) => item.id === activeCategory
  );

  return (
    <section className="mx-auto max-w-6xl overflow-x-hidden px-4 py-8 lg:py-12">
      <div className="grid min-w-0 gap-6 lg:gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="min-w-0">
          <p className="mb-4 text-xs font-semibold uppercase text-gray-500">
            Categories
          </p>

          <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1">
            {faqCategories.map((item) => {
              const Icon =
                icons[item.icon as keyof typeof icons];

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id)}
                  className={`flex shrink-0 items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-left transition lg:w-full ${
                    activeCategory === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Icon size={16} />
                  {item.title}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0 w-full overflow-hidden rounded-2xl border bg-white p-4 sm:p-6 lg:w-200">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="break-words text-base font-semibold sm:text-lg">
              {category?.title}
            </h2>

            <span className="text-sm text-gray-500">
              {category?.faqs.length} questions
            </span>
          </div>

          <div className="min-w-0 space-y-3">
            {category?.faqs.map((faq) => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
}: {
  faq: {
    question: string;
    answer: string;
  };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span className="min-w-0 break-words text-sm font-medium sm:text-base">
          {faq.question}
        </span>

        <ChevronDown
          className={`h-4 w-4 shrink-0 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="break-words border-t px-4 py-4 text-sm text-gray-600">
          {faq.answer}
        </div>
      )}
    </div>
  );
}