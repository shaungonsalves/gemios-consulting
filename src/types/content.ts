export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
}

export interface HowWeWorkItem {
  id: string;
  title: string;
  body: string;
}

export interface StackItem {
  id: string;
  name: string;
  /** Simple Icons slug for CDN SVG path */
  iconSlug: string;
}

export interface PortfolioFeatured {
  kicker: string;
  roleTitle: string;
  clientName: string;
  attribution: string;
  summary: string;
}

export interface SiteMeta {
  companyName: string;
  headline: string;
  subheadline: string;
  heroBadgeLabel: string;
  founderName: string;
  founderTitle: string;
  pageTitle: string;
  metaDescription: string;
  copyrightYear: number;
}

export interface CtaContent {
  contactIntro: string;
  primaryLabel: string;
  primarySubject: string;
  secondaryLabel: string;
  secondarySubject: string;
  schedulingNote: string;
  email: string;
  schedulingUrl: string;
}
