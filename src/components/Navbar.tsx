"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, profile } from "@/lib/data";
import ResumeMenu from "@/components/ResumeMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-paper/90 backdrop-blur-sm"
          : "border-transparent bg-paper/0"
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <Link
          href="#top"
          className="font-display text-lg text-ink"
          aria-label={`${profile.name}, Home`}
        >
          Ketty Nerita
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative py-1 text-[13.5px] transition-colors",
                  active === link.href ? "text-ink" : "text-ink-soft hover:text-ink"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-[1px] left-0 h-[1.5px] bg-gold transition-all duration-300",
                    active === link.href ? "w-full" : "w-0"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ResumeMenu variant="outline" />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300",
                open ? "top-[7px] rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-[1.5px] w-5 bg-ink transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300",
                open ? "top-[7px] -rotate-45" : "top-[14px]"
              )}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-paper md:hidden">
          <ul className="section-container flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 font-display text-xl text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-ink-soft/70">
                Download Resume
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={profile.resumeDevPath}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy to-violet px-5 py-3 text-sm font-medium text-paper shadow-sm"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-paper" />
                  Developer Resume
                </a>
                <a
                  href={profile.resumeQaPath}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint-50 px-5 py-3 text-sm font-medium text-mint"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  QA Resume
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}