import { rentflow } from "@/lib/data";
import { cn } from "@/lib/utils";

const stageColor = [
  { dot: "bg-navy", ring: "ring-navy/20", text: "text-navy" },
  { dot: "bg-coral", ring: "ring-coral/20", text: "text-coral" },
  { dot: "bg-gold", ring: "ring-gold/20", text: "text-gold" },
  { dot: "bg-mint", ring: "ring-mint/20", text: "text-mint" },
  { dot: "bg-navy", ring: "ring-navy/20", text: "text-navy" },
];

export default function BuildFlow({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-navy via-gold to-mint opacity-30 sm:block"
      />
      <div
        className={
          compact
            ? "relative grid grid-cols-2 gap-3 sm:grid-cols-5"
            : "relative grid grid-cols-1 gap-4 sm:grid-cols-5"
        }
      >
        {rentflow.buildFlow.map((stage, i) => {
          const c = stageColor[i % stageColor.length];
          return (
            <div key={stage.stage} className="relative">
              <div
                className={cn(
                  "mb-3 hidden h-2.5 w-2.5 rounded-full ring-4 sm:block",
                  c.dot,
                  c.ring
                )}
              />
              <div className="rounded-xl border border-line bg-surface p-4 transition-shadow hover:shadow-card">
                <p className={cn("font-mono text-[10px] uppercase tracking-wide", c.text)}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1.5 font-display text-base text-ink">
                  {stage.stage}
                </p>
                <ul className="mt-2 space-y-0.5">
                  {stage.items.map((item) => (
                    <li key={item} className="text-[12px] leading-snug text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
