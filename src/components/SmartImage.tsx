"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SmartImage({
  src,
  alt,
  className,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-navy-50",
          className
        )}
      >
        <p className="px-3 text-center font-mono text-[10px] text-navy/50">
          {label ?? "Image not added yet"}
          <br />
          <span className="text-navy/40">{src}</span>
        </p>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
