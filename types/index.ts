export type {
  AboutContent,
  ApproachItem,
  Experience,
  HomeContent,
  HomeLink,
  MediaAsset,
  NavItem,
  Note,
  Project,
  ProjectStatus,
  SiteContent,
  SiteMetadata,
  SkillGroup,
  SocialLink,
} from "./content";

export type ContactField = "name" | "email" | "subject" | "message";

export type ContactPayload = Record<ContactField, string>;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;
