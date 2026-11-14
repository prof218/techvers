import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Techoverxe collects, uses, and protects your information, including our use of cookies, analytics, and third-party advertising such as Google AdSense.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      subtitle={`How ${siteConfig.name} handles data, cookies, and advertising.`}
      updated="August 24, 2026"
    >
      <p>
        This Privacy Policy explains how {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
        and safeguards information when you visit {siteConfig.url}. By using the site, you agree to the
        practices described here.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide.</strong> If you contact us or sign in, we receive the
          details you choose to share (such as your name and email address).
        </li>
        <li>
          <strong>Usage data.</strong> Like most websites, we automatically receive standard log data
          — IP address, browser type, pages visited, and referring pages — to keep the site secure and
          understand how it&apos;s used.
        </li>
        <li>
          <strong>Cookies and similar technologies.</strong> We and our partners use cookies to
          remember preferences (for example, your light/dark theme), measure traffic, and serve ads.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To operate, maintain, and improve the website and its content.</li>
        <li>To respond to your messages and requests.</li>
        <li>To measure aggregate usage and performance.</li>
        <li>To display advertising that helps keep Techoverxe free.</li>
      </ul>

      <h2>Advertising and third-party cookies</h2>
      <p>
        We use third-party advertising companies, including <strong>Google</strong>, to serve ads
        when you visit the site. These companies may use cookies and similar technologies to serve
        ads based on your prior visits to this and other websites.
      </p>
      <ul>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your
          visits to our site and/or other sites on the Internet.
        </li>
        <li>
          You may opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          .
        </li>
        <li>
          You can also opt out of a third-party vendor&apos;s use of cookies for personalized advertising
          at{" "}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info/choices
          </a>
          .
        </li>
      </ul>

      <h2>Analytics</h2>
      <p>
        We may use privacy-conscious analytics tools to understand aggregate traffic patterns. These
        tools report on trends and do not identify individual visitors to us.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Most browsers let you refuse or delete cookies through their settings.</li>
        <li>
          You can request access to, correction of, or deletion of personal information you have
          provided to us by emailing{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </li>
      </ul>

      <h2>Children&apos;s privacy</h2>
      <p>
        Techoverxe is intended for a general audience and is not directed to children under 13. We do
        not knowingly collect personal information from children under 13.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be reflected by the
        &quot;Last updated&quot; date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> or use our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </ContentPage>
  );
}
