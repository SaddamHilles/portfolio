import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "project-card group block",
        featured ? "lg:grid lg:grid-cols-12 lg:gap-10 lg:items-end" : "",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.4rem] border border-line bg-bg-elevated",
          featured ? "lg:col-span-8 aspect-[16/10]" : "aspect-[16/10]",
        )}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover"
          sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
        <span
          className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] tracking-[0.16em] text-white/80 uppercase backdrop-blur-md"
          style={{ color: project.accent }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className={cn("mt-5", featured ? "lg:col-span-4 lg:mt-0 lg:pb-2" : "")}>
        <p className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
          {project.company} · {project.year}
        </p>
        <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-ink transition-colors group-hover:text-accent sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-ink-muted">
          {project.subtitle}
        </p>
        <p className="mt-4 text-[12px] tracking-[0.16em] text-accent uppercase">
          View case study →
        </p>
      </div>
    </Link>
  );
}
