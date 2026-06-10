// ContactSection.tsx

import ContactCategoryCards from "./ContactCategoryCards";
import ContactForm from "./ContactForm";
import ContactMethods from "./ContactMethods";
import OfficeLocations from "./OfficeLocations";

export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="page-container">
        <ContactCategoryCards />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="space-y-6">
            <ContactMethods />
            <OfficeLocations />
          </div>
        </div>
      </div>
    </section>
  );
}