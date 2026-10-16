import SectionLabel from "@/components/layout/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
    >
      <SectionLabel>About</SectionLabel>

      <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <div>
          <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Mathematics taught me to see structure. Audit taught me to question
            data. Software engineering taught me to build systems around both.
          </p>
        </div>

        <div className="space-y-6 text-sm leading-7 text-white/55">
          <p>
            I am a mathematically trained software engineer working across
            application development, data processing, automation, and
            financial-data workflows.
          </p>

          <p>
            My work sits at the intersection of software, analytical systems,
            and automation, with a long-term trajectory toward quantitative
            engineering.
          </p>

          <p>
            I care about clean architecture, data correctness, edge cases,
            validation, maintainability, and building tools that solve actual
            operational problems.
          </p>

          <div className="border-t border-white/10 pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Background
            </p>
            <ul className="mt-4 space-y-3">
              {[
                ["Junior Auditor", "Oshin Kehinde Gbade & Co. · 2025 – present"],
                ["Programming Instructor", "NYSC · taught programming and web development to 40+ students"],
                ["B.Sc. Mathematics", "University of Ilorin · 2018 – 2023"],
              ].map(([role, detail]) => (
                <li key={role} className="text-white/60">
                  <span className="text-white/85">{role}</span>
                  <span className="block text-sm text-white/50">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Currently
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Working as a Junior Auditor, automating recurring financial-data tasks",
                "Building Metamorphosis, a document processing workspace",
                "Developing Football Talent and My Sports",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-white/60">
                  <span className="mt-3 h-px w-5 shrink-0 bg-[var(--accent)]/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
