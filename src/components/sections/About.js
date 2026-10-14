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

        <div className="space-y-6 text-sm leading-7 text-white/40">
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
        </div>
      </div>
    </section>
  );
}
