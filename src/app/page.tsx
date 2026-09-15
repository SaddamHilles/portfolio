import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Skills } from "@/components/Skills";
import { getFeatured } from "@/data/projects";

export default function Home() {
  const featured = getFeatured();
  const [lead, ...rest] = featured;

  return (
    <>
      <Hero />

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Products that have to work in production"
              description="Card-linked offers, white-label cashback, partner SaaS, a job marketplace, and a defense tabletop — shipped as real interfaces, not demos."
            />
            <Link
              href="/work"
              className="shrink-0 text-[12px] tracking-[0.18em] text-accent uppercase"
            >
              All case studies →
            </Link>
          </Reveal>

          {lead ? (
            <Reveal>
              <ProjectCard project={lead} index={0} featured />
            </Reveal>
          ) : null}

          <div className="mt-16 grid gap-14 md:grid-cols-2">
            {rest.slice(0, 4).map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard project={project} index={index + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline h-px" />
      <Experience />
      <div className="hairline h-px" />
      <Skills />
      <ContactCTA />
    </>
  );
}
