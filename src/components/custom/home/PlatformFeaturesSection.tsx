import { ArrowDown } from "lucide-react";
import { platformFeaturesData } from "@/data/home";

export default function PlatformFeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="page-container">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            {platformFeaturesData.badge}
          </span>

          <h2 className="mt-4 text-4xl  text-foreground md:text-5xl">
            {platformFeaturesData.title}
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {platformFeaturesData.description}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platformFeaturesData.features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}