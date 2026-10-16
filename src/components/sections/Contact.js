import { ArrowUpRight, Mail } from "lucide-react";
import SectionLabel from "@/components/layout/SectionLabel";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/dammykenny",
  },
  {
    label: "CV (PDF)",
    href: "/Damilola-Ayoola-CV.pdf",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayoolaoluwadamilola",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] bg-[#090c0b]"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <SectionLabel>Contact</SectionLabel>

        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s build something
              <span className="text-white/50"> meaningful.</span>
            </h2>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dammykenny97@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-base text-white/70 transition hover:text-[var(--accent)]"
              >
                <Mail size={18} />
                dammykenny97@gmail.com
              </a>
              <a
                href="mailto:dammykenny97@gmail.com"
                className="text-[11px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
              >
                Or open in your mail app
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-white/10 px-5 py-3 text-sm text-white/65 transition hover:border-white/25 hover:text-white"
              >
                {link.label}
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-6 text-[11px] uppercase tracking-[0.2em] text-white/50 sm:flex-row">
          <span>Damilola Ayoola</span>
          <span>Software Engineer · Data &amp; Automation</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
