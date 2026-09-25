import { skillGroups } from "@/lib/data";

const items = Array.from(new Set(skillGroups.flatMap((g) => g.skills)));
const loop = [...items, ...items];

export default function TechMarquee() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line bg-surface py-4"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
      <div className="marquee-track gap-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap font-mono text-[13px] text-ink-soft"
          >
            <span className="h-1 w-1 rounded-full bg-gold" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
