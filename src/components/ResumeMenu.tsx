"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline";

export default function ResumeMenu({
  variant = "outline",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200",
          variant === "solid"
            ? "border border-transparent bg-gradient-to-r from-navy to-violet text-paper shadow-sm hover:brightness-110 hover:shadow-glow"
            : "border border-navy/30 text-navy hover:border-navy hover:bg-navy-50"
        )}
      >
        Download Resume
        <svg
          aria-hidden="true"
          viewBox="0 0 12 8"
          width="10"
          height="7"
          fill="none"
          className={cn("transition-transform duration-200", open && "rotate-180")}
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-56 overflow-hidden rounded-xl border border-line bg-surface shadow-card-hover">
          <a
            href={profile.resumeDevPath}
            download
            className="flex items-center gap-2.5 border-b border-line px-4 py-3 text-[13.5px] text-ink transition-colors hover:bg-navy-50"
            onClick={() => setOpen(false)}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
            <span>
              Developer Resume
              <span className="block text-[11px] text-ink-soft">Full-stack focus</span>
            </span>
          </a>
          <a
            href={profile.resumeQaPath}
            download
            className="flex items-center gap-2.5 px-4 py-3 text-[13.5px] text-ink transition-colors hover:bg-mint-50"
            onClick={() => setOpen(false)}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            <span>
              QA Resume
              <span className="block text-[11px] text-ink-soft">Testing & automation focus</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}