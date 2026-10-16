"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectScreenshots({
  title = "Project evidence",
  status,
  screenshots,
}) {
  return (
    <div className="mt-12 border-t border-white/[0.07] pt-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            {title}
          </p>
          <p className="mt-2 text-sm text-white/60">
            Real interface captures from the project build.
          </p>
        </div>

        {status ? (
          <span className="border border-[var(--accent)]/20 bg-[var(--accent)]/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
            {status}
          </span>
        ) : null}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {screenshots.map((shot) => (
          <a
            key={shot.src}
            href={shot.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden border border-white/[0.08] bg-white/[0.02] transition hover:border-white/20"
            aria-label={`Open ${shot.alt}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0f0e]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
              />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] px-4 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                {shot.label}
              </span>
              <ArrowUpRight
                size={13}
                aria-hidden="true"
                className="text-white/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
