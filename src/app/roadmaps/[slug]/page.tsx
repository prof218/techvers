import React from "react";
import { roadmaps } from "#site/content";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Clock, Map, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return roadmaps.map((roadmap) => ({
    slug: roadmap.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const roadmap = roadmaps.find((r) => r.slug === resolvedParams.slug);
  if (!roadmap) return {};
  return {
    title: `${roadmap.title} — Step-by-Step Learning Path | TechVerse`,
    description: roadmap.description,
  };
}

const levelColors = {
  beginner: "#22c55e",
  intermediate: "#f59e0b",
  advanced: "#ef4444",
};

export default async function RoadmapDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const roadmap = roadmaps.find((r) => r.slug === resolvedParams.slug);

  if (!roadmap) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8b5cf6]/10 rounded-full blur-[100px]" />

        <div className="relative container-tight">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] mb-8">
            <Link href="/roadmaps" className="hover:text-[var(--primary)] transition-colors">Roadmaps</Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">{roadmap.title}</span>
          </nav>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="capitalize">{roadmap.category}</Badge>
              <Badge
                className="text-xs capitalize"
                style={{
                  backgroundColor: `${levelColors[roadmap.level as keyof typeof levelColors]}15`,
                  color: levelColors[roadmap.level as keyof typeof levelColors],
                  borderColor: "transparent",
                }}
              >
                {roadmap.level}
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              {roadmap.title}
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
              {roadmap.description}
            </p>
            {roadmap.estimatedTime && (
              <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] font-medium">
                <Clock className="w-4 h-4 text-[var(--primary)]" />
                Estimated time to master: <span className="text-[var(--foreground)] font-bold">{roadmap.estimatedTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <div className="mb-8 p-4 rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#8b5cf6] mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-[var(--foreground)]">How to use this roadmap</h4>
              <p className="text-xs text-[var(--foreground-muted)] mt-1 leading-relaxed">
                Take your time with each node. Make sure to build projects and write code for every topic before moving on to the next. Click on resources to view curated documentation and practice material.
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <MdxContent code={roadmap.content} />
          </div>
        </div>
      </section>
    </div>
  );
}
