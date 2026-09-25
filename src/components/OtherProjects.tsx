import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import SmartImage from "@/components/SmartImage";

import { otherProjects } from "@/lib/data";

export default function OtherProjects() {
  return (
    <section className="section-container py-20 md:py-28">
      <SectionHeading kicker="Other Projects" title="Smaller builds along the way" tone="navy" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {otherProjects.map((p) => (
          <div
            key={p.slug}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow duration-300 hover:shadow-card-hover"
          >
            {p.image && (
              <div className="aspect-[16/10] w-full border-b border-line bg-navy-50">
                <SmartImage
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  label={`${p.name} screenshot not added yet`}
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-lg text-ink">{p.name}</h3>
            <p className="mt-1 text-[12.5px] text-ink-soft">{p.subtitle}</p>
            <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-soft">
              {p.description}
            </p>
            {p.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            )}
            <div className="mt-4 border-t border-line pt-3 text-[12.5px]">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy underline decoration-line decoration-1 underline-offset-4 hover:decoration-gold"
                >
                  Visit site
                </a>
              )}
              {p.repoStatus === "academic" && (
                <span className="text-ink-soft/70">
                  Academic Project, Source Code Not Public
                </span>
              )}
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
