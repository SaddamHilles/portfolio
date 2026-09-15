export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "MadRewards / Savers App",
    role: "Senior Frontend Engineer",
    period: "Present",
    location: "Remote",
    summary:
      "I ship the consumer, partner, and hosted surfaces of a card-linked offers platform — the same product family that powers Savers Club, SaveMate, and white-label partner programs.",
    highlights: [
      "Built and evolved the native Savers Club app and the hosted React Native Web experience at m.saversapp.com, including map clustering, session bridges, and travel SSO.",
      "Shipped the white-label SaveMate cashback portal: geo-aware routing, multi-tenant branding, PWA, and the full member journey from discovery to claims.",
      "Owned partner and operator tooling — Stripe-backed program onboarding, brand kits, reporting, RBAC, and a TipTap-powered admin CMS.",
    ],
  },
  {
    company: "Reach Digital Hub",
    role: "Frontend Engineer",
    period: "Product engagement",
    location: "Remote · UAE market",
    summary:
      "Core frontend on Reach Me, a two-sided job marketplace for seekers and employers in the UAE.",
    highlights: [
      "Implemented dual-persona App Router architecture with role-aware middleware, OAuth (Google + LinkedIn), and Google Maps geocoding.",
      "Built the employer operating surface: multi-step job posting, applicant review, shortlists, agency clients, and outsourcing flows.",
    ],
  },
  {
    company: "Q2 Impact",
    role: "Frontend Engineer",
    period: "Product engagement",
    location: "Remote",
    summary:
      "Led frontend on Makusudi, a digital tabletop exercise used by defense advisors to plan Ministry of Defense reform.",
    highlights: [
      "Designed a hex-board simulation with drag-and-drop resources, influence-hour logic, and Firebase realtime multiplayer.",
      "Closed the loop with session analytics, badges, and PDF debrief export for facilitators.",
    ],
  },
  {
    company: "Ministry of Education",
    role: "Software Developer",
    period: "2012 — 2014",
    location: "Palestine",
    summary:
      "Worked on a team computerizing educational curricula — early product work that still informs how I think about software for real institutions.",
    highlights: [],
  },
];
