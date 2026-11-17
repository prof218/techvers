import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `General, educational, job listings, and affiliate disclaimer for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/disclaimer` },
  openGraph: {
    title: `Disclaimer — ${siteConfig.name}`,
    description: `Disclaimer regarding content accuracy, AI tools, job listings, and affiliate links on ${siteConfig.name}.`,
    url: `${siteConfig.url}/disclaimer`,
    siteName: siteConfig.name,
  },
};

export default function DisclaimerPage() {
  return (
    <ContentPage
      title="Disclaimer"
      subtitle={`Important information regarding content, tools, and listings on ${siteConfig.name}.`}
      updated="November 17, 2026"
    >
      <p>
        The information provided by <strong>{siteConfig.name}</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) on{" "}
        {siteConfig.url} is for general informational and educational purposes only. All information on the
        site is provided in good faith; however, we make no representation or warranty of any kind, express or
        implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any
        information on the site.
      </p>

      <h2>1. Educational & Professional Information</h2>
      <p>
        The site offers developer roadmaps, code examples, interview preparation questions, and technology guides.
        This content is intended solely to assist personal learning and career exploration. It does not constitute
        professional career, financial, or legal advice. Technology and framework APIs change frequently; you should
        always verify code, commands, and configurations with official documentation before applying them to production systems.
      </p>

      <h2>2. AI Training Jobs & Third-Party Opportunities</h2>
      <p>
        {siteConfig.name} curates and catalogs publicly available job listings, AI training gigs, and annotation
        opportunities from third-party platforms (such as Outlier, Alignerr, DataAnnotation, Remotasks, and others).
      </p>
      <ul>
        <li>
          <strong>Independent Directory:</strong> {siteConfig.name} is an independent learning and directory platform.
          We are not an employer, recruitment agency, or official representative of these hiring companies unless explicitly stated.
        </li>
        <li>
          <strong>No Guarantee of Placement or Earnings:</strong> We do not guarantee employment, acceptance into contributor
          pools, project availability, or specific pay rates. All hiring decisions, assessments, and compensation agreements
          remain solely between you and the respective platform.
        </li>
        <li>
          <strong>Verification:</strong> We encourage all applicants to verify job requirements and submit applications directly
          through verified platform channels. We will never ask you for payment to apply for any job.
        </li>
      </ul>

      <h2>3. Third-Party Tools, Trademarks & Links</h2>
      <p>
        Our AI Tools directory and Technology hubs feature reviews, specifications, and links to external websites and services.
      </p>
      <ul>
        <li>
          All product names, logos, brands, and registered trademarks displayed on this site belong to their respective owners.
          Their mention is for identification and educational reference only and does not imply endorsement, affiliation, or sponsorship.
        </li>
        <li>
          External links to third-party websites are provided for your convenience. We have no control over the content, privacy policies,
          or practices of any third-party sites or services.
        </li>
      </ul>

      <h2>4. Advertising & Affiliate Disclosure</h2>
      <p>
        To keep {siteConfig.name} completely free for learners, we display advertising (including <strong>Google AdSense</strong>)
        and may participate in affiliate marketing programs.
      </p>
      <p>
        This means that when you click on certain links to third-party tools or services and make a purchase or sign up, we may earn
        an affiliate commission at no extra cost to you. Our editorial content and tool reviews remain unbiased and are created to
        provide honest, useful value to our readers.
      </p>

      <h2>5. &quot;Use at Your Own Risk&quot;</h2>
      <p>
        Under no circumstances shall {siteConfig.name} or its team have any liability to you for any loss or damage of any kind
        incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and
        your reliance on any information is solely at your own risk.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about this Disclaimer, need clarification, or notice any inaccuracies that require correction,
        please contact us at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> or through our{" "}
        <Link href="/contact">Contact Page</Link>.
      </p>
    </ContentPage>
  );
}
