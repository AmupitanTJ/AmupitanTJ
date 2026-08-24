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

export type MediaAsset = {
  src: string;
  alt: string;
};

export type ProjectStatus = "production" | "study" | "in-progress";

export type Project = {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  status: ProjectStatus;
  year: string;
  stack: string[];
  coverImage: MediaAsset | null;
  gallery: MediaAsset[];
  liveUrl: string | null;
  githubUrl: string | null;
  challenge: string;
  solution: string;
  keyDecisions: string[];
  outcomes: string[];
  nextSteps: string[];
  featured: boolean;
};

export type Experience = {
  title: string;
  organization: string;
  location: string;
  start: string;
  end: string | null;
  current: boolean;
  summary: string;
  highlights: string[];
};

export type SiteMetadata = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  headline: string;
  description: string;
  url: string;
  locale: string;
  email?: string;
  social: SocialLink[];
};

export type SiteContent = SiteMetadata & {
  focus: string;
  nav: NavItem[];
  resumeHref: string;
};

export type HomeLink = {
  label: string;
  href: string;
};

export type HomeContent = {
  eyebrow: string;
  heading: string;
  lede: string;
  availability: string;
  primaryCta: HomeLink;
  secondaryCta: HomeLink;
  stack: string[];
  about: string[];
  contactHeading: string;
  contactBody: string;
};

export type AboutContent = {
  title: string;
  intro: string[];
  approach: ApproachItem[];
  skills: SkillGroup[];
  now: string;
};

export type Note = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  draft: boolean;
};
