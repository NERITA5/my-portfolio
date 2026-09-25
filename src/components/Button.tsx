import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-navy to-violet text-paper border border-transparent shadow-sm hover:brightness-110 hover:shadow-glow",
  secondary:
    "bg-surface text-navy border border-line hover:border-navy/40 hover:bg-navy-50",
  ghost:
    "bg-transparent text-navy border border-transparent hover:border-navy/20 hover:bg-navy-50",
};

export default function Button({
  href,
  variant = "primary",
  external = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const isExternal = external || href.startsWith("http");
  const content = (
    <span className="inline-flex items-center gap-1.5">
      {children}
      {isExternal && (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          width="13"
          height="13"
          fill="none"
          className="opacity-70"
        >
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );

  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
    variantStyles[variant],
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
