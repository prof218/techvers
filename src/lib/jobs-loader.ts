/* ============================================================
   Techoverxe — AI Training Jobs: dynamic data loader
   ------------------------------------------------------------
   Merges code-based jobs (src/data/jobs.ts) with rows from a
   published Google Sheet (CSV), so jobs can be added/edited in
   the Sheet and appear on the site WITHOUT a code change or
   redeploy. Set JOBS_SHEET_CSV_URL to enable the Sheet source;
   if unset or unreachable, the site falls back to code jobs only.

   Pages that call getAllJobs() use ISR (export const revalidate),
   so Sheet edits go live within the revalidation window.
   ============================================================ */

import { jobs as staticJobs } from "@/data/jobs";
import { slugify } from "@/lib/utils";
import {
  dedupeJobs,
  commitments,
  experienceLevels,
  jobCategories,
  marketplaceOptions,
  workArrangements,
  type Commitment,
  type CompensationType,
  type CountryCode,
  type ExperienceLevel,
  type Job,
  type JobCategory,
  type JobStatus,
  type Marketplace,
  type WorkArrangement,
} from "@/lib/jobs";

const SHEET_URL = process.env.JOBS_SHEET_CSV_URL;
const REVALIDATE_SECONDS = 300;

/* ---------- minimal RFC-4180 CSV parser (handles quotes, commas, newlines) ---------- */

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  // Normalize line endings and strip a UTF-8 BOM if present.
  const s = text.replace(/^﻿/, "").replace(/\r\n?/g, "\n");

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  // Flush trailing field/row.
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

/* ---------- field coercion ---------- */

const CATEGORY_SET = new Set(jobCategories.map((c) => c.slug));
const MARKETPLACE_SET = new Set(marketplaceOptions.map((m) => m.value));
const WORK_SET = new Set(workArrangements.map((w) => w.value));
const COMMIT_SET = new Set(commitments.map((c) => c.value));
const EXP_SET = new Set(experienceLevels.map((e) => e.value));
const COUNTRY_SET = new Set<CountryCode>(["IND", "USA", "GBR", "CAN", "WW", "OTHER"]);
const COMP_SET = new Set<CompensationType>(["hourly", "per_task", "fixed", "monthly", "yearly"]);
const STATUS_SET = new Set<JobStatus>(["open", "closed", "expired"]);

const num = (v: string | undefined): number | undefined => {
  if (!v) return undefined;
  const n = Number(v.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && v.trim() !== "" ? n : undefined;
};

const bool = (v: string | undefined): boolean =>
  !!v && ["true", "1", "yes", "y"].includes(v.trim().toLowerCase());

/** Split a cell into a list on "|" (preferred) or newlines; trims + drops empties. */
const list = (v: string | undefined): string[] =>
  !v ? [] : v.split(/[|\n]/).map((x) => x.trim()).filter(Boolean);

function rowToJob(rec: Record<string, string>): Job | null {
  const title = (rec.title || "").trim();
  if (!title) return null; // a row without a title isn't a job

  const marketplace = (rec.marketplace || "other").trim().toLowerCase() as Marketplace;
  const category = (rec.category || "other").trim().toLowerCase() as JobCategory;
  const work = (rec.workarrangement || "remote").trim().toLowerCase() as WorkArrangement;
  const commitment = (rec.commitment || "hourly").trim().toLowerCase() as Commitment;
  const experience = (rec.experiencelevel || "mid").trim().toLowerCase() as ExperienceLevel;
  const compensationType = (rec.compensationtype || "hourly").trim().toLowerCase() as CompensationType;
  const status = (rec.status || "open").trim().toLowerCase() as JobStatus;

  const eligibility = list(rec.countryeligibility)
    .map((c) => c.toUpperCase())
    .filter((c): c is CountryCode => COUNTRY_SET.has(c as CountryCode));

  const slug = (rec.slug && slugify(rec.slug)) || slugify(title);
  if (!slug) return null;

  return {
    id: (rec.id || "").trim() || `sheet-${slug}`,
    slug,
    title,
    marketplace: MARKETPLACE_SET.has(marketplace) ? marketplace : "other",
    originalUrl: (rec.originalurl || "").trim(),
    applyUrl: (rec.applyurl || "").trim() || undefined,
    referral: bool(rec.referral),
    description: (rec.description || "").trim(),
    responsibilities: list(rec.responsibilities),
    requirements: list(rec.requirements),
    skills: list(rec.skills),
    category: CATEGORY_SET.has(category) ? category : "other",
    countryEligibility: eligibility.length ? eligibility : ["OTHER"],
    workArrangement: WORK_SET.has(work) ? work : "remote",
    commitment: COMMIT_SET.has(commitment) ? commitment : "hourly",
    experienceLevel: EXP_SET.has(experience) ? experience : "mid",
    payMin: num(rec.paymin),
    payMax: num(rec.paymax),
    payCurrency: (rec.paycurrency || "USD").trim() || "USD",
    compensationType: COMP_SET.has(compensationType) ? compensationType : "hourly",
    postedAt: (rec.postedat || "").trim() || new Date().toISOString().slice(0, 10),
    lastVerifiedAt: (rec.lastverifiedat || "").trim() || new Date().toISOString().slice(0, 10),
    status: STATUS_SET.has(status) ? status : "open",
    featured: bool(rec.featured),
    demo: bool(rec.demo),
  };
}

/* ---------- Sheet fetch ---------- */

async function fetchSheetJobs(): Promise<Job[]> {
  if (!SHEET_URL) return [];
  try {
    const res = await fetch(SHEET_URL, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) {
      console.warn(`[jobs-loader] Sheet fetch failed: ${res.status}`);
      return [];
    }
    const csv = await res.text();
    const rows = parseCsv(csv);
    if (rows.length < 2) return [];

    const headers = rows[0].map((h) => h.trim().toLowerCase().replace(/[\s_-]/g, ""));
    const jobs: Job[] = [];
    for (let r = 1; r < rows.length; r++) {
      const rec: Record<string, string> = {};
      headers.forEach((h, i) => (rec[h] = rows[r][i] ?? ""));
      const job = rowToJob(rec);
      if (job) jobs.push(job);
    }
    return jobs;
  } catch (err) {
    console.warn("[jobs-loader] Sheet fetch error:", err);
    return [];
  }
}

/* ---------- public API ---------- */

/**
 * All jobs, Sheet-first then code-based, deduped by slug and id.
 * Sheet rows win on slug collisions so the owner can override a code job
 * from the Sheet. Falls back to code jobs if the Sheet is unset/unreachable.
 */
export async function getAllJobs(): Promise<Job[]> {
  const sheetJobs = await fetchSheetJobs();
  const merged = [...sheetJobs, ...staticJobs];

  // Dedup by slug (sheet-first wins) in addition to the id-based dedup.
  const seenSlug = new Set<string>();
  const bySlug: Job[] = [];
  for (const job of merged) {
    if (seenSlug.has(job.slug)) continue;
    seenSlug.add(job.slug);
    bySlug.push(job);
  }
  return dedupeJobs(bySlug);
}

export async function getOpenJobs(): Promise<Job[]> {
  return (await getAllJobs()).filter((j) => j.status === "open");
}

export async function getJobBySlug(slug: string): Promise<Job | undefined> {
  return (await getAllJobs()).find((j) => j.slug === slug);
}
