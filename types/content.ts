export type NavItem = {
  href: string;
  label: string;
  code: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type SkillGroup = {
  heading: string;
  items: string[];
};

export type ApproachItem = {
  title: string;
  body: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  role: string;
  status: "production" | "study";
  featured: boolean;
  stack: string[];
  href?: string;
  repo?: ProjectLink;
  sections: ProjectSection[];
  notes?: string;
};

export type SiteContent = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  headline: string;
  lede: string;
  focus: string;
  email?: string;
  url: string;
  nav: NavItem[];
  social: SocialLink[];
};

export type AboutContent = {
  title: string;
  intro: string[];
  approach: ApproachItem[];
  skills: SkillGroup[];
  now: string;
};
