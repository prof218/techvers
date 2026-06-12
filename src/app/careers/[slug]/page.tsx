import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, DollarSign, TrendingUp, Briefcase, Award, Target, BookOpen, ChevronRight, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { careerPaths } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return careerPaths.map((career) => ({
    slug: career.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const career = careerPaths.find((c) => c.slug === resolvedParams.slug);
  if (!career) return {};
  return {
    title: `${career.title} Career Path — Salary, Skills & Roadmaps | TechVerse`,
    description: `Complete guide to becoming a ${career.title}. Explore average salary ranges, growth rate, required skills, recommended certifications, and structured roadmaps.`,
  };
}

// Sample detailed career data mapping
const detailedCareerData: Record<string, {
  roleOverview: string;
  responsibilities: string[];
  skills: { name: string; level: number; category: string }[];
  stages: { title: string; experience: string; salary: string; description: string }[];
  certifications: string[];
  roadmapSlug: string;
  interviewCategory: string;
}> = {
  "frontend-developer": {
    roleOverview: "Frontend Developers are responsible for implementing visual elements that users see and interact with in a web application. They combine design sensibility with programming proficiency to build highly responsive, intuitive, and accessible user interfaces.",
    responsibilities: [
      "Develop interactive web interfaces using HTML, CSS, JavaScript, and modern frontend frameworks.",
      "Collaborate with designers to implement UI/UX mockups with pixel-perfect precision.",
      "Optimize application performance and ensure responsive design across all devices.",
      "Ensure web accessibility compliance (WCAG) and cross-browser compatibility."
    ],
    skills: [
      { name: "HTML5 & Semantic Markup", level: 95, category: "Core" },
      { name: "CSS3 & Modern Layouts (Flexbox/Grid)", level: 90, category: "Core" },
      { name: "TypeScript / JavaScript", level: 92, category: "Core" },
      { name: "React / Next.js", level: 90, category: "Frameworks" },
      { name: "CSS Frameworks (Tailwind/CSS Modules)", level: 85, category: "Styling" },
      { name: "State Management (Zustand/Redux)", level: 80, category: "State" },
      { name: "Testing (Vitest/Cypress)", level: 75, category: "Testing" }
    ],
    stages: [
      { title: "Junior Frontend Developer", experience: "0-2 years", salary: "$70K - $95K", description: "Focuses on writing clean components, bug fixing, styling, and learning team processes." },
      { title: "Mid Frontend Developer", experience: "2-5 years", salary: "$95K - $130K", description: "Owns features end-to-end, optimizes performance, reviews code, and participates in system planning." },
      { title: "Senior Frontend Developer", experience: "5+ years", salary: "$130K - $170K+", description: "Architects UI platforms, leads junior developers, defines standards, and bridges design-engineering gaps." }
    ],
    certifications: [
      "Meta Front-End Developer Professional Certificate",
      "W3C Web Accessibility Professional Certification",
      "AWS Certified Cloud Practitioner (Optional but helpful)"
    ],
    roadmapSlug: "frontend-developer",
    interviewCategory: "frontend"
  },
  "backend-developer": {
    roleOverview: "Backend Developers focus on server-side logic, databases, integration of APIs, and overall system architecture. They ensure that data flows seamlessly from database to frontend, with high performance, security, and scalability.",
    responsibilities: [
      "Design and maintain scalable server-side applications, APIs, and business logic.",
      "Manage database schemas, query optimization, and data persistence layers.",
      "Implement security standards, user authentication, and data protection policies.",
      "Deploy services to cloud infrastructure and monitor server health and log metrics."
    ],
    skills: [
      { name: "Server-side Languages (Node.js/Python/Go)", level: 90, category: "Languages" },
      { name: "API Design (REST, GraphQL, gRPC)", level: 92, category: "API" },
      { name: "Relational Databases (PostgreSQL/MySQL)", level: 88, category: "Database" },
      { name: "NoSQL Databases (MongoDB/Redis)", level: 80, category: "Database" },
      { name: "System Architecture & Design Patterns", level: 85, category: "Architecture" },
      { name: "Containerization (Docker)", level: 82, category: "DevOps" },
      { name: "Testing & Debugging (Jest/Mocha/PyTest)", level: 80, category: "Testing" }
    ],
    stages: [
      { title: "Junior Backend Developer", experience: "0-2 years", salary: "$80K - $105K", description: "Implements endpoints, writes database migrations, fixes backend bugs, and writes tests." },
      { title: "Mid Backend Developer", experience: "2-5 years", salary: "$105K - $140K", description: "Designs database schemas, integrates third-party services, refactors code for performance." },
      { title: "Senior Backend Developer", experience: "5+ years", salary: "$140K - $180K+", description: "Architects scalable backends, manages distributed systems, optimizes query performance, leads team design choices." }
    ],
    certifications: [
      "AWS Certified Developer - Associate",
      "Google Cloud Professional Cloud Developer",
      "Oracle Certified Professional: Java SE Developer"
    ],
    roadmapSlug: "backend-developer",
    interviewCategory: "backend"
  },
  "full-stack-developer": {
    roleOverview: "Full Stack Developers are versatile generalists who can handle both frontend UI development and backend database/server-side operations. They possess a broad understanding of the entire web application stack and excel at prototyping and building cross-functional features.",
    responsibilities: [
      "Develop end-to-end features, from the database schema to the user interface animations.",
      "Design efficient APIs and client-side data fetching/caching strategies.",
      "Optimize application performance and bundle size on both client and server.",
      "Maintain development workflows, deployment setups, and local testing configurations."
    ],
    skills: [
      { name: "HTML/CSS & Styling", level: 88, category: "Frontend" },
      { name: "React / Next.js / Vue", level: 90, category: "Frontend" },
      { name: "Node.js / Express / Python", level: 85, category: "Backend" },
      { name: "PostgreSQL & Database Design", level: 82, category: "Database" },
      { name: "API Integration & Design", level: 88, category: "API" },
      { name: "Git & Collaborative Workflows", level: 90, category: "Core" },
      { name: "Cloud Deployment (AWS/Vercel/Fly)", level: 78, category: "DevOps" }
    ],
    stages: [
      { title: "Junior Full Stack Developer", experience: "0-2 years", salary: "$85K - $110K", description: "Contributes across the stack, works on smaller features, learns deployment lifecycles." },
      { title: "Mid Full Stack Developer", experience: "2-5 years", salary: "$110K - $145K", description: "Builds complex features from DB to UI, handles third-party APIs, configures build pipelines." },
      { title: "Senior Full Stack Developer", experience: "5+ years", salary: "$145K - $190K+", description: "Leads technical choices, designs full-stack systems, mentors engineers, manages technical debt." }
    ],
    certifications: [
      "AWS Certified Solutions Architect - Associate",
      "Meta Full-Stack Developer Professional Certificate",
      "MongoDB Certified Developer Associate"
    ],
    roadmapSlug: "fullstack-developer",
    interviewCategory: "system-design"
  },
  "ai-engineer": {
    roleOverview: "AI Engineers design, implement, and deploy artificial intelligence models and agentic workflows to solve real-world problems. They specialize in integrating large language models (LLMs), natural language processing, vector databases, and retrieval-augmented generation (RAG) into applications.",
    responsibilities: [
      "Develop and integrate LLM features using framework stacks like LangChain, LlamaIndex, and OpenAI APIs.",
      "Design and optimize Retrieval-Augmented Generation (RAG) pipelines and vector databases.",
      "Build autonomous AI agents capable of executing multi-step tools and reasoning.",
      "Implement guardrails, evaluations, and monitoring for AI model outputs."
    ],
    skills: [
      { name: "Python / TypeScript", level: 90, category: "Languages" },
      { name: "LLM API Integration (OpenAI/Claude)", level: 92, category: "AI Tools" },
      { name: "LangChain / LlamaIndex", level: 88, category: "Frameworks" },
      { name: "Vector DBs (Pinecone/Chroma/pgvector)", level: 85, category: "Database" },
      { name: "Prompt Engineering & Agent Workflows", level: 90, category: "Core" },
      { name: "RAG & Search Systems", level: 85, category: "Core" },
      { name: "AI Model Evaluation & Guardrails", level: 80, category: "Security" }
    ],
    stages: [
      { title: "Junior AI Engineer", experience: "0-2 years", salary: "$100K - $130K", description: "Integrates simple LLM calls, drafts prompt templates, manages embedding generation." },
      { title: "Mid AI Engineer", experience: "2-5 years", salary: "$130K - $170K", description: "Builds advanced RAG systems, configures agent loops, handles prompt evaluation and latency optimization." },
      { title: "Senior AI Engineer", experience: "5+ years", salary: "$170K - $220K+", description: "Architects enterprise agentic solutions, designs custom routing logic, fine-tunes specialized models." }
    ],
    certifications: [
      "DeepLearning.AI TensorFlow Developer",
      "AWS Certified Machine Learning - Specialty",
      "NVIDIA DLI Certificate in Generative AI"
    ],
    roadmapSlug: "ai-engineer",
    interviewCategory: "ai"
  }
};

// Default fallback data for other career paths
const defaultDetailedData = {
  roleOverview: "Detailed guidance for this career path is currently being compiled. This career track represents a highly in-demand role in the modern tech ecosystem, offering strong compensation and professional development prospects.",
  responsibilities: [
    "Collaborate with cross-functional teams to deliver high-quality technology solutions.",
    "Implement industry best practices and keep up with emerging tools and trends.",
    "Maintain clean code documentation and participate in architectural discussions."
  ],
  skills: [
    { name: "Core Technology Competency", level: 85, category: "Core" },
    { name: "System Design & Integration", level: 80, category: "Core" },
    { name: "Problem Solving & Analysis", level: 85, category: "General" },
    { name: "Collaboration & Communication", level: 90, category: "General" }
  ],
  stages: [
    { title: "Entry Level", experience: "0-2 years", salary: "Competitive", description: "Learns core systems, assists with tasks, receives guidance from senior team members." },
    { title: "Mid Level", experience: "2-5 years", salary: "Highly Competitive", description: "Independent contributor, leads smaller projects, designs sub-systems." },
    { title: "Senior Level", experience: "5+ years", salary: "Top Tier", description: "Determines technology strategy, designs core architectures, mentors and leads team." }
  ],
  certifications: [
    "Relevant Industry Certifications",
    "Professional Development Programs"
  ],
  roadmapSlug: "system-design",
  interviewCategory: "system-design"
};

export default async function CareerDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const career = careerPaths.find((c) => c.slug === resolvedParams.slug);

  if (!career) {
    notFound();
  }

  const details = detailedCareerData[career.slug] || defaultDetailedData;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#22c55e]/10 rounded-full blur-[100px]" />

        <div className="relative container-tight">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] mb-8">
            <Link href="/careers" className="hover:text-[var(--primary)] transition-colors">Careers</Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">{career.title}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{career.icon}</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
                  {career.title}
                </h1>
              </div>
              <p className="text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
                Learn how to become a {career.title}. Explore responsibilities, compensation levels, critical skills, and learning roadmaps.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-[var(--foreground-muted)] text-sm">
                  <DollarSign className="w-4 h-4 text-[var(--success)]" />
                  Average Salary Range: <span className="font-bold text-[var(--foreground)] ml-1">{career.salaryRange}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[var(--foreground-muted)] text-sm">
                  <TrendingUp className="w-4 h-4 text-[var(--primary)]" />
                  Growth Potential: <span className="font-bold text-[var(--foreground)] ml-0.5">{career.growth}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left/Main column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Role Overview */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[var(--primary)]" />
                  Role Overview
                </h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {details.roleOverview}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {details.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                      <ChevronRight className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--foreground-muted)] leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Stages & Salaries */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  Career Progression & Compensation
                </h2>
                <div className="relative border-l border-[var(--border)] ml-3 pl-6 space-y-6">
                  {details.stages.map((stage, i) => (
                    <div key={i} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-[var(--background)] border-2 border-[var(--primary)] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      </div>
                      <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="font-bold text-[var(--foreground)]">{stage.title}</h3>
                          <Badge variant="success" className="text-xs">{stage.salary} / year</Badge>
                        </div>
                        <span className="text-xs text-[var(--foreground-subtle)] font-medium block mb-2">
                          Experience Required: {stage.experience}
                        </span>
                        <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recommended Resources Quicklinks */}
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-5">
                <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider">
                  Launch Your Path
                </h3>
                <div className="space-y-3">
                  <Button asChild className="w-full justify-start gap-2.5 bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 cursor-pointer">
                    <Link href={`/roadmaps/${details.roadmapSlug}`}>
                      <BookOpen className="w-4 h-4" />
                      Start Learning Roadmap
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start gap-2.5 cursor-pointer">
                    <Link href={`/interviews?category=${details.interviewCategory}`}>
                      <HelpCircle className="w-4 h-4 text-[var(--warning)]" />
                      Prepare Interview Questions
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Skills breakdown */}
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4">
                <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider flex items-center gap-2">
                  <Target className="w-4.5 h-4.5 text-[var(--accent)]" />
                  Key Skills Breakdown
                </h3>
                <div className="space-y-3.5">
                  {details.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-[var(--foreground)]">{skill.name}</span>
                        <span className="text-[var(--foreground-subtle)]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[var(--background)] rounded-full overflow-hidden border border-[var(--border)]">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Certifications */}
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-3">
                <h3 className="text-xs font-bold text-[var(--foreground-subtle)] uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-[var(--success)]" />
                  Top Certifications
                </h3>
                <ul className="space-y-2 text-sm">
                  {details.certifications.map((cert) => (
                    <li key={cert} className="p-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground-muted)] leading-relaxed">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
