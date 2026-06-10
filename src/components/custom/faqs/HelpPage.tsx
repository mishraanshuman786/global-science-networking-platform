// app/help/page.tsx

import HeroSection from "./HeroSection";
import FaqCategoriesAccordion from "./FaqCategoriesAccordion";
import FaqSupportCard from "./FaqSupportCard";


export default function HelpPage() {
  return (
    <>
      <HeroSection />
      <FaqCategoriesAccordion />
      <FaqSupportCard />
    </>
  );
}