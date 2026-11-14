import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ListChecks,
  Sparkles,
  CalendarClock,
  ShieldCheck,
  ExternalLink,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BookmarkButton } from "@/components/ui/bookmark-button";
import { JsonLd } from "@/components/json-ld";
import { MarketplaceBadge } from "@/components/jobs/marketplace-badge";
import { ApplyButton } from "@/components/jobs/apply-button";
import { JobCard } from "@/components/jobs/job-card";
import { siteConfig } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { getAllJobs, getJobBySlug } from "@/lib/jobs-loader";
import {
  compensationLabel,
  compensationTypeLabel,
  countries,
  eligibilityLabel,
  getCategory,
  getRelatedJobs,
  marketplaces,
  statusLabel,
  type Job,
} from "@/lib/jobs";

interface Props {
  params: Promise<{ slug: string }>;
}

// ISR + on-demand: jobs added in the Sheet render without a redeploy.
export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const jobs = await getAllJobs();
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return {};
  const path = `/ai-training-jobs/${job.slug}`;
  const isOpen = job.status === "open";
  return {
    title: `${job.title} — ${marketplaces[job.marketplace].name}`,
    description: job.description,
    alternates: { canonical: `${siteConfig.url}${path}` },
    // Never index closed/expired listings as active vacancies.
    robots: isOpen ? undefined : { index: false, follow: true },
    openGraph: {
      title: job.title,
      description: job.description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

const employmentTypeMap: Record<Job["commitment"], string> = {
  "full-time": "FULL_TIME",
  "part-time": "PART_TIME",
  contract: "CONTRACTOR",
  hourly: "OTHER",
  "task-based": "OTHER",
};

/** JobPosting structured data — ONLY for real, verified, open listings (never demo). */
function jobPostingLd(job: Job) {
  const path = `/ai-training-jobs/${job.slug}`;
  const validThrough = new Date(new Date(job.lastVerifiedAt).getTime() + 30 * 86_400_000)
    .toISOString()
    .slice(0, 10);

  const applicantLocations = job.countryEligibility
    .filter((c) => c !== "WW" && c !== "OTHER")
    .map((c) => ({ "@type": "Country", name: countries.find((x) => x.code === c)?.label ?? c }));

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.postedAt,
    validThrough,
    employmentType: employmentTypeMap[job.commitment],
    hiringOrganization: {
      "@type": "Organization",
      name: marketplaces[job.marketplace].name,
      sameAs: marketplaces[job.marketplace].url || undefined,
    },
    directApply: false,
    url: `${siteConfig.url}${path}`,
    ...(job.workArrangement === "remote" ? { jobLocationType: "TELECOMMUTE" } : {}),
    ...(applicantLocations.length
      ? { applicantLocationRequirements: applicantLocations }
      : job.countryEligibility.includes("WW")
        ? { applicantLocationRequirements: { "@type": "Country", name: "Worldwide" } }
        : {}),
    ...((job.compensationType === "hourly" || job.compensationType === "yearly") &&
    (job.payMin || job.payMax)
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: job.payCurrency,
            value: {
              "@type": "QuantitativeValue",
              minValue: job.payMin,
              maxValue: job.payMax,
              unitText: job.compensationType === "yearly" ? "YEAR" : "HOUR",
            },
          },
        }
      : {}),
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const allJobs = await getAllJobs();
  const job = allJobs.find((j) => j.slug === slug);
  if (!job) notFound();

  const cat = getCategory(job.category);
  const mkt = marketplaces[job.marketplace];
  const isOpen = job.status === "open";
  // Emit JobPosting only for genuinely open, non-demo listings with COMPLETE data
  // (full responsibilities + a known applicant location). Thin/eligibility-unknown
  // listings get breadcrumbs only — incomplete JobPosting markup hurts SEO.
  const emitJobPosting =
    isOpen &&
    !job.demo &&
    job.responsibilities.length > 0 &&
    job.countryEligibility.some((c) => c !== "OTHER");
  const related = getRelatedJobs(allJobs, job, 3);
  const path = `/ai-training-jobs/${job.slug}`;

  return (
    <div className="min-h-screen">
      {emitJobPosting && <JsonLd data={jobPostingLd(job)} />}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "AI Training Jobs", item: `${siteConfig.url}/ai-training-jobs` },
            { "@type": "ListItem", position: 3, name: job.title, item: `${siteConfig.url}${path}` },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative hero-padding overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-[100px]" />
        <div className="relative container-tight">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--foreground-muted)] mb-8">
            <Link href="/ai-training-jobs" className="hover:text-[var(--primary)] transition-colors">
              AI Training Jobs
            </Link>
            <span>/</span>
            <span style={{ color: cat.color }}>{cat.name}</span>
            <span>/</span>
            <span className="text-[var(--foreground)] truncate max-w-[16rem]">{job.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <MarketplaceBadge marketplace={job.marketplace} size="lg" />
            {job.demo && <Badge variant="warning">Demo listing</Badge>}
            {job.featured && isOpen && <Badge variant="gradient">Featured</Badge>}
            {!isOpen && <Badge variant="destructive">{statusLabel(job.status)}</Badge>}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl text-balance leading-[1.1] text-[var(--foreground)] max-w-3xl">
            {job.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="text-xl font-bold text-[var(--foreground)]">{compensationLabel(job)}</span>
            <Badge variant="secondary">{compensationTypeLabel(job.compensationType)} pay</Badge>
            <Badge variant="info" className="capitalize">{job.experienceLevel}</Badge>
            <Badge variant="success" className="capitalize">{job.workArrangement}</Badge>
            <span className="text-sm text-[var(--foreground-subtle)]">
              Eligible: {eligibilityLabel(job.countryEligibility)}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">About this role</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">{job.description}</p>
              </div>

              {job.responsibilities.length > 0 && (
                <Section title="Responsibilities" icon={<ListChecks className="w-5 h-5 text-[var(--primary)]" />}>
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-[var(--foreground-muted)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </Section>
              )}

              {job.requirements.length > 0 && (
                <Section title="Requirements" icon={<ShieldCheck className="w-5 h-5 text-[var(--accent)]" />}>
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-[var(--foreground-muted)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] mt-1 flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </Section>
              )}

              {job.skills.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-[var(--foreground)] mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[var(--primary)]" />
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Prepare for this role (internal cross-links) */}
              {cat.interviewSlug && (
                <div className="rounded-2xl border border-[var(--border)] bg-[image:var(--gradient-card)] p-6">
                  <h3 className="text-base font-bold text-[var(--foreground)] flex items-center gap-2 mb-1.5">
                    <GraduationCap className="w-5 h-5 text-[var(--primary)]" />
                    Prepare for this role
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] mb-4">
                    Boost your chances before you apply — practice with Techoverxe interview questions and roadmaps.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/interviews/${cat.interviewSlug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:underline"
                    >
                      {cat.name} interview questions
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/roadmaps"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:underline"
                    >
                      Learning roadmaps
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply card */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:sticky lg:top-24">
                <ApplyButton job={job} />
                <div className="mt-4">
                  <BookmarkButton
                    variant="labeled"
                    className="w-full justify-center"
                    item={{ type: "job", slug: job.slug, title: job.title, url: path, category: job.category }}
                  />
                </div>
              </div>

              {/* Facts */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 space-y-3 text-sm">
                <h3 className="text-xs font-bold text-[var(--foreground-subtle)] uppercase tracking-wider mb-1">
                  Job details
                </h3>
                <Fact label="Marketplace" value={mkt.name} />
                <Fact label="Category" value={cat.name} />
                <Fact label="Compensation" value={`${compensationLabel(job)} (${compensationTypeLabel(job.compensationType)})`} />
                <Fact label="Experience" value={<span className="capitalize">{job.experienceLevel}</span>} />
                <Fact label="Commitment" value={<span className="capitalize">{job.commitment.replace("-", " ")}</span>} />
                <Fact label="Work" value={<span className="capitalize">{job.workArrangement}</span>} />
                <Fact label="Eligibility" value={eligibilityLabel(job.countryEligibility)} />
                <Fact label="Status" value={statusLabel(job.status)} />
              </div>

              {/* Source attribution */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 space-y-3 text-sm">
                <h3 className="text-xs font-bold text-[var(--foreground-subtle)] uppercase tracking-wider mb-1">
                  Source & verification
                </h3>
                <div className="flex items-center gap-2 text-[var(--foreground-muted)]">
                  <CalendarClock className="w-4 h-4" />
                  Posted {formatDate(job.postedAt)}
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground-muted)]">
                  <ShieldCheck className="w-4 h-4 text-[var(--success)]" />
                  Last verified {formatDate(job.lastVerifiedAt)}
                </div>
                <a
                  href={job.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--primary)] font-medium hover:underline"
                >
                  View original source
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-5">Related opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {related.map((j, i) => (
                  <JobCard key={j.id} job={j} index={i} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link
              href="/ai-training-jobs"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h2>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[var(--foreground-muted)]">{label}</span>
      <span className="font-medium text-[var(--foreground)] text-right">{value}</span>
    </div>
  );
}
