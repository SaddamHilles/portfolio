import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCTA } from "@/components/ContactCTA";
import { PhoneGrid, PhoneStrip } from "@/components/PhoneStrip";
import { Reveal } from "@/components/Reveal";
import { getProject, localizeProject, projects } from "@/data/projects";
import { locales, localizedPath, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type WorkParams = { locale: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = getDictionary(locale);
  const base = getProject(slug);
  if (!base) return {};
  const project = localizeProject(base, t.projects[slug]);
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<WorkParams>;
}) {
  const { locale: raw, slug } = await params;
  const locale = resolveLocale(raw);
  const t = getDictionary(locale);
  const base = getProject(slug);
  if (!base || !t.projects[slug]) notFound();

  const localized = projects.map((project) =>
    localizeProject(project, t.projects[project.slug]),
  );
  const project = localized.find((item) => item.slug === slug);
  if (!project) notFound();

  const next =
    localized[(localized.findIndex((item) => item.slug === slug) + 1) % localized.length];

  return (
    <article>
      <header className="px-5 pt-28 pb-12 sm:px-8 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase animate-rise">
            {t.caseStudy.label} · {project.company}
          </p>
          <h1
            className="mt-4 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl animate-rise"
            style={{ animationDelay: "80ms" }}
          >
            {project.title}
          </h1>
          <p
            className="mt-5 max-w-2xl text-xl leading-8 text-ink-muted animate-rise"
            style={{ animationDelay: "160ms" }}
          >
            {project.subtitle}
          </p>

          <dl
            className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-4 animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            <div>
              <dt className="text-[11px] tracking-[0.18em] text-ink-faint uppercase">
                {t.caseStudy.role}
              </dt>
              <dd className="mt-2 text-sm text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.18em] text-ink-faint uppercase">
                {t.caseStudy.company}
              </dt>
              <dd className="mt-2 text-sm text-ink">{project.company}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.18em] text-ink-faint uppercase">
                {t.caseStudy.status}
              </dt>
              <dd className="mt-2 text-sm text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.18em] text-ink-faint uppercase">
                {t.caseStudy.live}
              </dt>
              <dd className="mt-2 text-sm text-ink">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-line-strong underline-offset-4 hover:text-accent"
                  >
                    {project.liveLabel ?? t.caseStudy.live}
                  </a>
                ) : (
                  t.caseStudy.privateLive
                )}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="px-5 sm:px-8">
        {project.layout === "mobile" ? (
          <div className="relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden rounded-[1.6rem] border border-line bg-bg-elevated">
            <PhoneStrip
              images={[project.cover, ...(project.gallery ?? [])]}
              alt={project.title}
            />
          </div>
        ) : (
          <div className="relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden rounded-[1.6rem] border border-line">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </div>
        )}
      </div>

      <div className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.2em] text-accent uppercase">
              {t.caseStudy.overview}
            </p>
            <p className="mt-4 text-lg leading-8 text-ink">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line-strong px-3 py-1 text-[12px] text-ink-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="space-y-14 lg:col-span-8">
            <Reveal>
              <h2 className="font-serif text-3xl text-ink">{t.caseStudy.problem}</h2>
              <p className="mt-4 text-[17px] leading-8 text-ink-muted">
                {project.problem}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-3xl text-ink">{t.caseStudy.approach}</h2>
              <ol className="mt-6 space-y-4">
                {project.approach.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-mono text-[12px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[17px] leading-8 text-ink-muted">{item}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-3xl text-ink">{t.caseStudy.outcome}</h2>
              <p className="mt-4 text-[17px] leading-8 text-ink-muted">
                {project.outcome}
              </p>
            </Reveal>

            {project.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="font-serif text-3xl text-ink">{section.heading}</h2>
                <p className="mt-4 text-[17px] leading-8 text-ink-muted">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <div className="px-5 pb-16 sm:px-8">
          <Reveal className="mx-auto max-w-7xl">
            {project.layout === "mobile" ? (
              <PhoneGrid
                images={[project.cover, ...project.gallery]}
                alt={project.title}
              />
            ) : (
              <div className="grid gap-6">
                {project.gallery.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[16/9] overflow-hidden rounded-[1.4rem] border border-line bg-bg-elevated"
                  >
                    <Image
                      src={src}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="100vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      ) : null}

      <div className="px-5 pb-8 sm:px-8">
        <Link
          href={localizedPath(locale, `/work/${next.slug}`)}
          className="group mx-auto flex max-w-7xl items-end justify-between gap-6 rounded-[1.6rem] border border-line bg-bg-elevated px-8 py-10 transition-colors hover:border-accent sm:px-12"
        >
          <div>
            <p className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
              {t.caseStudy.next}
            </p>
            <p className="mt-3 font-serif text-4xl text-ink group-hover:text-accent">
              {next.title}
            </p>
            <p className="mt-2 text-ink-muted">{next.subtitle}</p>
          </div>
          <span className="hidden text-accent sm:block rtl:rotate-180">→</span>
        </Link>
      </div>

      <ContactCTA locale={locale} t={t} />
    </article>
  );
}
