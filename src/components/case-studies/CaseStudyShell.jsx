import Link from "next/link";
import SectionLabel from "@/components/layout/SectionLabel";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";

export default function CaseStudyShell({
  number,
  eyebrow,
  title,
  summary,
  status,
  stack,
  problem,
  system,
  decisions,
  outcome,
  screenshots = [],
  liveUrl,
}) {
  return (
    <main className="min-h-screen bg-[#050706] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-16">
        <Link
          href="/#work"
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30 transition hover:text-[var(--accent)]"
        >
          ← Back to selected work
        </Link>

        <header className="mt-20 max-w-4xl">
          <SectionLabel>{number} / {eyebrow}</SectionLabel>
          <h1 className="mt-6 text-5xl font-medium tracking-[-0.05em] sm:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/50">{summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="border border-[var(--accent)]/20 bg-[var(--accent)]/[0.04] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--accent)]">
              {status}
            </span>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/50 transition hover:border-[var(--accent)]/30 hover:text-white"
              >
                Open application ↗
              </a>
            )}
          </div>
        </header>

        {screenshots.length > 0 && (
          <div className="mt-20">
            <ProjectScreenshots title="Evidence from the build" status={status} screenshots={screenshots} />
          </div>
        )}

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <aside>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">Engineering stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
                  {item}
                </span>
              ))}
            </div>
          </aside>

          <div className="space-y-14">
            <CaseBlock label="01 / Problem" text={problem} />
            <CaseBlock label="02 / System" text={system} />
            <CaseBlock label="03 / Engineering decisions" items={decisions} />
            <CaseBlock label="04 / Outcome" text={outcome} />
          </div>
        </div>
      </div>
    </main>
  );
}

function CaseBlock({ label, text, items }) {
  return (
    <section className="border-t border-white/[0.08] pt-7">
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">{label}</p>
      {text && <p className="mt-5 max-w-3xl text-base leading-8 text-white/50">{text}</p>}
      {items && (
        <ul className="mt-5 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-7 text-white/45">
              <span className="mt-3 h-px w-5 shrink-0 bg-[var(--accent)]/50" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
