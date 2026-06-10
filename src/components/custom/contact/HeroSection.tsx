// ContactHero.tsx

export default function HeroSection() {
  return (
    <section className="bg-[#0D2040] text-white py-24">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#5DCAA5]">
            Contact Us
          </span>

          <h1 className="mt-4 text-4xl tracking-tight md:text-5xl">
            Get in touch with our team
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Have a question, feedback or partnership inquiry?
            We'd love to hear from you. Our team responds
            within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}