import HeroSection from "@/components/Hero";
import ProblemSection from "@/components/Problem";
import TransitionSection from "@/components/Transition";
import SolutionSection from "@/components/Solution";
import TestimonialsSection from "@/components/Testimonials";
import JourneySection from "@/components/Journey";
import PricingSection from "@/components/Pricing";
import AboutSection from "@/components/About";
import FAQSection from "@/components/FAQ";
import FinalCTASection from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <TransitionSection />
      <SolutionSection />
      <TestimonialsSection />
      <JourneySection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
