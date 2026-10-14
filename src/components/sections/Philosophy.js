"use client";

import { motion } from "framer-motion";

const disciplines = [
  {
    number: "01",
    mode: "THINK",
    title: "Mathematics",
    description: "Structure, logic, and quantitative reasoning.",
    signals: ["Structure", "Logic", "Quantitative reasoning"],
  },
  {
    number: "02",
    mode: "BUILD",
    title: "Engineering",
    description: "Architecture, systems, and reliability.",
    signals: ["Architecture", "Systems", "Reliability"],
  },
  {
    number: "03",
    mode: "ANALYZE",
    title: "Data",
    description: "Analysis, validation, and automation.",
    signals: ["Analysis", "Validation", "Automation"],
  },
];

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06]">
      {/* SUBTLE SYSTEM GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        {/* SECTION INTRO */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]/60" />

              <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[var(--accent)]">
                The foundation
              </p>
            </div>

            <h2 className="mt-5 max-w-md text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl">
              Three disciplines shape the way I approach technical problems.
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-white/40">
              Mathematics provides the reasoning. Engineering turns that
              reasoning into systems. Data provides the evidence needed to
              understand, validate, and improve them.
            </p>
          </div>
        </div>

        {/* DISCIPLINE SYSTEM */}
        <div className="relative mt-12">
          {/* CONNECTING LINE */}
          <div
            aria-hidden="true"
            className="absolute left-[16.666%] right-[16.666%] top-1/2 hidden h-px bg-white/[0.08] lg:block"
          />

          <div className="grid gap-3 lg:grid-cols-3">
            {disciplines.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative"
              >
                <div className="relative overflow-hidden border border-white/[0.09] bg-[#060807] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/30 sm:p-7">
                  {/* TOP SYSTEM ROW */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--accent)]">
                      {item.number}
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                      {item.mode}
                    </span>
                  </div>

                  {/* LARGE INDEX */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-7 font-mono text-6xl font-medium tracking-[-0.08em] text-white/[0.025] transition-colors duration-500 group-hover:text-[var(--accent)]/[0.05]"
                  >
                    {item.number}
                  </div>

                  {/* TITLE */}
                  <div className="relative mt-14">
                    <h3 className="text-xl font-medium tracking-[-0.03em] text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-xs leading-6 text-white/35">
                      {item.description}
                    </p>
                  </div>

                  {/* SIGNALS */}
                  <div className="relative mt-7 space-y-2 border-t border-white/[0.07] pt-5">
                    {item.signals.map((signal, signalIndex) => (
                      <div
                        key={signal}
                        className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/25"
                      >
                        <span className="h-px w-3 bg-white/15 transition-all duration-300 group-hover:w-5 group-hover:bg-[var(--accent)]/50" />

                        <span>{signal}</span>

                        <span className="ml-auto text-white/[0.12]">
                          0{signalIndex + 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ACCENT BASELINE */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

                  {/* CORNER SIGNAL */}
                  <div className="absolute right-0 top-0 h-5 w-5 border-l border-b border-transparent transition-all duration-500 group-hover:border-[var(--accent)]/30" />
                </div>

                {/* CONNECTOR NODE */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 z-10 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 border border-[var(--accent)]/50 bg-[#060807] lg:block"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* SYSTEM STATEMENT */}
        <div className="mt-10 grid gap-4 border-t border-white/[0.06] pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            <span className="text-[var(--accent)]/60">01</span>
            <span>Thinking</span>

            <span className="text-white/10">→</span>

            <span className="text-[var(--accent)]/60">02</span>
            <span>Building</span>

            <span className="text-white/10">→</span>

            <span className="text-[var(--accent)]/60">03</span>
            <span>Understanding</span>
          </div>

          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]/50 sm:text-right">
            MATHEMATICS / ENGINEERING / DATA
          </div>
        </div>
      </div>
    </section>
  );
}