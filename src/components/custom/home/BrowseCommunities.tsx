"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const INITIAL_TAGS = [
  "Neuroscience",
  "Biotechnology",
  "Artificial Intelligence",
  "Quantum Physics",
  "Climate Science",
  "Genomics",
  "Materials Science",
  "Astrophysics",
];

const MORE_TAGS = [
  "Bioinformatics",
  "Nanotechnology",
  "Marine Biology",
  "Robotics",
  "Pharmacology",
  "Epidemiology",
  "Renewable Energy",
  "Cognitive Science",
];

export default function BrowseCommunities() {
  const [showMore, setShowMore] = useState(false);

  const visibleTags = showMore
    ? [...INITIAL_TAGS, ...MORE_TAGS]
    : INITIAL_TAGS;

  // Split tags into rows of 4
  const rows: string[][] = [];
  for (let i = 0; i < visibleTags.length; i += 4) {
    rows.push(visibleTags.slice(i, i + 4));
  }

  return (
    <section className="bg-card border-y border-border w-full">
      <div className="page-container">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20 py-12 lg:py-16">
          
          {/* Left: heading */}
          <div className="lg:w-1/2 shrink-0">
            <h2 className="text-3xl lg:text-5xl  text-foreground leading-tight">
              Find the right scientific community for you
            </h2>
          </div>

          {/* Right: pill tags */}
          <div className="flex-1 flex flex-col gap-4">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-wrap gap-3">
                {row.map((tag) => (
                  <button
                    key={tag}
                    className="
                      px-6 py-3
                      rounded-full
                      border border-border
                      bg-card
                      text-foreground text-base font-medium
                      hover:border-primary hover:text-primary
                      transition-colors duration-150
                      cursor-pointer
                    "
                  >
                    {tag}
                  </button>
                ))}
              </div>
            ))}

            {/* Show more / less toggle */}
            <div>
              <button
                onClick={() => setShowMore((p) => !p)}
                className="
                  flex items-center gap-2
                  px-6 py-3
                  rounded-full
                  border border-border
                  bg-card
                  text-foreground text-base font-medium
                  hover:border-primary hover:text-primary
                  transition-colors duration-150
                  cursor-pointer
                "
              >
                {showMore ? "Show less" : "Show more communities"}
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}