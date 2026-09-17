import type { Metadata } from "next";
import { CopyEmail } from "@/components/CopyEmail";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return {
    title: t.contact.eyebrow,
    description: `${t.contact.title} ${site.email}`,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const t = getDictionary(locale);

  return (
    <div className="px-5 pt-28 pb-28 sm:px-8 sm:pt-36 sm:pb-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
            {t.contact.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            {t.contact.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-muted">
            {t.contact.body}
          </p>
        </Reveal>

        <Reveal className="mt-16 grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line lg:grid-cols-2">
          <div className="bg-bg-elevated p-8 sm:p-12">
            <p className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
              {t.contact.direct}
            </p>
            <a
              href={site.social.email}
              className="mt-4 block font-serif text-3xl text-ink hover:text-accent sm:text-4xl"
            >
              {site.email}
            </a>
            <div className="btn-pair mt-8">
              <a href={site.social.email} className="btn-solid">
                {t.contact.writeEmail}
              </a>
              <CopyEmail
                copyLabel={t.contact.copyEmail}
                copiedLabel={t.contact.copied}
              />
            </div>
          </div>

          <div className="bg-bg-elevated p-8 sm:p-12">
            <p className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
              {t.contact.elsewhere}
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
                {t.contact.based}
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
