"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight, TrendingUp, Layout, Server, Layers, Sparkles, Cpu, Cloud,
  Infinity as InfinityIcon, ShieldCheck, Compass, PenTool, Database,
} from "lucide-react";
import { careerPaths } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

type IconType = React.ComponentType<{ className?: string }>;
const careerIcons: Record<string, IconType> = {
  "frontend-developer": Layout,
  "backend-developer": Server,
  "full-stack-developer": Layers,
  "ai-engineer": Sparkles,
  "ml-engineer": Cpu,
  "cloud-engineer": Cloud,
  "devops-engineer": InfinityIcon,
  "cybersecurity-engineer": ShieldCheck,
  "product-manager": Compass,
  "ui-ux-designer": PenTool,
  "data-engineer": Database,
};

export function CareerPathsSection() {
  return (
    <section className="relative section-padding">
      <div className="container-wide">
        <Reveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] mb-3">
              Career Paths
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] text-balance">
              Find the role that fits you
            </h2>
          </div>
          <Link
            href="/careers"
            className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors group"
          >
            All career paths
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {careerPaths.slice(0, 8).map((career, index) => {
            const Icon = careerIcons[career.slug] || Compass;
            return (
              <Reveal key={career.slug} delay={(index % 4) * 0.06}>
                <Link
                  href={`/careers/${career.slug}`}
                  className="group block p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] card-hover h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-11 h-11 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)]">
                      <Icon className="w-[22px] h-[22px]" />
                    </span>
                    <Badge
                      variant={career.growth === "Very High" ? "success" : "info"}
                      className="text-[10px] flex items-center gap-1"
                    >
                      <TrendingUp className="w-3 h-3" />
                      {career.growth}
                    </Badge>
                  </div>
                  <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {career.title}
                  </h3>
                  <div className="mt-2 text-sm font-medium text-[var(--foreground-muted)]">
                    {career.salaryRange}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
