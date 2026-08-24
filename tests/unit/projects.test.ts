import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";
import {
  getAdjacentProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectSlugs,
  getProjects,
} from "@/lib/projects";
import { isTodo } from "@/lib/todo";

const requiredKeys = [
  "title",
  "slug",
  "shortDescription",
  "longDescription",
  "role",
  "status",
  "year",
  "stack",
  "coverImage",
  "gallery",
  "liveUrl",
  "githubUrl",
  "challenge",
  "solution",
  "keyDecisions",
  "outcomes",
  "nextSteps",
] as const;

describe("project register", () => {
  it("returns the typed project list", () => {
    expect(getProjects().every((project) => projects.includes(project))).toBe(
      true,
    );
    expect(getProjects().length).toBeGreaterThan(0);
  });

  it("exposes featured work only", () => {
    const featured = getFeaturedProjects();
    expect(featured.every((project) => project.featured)).toBe(true);
    expect(featured.map((project) => project.slug)).toEqual([
      "trove-calculator",
    ]);
  });

  it("finds a project by slug and ignores unknown slugs", () => {
    const first = getProjects()[0];
    expect(first).toBeDefined();
    expect(getProjectBySlug(first!.slug)).toEqual(first);
    expect(getProjectBySlug("not-a-real-plate")).toBeUndefined();
    expect(getProjectBySlug("vantraclip")).toBeUndefined();
  });

  it("lists every slug once", () => {
    const slugs = getProjectSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs).toContain("trove-calculator");
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

  it("carries the full project schema on every record", () => {
    for (const project of projects) {
      for (const key of requiredKeys) {
        expect(project).toHaveProperty(key);
      }
      expect(["production", "study", "in-progress"]).toContain(project.status);
      expect(Array.isArray(project.stack)).toBe(true);
      expect(Array.isArray(project.gallery)).toBe(true);
      expect(Array.isArray(project.keyDecisions)).toBe(true);
      expect(Array.isArray(project.outcomes)).toBe(true);
      expect(Array.isArray(project.nextSteps)).toBe(true);
    }
  });

  it("does not invent client or metric fields", () => {
    for (const project of projects) {
      expect(project).not.toHaveProperty("testimonial");
      expect(project).not.toHaveProperty("clients");
      expect(project).not.toHaveProperty("metrics");
    }
  });

  it("publishes only projects owned by the portfolio owner", () => {
    for (const project of getProjects()) {
      expect(project.githubUrl).toMatch(/^https:\/\/github\.com\/AmupitanTJ\//);
    }
  });

  it("keeps published visitor-facing copy complete and credible", () => {
    const suspiciousCopy = /lorem ipsum|fake client|placeholder text/i;

    for (const project of getProjects()) {
      const requiredCopy = [
        project.title,
        project.slug,
        project.shortDescription,
        project.longDescription,
        project.role,
        project.year,
        project.challenge,
        project.solution,
        ...project.stack,
      ];
      const visibleListCopy = [
        ...project.keyDecisions,
        ...project.outcomes,
        ...project.nextSteps,
      ].filter((item) => !isTodo(item));

      expect(requiredCopy.every((item) => item.trim().length > 0)).toBe(true);
      expect(requiredCopy.some((item) => isTodo(item))).toBe(false);
      expect([...requiredCopy, ...visibleListCopy].join(" ")).not.toMatch(
        suspiciousCopy,
      );
    }
  });

  it("provides useful alt text for every project image", () => {
    for (const project of projects) {
      const images = [project.coverImage, ...project.gallery].filter(
        (image) => image !== null,
      );

      for (const image of images) {
        expect(image.alt.trim().length).toBeGreaterThan(0);
        expect(image.alt).not.toMatch(/^(image|photo|screenshot)$/i);
      }
    }
  });
});
