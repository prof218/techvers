import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions for using ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/terms` },
  openGraph: {
    title: `Terms of Service — ${siteConfig.name}`,
    description: `The terms and conditions for using ${siteConfig.name}.`,
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
  },
};

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms of Service"
      subtitle={`The rules for using ${siteConfig.name}.`}
      updated="August 24, 2026"
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of {siteConfig.name} at{" "}
        {siteConfig.url}. By using the site, you agree to these Terms. If you do not agree, please do
        not use the site.
      </p>

      <h2>Use of the site</h2>
      <ul>
        <li>You may use the site for personal, non-commercial learning and reference.</li>
        <li>
          You agree not to misuse the site — including attempting to disrupt it, scrape it at scale,
          or access it in ways that harm other users or our infrastructure.
        </li>
      </ul>

      <h2>Content and accuracy</h2>
      <p>
        We work hard to keep our content accurate and current, but technology changes quickly. All
        content is provided &quot;as is&quot; for informational purposes and without warranty of any kind. Always
        verify critical details against official documentation before relying on them.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site&apos;s original content, design, and branding are owned by {siteConfig.name} and protected
        by applicable laws. Product names, logos, and trademarks referenced on the site belong to
        their respective owners and are used for identification only.
      </p>

      <h2>Third-party links and advertising</h2>
      <p>
        The site contains links to third-party websites and displays third-party advertising. We are
        not responsible for the content, products, or practices of those third parties. Some links
        may be affiliate links, meaning we may earn a commission at no extra cost to you. See our{" "}
        <Link href="/privacy">Privacy Policy</Link> for how advertising data is handled.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {siteConfig.name} shall not be liable for any indirect,
        incidental, or consequential damages arising from your use of, or inability to use, the site.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may revise these Terms from time to time. Continued use of the site after changes take
        effect constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> or visit our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </ContentPage>
  );
}
