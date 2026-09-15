import type { Metadata } from "next";
import { CopyEmail } from "@/components/CopyEmail";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Write to ${site.name} at ${site.email}.`,
};

export default function ContactPage() {
  return (
    <div className="px-5 pt-28 pb-28 sm:px-8 sm:pt-36 sm:pb-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
            Contact
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Tell me what you are building.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-muted">
            Best fit: senior frontend roles on product platforms — marketplaces,
            fintech-adjacent consumer apps, partner portals, and design systems
            that have to last.
          </p>
        </Reveal>

        <Reveal className="mt-16 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line lg:grid-cols-2">
          <div className="bg-bg-elevated p-8 sm:p-12">
            <p className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
              Direct
            </p>
            <a
              href={site.social.email}
              className="mt-4 block font-serif text-3xl text-ink hover:text-accent sm:text-4xl"
            >
              {site.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.social.email}
                className="rounded-full bg-ink px-6 py-3 text-[13px] tracking-[0.14em] text-inverse uppercase transition-colors hover:bg-accent"
              >
                Write an email
              </a>
              <CopyEmail />
            </div>
          </div>

          <div className="bg-bg-elevated p-8 sm:p-12">
            <p className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
              Elsewhere
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-line pb-4"
                >
                  <span>
                    <span className="block text-sm text-ink-faint">GitHub</span>
                    <span className="font-serif text-2xl text-ink group-hover:text-accent">
                      @SaddamHelles
                    </span>
                  </span>
                  <span className="text-accent">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={site.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-line pb-4"
                >
                  <span>
                    <span className="block text-sm text-ink-faint">Twitter</span>
                    <span className="font-serif text-2xl text-ink group-hover:text-accent">
                      @SaddamHelles
                    </span>
                  </span>
                  <span className="text-accent">↗</span>
                </a>
              </li>
              <li className="pt-2 text-sm leading-6 text-ink-muted">
                Based in {site.location}. I work remotely with product and
                platform teams.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
