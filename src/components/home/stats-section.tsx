import React from "react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Code2, Sparkles, Compass, MessageSquare, Briefcase, BookOpen } from "lucide-react";
import { technologies, aiTools, roadmaps, interviews, blog } from "#site/content";
import { interactiveRoadmaps } from "@/data/roadmaps";
import { getOpenJobs } from "@/lib/jobs-loader";
import { Reveal } from "@/components/ui/reveal";

export async function StatsSection() {
  const openJobs = await getOpenJobs();
  const roadmapCount = new Set([
    ...interactiveRoadmaps.map((r) => r.slug),
    ...roadmaps.map((r) => r.slug),
  ]).size;

  const stats = [
    { icon: Compass, value: roadmapCount, suffix: "", label: "Interactive roadmaps" },
    { icon: Briefcase, value: openJobs.length, suffix: "", label: "AI training jobs" },
    { icon: Code2, value: technologies.length, suffix: "", label: "Technology guides" },
    { icon: MessageSquare, value: interviews.length, suffix: "", label: "Interview answer sets" },
    { icon: Sparkles, value: aiTools.length, suffix: "", label: "AI tools reviewed" },
    { icon: BookOpen, value: blog.length, suffix: "", label: "Guides & articles" },
  ];

  return (
    <section className="relative py-12 sm:py-16 border-b border-[var(--border)]">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={(index % 6) * 0.05} className="text-center">
              <div className="flex items-center justify-center mb-3 text-[var(--primary)]">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-4xl sm:text-5xl text-[var(--foreground)]">
                <AnimatedCounter end={stat.value} duration={1.6} />
                {stat.suffix}
              </div>
              <div className="text-sm text-[var(--foreground-muted)] mt-1.5">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
