import HeroSection from '@/components/sections/hero-section';
import LearningPathsSection from '@/components/sections/learning-paths-section';
import LiveCodingSection from '@/components/sections/live-coding-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import PricingSection from '@/components/sections/pricing-section';
import CtaSection from '@/components/sections/cta-section';
import FeaturesSection from '@/components/sections/features-section';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <FeaturesSection />
      <LearningPathsSection />
      <LiveCodingSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}