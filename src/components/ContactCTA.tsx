import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] border border-line bg-bg-elevated px-8 py-16 sm:px-16 sm:py-24">
        <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
          Next
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-ink sm:text-6xl">
          Let’s build the surface people actually keep.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink-muted">
          I am looking for senior frontend work on products with real complexity —
          platforms, marketplaces, and systems that have to hold up in production.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-solid">
            Start a conversation
          </Link>
          <a
            href={site.social.email}
            className="rounded-full border border-line-strong px-6 py-3 text-[13px] tracking-[0.14em] text-ink-muted uppercase transition-colors hover:text-ink"
          >
            {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
