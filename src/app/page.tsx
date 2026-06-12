import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { TechCategoriesSection } from "@/components/home/tech-categories-section";
import { CareerPathsSection } from "@/components/home/career-paths-section";
import { FeaturesSection } from "@/components/home/features-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TechCategoriesSection />
      <FeaturesSection />
      <CareerPathsSection />
      <CTASection />
    </>
  );
}
