import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-navy-50 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-mint/10 blur-3xl"
      />
      <div className="section-container relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="flex items-center gap-2 font-mono text-[13px] text-navy">
              <span className="h-1.5 w-4 rounded-full bg-navy" />
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink text-balance md:text-4xl">
              Open to full-stack, frontend, backend, and QA / software testing roles.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">
              Based in {profile.location}. The fastest way to reach me is email.
              I'll get back to you as soon as I can.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-transparent bg-gradient-to-r from-navy to-violet px-5 py-2.5 text-sm font-medium text-paper shadow-sm transition-all hover:brightness-110 hover:shadow-glow"
              >
                Email Me
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-navy/25 bg-surface px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy/50"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-navy/25 bg-surface px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy/50"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft/70">
              Direct
            </p>
            <p className="mt-2 break-all text-[15px] text-ink">{profile.email}</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-ink-soft/70">
              Location
            </p>
            <p className="mt-2 text-[15px] text-ink">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
