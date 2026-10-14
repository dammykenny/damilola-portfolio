"use client";

import { ArrowUpRight, BarChart3 } from "lucide-react";

const pipeline = [
  {
    number: "01",
    title: "Extract",
    description:
      "Read transaction data from bank-statement PDFs and convert document content into structured records.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Normalize dates, narrations, references, transaction types, debit, credit, and running balances.",
  },
  {
    number: "03",
    title: "Classify",
    description:
      "Organize transactions into meaningful financial categories and identify counterparties and transaction patterns.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Reconcile balances, apply controls, detect exceptions, and preserve the integrity of the underlying statement data.",
  },
  {
    number: "05",
    title: "Report",
    description:
      "Transform the processed data into structured Excel workbooks for analysis, review, and downstream reporting.",
  },
];

const outputs = [
  "Transaction Analysis",
  "Debit / Credit Views",
  "Category Analysis",
  "Monthly Analysis",
  "Balance Controls",
  "Exception Review",
];

const technologies = [
  "Python",
  "Pandas",
  "PDF Extraction",
  "PyMuPDF",
  "pdfplumber",
  "Excel",
  "openpyxl",
  "XlsxWriter",
];

export default function FinancialDataAutomationProject() {
  return (
    <div className="group relative border-t border-white/10 py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.25fr_0.75fr] lg:gap-12">
        {/* PROJECT NUMBER */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-white/25">
            02
          </p>

          <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
            Python · Financial Data · Audit Automation
          </p>
        </div>

        {/* PROJECT CONTENT */}
        <div>
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Financial Data Automation
              </h3>

              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                From raw statements to validated financial data.
              </p>
            </div>

            <BarChart3
              size={20}
              strokeWidth={1.5}
              className="mt-1 shrink-0 text-white/25 transition-colors duration-300 group-hover:text-[var(--accent)]"
            />
          </div>

          {/* INTRODUCTION */}
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/50 sm:text-[15px]">
            A collection of reusable Python workflows developed to automate
            recurring financial-data and audit tasks. The system turns
            semi-structured bank-statement documents into structured,
            validated, and reviewable financial datasets.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/40">
            Rather than treating each statement as a one-off document, the
            workflows establish a repeatable processing pipeline covering
            extraction, transaction analysis, classification, validation,
            exception review, and Excel reporting.
          </p>

          {/* CORE PIPELINE */}
          <div className="mt-10 border-y border-white/[0.08] py-6">
            <div className="mb-5 font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--accent)]">
              Core pipeline
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.14em] text-white/40 sm:text-[11px]">
              <span>PDF INPUT</span>
              <span className="text-white/15">→</span>
              <span>EXTRACTION</span>
              <span className="text-white/15">→</span>
              <span>STRUCTURE</span>
              <span className="text-white/15">→</span>
              <span>CLASSIFICATION</span>
              <span className="text-white/15">→</span>
              <span>VALIDATION</span>
              <span className="text-white/15">→</span>
              <span>EXCEL</span>
            </div>
          </div>

          {/* PROCESSING PIPELINE */}
          <div className="mt-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/20">
                  Processing workflow
                </p>

                <h4 className="mt-2 text-xl font-medium tracking-[-0.03em] text-white">
                  A repeatable financial-data pipeline.
                </h4>
              </div>

              <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
                DATA FLOW / 02
              </span>
            </div>

            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
              {pipeline.map((item) => (
                <div
                  key={item.number}
                  className="bg-[#0a0a0a] p-5 transition-colors duration-300 hover:bg-white/[0.035]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[var(--accent)]">
                      {item.number}
                    </span>

                    <span className="h-px w-5 bg-white/10" />
                  </div>

                  <h5 className="mt-8 text-base font-medium text-white">
                    {item.title}
                  </h5>

                  <p className="mt-3 text-xs leading-6 text-white/35">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DATA STRUCTURE */}
          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#0a0a0a] p-7 sm:p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--accent)]">
                Structured records
              </p>

              <h4 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">
                Transaction data
              </h4>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Extracted statement information is organized into consistent
                transaction fields so downstream analysis can operate on
                structured data rather than raw document text.
              </p>
            </div>

            <div className="bg-[#0a0a0a] p-7 sm:p-8">
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Transaction Date",
                  "Value Date",
                  "Narration",
                  "Reference",
                  "Transaction Type",
                  "Amount",
                  "Debit",
                  "Credit",
                  "Balance",
                ].map((field) => (
                  <div
                    key={field}
                    className="border border-white/[0.08] px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/35"
                  >
                    {field}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ANALYSIS + VALIDATION */}
          <div className="mt-10 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            <div className="bg-[#0a0a0a] p-7 sm:p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--accent)]">
                Analysis layer
              </p>

              <h4 className="mt-3 text-xl font-medium tracking-[-0.03em] text-white">
                Understand the transactions.
              </h4>

              <ul className="mt-5 space-y-3">
                {[
                  "Transaction classification",
                  "Category-level analysis",
                  "Counterparty identification",
                  "Debit and credit analysis",
                  "Monthly transaction analysis",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs text-white/40"
                  >
                    <span className="h-px w-4 bg-[var(--accent)]/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0a0a0a] p-7 sm:p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--accent)]">
                Validation layer
              </p>

              <h4 className="mt-3 text-xl font-medium tracking-[-0.03em] text-white">
                Protect the data.
              </h4>

              <ul className="mt-5 space-y-3">
                {[
                  "Opening balance checks",
                  "Running balance validation",
                  "Closing balance reconciliation",
                  "Exception detection",
                  "Control-oriented review",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs text-white/40"
                  >
                    <span className="h-px w-4 bg-[var(--accent)]/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OUTPUT */}
          <div className="mt-10 border border-white/10 bg-[#0a0a0a] p-7 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  Output layer
                </p>

                <h4 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">
                  Analysis-ready Excel workbooks.
                </h4>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                  The processed information is delivered in structured
                  workbooks designed for review, analysis, reconciliation, and
                  reporting.
                </p>
              </div>

              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
                PYTHON → DATA → EXCEL
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {outputs.map((output) => (
                <span
                  key={output}
                  className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white/40"
                >
                  {output}
                </span>
              ))}
            </div>
          </div>

          {/* TECHNOLOGY */}
          <div className="mt-10">
            <div className="mb-5 font-mono text-[9px] uppercase tracking-[0.22em] text-white/20">
              Engineering stack
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/40"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* ENGINEERING TAKEAWAY */}
          <div className="mt-10 border-t border-white/[0.08] pt-7">
            <p className="max-w-3xl text-sm leading-7 text-white/45">
              The central engineering problem was not simply extracting
              transactions from PDFs. It was creating a dependable process
              around imperfect financial documents: preserving statement
              structure, transforming transactions into usable data, applying
              analytical rules, validating balances, identifying exceptions,
              and producing outputs that can be reviewed and trusted.
            </p>
          </div>

          {/* TECHNOLOGY MARKER */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <a href="/work/financial-data-automation" className="group/link inline-flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs text-white/60 transition hover:border-[var(--accent)]/40 hover:text-white">View case study <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" /></a>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              FINANCIAL DATA AUTOMATION / 02
            </div>

            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]/60">
              EXTRACT / ANALYZE / VALIDATE / REPORT
            </div>
          </div>
        </div>
      </div>

      {/* HOVER ACCENT LINE */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}