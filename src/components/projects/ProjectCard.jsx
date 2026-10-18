import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const linkClass =
  "group/link inline-flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs text-white/65 transition hover:border-[var(--accent)]/40 hover:text-white";

function CardLink({ href, label, external }) {
  const content = (
    <>
      {label}
      <ArrowUpRight
        size={14}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {content}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={linkClass}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {content}
    </Link>
  );
}

export default function ProjectCard({
  number,
  kicker,
  title,
  tagline,
  summary,
  status,
  stack,
  image,
  imageAlt,
  pipeline,
  caseStudyHref,
  links,
}) {
  return (
    <article className="grid gap-10 border-t border-white/[0.08] py-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
      <div>
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
          <span className="text-[var(--accent)]">{number}</span>
          <span>{kicker}</span>
        </div>

        <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
          {title}
        </h3>
        <p className="mt-3 text-base text-white/75">{tagline}</p>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">{summary}</p>

        <p className="mt-6 inline-block border border-[var(--accent)]/20 bg-[var(--accent)]/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
          {status}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="border border-white/10 px-3 py-1.5 font-mono text-[11px] text-white/60"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <CardLink key={link.label} {...link} />
          ))}
        </div>
      </div>

      <div>
        {image ? (
          <Link
            href={caseStudyHref}
            aria-label={`${title} case study`}
            className="group block"
          >
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#0b0f0e]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
              />
            </div>
          </Link>
        ) : (
          <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
              Processing pipeline
            </p>
            <ol className="mt-6 space-y-4">
              {pipeline.map((step, i) => (
                <li key={step} className="flex items-center gap-4 text-sm text-white/75">
                  <span className="font-mono text-[11px] text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-6 bg-white/20" />
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </article>
  );
}
