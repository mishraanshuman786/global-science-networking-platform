"use client";

import { useState } from "react";
import Image from "next/image";
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
  "ORCID Profile Import",
  "Google Scholar Profile Import"
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

  const rows: string[][] = [];

  for (let i = 0; i < visibleTags.length; i += 4) {
    rows.push(visibleTags.slice(i, i + 4));
  }

  return (
    <section className="bg-card border-y border-border w-full">
      <div className="page-container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 py-12 lg:py-16 ">
          
          {/* Left Content */}
          <div className="lg:w-[42%] shrink-0">
            <h2 className="text-3xl lg:text-4xl text-foreground leading-tight">
              Find the right scientific community for you
            </h2>

            <p className="mt-3 text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl">
              Connect with researchers who share your passion.
            </p>

            <div className="mt-6">
              <Image
                src="/images/about/scientist3.jpg"
                alt="Scientific Community"
                width={700}
                height={450}
                className="w-full  object-cover "
              />
            </div>
          </div>

          {/* Right Tags */}
          <div className=" flex flex-col h-full   justify-center gap-4">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex flex-wrap gap-3"
              >
                {row.map((tag) => (
                  <button
                    key={tag}
                    className="
                      px-6 py-3
                      rounded-full
                      border border-border
                      bg-card
                      text-foreground
                      text-base
                      font-medium
                      hover:border-primary
                      hover:text-primary
                      transition-colors
                      duration-150
                    "
                  >
                    {tag}
                  </button>
                ))}
              </div>
            ))}

            {/* Toggle */}
            <div>
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="
                  flex items-center gap-2
                  px-6 py-3
                  rounded-full
                  border border-border
                  bg-card
                  text-foreground
                  text-base
                  font-medium
                  hover:border-primary
                  hover:text-primary
                  transition-colors
                  duration-150
                "
              >
                {showMore
                  ? "Show less"
                  : "Show more communities"}

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