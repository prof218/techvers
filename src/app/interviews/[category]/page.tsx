import React from "react";
import { interviews } from "#site/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { interviewCategories } from "@/lib/constants";
import { ArrowLeft, MessageSquare } from "lucide-react";
import InterviewsPageClient from "./page-client";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return interviewCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const catInfo = interviewCategories.find((c) => c.slug === resolvedParams.category);
  if (!catInfo) return {};
  return {
    title: `${catInfo.name} Interview Questions & Answers | TechVerse`,
    description: `Prepare for your next technical interview with top ${catInfo.name} questions, detailed explanations, code snippets, and system design breakdowns.`,
  };
}

export default async function InterviewCategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const catInfo = interviewCategories.find((c) => c.slug === category);

  if (!catInfo) {
    notFound();
  }

  // Filter questions for this category
  const categoryQuestions = interviews.filter((q) => q.category === category);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-[100px]" />

        <div className="relative container-wide text-center">
          <Link
            href="/interviews"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Interview Hub
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--warning)]/30 bg-[var(--warning)]/5 text-sm text-[var(--warning)] mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            {categoryQuestions.length} Questions
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            {catInfo.icon} {catInfo.name} Questions
          </h1>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
            Practice and master {catInfo.name} interviews. Explore detailed step-by-step solutions with architectural guidelines.
          </p>
        </div>
      </section>

      {/* Questions Listing */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <InterviewsPageClient initialQuestions={categoryQuestions} categorySlug={category} />
        </div>
      </section>
    </div>
  );
}
