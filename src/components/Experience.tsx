import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-20 md:py-28">
      <SectionHeading kicker="Experience" title="Where I've worked" tone="navy" />
      <div className="space-y-6">
        {experience.map((job) => (
          <div
            key={job.company}
            className="rounded-2xl border border-line bg-surface p-6 md:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl text-ink">
                {job.role} · {job.company}
              </h3>
              <span className="font-mono text-[12px] text-ink-soft">
                {job.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {job.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[14.5px] leading-relaxed text-ink-soft"
                >
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {job.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
