import { cn } from "@/lib/utils";

type Tone = "gold" | "navy" | "mint" | "coral";

const toneClass: Record<Tone, string> = {
  gold: "text-gold",
  navy: "text-navy",
  mint: "text-mint",
  coral: "text-coral",
};

export default function SectionHeading({
  title,
  kicker,
  description,
  tone = "gold",
}: {
  title: string;
  kicker?: string;
  description?: string;
  tone?: Tone;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      {kicker && (
        <p className={cn("mb-3 flex items-center gap-2 font-mono text-[13px]", toneClass[tone])}>
          <span
            className={cn(
              "h-1.5 w-4 rounded-full",
              tone === "gold" && "bg-gold",
              tone === "navy" && "bg-navy",
              tone === "mint" && "bg-mint",
              tone === "coral" && "bg-coral"
            )}
          />
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
  );
}
