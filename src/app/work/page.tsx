import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies: Savers Club, SaveMate, Partner Platform, Reach Me, and Makusudi.",
};

export default function WorkPage() {
  return (
    <div className="px-5 pt-28 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
            Index
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Selected work
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            Five products. One through-line: interfaces for platforms that have
            members, partners, and operators — not just screens.
          </p>
        </Reveal>

        <div className="mt-20 space-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <ProjectCard
                project={project}
                index={index}
                featured={index === 0}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
