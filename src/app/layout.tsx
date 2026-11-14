import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Header } from "@/components/layout/header";
import { CommandPalette } from "@/components/layout/command-palette";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Learn AI Engineering & Get Hired`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Learn AI Engineering & Get Hired`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Learn AI Engineering & Get Hired`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteConfig.url}#org`,
                name: siteConfig.name,
                url: siteConfig.url,
                description: siteConfig.description,
                logo: {
                  "@type": "ImageObject",
                  url: `${siteConfig.url}/icon.png`,
                  width: 512,
                  height: 512,
                },
                sameAs: Object.values(siteConfig.links).filter(Boolean),
              },
              {
                "@type": "WebSite",
                "@id": `${siteConfig.url}#site`,
                url: siteConfig.url,
                name: siteConfig.name,
                description: siteConfig.description,
                inLanguage: "en",
                publisher: { "@id": `${siteConfig.url}#org` },
              },
            ],
          }}
        />
        <Header />
        <CommandPalette />
        <main id="main-content" className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
