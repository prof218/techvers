"use client";

import React, { useState, useEffect } from "react";
import { LayoutGrid } from "lucide-react";
import { interviewCategories } from "@/lib/constants";
import { CategoryIcon } from "@/components/ui/category-icon";
import { InterviewAccordion, type InterviewQuestion } from "@/components/interview-accordion";

interface PageClientProps {
  allQuestions: InterviewQuestion[];
}

const tab = "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer border";
const on = "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]";
const off = "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border)] hover:text-[var(--foreground)] hover:border-[var(--border-hover)]";

export default function InterviewsHubClient({ allQuestions }: PageClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get("category");
    if (cat && interviewCategories.some((c) => c.slug === cat)) setActiveCategory(cat);
  }, []);

  const questions =
    activeCategory === "all" ? allQuestions : allQuestions.filter((q) => q.category === activeCategory);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setActiveCategory("all")} className={`${tab} ${activeCategory === "all" ? on : off}`}>
          <LayoutGrid className="w-4 h-4" />
          All
        </button>
        {interviewCategories.map((cat) => (
          <button key={cat.slug} onClick={() => setActiveCategory(cat.slug)} className={`${tab} ${activeCategory === cat.slug ? on : off}`}>
            <CategoryIcon slug={cat.slug} className="w-4 h-4" />
            {cat.name}
          </button>
        ))}
      </div>

      <InterviewAccordion key={activeCategory} questions={questions} />
    </div>
  );
}
