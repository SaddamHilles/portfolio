import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function ContactCTA({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] border border-line bg-bg-elevated px-8 py-16 sm:px-16 sm:py-24">
        <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
          {t.cta.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.15] text-ink sm:text-6xl">
          {t.cta.title}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink-muted">{t.cta.body}</p>
        <div className="btn-pair mt-10">
          <Link href={localizedPath(locale, "/contact")} className="btn-solid">
            {t.cta.button}
          </Link>
          <a href={site.social.email} className="btn-outline">
            {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
