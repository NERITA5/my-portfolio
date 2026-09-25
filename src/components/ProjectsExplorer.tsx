"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import RentFlowShowcase from "@/components/RentFlowShowcase";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "full-stack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "QA / Testing", value: "qa" },
  { label: "Blockchain", value: "blockchain" },
];

export default function ProjectsExplorer() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const showRentFlow = active === "all" || active === "full-stack" || active === "qa";
  const otherFiltered = projects
    .filter((p) => p.slug !== "rentflow")
    .filter((p) => active === "all" || p.categories.includes(active));

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
            className={cn(
              "rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors duration-200",
              active === f.value
                ? "border-navy bg-navy text-paper"
                : "border-line bg-surface text-ink-soft hover:border-navy/40 hover:text-ink"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-8">
        {showRentFlow && <RentFlowShowcase />}

        {otherFiltered.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {otherFiltered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}

        {!showRentFlow && otherFiltered.length === 0 && (
          <p className="py-12 text-center text-sm text-ink-soft">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
