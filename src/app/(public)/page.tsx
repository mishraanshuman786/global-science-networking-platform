import HeroSection from "@/components/custom/home/HeroSection";
import PlatformFeaturesSection from "@/components/custom/home/PlatformFeaturesSection";
import CommunitySection from "@/components/custom/home/CommunitySection";
import HowItWorksSection from "@/components/custom/home/HowItWorksSection";
import WhoIsItFor from "@/components/custom/home/WhoIsItFor";
import BrowseCommunities from "@/components/custom/home/BrowseCommunities";
import CTABanner from "@/components/custom/home/CTABanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PlatformFeaturesSection />
      <CommunitySection />
      <HowItWorksSection />
      <WhoIsItFor />
      <BrowseCommunities />
      <CTABanner />
    </div>
  );
}
