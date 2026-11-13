/* ============================================================
   TechVerse — AI Training Jobs: types, registries & pure logic
   ------------------------------------------------------------
   A typed data layer (not Velite/MDX): job records are high-volume
   structured data with no long-form body, and need stable IDs,
   dedup, status + verification dates. See src/data/jobs.ts for records.
   ============================================================ */

// ---------- Enums (string unions) ----------

export type Marketplace =
  | "mercor"
  | "handshake"
  | "micro1"
  | "turing"
  | "sme-careers"
  | "terac"
  | "other";

export type JobCategory =
  | "software-engineering"
  | "ai-ml"
  | "data-annotation"
  | "language-audio"
  | "science-research"
  | "finance"
  | "healthcare"
  | "design"
  | "cybersecurity"
  | "legal"
  | "other";

/** ISO-3166 alpha-3 for real countries; WW = Worldwide, OTHER = region-restricted/other. */
export type CountryCode = "IND" | "USA" | "GBR" | "CAN" | "WW" | "OTHER";

export type WorkArrangement = "remote" | "hybrid" | "onsite";

export type Commitment = "hourly" | "contract" | "part-time" | "full-time" | "task-based";

export type ExperienceLevel = "entry" | "junior" | "mid" | "senior" | "expert";

/** Keeps hourly pay distinct from per-task / fixed / monthly / yearly compensation. */
export type CompensationType = "hourly" | "per_task" | "fixed" | "monthly" | "yearly";

export type JobStatus = "open" | "closed" | "expired";

export type SortKey =
  | "pay_max_hourly_usd"
  | "pay_min_hourly_usd"
  | "newest"
  | "recently_verified";

// ---------- Job record ----------

export interface Job {
  id: string; // stable, unique — used for dedup
  slug: string; // unique, URL-safe
  title: string;
  marketplace: Marketplace;
  /** Canonical source listing URL — ALWAYS preserved, never replaced. */
  originalUrl: string;
  /** Optional referral/affiliate apply link. Falls back to marketplace referral, then originalUrl. */
  applyUrl?: string;
  /** True when applyUrl (or the resolved apply link) is a referral/affiliate link — drives disclosure. */
  referral?: boolean;

  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];

  category: JobCategory;
  countryEligibility: CountryCode[];
  workArrangement: WorkArrangement;
  commitment: Commitment;
  experienceLevel: ExperienceLevel;

  payMin?: number;
  payMax?: number;
  payCurrency: string; // ISO 4217, e.g. "USD"
  compensationType: CompensationType;

  postedAt: string; // ISO date
  lastVerifiedAt: string; // ISO date
  status: JobStatus;

  featured?: boolean;
  /** Demo/sample record for UI development — rendered with a visible "Demo" label. */
  demo?: boolean;
}

// ---------- Marketplace registry ----------

export interface MarketplaceInfo {
  slug: Marketplace;
  name: string;
  monogram: string;
  color: string;
  /** Public homepage of the marketplace. */
  url: string;
  /**
   * TODO(owner): paste your real SHAREABLE referral/affiliate link here.
   * NOTE: a private dashboard (e.g. refer.micro1.ai/dashboard, terac.com/me/…,
   * sme.careers/referrals) is an account page, NOT a candidate referral link.
   * Leave undefined to apply via the job's originalUrl.
   */
  referralUrl?: string;
}

export const marketplaces: Record<Marketplace, MarketplaceInfo> = {
  mercor: {
    slug: "mercor",
    name: "Mercor",
    monogram: "M",
    color: "#111827",
    url: "https://work.mercor.com",
    referralUrl: undefined, // TODO(owner): your Mercor referral link
  },
  handshake: {
    slug: "handshake",
    name: "Handshake",
    monogram: "H",
    color: "#2d7a4b",
    url: "https://joinhandshake.com",
    referralUrl: undefined, // TODO(owner): your Handshake referral link
  },
  micro1: {
    slug: "micro1",
    name: "micro1",
    monogram: "m1",
    color: "#6d28d9",
    url: "https://micro1.ai",
    // Owner's real bundled referral link (covers all micro1 opportunities).
    referralUrl:
      "https://refer.micro1.ai/referral/jobs?referralCode=6bca71f2-4696-4071-8283-c031454cdbd2&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
  },
  turing: {
    slug: "turing",
    name: "Turing",
    monogram: "T",
    color: "#0b1324",
    url: "https://work.turing.com/jobs",
    // TODO(owner): paste your Turing GENERAL referral link (work.turing.com/r/...)
    // from Refer & Earn — it attributes any signup+apply to you across all Turing jobs.
    referralUrl: undefined,
  },
  "sme-careers": {
    slug: "sme-careers",
    name: "SME Careers",
    monogram: "SME",
    color: "#b45309",
    url: "https://sme.careers",
    referralUrl: undefined, // TODO(owner): your SME Careers referral link (NOT sme.careers/referrals)
  },
  terac: {
    slug: "terac",
    name: "Terac",
    monogram: "T",
    color: "#0e7490",
    url: "https://terac.com",
    referralUrl: undefined, // TODO(owner): your Terac SHARE link (NOT terac.com/me/opportunities)
  },
  other: {
    slug: "other",
    name: "Other",
    monogram: "•",
    color: "#52525b",
    url: "",
    referralUrl: undefined,
  },
};

/** Resolve the Apply destination + whether it is a referral link (for disclosure). */
export function resolveApply(job: Job): { href: string; isReferral: boolean } {
  const mkt = marketplaces[job.marketplace];
  if (job.applyUrl) return { href: job.applyUrl, isReferral: !!job.referral };
  if (mkt?.referralUrl) return { href: mkt.referralUrl, isReferral: true };
  return { href: job.originalUrl, isReferral: false };
}

// ---------- Category registry ----------

export interface CategoryInfo {
  slug: JobCategory;
  name: string;
  /** CategoryIcon slug reuse (see components/ui/category-icon). */
  icon: string;
  color: string;
  /** Existing interview category slug for cross-linking prep (or undefined). */
  interviewSlug?: string;
}

export const jobCategories: CategoryInfo[] = [
  { slug: "software-engineering", name: "Software Engineering", icon: "backend", color: "#22c55e", interviewSlug: "backend" },
  { slug: "ai-ml", name: "AI / ML", icon: "ai", color: "#ec4899", interviewSlug: "ai" },
  { slug: "data-annotation", name: "Data Annotation", icon: "data", color: "#14b8a6", interviewSlug: "ai" },
  { slug: "language-audio", name: "Language & Audio", icon: "writing", color: "#3b82f6", interviewSlug: "ai" },
  { slug: "science-research", name: "Science & Research", icon: "research", color: "#8b5cf6", interviewSlug: "ai" },
  { slug: "finance", name: "Finance", icon: "productivity", color: "#0ea5e9", interviewSlug: "system-design" },
  { slug: "healthcare", name: "Healthcare", icon: "research", color: "#f97316", interviewSlug: "ai" },
  { slug: "design", name: "Design", icon: "design", color: "#a855f7", interviewSlug: "frontend" },
  { slug: "cybersecurity", name: "Cybersecurity", icon: "cybersecurity", color: "#ef4444", interviewSlug: "cybersecurity" },
  { slug: "legal", name: "Legal", icon: "legal", color: "#0d9488" },
  { slug: "other", name: "Other", icon: "automation", color: "#52525b" },
];

export function getCategory(slug: JobCategory): CategoryInfo {
  return jobCategories.find((c) => c.slug === slug) ?? jobCategories[jobCategories.length - 1];
}

// ---------- Country / option registries ----------

export const countries: { code: CountryCode; label: string; short: string }[] = [
  { code: "IND", label: "India", short: "IN" },
  { code: "USA", label: "United States", short: "US" },
  { code: "GBR", label: "United Kingdom", short: "UK" },
  { code: "CAN", label: "Canada", short: "CA" },
  { code: "WW", label: "Worldwide", short: "WW" },
  { code: "OTHER", label: "Other", short: "—" },
];

export const minPayOptions = [10, 25, 50, 75, 100] as const;

export const experienceLevels: { value: ExperienceLevel; label: string }[] = [
  { value: "entry", label: "Entry" },
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid" },
  { value: "senior", label: "Senior" },
  { value: "expert", label: "Expert" },
];

export const commitments: { value: Commitment; label: string }[] = [
  { value: "hourly", label: "Hourly" },
  { value: "contract", label: "Contract" },
  { value: "part-time", label: "Part-time" },
  { value: "full-time", label: "Full-time" },
  { value: "task-based", label: "Task-based" },
];

export const workArrangements: { value: WorkArrangement; label: string }[] = [
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
  { value: "onsite", label: "On-site" },
];

export const marketplaceOptions: { value: Marketplace; label: string }[] = [
  { value: "mercor", label: "Mercor" },
  { value: "handshake", label: "Handshake" },
  { value: "micro1", label: "micro1" },
  { value: "turing", label: "Turing" },
  { value: "sme-careers", label: "SME Careers" },
  { value: "terac", label: "Terac" },
  { value: "other", label: "Other" },
];

export const postedOptions: { value: number; label: string }[] = [
  { value: 7, label: "Last 7 days" },
  { value: 30, label: "Last 30 days" },
  { value: 90, label: "Last 90 days" },
];

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "pay_max_hourly_usd", label: "Highest hourly pay" },
  { value: "pay_min_hourly_usd", label: "Lowest hourly pay" },
  { value: "newest", label: "Newest" },
  { value: "recently_verified", label: "Recently verified" },
];

export const JOBS_PER_PAGE = 20;

// ---------- Filter state ----------

export interface JobFilters {
  q: string;
  country: CountryCode | "all";
  minPay: number; // 0 = any
  category: JobCategory | "all";
  experience: ExperienceLevel | "all";
  commitment: Commitment | "all";
  work: WorkArrangement | "all";
  marketplace: Marketplace | "all";
  posted: number; // 0 = any; else 7 | 30 | 90
  sort: SortKey;
  page: number;
}

export const defaultFilters: JobFilters = {
  q: "",
  country: "all",
  minPay: 0,
  category: "all",
  experience: "all",
  commitment: "all",
  work: "all",
  marketplace: "all",
  posted: 0,
  sort: "newest",
  page: 1,
};

// ---------- URL <-> filters (shareable, refresh-persistent) ----------

type ParamSource = URLSearchParams | Record<string, string | string[] | undefined>;

function readParam(src: ParamSource, key: string): string | undefined {
  if (src instanceof URLSearchParams) return src.get(key) ?? undefined;
  const v = src[key];
  return Array.isArray(v) ? v[0] : v;
}

export function parseFilters(src: ParamSource): JobFilters {
  const f: JobFilters = { ...defaultFilters };

  const q = readParam(src, "q");
  if (q) f.q = q;

  const country = readParam(src, "country");
  if (country && countries.some((c) => c.code === country)) f.country = country as CountryCode;

  const pay = Number(readParam(src, "pay"));
  if (minPayOptions.includes(pay as (typeof minPayOptions)[number])) f.minPay = pay;

  const category = readParam(src, "category");
  if (category && jobCategories.some((c) => c.slug === category)) f.category = category as JobCategory;

  const exp = readParam(src, "exp");
  if (exp && experienceLevels.some((e) => e.value === exp)) f.experience = exp as ExperienceLevel;

  const commitment = readParam(src, "commitment");
  if (commitment && commitments.some((c) => c.value === commitment)) f.commitment = commitment as Commitment;

  const work = readParam(src, "work");
  if (work && workArrangements.some((w) => w.value === work)) f.work = work as WorkArrangement;

  const marketplace = readParam(src, "marketplace");
  if (marketplace && marketplaceOptions.some((m) => m.value === marketplace)) f.marketplace = marketplace as Marketplace;

  const posted = Number(readParam(src, "posted"));
  if ([7, 30, 90].includes(posted)) f.posted = posted;

  const sort = readParam(src, "sort");
  if (sort && sortOptions.some((s) => s.value === sort)) f.sort = sort as SortKey;

  const page = Number(readParam(src, "page"));
  if (Number.isFinite(page) && page > 1) f.page = Math.floor(page);

  return f;
}

/** Serialize to a querystring, omitting defaults for clean, shareable URLs. */
export function serializeFilters(f: JobFilters): string {
  const p = new URLSearchParams();
  if (f.q) p.set("q", f.q);
  if (f.country !== "all") p.set("country", f.country);
  if (f.minPay) p.set("pay", String(f.minPay));
  if (f.category !== "all") p.set("category", f.category);
  if (f.experience !== "all") p.set("exp", f.experience);
  if (f.commitment !== "all") p.set("commitment", f.commitment);
  if (f.work !== "all") p.set("work", f.work);
  if (f.marketplace !== "all") p.set("marketplace", f.marketplace);
  if (f.posted) p.set("posted", String(f.posted));
  if (f.sort !== defaultFilters.sort) p.set("sort", f.sort);
  if (f.page > 1) p.set("page", String(f.page));
  return p.toString();
}

export function countActiveFilters(f: JobFilters): number {
  let n = 0;
  if (f.q) n++;
  if (f.country !== "all") n++;
  if (f.minPay) n++;
  if (f.category !== "all") n++;
  if (f.experience !== "all") n++;
  if (f.commitment !== "all") n++;
  if (f.work !== "all") n++;
  if (f.marketplace !== "all") n++;
  if (f.posted) n++;
  return n;
}

// ---------- Pure filtering / sorting / pagination ----------

function hourlyMax(job: Job): number | undefined {
  return job.compensationType === "hourly" ? job.payMax ?? job.payMin : undefined;
}

function daysSince(iso: string): number {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return Infinity;
  return (Date.now() - then) / 86_400_000;
}

export function filterJobs(jobs: Job[], f: JobFilters): Job[] {
  const q = f.q.trim().toLowerCase();
  return jobs.filter((job) => {
    if (f.country !== "all" && !job.countryEligibility.includes(f.country) && !job.countryEligibility.includes("WW"))
      return false;
    if (f.category !== "all" && job.category !== f.category) return false;
    if (f.experience !== "all" && job.experienceLevel !== f.experience) return false;
    if (f.commitment !== "all" && job.commitment !== f.commitment) return false;
    if (f.work !== "all" && job.workArrangement !== f.work) return false;
    if (f.marketplace !== "all" && job.marketplace !== f.marketplace) return false;
    if (f.posted && daysSince(job.postedAt) > f.posted) return false;

    // Minimum hourly pay only applies to hourly roles.
    if (f.minPay) {
      const h = hourlyMax(job);
      if (h === undefined || h < f.minPay) return false;
    }

    if (q) {
      const haystack = [
        job.title,
        job.description,
        job.skills.join(" "),
        marketplaces[job.marketplace].name,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

export function sortJobs(jobs: Job[], sort: SortKey): Job[] {
  const copy = [...jobs];
  switch (sort) {
    case "pay_max_hourly_usd":
      return copy.sort((a, b) => (hourlyMax(b) ?? -1) - (hourlyMax(a) ?? -1));
    case "pay_min_hourly_usd":
      return copy.sort((a, b) => (hourlyMax(a) ?? Infinity) - (hourlyMax(b) ?? Infinity));
    case "recently_verified":
      return copy.sort((a, b) => +new Date(b.lastVerifiedAt) - +new Date(a.lastVerifiedAt));
    case "newest":
    default:
      return copy.sort((a, b) => +new Date(b.postedAt) - +new Date(a.postedAt));
  }
}

export interface PageResult {
  items: Job[];
  total: number;
  page: number;
  totalPages: number;
}

export function paginate(jobs: Job[], page: number, perPage = JOBS_PER_PAGE): PageResult {
  const total = jobs.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  return { items: jobs.slice(start, start + perPage), total, page: safePage, totalPages };
}

// ---------- Display helpers ----------

export function compensationLabel(job: Job): string {
  const cur = job.payCurrency === "USD" ? "$" : job.payCurrency + " ";
  const fmt = (n: number) => cur + n.toLocaleString("en-US");
  const range =
    job.payMin != null && job.payMax != null && job.payMin !== job.payMax
      ? `${fmt(job.payMin)}–${fmt(job.payMax)}`
      : job.payMax != null || job.payMin != null
        ? fmt(job.payMax ?? job.payMin!)
        : "Undisclosed";
  const suffix: Record<CompensationType, string> = {
    hourly: "/hr",
    per_task: " / task",
    fixed: " fixed",
    monthly: " / mo",
    yearly: " / yr",
  };
  return job.payMax == null && job.payMin == null ? range : range + suffix[job.compensationType];
}

export function compensationTypeLabel(t: CompensationType): string {
  return t === "hourly"
    ? "Hourly"
    : t === "per_task"
      ? "Per-task"
      : t === "monthly"
        ? "Monthly"
        : t === "yearly"
          ? "Yearly"
          : "Fixed";
}

export function eligibilityLabel(codes: CountryCode[]): string {
  if (codes.includes("WW")) return "Worldwide";
  // When eligibility isn't published, don't invent it — point to the source.
  if (codes.length === 0 || (codes.length === 1 && codes[0] === "OTHER")) return "See listing";
  return codes.map((c) => countries.find((x) => x.code === c)?.short ?? c).join(", ");
}

export function statusLabel(s: JobStatus): string {
  return s === "open" ? "Open" : s === "expired" ? "Expired" : "Closed";
}

// ---------- Registry access: dedup, lookup, related ----------

/**
 * Dedup by stable id (and by slug, handled in the loader). We deliberately do
 * NOT dedup by originalUrl: many distinct openings legitimately share one
 * marketplace board URL (e.g. work.turing.com/jobs), so URL-dedup would wrongly
 * collapse them. Unique ids + slugs already prevent true duplicates.
 */
export function dedupeJobs(jobs: Job[]): Job[] {
  const byId = new Set<string>();
  const out: Job[] = [];
  for (const job of jobs) {
    if (byId.has(job.id)) continue;
    byId.add(job.id);
    out.push(job);
  }
  return out;
}

export function getRelatedJobs(all: Job[], job: Job, limit = 3): Job[] {
  return all
    .filter((j) => j.slug !== job.slug && j.status === "open")
    .map((j) => ({
      j,
      score: (j.category === job.category ? 2 : 0) + (j.marketplace === job.marketplace ? 1 : 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.j);
}
