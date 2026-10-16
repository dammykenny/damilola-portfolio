"use client";

import {
  BarChart3,
  Database,
  Layers3,
  Terminal,
} from "lucide-react";

export default function Engineering() {
  const engineeringAreas = [
    {
      number: "01",
      title: "Software",
      signal: "APPLICATION LAYER",
      description:
        "Designing and building application systems where interfaces, services, data access, and business logic work together through clear and reusable boundaries.",
      stack: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
      ],
      focus: [
        "Application architecture",
        "Reusable components",
        "Service design",
        "API integration",
      ],
      icon: Terminal,
    },
    {
      number: "02",
      title: "Data",
      signal: "DATA LAYER",
      description:
        "Transforming raw and structured information into dependable data flows that applications, analytical processes, and reporting systems can actually use.",
      stack: [
        "Python",
        "Pandas",
        "APIs",
        "MongoDB",
        "Data Processing",
      ],
      focus: [
        "Data transformation",
        "Structured records",
        "Database workflows",
        "Processing pipelines",
      ],
      icon: Database,
    },
    {
      number: "03",
      title: "Analysis",
      signal: "ANALYTICAL LAYER",
      description:
        "Applying mathematical reasoning and analytical controls to understand data, test assumptions, identify exceptions, and preserve the integrity of important outputs.",
      stack: [
        "Financial Data",
        "Audit",
        "Controls",
        "Validation",
        "Reporting",
      ],
      focus: [
        "Transaction analysis",
        "Validation controls",
        "Exception detection",
        "Analytical reporting",
      ],
      icon: BarChart3,
    },
    {
      number: "04",
      title: "Delivery",
      signal: "DELIVERY LAYER",
      description:
        "Taking systems from development into usable environments through version control, deployment, documentation, APIs, and workflows designed for continued maintenance.",
      stack: [
        "Git",
        "GitHub",
        "Vercel",
        "Render",
        "REST APIs",
      ],
      focus: [
        "Version control",
        "Deployment",
        "API delivery",
        "Maintainable systems",
      ],
      icon: Layers3,
    },
  ];

  return (
    <section
      id="engineering"
      className="border-t border-white/10 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* SECTION INTRODUCTION */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
              Engineering
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Software with an analytical foundation.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-white/55">
              My approach combines mathematical reasoning, software
              engineering, financial-data analysis, and automation. I build
              systems by separating concerns, structuring data, validating
              important operations, and creating workflows that remain useful
              beyond the first implementation.
            </p>

            {/* ENGINEERING PRINCIPLE */}
            <div className="mt-10 border-l border-white/10 pl-5 sm:pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                Engineering principle
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/60">
                Structure the problem. Build the system. Validate the result.
                Automate what can be repeated.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50">
              <span className="h-px w-10 bg-white/20" />
              Systems · Data · Automation
            </div>
          </div>

          {/* ENGINEERING AREAS */}
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {engineeringAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative bg-[#0a0a0a] p-7 transition-colors duration-300 hover:bg-white/[0.035] sm:p-8"
                >
                  {/* CARD HEADER */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs tracking-[0.2em] text-white/50">
                      {item.number}
                    </span>

                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-white/50 transition-colors duration-300 group-hover:text-[var(--accent)]"
                    />
                  </div>

                  <div className="mt-10">
                    {/* LAYER */}
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
                      {item.signal}
                    </p>

                    {/* TITLE */}
                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-sm leading-7 text-white/65">
                      {item.description}
                    </p>

                    {/* FOCUS */}
                    <div className="mt-7">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                        Focus
                      </p>

                      <div className="mt-3 space-y-2">
                        {item.focus.map((focusItem) => (
                          <div
                            key={focusItem}
                            className="flex items-center gap-2 text-xs text-white/55"
                          >
                            <span className="h-px w-3 bg-white/20" />
                            <span>{focusItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* TECHNOLOGY STACK */}
                    <div className="mt-7 border-t border-white/10 pt-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                        Stack
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.stack.map((technology) => (
                          <span
                            key={technology}
                            className="border border-white/15 bg-white/[0.025] px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] text-white/65 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/60"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* HOVER ACCENT LINE */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}