"use client";

import { statsData } from "@/data/about";
import Counter from "../Counter";

export default function StatsSection() {
  return (
    <section className="bg-[#0D2040]">
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                flex flex-col items-center justify-center
                py-10 text-center
                ${
                  index !== statsData.length - 1
                    ? "border-r border-white/15"
                    : ""
                }
              `}
            >
              <h3 className="text-4xl font-bold text-[#1D9E75] md:text-5xl">
                <Counter
                  end={stat.value}
                  suffix="+"
                />
              </h3>

              <p className="mt-2 text-sm font-medium text-white/80 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}