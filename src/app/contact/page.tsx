import type { Metadata } from "next";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { ContentPage } from "@/components/content-page";
import { ContactForm } from "./contact-form";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${siteConfig.name} team — feedback, corrections, partnerships, and questions.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact Us"
      subtitle="Feedback, corrections, partnership ideas, or just want to say hello? We read every message."
    >
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <Mail className="w-5 h-5 text-[var(--primary)] mb-3" />
          <h3 className="text-sm font-semibold text-[var(--foreground)]">Email</h3>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-sm text-[var(--primary)] break-all"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <MessageSquare className="w-5 h-5 text-[var(--primary)] mb-3" />
          <h3 className="text-sm font-semibold text-[var(--foreground)]">What to send</h3>
          <p className="text-sm text-[var(--foreground-muted)]">
            Corrections, suggestions, or partnership enquiries.
          </p>
        </div>
        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <Clock className="w-5 h-5 text-[var(--primary)] mb-3" />
          <h3 className="text-sm font-semibold text-[var(--foreground)]">Response time</h3>
          <p className="text-sm text-[var(--foreground-muted)]">
            We usually reply within 2&ndash;3 business days.
          </p>
        </div>
      </div>

      <h2>Send us a message</h2>
      <ContactForm />
    </ContentPage>
  );
}
