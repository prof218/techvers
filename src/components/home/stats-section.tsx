"use client";

import React from "react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Code2, Sparkles, Compass, Layers, MessageSquare, Briefcase } from "lucide-react";
import { technologies, aiTools, roadmaps, projects, interviews } from "#site/content";
import { careerPaths } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { icon: Code2, value: technologies.length, label: "Technology guides" },
  { icon: Sparkles, value: aiTools.length, label: "AI tools reviewed" },
  { icon: Compass, value: roadmaps.length, label: "Learning roadmaps" },
  { icon: Layers, value: projects.length, label: "Project case studies" },
  { icon: MessageSquare, value: interviews.length, label: "Interview answers" },
  { icon: Briefcase, value: careerPaths.length, label: "Career paths" },
];

export function StatsSection() {
  return (
    <section className="relative py-14 border-b border-[var(--border)]">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={(index % 6) * 0.05} className="text-center">
              <div className="flex items-center justify-center mb-3 text-[var(--primary)]">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-4xl sm:text-5xl text-[var(--foreground)]">
                <AnimatedCounter end={stat.value} duration={1.6} />
              </div>
              <div className="text-sm text-[var(--foreground-muted)] mt-1.5">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
