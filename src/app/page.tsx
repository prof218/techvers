import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { PathSection } from "@/components/home/path-section";
import { TechCategoriesSection } from "@/components/home/tech-categories-section";
import { RoadmapsSection } from "@/components/home/roadmaps-section";
import { CareerPathsSection } from "@/components/home/career-paths-section";
import { FeaturesSection } from "@/components/home/features-section";
import { AiJobsSection } from "@/components/home/ai-jobs-section";
import { BlogSection } from "@/components/home/blog-section";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: { absolute: "TechVerse — Learn AI & Tech, Then Get Hired" },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PathSection />
      <TechCategoriesSection />
      <RoadmapsSection />
      <AiJobsSection />
      <FeaturesSection />
      <BlogSection />
      <CareerPathsSection />
      <CTASection />
    </>
  );
}
