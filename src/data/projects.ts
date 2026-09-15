export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  company: string;
  cover: string;
  gallery?: string[];
  layout?: "web" | "mobile";
  accent: string;
  href?: string;
  liveLabel?: string;
  featured: boolean;
  stack: string[];
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  sections: { heading: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "savers-club",
    title: "Savers Club",
    subtitle: "Cashback mobile app — offers, hub, and travel",
    year: "Production",
    role: "Senior Frontend Engineer",
    company: "MadRewards / Savers App",
    cover: "/images/savers-club.png",
    gallery: [
      "/images/savers-club-offers.png",
      "/images/savers-club-offer.png",
      "/images/savers-club-hub.png",
    ],
    layout: "mobile",
    accent: "#1d4ed8",
    href: "https://m.saversapp.com",
    liveLabel: "m.saversapp.com",
    featured: true,
    stack: [
      "React Native",
      "Expo / RN Web",
      "TypeScript",
      "TanStack Query",
      "NativeWind",
      "Google Maps",
      "Supercluster",
    ],
    summary:
      "The consumer CLO platform: a native iOS/Android app, a mobile-web twin partners can embed, and an npm SDK that launches encrypted hosted sessions with native bridges for maps, dialer, and travel.",
    problem:
      "Partners needed the same cashback product inside their own apps without rebuilding enrollment, offers, maps, travel, and payouts. Members needed a native-quality experience whether they opened Savers Club directly or a partner shell.",
    approach: [
      "One product model across clo-app (React Native CLI) and m.saversapp.com (Expo + react-native-web), sharing navigation, offer feeds, and map UX.",
      "Nearby offers with Supercluster, custom markers, and haversine distance — list and map stay in lockstep.",
      "Hosted-app session lifecycle: AES-GCM launch payloads, token injection, OAuth/SSO, and a PostMessage contract so native shells can open maps, dial, or end a session.",
      "Travel as a coordinated dual-WebView flow into Traveler Cashback, not a bolted-on iframe.",
    ],
    outcome:
      "A platform surface, not a single app. Partners embed Savers through @savers_app/react-native-sdk; members get maps, biometrics, Branch deep links, donations, and cashback in one family of clients.",
    sections: [
      {
        heading: "Native and hosted, same product",
        body: "clo-app is the flagship SaversClub client: OTP auth, card enrollment, hub, inbox, referrals, Face ID / Touch ID, Vision Camera, Branch attribution, and React Query prefetch so tab switches feel instant. m.saversapp.com is the same CLO experience compiled to the web — Hub, Explore, Offers (list + map), Travel, Cashback, Inbox, Profile — designed to run standalone or inside a partner WebView.",
      },
      {
        heading: "Maps at product scale",
        body: "Offers are a geospatial product. Clustering, custom SVG markers, and radius-aware feeds keep thousands of in-store locations usable. Filters for earn type, distance, sort, and minimum cashback are wired through the live offers API so pagination stays correct on both list and map.",
      },
      {
        heading: "The SDK is the distribution layer",
        body: "hosted-app-react-native-sdk publishes @savers_app/react-native-sdk (and a sandbox twin). HostedAppComponent runs dual WebViews (Hub + Travel), decrypts qP launch payloads, and speaks a typed host protocol: OPEN_MAP, SHOW_DIAL_PAD, END_SESSION, OAuth identifiers, URL regeneration. That contract is what makes white-label distribution possible without forking the product.",
      },
    ],
  },
  {
    slug: "savemate",
    title: "SaveMate",
    subtitle: "White-label online cashback portal",
    year: "Production",
    role: "Senior Frontend Engineer",
    company: "MadRewards",
    cover: "/images/savemate.png",
    accent: "#c9a46c",
    href: "https://savemate.betacbp.savers.club/",
    liveLabel: "SaveMate portal",
    featured: true,
    stack: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "next-pwa",
      "Firebase",
      "MoEngage",
    ],
    summary:
      "A multi-region, multi-language cashback website: merchants, hot deals, VIP rewards, missing-cashback claims, referrals, and tenant branding — all behind geo-aware middleware.",
    problem:
      "Online cashback had to feel like a consumer brand (SaveMate and other white-labels) while remaining one codebase. Visitors arrive from different countries, languages, and partner domains. Auth, claims, and engagement had to survive that.",
    approach: [
      "Next.js App Router with /[region]/[lang] routing and CloudFront country headers mapped to the right market.",
      "White-label via x-appwl: per-brand chrome, configuration, and legal surfaces without a fork per tenant.",
      "Member lifecycle: register, activate, payment methods, transactions, favorites, raffles, refer-a-friend, and missing cashback verification.",
      "PWA + Firebase + MoEngage for installability and lifecycle messaging.",
    ],
    outcome:
      "A production cashback portal that can be re-skinned for partners, geo-routed at the edge, and operated as a PWA — the web counterpart to the CLO mobile stack.",
    sections: [
      {
        heading: "Tenant and geography as architecture",
        body: "Middleware is the product. JWT cookies gate private routes; viewer country selects region and language; white-label headers swap brand identity. That is how one Next.js app serves multiple consumer brands without collapsing into a configuration nightmare.",
      },
      {
        heading: "The shopping loop",
        body: "Merchants, categories, search, hot deals, double cashback, and VIP rewards are the front of the funnel. The back of the funnel is where cashback products usually fail: claims, payment methods, transaction history, and support. Those screens were treated as first-class, not admin afterthoughts.",
      },
    ],
  },
  {
    slug: "partner-platform",
    title: "Partner Platform",
    subtitle: "B2B program portal, admin CMS, and member sites",
    year: "Production",
    role: "Senior Frontend Engineer",
    company: "Savers App Inc.",
    cover: "/images/partner-portal.png",
    gallery: [
      "/images/partner-portal-pricing.png",
      "/images/partner-portal-dashboard.png",
    ],
    accent: "#2563eb",
    featured: true,
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "Stripe",
      "TanStack Query",
      "TipTap",
      "Radix UI",
    ],
    summary:
      "The operator side of the CLO business: partners launch and brand programs, ops run offers and marketing, and members land on tenant-specific marketing sites.",
    problem:
      "A card-linked program is not only a member app. Partners need onboarding, billing, brand kits, reporting, and API keys. Internal teams need CMS-grade control over offers, assets, and permissions. Members need legal and FAQ sites that inherit partner identity.",
    approach: [
      "clo-partner-portal: CRA + TypeScript SaaS — signup, Stripe embedded checkout, program branding (colors, logos, cropper), marketing kits, reporting, invoices, corporate cards, and API keys, with status gates for in-review vs live programs.",
      "clo-admin-portal: Next.js 14 + Radix/shadcn + TipTap + Recharts. Programs, offers, deeplinks, banners, categories, messaging, and RBAC.",
      "clo-customer-portal: multi-domain B2C site that theming itself from org details — FAQ, legal, about, email verification — across *.saversapp.com tenants.",
    ],
    outcome:
      "A full program lifecycle: partner signs up, pays, brands, and goes live; ops publish offers and marketing; members hit a site that already looks like their program.",
    sections: [
      {
        heading: "Partner SaaS, not a dashboard dump",
        body: "The partner portal is a lifecycle product. Inactive, in-review, and active programs see different surfaces. Branding is a cropper-and-tokens problem. Reporting covers customers, transactions, earnings, enrolled cards, and referrals. Payments go through Stripe. That is B2B frontend work with real money and real launch gates.",
      },
      {
        heading: "Admin as a design system",
        body: "The internal Savers Dashboard is a modern operator console: React Query, Zod forms, rich text, charts, and permissioned settings. It exists so marketing and program teams can move without an engineering ticket for every banner.",
      },
      {
        heading: "White-label at the domain layer",
        body: "The customer portal resolves the host, fetches org branding, and paints FAQ, privacy, and RAF terms for that program. Domain redirects keep legacy partner names pointed at the right tenant. One SPA, many brands.",
      },
    ],
  },
  {
    slug: "reach-me",
    title: "Reach Me",
    subtitle: "Two-sided job marketplace for the UAE",
    year: "Product",
    role: "Frontend Engineer",
    company: "Reach Digital Hub",
    cover: "/images/reachme.png",
    gallery: ["/images/reachme-jobs.png"],
    accent: "#c01048",
    featured: true,
    stack: [
      "Next.js 14",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Google Maps",
      "OAuth",
      "Docker",
    ],
    summary:
      "A production job board with two products in one codebase: seekers apply; employers post, shortlist, and run agency/client/outsource workflows — localized for the UAE.",
    problem:
      "Hiring products fail when they treat employers as a CRUD form. Reach Me needed dual personas, a serious posting wizard, applicant pipelines, and UAE-specific signals (nationality, currency, maps, UAE Pass readiness) without splitting into two apps.",
    approach: [
      "App Router split: / for seekers, /employer/* for hiring teams, with middleware on user_type.",
      "Google and LinkedIn OAuth, cookie auth, email verification, and password recovery.",
      "Multi-step job posting (basics, details, requirements, benefits, company, legal) plus applicants, shortlists, public company profiles, clients, and outsourcing.",
      "Maps + geocoding, CMS-backed blog, pricing/checkout UI, Docker multi-env deploys.",
    ],
    outcome:
      "A marketplace with ~48 routes and a deep Redux domain — product breadth that looks like a real hiring company, not a tutorial board.",
    sections: [
      {
        heading: "Two products, one router",
        body: "Role-aware middleware is the spine. Seekers never wander into employer billing; employers never lose their dashboard. Server Actions and revalidatePath keep employer profile and jobs coherent after writes.",
      },
      {
        heading: "Employer operations",
        body: "The posting wizard, applicant review, shortlists, and agency model (clients + outsource partners) are the hard UI. That is where hiring software earns trust — not the landing page.",
      },
    ],
  },
  {
    slug: "makusudi",
    title: "Makusudi",
    subtitle: "Realtime tabletop simulation for defense advisors",
    year: "Product",
    role: "Frontend Engineer",
    company: "Q2 Impact",
    cover: "/images/makusudi.png",
    accent: "#3F5993",
    featured: true,
    stack: [
      "Next.js 14",
      "TypeScript",
      "Firebase",
      "Redux Toolkit",
      "DnD",
      "Recharts",
      "jsPDF",
    ],
    summary:
      "A hex-board exercise for mapping resources and influence onto a partner Ministry of Defense — single-player and multiplayer, with timers, invites, analytics, and PDF debrief.",
    problem:
      "Facilitators were running serious institutional-reform exercises on analog boards. They needed a digital table that preserved the tactile planning model — hexes, cards, hours of influence — and added realtime collaboration plus a debrief artifact.",
    approach: [
      "Custom GameBoard: hex grid, drag-and-drop cards (inputs, outcomes, processing, learning, skills, stakeholders), and influence-hour rules.",
      "Firebase Firestore for sessions, moves, timers, waiting rooms, and badges.",
      "Start-game wizard: scenario, task overview, email invites (Nodemailer), rejoin.",
      "Post-game overview with Recharts analytics and jsPDF / html-to-image export.",
    ],
    outcome:
      "A purpose-built simulation UI — not a dashboard skin. Advisors can run a session, play in realtime, and leave with a PDF the room can actually discuss.",
    sections: [
      {
        heading: "The board is the product",
        body: "The GameBoard module is interaction-heavy by design: hex adjacency, card types, and influence accounting have to feel physical. @hello-pangea/dnd plus a custom grid is the core mechanic, not a widget.",
      },
      {
        heading: "Realtime without losing the debrief",
        body: "Multiplayer is only half. Facilitators need a record. Analytics, badges, and PDF export close the pedagogical loop so the exercise survives after the room empties.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeatured() {
  return projects.filter((project) => project.featured);
}

export function localizeProject(
  project: Project,
  copy?: import("@/i18n/types").ProjectCopy,
): Project {
  if (!copy) return project;
  return {
    ...project,
    title: copy.title,
    subtitle: copy.subtitle,
    role: copy.role,
    year: copy.year,
    summary: copy.summary,
    problem: copy.problem,
    approach: copy.approach,
    outcome: copy.outcome,
    sections: copy.sections,
  };
}
