import SectionLabel from "@/components/layout/SectionLabel";
import MetamorphosisProject from "@/components/projects/Metamorphosis/MetamorphosisProject";
import FinancialDataAutomationProject from "@/components/projects/FinancialDataAutomation/FinancialDataAutomationProject";
import FootballTalentProject from "@/components/projects/FootballTalent/FootballTalentProject";
import MySportsAppProject from "@/components/projects/MySportsApp/MySportsAppProject";

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
    >
      <SectionLabel>Selected work</SectionLabel>

      <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
          Practical systems built around real problems.
        </h2>

        <p className="max-w-md text-sm leading-6 text-white/40">
          Software, data processing, and automation systems designed around
          real operational workflows rather than isolated demonstrations.
        </p>
      </div>

      <div className="space-y-0">
        <MetamorphosisProject />
        <FinancialDataAutomationProject />
        <FootballTalentProject />
        <MySportsAppProject />
      </div>
    </section>
  );
}
