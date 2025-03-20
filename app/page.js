
import AnimatedPage from "../app/components/common/AnimatedPage";
import SEO from "../app/components/common/SEO";
import HeroSection from "../app/components/pages/home/HeroSection";
import FeaturesSection from "../app/components/pages/home/HeroSection";
import TestimonialsSection from "./components/pages/home/TestimonialsList";
import CTA from "../app/components/common/CTA";

export default function Home() {
  return (
    <AnimatedPage>
      <SEO
        title="PropertyMaco | Sell Your House Fast"
        description="We buy houses in any condition. No repairs needed."
      />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTA />
    </AnimatedPage>
  );
}

