import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { Reveal } from "@/components/Reveal";
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
    title: t.about.eyebrow,
    description: t.meta.description,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const t = getDictionary(locale);

  return (
    <>
      <div className="px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
              {t.about.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
              {t.about.title}
            </h1>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-lg leading-8 text-ink-muted">{t.about.p1}</p>
              <p className="mt-6 text-lg leading-8 text-ink-muted">{t.about.p2}</p>
              <p className="mt-6 text-lg leading-8 text-ink-muted">{t.about.p3}</p>
            </Reveal>

            <div className="space-y-8 lg:col-span-7">
              {t.about.principles.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                  className="rounded-[1.4rem] border border-line bg-bg-elevated p-8"
                >
                  <p className="font-mono text-[12px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl text-ink">{item.title}</h2>
                  <p className="mt-3 text-[16px] leading-7 text-ink-muted">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactCTA locale={locale} t={t} />
    </>
  );
}
