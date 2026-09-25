"use client";

import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/data";
import SmartImage from "@/components/SmartImage";
import { cn } from "@/lib/utils";

function GalleryImage({ id, className }: { id: string; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-navy-50", className)}>
      <SmartImage
        src={`/images/university/${id}.jpg`}
        alt=""
        label={`${id}.jpg not added yet`}
      />
    </div>
  );
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {galleryImages.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group text-left"
          >
            <GalleryImage id={img.id} className="aspect-[4/3] w-full" />
            <p className="mt-2 text-[13px] text-ink-soft">{img.caption}</p>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute right-5 top-5 text-2xl text-paper/80 hover:text-paper"
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) =>
                i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
              );
            }}
            className="absolute left-4 text-3xl text-paper/70 hover:text-paper md:left-8"
          >
            ‹
          </button>

          <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <GalleryImage
              id={galleryImages[openIndex].id}
              className="aspect-[4/3] w-full bg-paper"
            />
            <p className="mt-3 text-center text-sm text-paper/80">
              {galleryImages[openIndex].caption}
            </p>
          </div>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
            }}
            className="absolute right-4 text-3xl text-paper/70 hover:text-paper md:right-8"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}