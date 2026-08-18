import type { Metadata } from "next";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/utils";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
}: PageMeta): Metadata {
  const url = siteUrl(path);
  const fullTitle =
    title === site.name ? site.name : `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
