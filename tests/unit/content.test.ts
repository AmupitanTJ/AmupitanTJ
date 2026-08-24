import { describe, expect, it } from "vitest";
import { experience } from "@/content/experience";
import { notes } from "@/content/notes";
import { site } from "@/content/site";
import { skills } from "@/content/skills";
import { getExperience } from "@/lib/experience";
import { getNoteBySlug, getNotes } from "@/lib/notes";
import { isTodo, todo } from "@/lib/todo";

describe("site metadata", () => {
  it("exposes the SiteMetadata fields used by the document head", () => {
    expect(site.name).toBe("Tosin Joseph Amupitan");
    expect(site.description.length).toBeGreaterThan(20);
    expect(site.locale).toBe("en_GB");
    expect(site.social.length).toBeGreaterThan(0);
    expect(site.nav.map((item) => item.href)).toEqual(
      expect.arrayContaining(["/projects", "/about", "/contact"]),
    );
    expect(site.resumeHref).toBe("/resume");
  });
});

describe("experience and skills", () => {
  it("returns the typed experience list", () => {
    expect(getExperience()).toEqual(experience);
    expect(experience.length).toBeGreaterThan(0);
  });

  it("keeps public experience free of drafting markers", () => {
    expect(experience.some((role) => isTodo(role.start))).toBe(false);
    expect(
      experience.some((role) =>
        role.highlights.some((highlight) => isTodo(highlight)),
      ),
    ).toBe(false);
  });

  it("keeps skill groups as named lists of tools", () => {
    expect(skills.map((group) => group.heading)).toEqual([
      "Frontend",
      "Backend & Data",
      "Media & Integrations",
      "Tools",
    ]);
    expect(skills.every((group) => group.items.length > 0)).toBe(true);
  });
});

describe("notes", () => {
  it("stays empty until a real note is added", () => {
    expect(notes).toEqual([]);
    expect(getNotes()).toEqual([]);
    expect(getNoteBySlug("anything")).toBeUndefined();
  });
});

describe("todo markers", () => {
  it("prefixes copy that still needs a first-party fact", () => {
    expect(todo("add a cover image.")).toBe("TODO: add a cover image.");
    expect(isTodo("TODO: add a cover image.")).toBe(true);
    expect(isTodo("A finished sentence.")).toBe(false);
  });
});
