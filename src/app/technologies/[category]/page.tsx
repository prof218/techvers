import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { technologies } from "#site/content";
import { technologyCategories, siteConfig } from "@/lib/constants";
import { CategoryIcon } from "@/components/ui/category-icon";
import { CategoryGrid } from "./category-grid";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return technologyCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const info = technologyCategories.find((c) => c.slug === category);
  if (!info) return {};
  return {
    title: `${info.name} Technologies`,
    description: `${info.description}. Explore in-depth ${info.name.toLowerCase()} guides on TechVerse.`,
    alternates: { canonical: `${siteConfig.url}/technologies/${category}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryInfo = technologyCategories.find((c) => c.slug === category);

  if (!categoryInfo) {
    notFound();
  }

  const techs = technologies
    .filter((t) => t.category === category)
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((t) => ({
      slug: t.slug,
      title: t.title,
      icon: t.icon,
      description: t.description,
      difficulty: t.difficulty,
      tags: t.tags,
    }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div
          className="absolute top-1/3 -right-20 w-72 h-72 rounded-full blur-[100px]"
          style={{ backgroundColor: `${categoryInfo.color}15` }}
        />

        <div className="relative container-wide">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Technologies
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${categoryInfo.color}18`, color: categoryInfo.color }}
            >
              <CategoryIcon slug={categoryInfo.slug} className="w-7 h-7" />
            </span>
            <div>
              <h1 className="font-display text-4xl sm:text-5xl text-balance leading-[1.1] text-[var(--foreground)]">
                {categoryInfo.name}
              </h1>
              <p className="mt-2 text-lg text-[var(--foreground-muted)]">
                {categoryInfo.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <CategoryGrid category={category} technologies={techs} />
        </div>
      </section>
    </div>
  );
}
