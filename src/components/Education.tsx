import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-container py-20 md:py-28">
      <SectionHeading kicker="Education" title="University of Buea" tone="coral" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
          <p className="font-display text-xl text-ink">{education.degree}</p>
          <p className="mt-1 text-[14px] text-ink-soft">{education.school}</p>
          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-5">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft/70">
                Period
              </p>
              <p className="mt-1 text-[14px] text-ink">{education.period}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft/70">
                GPA
              </p>
              <p className="mt-1 text-[14px] text-ink">{education.gpa}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft/70">
                Languages
              </p>
              <p className="mt-1 text-[14px] text-ink">
                {education.languages.join(" & ")}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-line pt-5">
            <p className="font-mono text-[11px] uppercase tracking-wide text-gold">
              Dissertation
            </p>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">
              {education.dissertation.title}
            </p>
            <p className="mt-2 text-[13px] text-ink-soft/80">
              Supervised by {education.dissertation.supervisor} ·{" "}
              {education.dissertation.year}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-[12px] text-ink-soft">
            University photo gallery
          </p>
          <Gallery />
        </div>
      </div>
    </section>
  );
}
