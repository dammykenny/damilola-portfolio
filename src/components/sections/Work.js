import SectionLabel from "@/components/layout/SectionLabel";
import ProjectCard from "@/components/projects/ProjectCard";

const metamorphosisUrl = process.env.NEXT_PUBLIC_METAMORPHOSIS_URL;

const projects = [
  {
    number: "01",
    kicker: "Flagship · Document processing",
    title: "Metamorphosis",
    tagline: "A document processing workspace.",
    summary:
      "A PDF toolkit and PDF-to-Excel table extraction on a versioned FastAPI backend, being built toward an audit engine for validation and reporting.",
    status: "Active development",
    stack: ["Next.js", "FastAPI", "Python", "pdfplumber", "pandas"],
    image: "/projects/metamorphosis/dashboard.png",
    imageAlt: "Metamorphosis dashboard showing document tools and system status",
    caseStudyHref: "/work/metamorphosis",
    links: [
      { label: "View case study", href: "/work/metamorphosis" },
      metamorphosisUrl
        ? { label: "Open Metamorphosis", href: metamorphosisUrl, external: true }
        : { label: "Ask for a walkthrough", href: "#contact" },
    ],
  },
  {
    number: "02",
    kicker: "Python · Audit automation",
    title: "Financial Data Automation",
    tagline: "From raw bank statements to validated workbooks.",
    summary:
      "Python workflows that extract, classify and validate bank-statement transactions and produce Excel workbooks for review. Used in day-to-day audit work and being integrated into Metamorphosis.",
    status: "Working scripts · integrating into Metamorphosis",
    stack: ["Python", "pandas", "pdfplumber", "PyMuPDF", "openpyxl"],
    pipeline: [
      "PDF statement input",
      "Extraction",
      "Structure and normalization",
      "Classification",
      "Balance validation and exceptions",
      "Excel report",
    ],
    caseStudyHref: "/work/financial-data-automation",
    links: [{ label: "View case study", href: "/work/financial-data-automation" }],
  },
  {
    number: "03",
    kicker: "Full-stack · Scouting",
    title: "Football Talent",
    tagline: "A scouting platform for player discovery.",
    summary:
      "JWT login, player records only the creating scout can edit, search by position, rating and club, scouting assessments, and video upload with preview.",
    status: "Working application",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/football-talent/dashboard.png",
    imageAlt: "Football Talent scouting dashboard",
    caseStudyHref: "/work/football-talent",
    links: [
      { label: "View case study", href: "/work/football-talent" },
      {
        label: "View application",
        href: "https://football-talent-app.vercel.app/login",
        external: true,
      },
      {
        label: "View source",
        href: "https://github.com/dammykenny/football-talent-app",
        external: true,
      },
    ],
  },
  {
    number: "04",
    kicker: "React · Sports data",
    title: "My Sports App",
    tagline: "Search players and explore their careers.",
    summary:
      "A React app that searches players through TheSportsDB and shows teams, contract history, former teams and recent results.",
    status: "Working prototype",
    stack: ["React", "React Router", "Tailwind CSS", "TheSportsDB"],
    image: "/projects/my-sports/search-results.png",
    imageAlt: "My Sports App search results",
    caseStudyHref: "/work/my-sports",
    links: [
      { label: "View case study", href: "/work/my-sports" },
      {
        label: "View application",
        href: "https://dammykenny.github.io/my-sports-app/",
        external: true,
      },
      {
        label: "View source",
        href: "https://github.com/dammykenny/my-sports-app",
        external: true,
      },
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <SectionLabel>Selected work</SectionLabel>

      <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
          Practical systems built around real problems.
        </h2>

        <p className="max-w-md text-sm leading-6 text-white/60">
          Software, data processing, and automation built around real
          operational workflows. Each project has a case study with its
          architecture and current state.
        </p>
      </div>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
