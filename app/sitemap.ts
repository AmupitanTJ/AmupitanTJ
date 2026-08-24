import type { MetadataRoute } from "next";
import { getNotes } from "@/lib/notes";
import { getProjectSlugs } from "@/lib/projects";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/projects",
    "/resume",
    "/notes",
    "/about",
    "/contact",
  ];
  const projectRoutes = getProjectSlugs().map((slug) => `/projects/${slug}`);
  const noteRoutes = getNotes().map((note) => `/notes/${note.slug}`);

  return [...staticRoutes, ...projectRoutes, ...noteRoutes].map((path) => ({
    url: siteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/projects" ? 0.9 : 0.7,
  }));
}
