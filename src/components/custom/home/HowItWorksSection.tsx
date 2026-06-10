import { howItWorksData } from "@/data/home";

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-24">
      <div className="page-container">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {howItWorksData.badge}
          </span>

          <h2 className="mt-4 text-4xl  text-foreground md:text-5xl">
            {howItWorksData.title}
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            {howItWorksData.description}
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="mt-20 hidden lg:block">

          

          {/* Cards */}
          <div className="grid grid-cols-4 gap-6">
            {howItWorksData.steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Number */}
                <div className="mb-4 text-sm font-bold text-primary">
                  {step.number}
                </div>

              
                <h3 className="text-2xl font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Version */}
        <div className="mt-12 space-y-4 lg:hidden">
          {howItWorksData.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="text-sm font-bold text-primary">
                {step.number}
              </div>

              <h3 className="mt-3 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}