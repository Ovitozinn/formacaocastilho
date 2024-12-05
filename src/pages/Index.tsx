import { useIsMobile } from "@/hooks/use-mobile";
import HeroSection from "@/components/HeroSection";
import CastilhoBio from "@/components/CastilhoBio";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTA from "@/components/FinalCTA";
import MobileHero from "@/components/mobile/MobileHero";
import MobileBio from "@/components/mobile/MobileBio";
import MobileOffer from "@/components/mobile/MobileOffer";
import MobileTestimonial from "@/components/mobile/MobileTestimonial";

const Index = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="bg-dark text-white">
        <MobileHero />
        <MobileOffer />
        <MobileTestimonial />
        <MobileBio />
        <FinalCTA />
      </div>
    );
  }

  return (
    <div className="bg-dark text-white">
      <HeroSection />
      <CastilhoBio />
      <WhatYouWillLearn />
      <TestimonialSection />
      <FinalCTA />
    </div>
  );
};

export default Index;