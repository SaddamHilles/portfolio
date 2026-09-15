import type { Experience } from "@/data/experience";

export type ProjectCopy = {
  title: string;
  subtitle: string;
  role: string;
  year: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  sections: { heading: string; body: string }[];
  livePrivate: string;
};

export type Dictionary = {
  meta: {
    role: string;
    description: string;
    headline: string;
  };
  nav: {
    work: string;
    about: string;
    contact: string;
    hire: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    firstName: string;
    lastName: string;
    availability: string;
    location: string;
    role: string;
    headline: string;
    viewWork: string;
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    allCaseStudies: string;
    viewCaseStudy: string;
    indexEyebrow: string;
    indexTitle: string;
    indexDescription: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: Experience[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: { group: string; items: string[] }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    principles: { title: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    direct: string;
    writeEmail: string;
    copyEmail: string;
    copied: string;
    elsewhere: string;
    based: string;
  };
  caseStudy: {
    label: string;
    role: string;
    company: string;
    status: string;
    live: string;
    overview: string;
    problem: string;
    approach: string;
    outcome: string;
    next: string;
    privateLive: string;
  };
  footer: {
    selectedWork: string;
    email: string;
  };
  notFound: {
    title: string;
    back: string;
  };
  projects: Record<string, ProjectCopy>;
};
