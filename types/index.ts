export type {
  AboutContent,
  ApproachItem,
  NavItem,
  Project,
  ProjectLink,
  ProjectSection,
  SiteContent,
  SkillGroup,
  SocialLink,
} from "./content";

export type ContactField = "name" | "email" | "message";

export type ContactPayload = Record<ContactField, string>;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;
