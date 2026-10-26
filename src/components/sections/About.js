import Image from "next/image";
import SectionLabel from "@/components/layout/SectionLabel";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <SectionLabel>About</SectionLabel>

      <div className="grid gap-14 lg:grid-cols-[0.75fr_1fr] lg:items-start lg:gap-20">
        <figure className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0b0f0e]">
            <Image
              src="/damilola-portrait.jpg"
              alt="Portrait of Damilola Ayoola"
              fill
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
            Lagos, Nigeria · Open to remote opportunities
          </figcaption>
        </figure>

        <div>
          <h2 className="text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
            Hi, I’m Damilola.
          </h2>

          <p className="mt-6 text-xl leading-snug tracking-[-0.02em] text-white/85">
            Mathematics taught me to see structure. Audit taught me to question
            data. Software engineering taught me to build systems around both.
          </p>

          <div className="mt-8 space-y-5 text-[15px] leading-7 text-white/60">
            <p>
              I’m a software engineer who builds tools that turn complex,
              repetitive processes into simpler, more efficient workflows. I
              studied Mathematics at the University of Ilorin, and I currently
              work as a Junior Auditor at Oshin Kehinde Gbade &amp; Co.
            </p>

            <p>
              Auditing exposed me to financial data analysis, transaction
              verification, and the challenge of processing large amounts of
              financial information. That is what pulled me toward software
              engineering, and toward automating the repetitive parts.
            </p>

            <p>
              I work with JavaScript, React, Node.js, Python, and databases, on
              projects around financial data processing, document automation,
              and web applications. My main project, Metamorphosis, is a
              platform I’m building to bring document processing and audit
              workflows into one place.
            </p>

            <p>
              I enjoy learning, solving problems, and improving how things are
              done. In the long term, I want to grow into quantitative
              engineering, where software, data, mathematics, and finance meet.
            </p>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Background
            </p>
            <ul className="mt-4 space-y-3">
              {[
                ["Junior Auditor", "Oshin Kehinde Gbade & Co. · 2025 – present"],
                ["Programming Instructor", "NYSC · February 2024 – February 2025 · taught programming and web development to 40+ students"],
                ["B.Sc. Mathematics", "University of Ilorin · 2018 – 2023"],
              ].map(([role, detail]) => (
                <li key={role}>
                  <span className="text-white/85">{role}</span>
                  <span className="block text-sm text-white/55">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
