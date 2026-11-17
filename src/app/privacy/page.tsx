import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Techoverxe collects, uses, and protects your information, including our use of cookies, analytics, and third-party advertising such as Google AdSense.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
  openGraph: {
    title: `Privacy Policy — ${siteConfig.name}`,
    description: `How ${siteConfig.name} collects, uses, and protects your information, including our use of cookies, analytics, and third-party advertising such as Google AdSense.`,
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
  },
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

      <h2>Google AdSense & Third-Party Advertising</h2>
      <p>
        We use third-party advertising companies, including <strong>Google AdSense</strong>, to serve advertisements
        when you visit {siteConfig.url}. These vendors, including Google, use cookies and web beacons to serve ads
        based on your prior visits to this website or other websites across the Internet.
      </p>
      <ul>
        <li>
          <strong>Google DoubleClick / DART Cookies:</strong> Google&apos;s use of advertising cookies enables it
          and its partners to serve targeted ads to our users based on their browsing patterns on {siteConfig.name}
          and other sites on the web.
        </li>
        <li>
          <strong>Personalized Ads Opt-Out:</strong> You may opt out of personalized advertising by visiting{" "}
          <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          . Alternatively, you can opt out of third-party vendors&apos; use of cookies for personalized advertising
          by visiting{" "}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>{" "}
          or the{" "}
          <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">
            Network Advertising Initiative
          </a>
          .
        </li>
        <li>
          Learn more about how Google processes information when you use partner sites at{" "}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            Google&apos;s Advertising Privacy &amp; Terms
          </a>
          .
        </li>
      </ul>

      <h2>GDPR and CCPA / CPRA Privacy Rights</h2>
      <p>
        Depending on your location (such as the European Economic Area, United Kingdom, or California), you are
        entitled to specific rights regarding your personal information:
      </p>
      <ul>
        <li><strong>Right to Access:</strong> You may request copies of personal data we retain about you.</li>
        <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete information.</li>
        <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You may request deletion of your personal data.</li>
        <li><strong>Right to Opt-Out:</strong> You can opt out of the sale or sharing of your personal information, including cross-context behavioral advertising.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us directly at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>

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
