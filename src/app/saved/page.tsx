import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { SavedClient } from "./saved-client";

export const metadata: Metadata = {
  title: "Saved",
  description: "Your bookmarked guides, AI tools, and roadmaps on Techoverxe.",
  robots: { index: false },
};

export default function SavedPage() {
  return (
    <ContentPage title="Saved for later" subtitle="Everything you've bookmarked, kept on this device.">
      <div className="not-prose">
        <SavedClient />
      </div>
    </ContentPage>
  );
}
