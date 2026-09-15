import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Skills } from "@/components/Skills";
import { getFeatured, localizeProject } from "@/data/projects";
import { localizedPath, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const t = getDictionary(locale);
  const featured = getFeatured().map((project) =>
    localizeProject(project, t.projects[project.slug]),
  );
  const [lead, ...rest] = featured;

  return (
    <>
      <Hero locale={locale} t={t} />

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={t.work.eyebrow}
              title={t.work.title}
              description={t.work.description}
            />
            <Link
              href={localizedPath(locale, "/work")}
              className="shrink-0 text-[12px] tracking-[0.18em] text-accent uppercase"
            >
              {t.work.allCaseStudies}
            </Link>
          </Reveal>

          {lead ? (
            <Reveal>
              <ProjectCard
                project={lead}
                index={0}
                featured
                locale={locale}
                viewLabel={t.work.viewCaseStudy}
              />
            </Reveal>
          ) : null}

          <div className="mt-16 grid gap-14 md:grid-cols-2">
            {rest.slice(0, 4).map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard
                  project={project}
                  index={index + 1}
                  locale={locale}
                  viewLabel={t.work.viewCaseStudy}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline h-px" />
      <Experience t={t} />
      <div className="hairline h-px" />
      <Skills t={t} />
      <ContactCTA locale={locale} t={t} />
    </>
  );
}
