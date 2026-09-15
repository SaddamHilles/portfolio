import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { localizeProject, projects } from "@/data/projects";
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
    title: t.work.indexTitle,
    description: t.work.indexDescription,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const t = getDictionary(locale);
  const items = projects.map((project) =>
    localizeProject(project, t.projects[project.slug]),
  );

  return (
    <div className="px-5 pt-28 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
            {t.work.indexEyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            {t.work.indexTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            {t.work.indexDescription}
          </p>
        </Reveal>

        <div className="mt-20 space-y-20">
          {items.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <ProjectCard
                project={project}
                index={index}
                featured={index === 0}
                locale={locale}
                viewLabel={t.work.viewCaseStudy}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
