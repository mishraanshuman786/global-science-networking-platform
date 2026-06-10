"use client";
import { heroData } from "@/data/about";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const AboutGlobe = dynamic(
  () => import("../home/about-globe"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] md:h-[500px]" />
    ),
  }
);
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#0D2040] py-10 text-white md:py-14">
      <div className="page-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold tracking-[0.15em] text-[#1D9E75] sm:text-base">
              THE PROFESSIONAL NETWORK FOR SCIENCE
            </p>

            <h1 className="max-w-2xl text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {heroData.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
              {heroData.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              {heroData.buttons.map((button) => (
                <Button
                  key={button.label}
                  variant={button.variant as any}
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <Link href={button.href}>
                    {button.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Globe */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[700px] xl:max-w-[800px]">
              <AboutGlobe />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}