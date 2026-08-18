import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";
import {
  getAdjacentProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectSlugs,
  getProjects,
} from "@/lib/projects";

describe("project register", () => {
  it("returns the typed project list", () => {
    expect(getProjects()).toEqual(projects);
    expect(getProjects().length).toBeGreaterThan(0);
  });

  it("exposes featured work only", () => {
    const featured = getFeaturedProjects();
    expect(featured.every((project) => project.featured)).toBe(true);
    expect(featured.length).toBeGreaterThan(0);
  });

  it("finds a project by slug and ignores unknown slugs", () => {
    const first = projects[0];
    expect(first).toBeDefined();
    expect(getProjectBySlug(first!.slug)).toEqual(first);
    expect(getProjectBySlug("not-a-real-plate")).toBeUndefined();
  });

  it("lists every slug once", () => {
    const slugs = getProjectSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs).toContain("registration");
  });

  it("resolves adjacent projects in register order", () => {
    const slugs = getProjectSlugs();
    const first = slugs[0];
    const last = slugs[slugs.length - 1];

    expect(first).toBeDefined();
    expect(last).toBeDefined();

    const start = getAdjacentProjects(first!);
    expect(start.previous).toBeUndefined();
    expect(start.next?.slug).toBe(slugs[1]);

    const end = getAdjacentProjects(last!);
    expect(end.next).toBeUndefined();
    expect(end.previous?.slug).toBe(slugs[slugs.length - 2]);
  });

  it("does not invent client or metric fields", () => {
    for (const project of projects) {
      expect(project).not.toHaveProperty("testimonial");
      expect(project).not.toHaveProperty("clients");
      expect(project).not.toHaveProperty("metrics");
    }
  });
});
