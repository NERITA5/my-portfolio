import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { qaCategories, rentflow } from "@/lib/data";

export default function QASection() {
  return (
    <section id="qa" className="border-y border-line bg-mint-50/50 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          kicker="Quality Engineering"
          title="Quality is part of how I build software"
          description="My QA experience covers manual testing and automation, applied directly to RentFlow, the application I built. It includes functional coverage, API and database checks, access control testing, and automated regression testing wired into CI/CD."
          tone="mint"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qaCategories.map((cat) => (
            <div key={cat.title} className="rounded-xl border border-line bg-paper p-5">
              <h3 className="font-display text-lg text-ink">{cat.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[13.5px] text-ink-soft"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-navy/20 bg-navy-50 p-6">
            <p className="font-mono text-[11px] uppercase tracking-wide text-navy">
              Automation
            </p>
            <p className="mt-2 font-display text-lg text-ink">Selenium + Java</p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
              {rentflow.automationNote}
            </p>
          </div>
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
            <p className="font-mono text-[11px] uppercase tracking-wide text-gold">
              CI/CD
            </p>
            <p className="mt-2 font-display text-lg text-ink">Continuous testing</p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
              {rentflow.cicdNote}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Button href={rentflow.qaRepoUrl} variant="secondary">
            {rentflow.qaRepoLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
