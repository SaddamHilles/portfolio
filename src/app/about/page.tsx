import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: site.summary,
};

const principles = [
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
];

export default function AboutPage() {
  return (
    <>
      <div className="px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
              About
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
              I build frontend for products that already have gravity.
            </h1>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-lg leading-8 text-ink-muted">
                I am {site.name}, a {site.role.toLowerCase()} based in{" "}
                {site.location}. I currently work at MadRewards / Savers App on
                the Savers Club ecosystem — native, hosted web, partner portals,
                and the SDK that lets other apps embed the same product.
              </p>
              <p className="mt-6 text-lg leading-8 text-ink-muted">
                Before that I shipped Reach Me, a two-sided job marketplace for
                Reach Digital Hub, and Makusudi, a realtime hex-board simulation
                for Q2 Impact. Earlier in my career I helped computerize
                educational curricula at the Ministry of Education.
              </p>
              <p className="mt-6 text-lg leading-8 text-ink-muted">
                I care about TypeScript, design systems, and the unglamorous
                paths: enrollment, payouts, permissions, empty states, and the
                moment a partner goes live.
              </p>
            </Reveal>

            <div className="space-y-8 lg:col-span-7">
              {principles.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                  className="rounded-[1.4rem] border border-line bg-bg-elevated p-8"
                >
                  <p className="font-mono text-[12px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-7 text-ink-muted">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactCTA />
    </>
  );
}
