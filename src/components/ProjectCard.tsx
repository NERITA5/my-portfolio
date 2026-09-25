import Badge from "@/components/Badge";
import SmartImage from "@/components/SmartImage";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300",
        "hover:-translate-y-1 hover:border-navy/20 hover:shadow-card-hover"
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-navy via-gold to-mint transition-transform duration-300 group-hover:scale-x-100"
      />

      {project.image && (
        <div className="aspect-[16/10] w-full rounded-t-2xl border-b border-line bg-navy-50">
          <SmartImage
            src={project.image}
            alt={`${project.name} screenshot`}
            label={`${project.name} screenshot not added yet`}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl text-ink">{project.name}</h3>
        {project.repoStatus === "private" && (
          <span className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft">
            Private
          </span>
        )}
        {project.repoStatus === "academic" && (
          <span className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-navy/20 bg-navy-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-navy">
            Academic
          </span>
        )}
      </div>
      <p className="mt-1 text-[13px] text-ink-soft">{project.subtitle}</p>
      <p className="mt-4 flex-1 text-[14px] leading-relaxed text-ink-soft">
        {project.description}
      </p>

      {project.tech.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4 text-[13px]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-navy to-violet px-3.5 py-1.5 text-[12.5px] font-medium text-paper transition-all hover:brightness-110"
          >
            Live Demo
            <span aria-hidden="true">→</span>
          </a>
        )}
        {project.repoUrl && project.repoStatus === "public" && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-[12.5px] font-medium text-navy transition-colors hover:border-navy/40 hover:bg-navy-50"
          >
            GitHub
          </a>
        )}
        {project.repoStatus === "private" && (
          <span className="text-ink-soft/70">Private Repository</span>
        )}
        {project.repoStatus === "academic" && (
          <span className="text-ink-soft/70">Source Code Not Public</span>
        )}
      </div>
      </div>
    </article>
  );
}
