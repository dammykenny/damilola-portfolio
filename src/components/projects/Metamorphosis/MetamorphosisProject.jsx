"use client";

import { motion } from "framer-motion";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";
import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
} from "lucide-react";

function MetamorphosisVisual() {
  const documentTools = [
    "Merge",
    "Split",
    "Extract",
    "Remove",
    "Organize",
    "Rotate",
  ];

  const auditTools = [
    "Classify",
    "Validate",
    "Controls",
    "Exceptions",
    "Analyze",
    "Report",
  ];

  const flow = [
    {
      number: "01",
      label: "DOCUMENT",
      detail: "INPUT",
    },
    {
      number: "02",
      label: "PROCESS",
      detail: "TRANSFORM",
    },
    {
      number: "03",
      label: "CONVERT",
      detail: "FORMAT ↔ FORMAT",
    },
    {
      number: "04",
      label: "OUTPUT",
      detail: "DATA / DOCUMENT",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden border border-white/[0.08] bg-[#070a09]"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.035] blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center border border-[var(--accent)]/30 font-mono text-[9px] font-bold text-[var(--accent)]">
            M
          </div>

          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
              Metamorphosis
            </div>

            <div className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
              System Architecture
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          Modular platform
        </div>
      </div>

      {/* Architecture */}
      <div className="relative p-5 sm:p-7">
        {/* System identity */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="font-mono text-[8px] uppercase tracking-[0.24em] text-[var(--accent)]">
              Document & Audit Workspace
            </div>

            <div className="mt-2 text-lg font-medium tracking-[-0.025em] text-white sm:text-xl">
              From documents to validated data.
            </div>
          </div>

          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
            METAMORPHOSIS / 01
          </div>
        </div>

        {/* Main flow */}
        <div className="relative border border-white/[0.07] bg-black/20 p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
              Core pipeline
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--accent)]/60">
              DATA FLOW
            </span>
          </div>

          <div className="grid gap-2 sm:grid-cols-4">
            {flow.map((item, index) => (
              <div key={item.number} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="relative min-h-[92px] border border-white/[0.08] bg-[#090c0b] p-3 transition duration-300 hover:border-[var(--accent)]/25"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-[var(--accent)]">
                      {item.number}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full border border-white/20" />
                  </div>

                  <div className="mt-5 font-mono text-[10px] tracking-[0.12em] text-white/70">
                    {item.label}
                  </div>

                  <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.14em] text-white/20">
                    {item.detail}
                  </div>
                </motion.div>

                {index < flow.length - 1 && (
                  <motion.div
                    className="absolute -right-1 top-1/2 z-10 hidden h-px w-2 bg-[var(--accent)]/50 sm:block"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.35,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Engines */}
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {/* Document Engine */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative border border-white/[0.07] bg-black/15 p-4"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  Engine 01
                </div>

                <div className="mt-1 text-sm font-medium text-white/75">
                  Document Engine
                </div>
              </div>

              <FileText
                size={17}
                strokeWidth={1.25}
                className="text-white/20"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {documentTools.map((tool, index) => (
                <div
                  key={tool}
                  className="border border-white/[0.06] px-2 py-2"
                >
                  <div className="font-mono text-[7px] text-white/15">
                    0{index + 1}
                  </div>

                  <div className="mt-1 text-[9px] text-white/40">
                    {tool}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
              <span className="h-px w-5 bg-white/15" />
              PDF processing services
            </div>
          </motion.div>

          {/* Audit Engine */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative border border-white/[0.07] bg-black/15 p-4"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  Engine 02
                </div>

                <div className="mt-1 text-sm font-medium text-white/75">
                  Audit Engine
                </div>
              </div>

              <ShieldCheck
                size={17}
                strokeWidth={1.25}
                className="text-white/20"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {auditTools.map((tool, index) => (
                <div
                  key={tool}
                  className="border border-white/[0.06] px-2 py-2"
                >
                  <div className="font-mono text-[7px] text-white/15">
                    0{index + 1}
                  </div>

                  <div className="mt-1 text-[9px] text-white/40">
                    {tool}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
              <span className="h-px w-5 bg-white/15" />
              Analysis & validation services
            </div>
          </motion.div>
        </div>

        {/* Data output */}
        <div className="mt-3 border border-[var(--accent)]/15 bg-[var(--accent)]/[0.025] p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                Output layer
              </div>

              <div className="mt-1 text-sm text-white/65">
                Structured financial data
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["EXCEL", "REPORTS", "CONTROLS", "EXCEPTIONS"].map(
                (item, index) => (
                  <motion.span
                    key={item}
                    animate={{
                      opacity: [0.35, 0.7, 0.35],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="border border-white/[0.08] px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[0.12em] text-white/35"
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Architecture footer */}
        <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.06] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/15">
            Next.js → FastAPI → Services → Data
          </div>

          <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/15">
            API · Storage · Database
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ArchitectureFlow() {
  return (
    <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ["Frontend", "Next.js · App Router"],
        ["Backend", "FastAPI · Python"],
        ["Services", "PDF · Converter · Audit"],
        ["Architecture", "API · Storage · Database"],
      ].map(([title, detail], index) => (
        <div
          key={title}
          className="relative border border-white/[0.07] p-4"
        >
          <div className="font-mono text-[9px] text-[var(--accent)]">
            0{index + 1}
          </div>

          <div className="mt-4 text-xs font-medium text-white/70">
            {title}
          </div>

          <div className="mt-2 text-[10px] leading-5 text-white/30">
            {detail}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MetamorphosisProject() {
  return (
    <article className="border-y border-white/[0.08] py-12 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--accent)]">
            <span>01</span>
            <span className="h-px w-7 bg-[var(--accent)]/50" />
            FLAGSHIP PROJECT
          </div>

          <div className="mt-7 text-xs uppercase tracking-[0.2em] text-white/35">
            Document & Audit Workspace
          </div>

          <h3 className="mt-3 text-5xl font-medium tracking-[-0.05em] text-white sm:text-6xl">
            Metamorphosis
          </h3>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/45">
            A document processing and audit workspace for converting,
            transforming, organizing, and analyzing business documents.
            It combines PDF utilities, financial-statement conversion,
            validation, audit workflows, and reporting in one extensible system.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Next.js",
              "FastAPI",
              "Python",
              "PDF Processing",
              "Audit Automation",
              "Data Processing",
            ].map((tag) => (
              <span
                key={tag}
                className="border border-white/[0.09] px-3 py-1.5 font-mono text-[10px] text-white/35"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            {[
              "Modular PDF processing services",
              "Document transformation and PDF utility workflows",
              "PDF-to-Excel financial statement conversion",
              "Expanding document-to-document and data conversion workflows",
              "Audit analysis, validation, and reporting workflows",
              "Extensible API and service architecture",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-white/50"
              >
                <CheckCircle2
                  size={15}
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        <MetamorphosisVisual />
      </div>

      <ArchitectureFlow />

      <ProjectScreenshots
        status="Active development"
        screenshots={[
          {
            src: "/projects/metamorphosis/dashboard.png",
            label: "Workspace dashboard",
            alt: "Metamorphosis dashboard showing document tools and system status",
          },
          {
            src: "/projects/metamorphosis/pdf-tools.png",
            label: "PDF tool workspace",
            alt: "Metamorphosis PDF tools workspace",
          },
          {
            src: "/projects/metamorphosis/pdf-to-excel.png",
            label: "PDF to Excel",
            alt: "Metamorphosis PDF to Excel conversion interface",
          },
        ]}
      />

      <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.07] pt-7">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          Active development
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="/work/metamorphosis"
            className="group inline-flex items-center gap-3 border border-white/10 px-5 py-3 text-sm text-white/65 transition hover:border-[var(--accent)]/30 hover:text-white"
          >
            View case study
            <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
          href={process.env.NEXT_PUBLIC_METAMORPHOSIS_URL || "#contact"}
          target={process.env.NEXT_PUBLIC_METAMORPHOSIS_URL ? "_blank" : undefined}
          rel={process.env.NEXT_PUBLIC_METAMORPHOSIS_URL ? "noopener noreferrer" : undefined}
          className="group inline-flex items-center gap-3 border border-white/10 px-5 py-3 text-sm text-white/65 transition hover:border-[var(--accent)]/30 hover:text-white"
        >
          {process.env.NEXT_PUBLIC_METAMORPHOSIS_URL ? "Open Metamorphosis" : "Metamorphosis · Active development"}
          <ArrowUpRight
            size={16}
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
        </div>
      </div>
    </article>
  );
}