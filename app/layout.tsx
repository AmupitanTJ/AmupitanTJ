import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { PrivacyAnalytics } from "@/components/analytics/privacy-analytics";
import { WebsiteJsonLd } from "@/components/layout/json-ld";
import { SiteFrame } from "@/components/layout/site-frame";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${cormorant.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground min-h-full font-sans">
        <WebsiteJsonLd />
        <SiteFrame>{children}</SiteFrame>
        <PrivacyAnalytics />
      </body>
    </html>
  );
}
