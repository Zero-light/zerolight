import Link from "next/link";
import type { Project } from "@/lib/projects";
import ProjectVisual from "./project-visual";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="glass glass-hover block overflow-hidden rounded-2xl"
    >
      <ProjectVisual project={project} />
      <div className="p-6 md:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-medium tracking-tight text-ink">
            {project.title}
          </h3>
          <span className="num-label shrink-0">{project.index}</span>
        </div>
        <p className="mt-2 text-[13px] text-faint">{project.field}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-muted">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}
