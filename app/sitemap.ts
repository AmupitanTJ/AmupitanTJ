import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/work", "/about", "/contact"];
  const projectRoutes = getProjectSlugs().map((slug) => `/work/${slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: siteUrl(path),
    lastModified: new Date(),
  }));
}
