import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import type { Dictionary, ProjectCopy } from "@/i18n/types";

function toCopy(): Record<string, ProjectCopy> {
  return Object.fromEntries(
    projects.map((project) => [
      project.slug,
      {
        title: project.title,
        subtitle: project.subtitle,
        role: project.role,
        year: project.year,
        summary: project.summary,
        problem: project.problem,
        approach: project.approach,
        outcome: project.outcome,
        sections: project.sections,
        livePrivate: "Private / partner-gated",
      },
    ]),
  );
}

export const en: Dictionary = {
  meta: {
    role: "Senior Frontend Engineer",
    description:
      "Senior frontend engineer at MadRewards / Savers App. I own product surfaces end to end: white-label cashback, card-linked offers, partner SaaS, and the hosted web layer that partner apps embed.",
    headline:
      "I design and ship the interfaces that members, partners, and operators actually use — across web, mobile, and hosted platform surfaces.",
  },
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
    hire: "Hire me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    firstName: "Saddam",
    lastName: "Hilles",
    availability: "Open to senior frontend roles",
    location: "Palestine",
    role: "Senior Frontend Engineer",
    headline:
      "I design and ship the interfaces that members, partners, and operators actually use — across web, mobile, and hosted platform surfaces.",
    viewWork: "View selected work",
  },
  work: {
    eyebrow: "Selected work",
    title: "Products that have to work in production",
    description:
      "Card-linked offers, white-label cashback, partner SaaS, a job marketplace, and a defense tabletop — shipped as real interfaces, not demos.",
    allCaseStudies: "All case studies",
    viewCaseStudy: "View case study",
    indexEyebrow: "Index",
    indexTitle: "Selected work",
    indexDescription:
      "Five products. One through-line: interfaces for platforms that have members, partners, and operators — not just screens.",
  },
  experience: {
    eyebrow: "Experience",
    title: "Where the work happened",
    description:
      "Platforms with real members, real partners, and real money moving through the interface.",
    items: experience,
  },
  skills: {
    eyebrow: "Capabilities",
    title: "A senior frontend toolkit",
    description:
      "Not a logo wall. The systems I actually ship with — interfaces, data, tenancy, and craft.",
    groups: skills.map((group) => ({
      group: group.group,
      items: [...group.items],
    })),
  },
  cta: {
    eyebrow: "Next",
    title: "Let’s build the surface people actually keep.",
    body: "I am looking for senior frontend work on products with real complexity — platforms, marketplaces, and systems that have to hold up in production.",
    button: "Start a conversation",
  },
  about: {
    eyebrow: "About",
    title: "I build frontend for products that already have gravity.",
    p1: "I am Saddam Hilles, a senior frontend engineer based in Palestine. I currently work at MadRewards / Savers App on the Savers Club ecosystem — native, hosted web, partner portals, and the SDK that lets other apps embed the same product.",
    p2: "Before that I shipped Reach Me, a two-sided job marketplace for Reach Digital Hub, and Makusudi, a realtime hex-board simulation for Q2 Impact. Earlier in my career I helped computerize educational curricula at the Ministry of Education.",
    p3: "I care about TypeScript, design systems, and the unglamorous paths: enrollment, payouts, permissions, empty states, and the moment a partner goes live.",
    principles: [
      {
        title: "The interface is the product",
        body: "Cashback, hiring, and simulation products fail in the last mile — maps that stutter, claims that confuse, wizards that stall. I treat those surfaces as the business, not decoration on an API.",
      },
      {
        title: "One system, many skins",
        body: "White-label is an architecture problem. Tenants, regions, partner shells, and hosted WebViews have to share a product model or you will ship five apps that drift apart.",
      },
      {
        title: "Senior means owning the edges",
        body: "Auth, session expiry, SDK contracts, Stripe gates, RBAC, and deep links are where frontend work becomes platform work. That is the work I want.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell me what you are building.",
    body: "Best fit: senior frontend roles on product platforms — marketplaces, fintech-adjacent consumer apps, partner portals, and design systems that have to last.",
    direct: "Direct",
    writeEmail: "Write an email",
    copyEmail: "Copy email",
    copied: "Copied",
    elsewhere: "Elsewhere",
    based: "Based in Palestine. I work remotely with product and platform teams.",
  },
  caseStudy: {
    label: "Case study",
    role: "Role",
    company: "Company",
    status: "Status",
    live: "Live",
    overview: "Overview",
    problem: "The problem",
    approach: "Approach",
    outcome: "Outcome",
    next: "Next case study",
    privateLive: "Private / partner-gated",
  },
  footer: {
    selectedWork: "Selected work",
    email: "Email",
  },
  notFound: {
    title: "This page is not in the index.",
    back: "Back home",
  },
  projects: toCopy(),
};
