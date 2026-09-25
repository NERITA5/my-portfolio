import SectionHeading from "@/components/SectionHeading";
import { credentials } from "@/lib/data";
import { cn } from "@/lib/utils";

const chipStyles = [
  "border-navy/25 bg-navy-50 text-navy",
  "border-gold/35 bg-gold-50 text-gold",
  "border-mint/30 bg-mint-50 text-mint",
  "border-coral/30 bg-coral-50 text-coral",
];

export default function Credentials() {
  return (
    <section id="credentials" className="section-container py-20 md:py-28">
      <SectionHeading kicker="Credentials" title="Certifications" tone="mint" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((c: any, i: number) => {
          let href = c.url;
          if (!href) {
            const ext = c.issuer === "TestMu AI" ? "png" : "pdf";
            href = `/certificates/${c.slug}.${ext}`;
          }

          return (
            <a
              key={c.issuer + c.title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-line bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-card"
            >
              <div
                className={cn(
                  "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                  chipStyles[i % chipStyles.length]
                )}
              >
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
                  <path
                    d="M10 2l2.163 4.382 4.837.703-3.5 3.412.826 4.815L10 13.05l-4.326 2.262.826-4.815-3.5-3.412 4.837-.703L10 2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] leading-snug text-ink">{c.title}</p>
                <p className="mt-0.5 font-mono text-[11.5px] text-ink-soft">{c.issuer}</p>
                <p className="mt-1.5 inline-flex items-center gap-1 text-[11.5px] font-medium text-navy opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {c.url ? "View online credential" : "View certificate"}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
