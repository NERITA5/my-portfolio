import Button from "@/components/Button";
import SmartImage from "@/components/SmartImage";
import ResumeMenu from "@/components/ResumeMenu";
import { heroIntro, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-40 h-56 w-56 rounded-full bg-gold/[0.08] blur-3xl"
      />

      <div className="section-container relative pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_0.9fr] md:items-end">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy-50 px-3 py-1 font-mono text-[12.5px] text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {profile.location}
            </p>
            <h1 className="font-display text-4xl leading-[1.05] text-ink text-balance sm:text-6xl md:text-[4.2rem]">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft md:text-lg">
              {profile.role}
            </p>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
              {heroIntro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href="#qa" variant="secondary">
                QA &amp; Testing
              </Button>
              <ResumeMenu variant="outline" />
            </div>

            <div className="mt-8 flex items-center gap-5 text-sm text-ink-soft">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
              >
                GitHub
              </a>
              <span className="text-line">/</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="relative flex aspect-[4/5] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface shadow-card md:w-64">
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-16 w-16 animate-float rounded-full bg-gold/15"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-navy/[0.07]"
              />
              <div className="relative h-full w-full">
                <SmartImage
                  src={profile.image}
                  alt={profile.name}
                  label="Portrait not added yet"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}