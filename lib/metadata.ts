import type { Metadata } from "next";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/utils";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  image?: { url: string; alt: string };
  robots?: Metadata["robots"];
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
  image,
  robots,
}: PageMeta): Metadata {
  const url = siteUrl(path);
  const fullTitle = title === site.name ? site.name : `${title} — ${site.name}`;
  const images = image
    ? [{ url: image.url, width: 1200, height: 630, alt: image.alt }]
    : [shareImage];

  return {
    title,
    description,
    alternates: { canonical: url },
    robots,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((item) => item.url),
    },
  };
}
