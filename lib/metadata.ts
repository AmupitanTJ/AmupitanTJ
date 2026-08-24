import type { Metadata } from "next";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/utils";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.role}`,
};

export function createMetadata({
  title,
  description,
  path = "/",
}: PageMeta): Metadata {
  const url = siteUrl(path);
  const fullTitle = title === site.name ? site.name : `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}
