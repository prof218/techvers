"use client";

import React from "react";
import { InterviewAccordion, type InterviewQuestion } from "@/components/interview-accordion";

interface PageClientProps {
  initialQuestions: InterviewQuestion[];
  categorySlug: string;
}

export default function InterviewsPageClient({ initialQuestions }: PageClientProps) {
  return <InterviewAccordion questions={initialQuestions} />;
}
