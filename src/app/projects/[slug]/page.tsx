import React from "react";
import { projects } from "#site/content";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import Link from "next/link";
import { Metadata } from "next";
import { Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BookmarkButton } from "@/components/ui/bookmark-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { JsonLd } from "@/components/json-ld";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return {};
  return {
    title: `${project.title} — System Architecture & Design`,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/projects/${project.slug}` },
  };
}

const difficultyColors = {
  beginner: "#22c55e",
  intermediate: "#f59e0b",
  advanced: "#ef4444",
};

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <JsonLd
        data={articleJsonLd({
          title: `${project.title} Architecture`,
          description: project.description,
          path: `/projects/${project.slug}`,
          section: project.category,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />
      {/* Hero */}
      <section className="relative py-10 sm:py-14 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-[100px]" />

        <div className="relative container-tight">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--foreground-muted)] mb-8">
            <Link href="/projects" className="hover:text-[var(--primary)] transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">{project.title}</span>
          </nav>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge
                className="text-xs capitalize"
                style={{
                  backgroundColor: `${difficultyColors[project.difficulty as keyof typeof difficultyColors]}15`,
                  color: difficultyColors[project.difficulty as keyof typeof difficultyColors],
                  borderColor: "transparent",
                }}
              >
                {project.difficulty}
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              {project.title}
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[var(--primary)]/10 text-xs font-semibold text-[var(--primary)] border border-[var(--primary)]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <BookmarkButton
                variant="labeled"
                item={{ type: "project", slug: project.slug, title: project.title, url: `/projects/${project.slug}`, category: project.category }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <div className="mb-8 p-4 rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 flex items-start gap-3">
            <Layers className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-[var(--foreground)]">System Architecture Guide</h4>
              <p className="text-xs text-[var(--foreground-muted)] mt-1 leading-relaxed">
                This document details architectural choices, database structures, and performance optimizations. Ideal for system design practice and structural reference.
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <MdxContent code={project.content} />
          </div>
        </div>
      </section>
    </div>
  );
}
