import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/projects", "/resume", "/about", "/contact"];
  const projectRoutes = getProjectSlugs().map((slug) => `/projects/${slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: siteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/projects" ? 0.9 : 0.7,
  }));
}
