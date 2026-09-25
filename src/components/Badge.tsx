import { cn } from "@/lib/utils";

export default function Badge({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "gold";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-tight",
        tone === "default"
          ? "border-line bg-surface text-ink-soft"
          : "border-gold/40 bg-gold/10 text-gold"
      )}
    >
      {children}
    </span>
  );
}
