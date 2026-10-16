"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24">
        {/* LEFT — INTRODUCTION */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
              <span className="h-px w-10 bg-[var(--accent)]" />
              Software Engineer · Data & Automation
            </div>

            <h1 className="max-w-5xl text-[clamp(3.5rem,7vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
              I build
              <br />

              <span className="text-white/55">systems</span>{" "}

              <span className="text-[var(--accent)]">from</span>

              <br />

              <span className="text-white">complexity.</span>
            </h1>

            <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                Mathematically trained software engineer working across
                application development, data processing, automation, and
                financial systems.
              </p>

              <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 sm:block">
                Lagos, Nigeria
                <br />
                Open to remote
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(183,255,74,0.12)]"
              >
                Explore work

                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-3 border border-white/10 px-6 py-3.5 text-sm text-white/55 transition duration-300 hover:border-white/25 hover:text-white"
              >
                About me

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/Damilola-Ayoola-CV.pdf"
                download
                className="group inline-flex items-center gap-3 border border-white/10 px-6 py-3.5 text-sm text-white/55 transition duration-300 hover:border-white/25 hover:text-white"
              >
                Download CV

                <Download
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — SYSTEM VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[540px]">
            <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.045]" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.045]" />

            <div className="absolute inset-[5%] rounded-full border border-white/[0.07]" />

            <motion.div
              className="absolute inset-[16%] rounded-full border border-[var(--accent)]/15"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute inset-[28%] rounded-full border border-white/[0.08]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute left-1/2 top-[5%] h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_22px_rgba(183,255,74,0.65)]"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute right-[9%] top-1/2 h-1.5 w-1.5 rounded-full bg-white/60"
              animate={{ x: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-[11%] left-[17%] h-1.5 w-1.5 rounded-full bg-[var(--accent)]/70"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--accent)]/20 bg-[#080b0a]/95 shadow-[0_0_100px_rgba(183,255,74,0.07)]">
              <div className="text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Engineering
                </div>

                <div className="mt-3 text-2xl font-medium tracking-[-0.04em] text-white">
                  DATA
                </div>

                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                  → SYSTEMS
                </div>
              </div>
            </div>

            <div className="absolute left-[1%] top-[21%] font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
              01 / MODEL
            </div>

            <div className="absolute right-[0%] top-[28%] font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
              02 / BUILD
            </div>

            <div className="absolute bottom-[20%] left-[5%] font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
              03 / VALIDATE
            </div>

            <div className="absolute bottom-[8%] right-[6%] font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
              04 / AUTOMATE
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white/50 lg:flex"
      >
        Scroll to explore
        <span className="h-8 w-px bg-white/15" />
      </motion.a>
    </section>
  );
}