import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechVerse — a free, independent platform helping developers explore technologies, compare AI tools, follow learning roadmaps, and prepare for interviews.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <ContentPage
      title="About TechVerse"
      subtitle="A free, independent learning hub for developers and IT professionals."
    >
      <p>
        <strong>TechVerse</strong> is an independent knowledge platform built for people who work
        with technology — students, self-taught developers, career switchers, and working
        engineers. Our goal is simple: gather the practical information you need to learn a
        technology, choose the right tool, plan a career, and prepare for interviews, and present it
        in one clean, fast, ad-supported place that stays free to use.
      </p>

      <h2>What you&apos;ll find here</h2>
      <ul>
        <li>
          <strong>Technology guides</strong> across frontend, backend, databases, cloud, DevOps, AI,
          cybersecurity, data, mobile, and design.
        </li>
        <li>
          <strong>An AI tools directory</strong> with hands-on notes, pricing, and honest pros and
          cons so you can compare options quickly.
        </li>
        <li>
          <strong>Career paths</strong> with realistic salary ranges, required skills, and the day-to-day
          reality of each role.
        </li>
        <li>
          <strong>Learning roadmaps</strong> that break a large goal into an ordered, achievable path.
        </li>
        <li>
          <strong>Interview preparation</strong> with categorized questions and worked answers.
        </li>
      </ul>

      <h2>How we work</h2>
      <p>
        Content is researched and written by our team, reviewed for accuracy, and updated as the
        ecosystem changes. Where we use tools to help draft material, a human edits and verifies it
        before it&apos;s published. We aim to be genuinely useful first — if a page wouldn&apos;t help a real
        reader, it doesn&apos;t belong here.
      </p>

      <h2>How TechVerse is funded</h2>
      <p>
        TechVerse is free to read. We cover our costs through advertising and, in some cases,
        affiliate links to products we write about. Advertising never dictates our recommendations,
        and we clearly separate editorial content from ads.
      </p>

      <h2>Get in touch</h2>
      <p>
        Have feedback, a correction, or a partnership idea? We&apos;d love to hear from you — visit our{" "}
        <Link href="/contact">contact page</Link> or email us at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </ContentPage>
  );
}
