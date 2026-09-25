import Badge from "@/components/Badge";
import Button from "@/components/Button";
import BuildFlow from "@/components/BuildFlow";
import SmartImage from "@/components/SmartImage";
import { rentflow } from "@/lib/data";

export default function RentFlowShowcase() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-card md:p-10">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-navy via-gold to-mint"
      />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-[12px] text-gold">Central Case Study</p>
          <h3 className="mt-2 font-display text-3xl text-ink md:text-4xl">
            {rentflow.name}
          </h3>
          <p className="mt-1 text-[15px] text-ink-soft">{rentflow.subtitle}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            {rentflow.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {rentflow.devTech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={rentflow.liveUrl} variant="primary">
              View Live Application
            </Button>
            <Button href={rentflow.devRepoUrl} variant="secondary">
              {rentflow.devRepoLabel}
            </Button>
            <Button href={rentflow.qaRepoUrl} variant="secondary">
              {rentflow.qaRepoLabel}
            </Button>
          </div>

          <a
            href="/projects/rentflow"
            className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-navy underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-gold"
          >
            Read the full case study
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="flex flex-col gap-5">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-navy-50">
            <SmartImage
              src={rentflow.image}
              alt="RentFlow application screenshot"
              label="RentFlow screenshot not added yet"
            />
          </div>
          <div className="rounded-xl border border-line bg-paper p-5">
            <p className="font-display text-lg text-ink">Two workstreams, one application</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-navy/20 bg-navy-50 p-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-navy">
                  Development
                </p>
                <p className="mt-1 text-[13px] text-ink-soft">
                  Built the application: architecture, data model, and UI.
                </p>
              </div>
              <div className="rounded-lg border border-gold/30 bg-gold/5 p-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-gold">
                  Quality Engineering
                </p>
                <p className="mt-1 text-[13px] text-ink-soft">
                  Tested, automated, and validated the application independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <BuildFlow compact />
      </div>
    </div>
  );
}
