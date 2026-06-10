import { heroData } from "@/data/home";
import { Button } from "@/components/ui/button";
import Counter from "../Counter";
import AboutGlobe from "./about-globe";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#0D2040] py-10 text-white md:py-14">
      <div className="page-container">

        {/* Hero Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <p className="mb-3 text-sm font-semibold tracking-wider text-[#5DCAA5] sm:text-base md:text-lg">
              {heroData.badge.toUpperCase()}
            </p>

            <h1 className="max-w-2xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {heroData.title.beforeHighlight}{" "}
              <span className="text-[#5DCAA5]">
                {heroData.title.highlight}
              </span>{" "}
              {heroData.title.afterHighlight}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg md:mt-6 md:text-xl">
              {heroData.subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              {heroData.buttons.map((button) => (
                <Button
                  key={button.text}
                  variant={button.variant as any}
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <Link href={button.href}>
                    {button.text}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Globe */}
          <div className="flex justify-center">
            <div className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[750px]">
              <AboutGlobe />
            </div>
          </div>
        </div>

        {/* Stats Card */}
        {/* Stats Card */}
<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6 md:mt-10 md:p-8">
  <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
    {heroData.stats.map((stat) => (
      <div key={stat.label}>
        <h3 className="text-3xl font-bold text-[#5DCAA5] sm:text-4xl md:text-5xl">
          <Counter
            end={stat.value}
            suffix="+"
          />
        </h3>

        <p className="mt-2 text-xs text-white/70 sm:text-sm">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}