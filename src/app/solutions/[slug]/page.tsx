import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import {
  caseStudies,
  industryProgramDetails,
  industryPrograms,
  solutionPillars,
} from "@/lib/site-content";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

const rolloutTemplate = [
  { phase: "Discovery", duration: "1-2 weeks", objective: "Baseline systems, data quality, and workflows." },
  { phase: "Configuration", duration: "2-4 weeks", objective: "Configure business rules and access controls." },
  { phase: "Pilot", duration: "2-3 weeks", objective: "Launch with one region or customer segment." },
  { phase: "Scale", duration: "4+ weeks", objective: "Expand rollout and optimize KPI performance." },
];

export function generateStaticParams() {
  return solutionPillars.map((solution) => ({ slug: solution.slug }));
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutionPillars.find((entry) => entry.slug === slug);

  if (!solution) {
    notFound();
  }

  const relatedIndustries = industryPrograms.filter((industry) =>
    industryProgramDetails[industry.slug]?.recommendedSolutionSlugs.includes(solution.slug),
  );

  const relatedCaseStudySlugSet = new Set(
    relatedIndustries.flatMap(
      (industry) => industryProgramDetails[industry.slug]?.relatedCaseStudySlugs ?? [],
    ),
  );

  const relatedCaseStudies = caseStudies.filter((study) => relatedCaseStudySlugSet.has(study.slug));

  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Solution Module"
        title={solution.title}
        description={solution.summary}
        imageSrc={solution.heroImage}
        imageAlt={solution.title}
      />

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Core modules</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[#365273]">
            {solution.modules.map((module) => (
              <li key={module} className="rounded-xl border border-[#d5e4f8] bg-[#f6faff] px-4 py-3">
                {module}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Expected outcomes</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[#365273]">
            {solution.outcomes.map((outcome) => (
              <li key={outcome} className="rounded-xl border border-[#d5e4f8] bg-[#f6faff] px-4 py-3">
                {outcome}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Implementation blueprint</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {rolloutTemplate.map((phase) => (
            <article key={phase.phase} className="rounded-2xl border border-[#d5e4f8] bg-[#f7fbff] p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-[#4d6f95]">{phase.duration}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{phase.phase}</h3>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{phase.objective}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Best-fit industry programs</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedIndustries.map((industry) => (
            <article key={industry.slug} className="overflow-hidden rounded-2xl border border-[#d5e4f8] bg-[#f7fbff]">
              <div className="relative h-36">
                <Image
                  src={industry.heroImage}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-semibold text-[#10243d]">{industry.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#365273]">{industry.summary}</p>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-3 inline-flex rounded-full border border-[#c7daf4] bg-white px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#eef6ff]"
                >
                  View industry use case
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {relatedCaseStudies.length > 0 ? (
        <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Related outcomes</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedCaseStudies.map((study) => (
              <article key={study.slug} className="rounded-2xl border border-[#d5e4f8] bg-[#f7fbff] p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-[#4d6f95]">{study.segment}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{study.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#365273]">{study.excerpt}</p>
                <Link
                  href={`/resources/case-studies/${study.slug}`}
                  className="mt-3 inline-flex rounded-full border border-[#c7daf4] bg-white px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#eef6ff]"
                >
                  Read case study
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <CtaBanner
        title="Map this module to your roadmap"
        description="Our team can define implementation sequence, dependencies, and integration scope for your target operating model."
        primary={{ label: "Request Scoping", href: "/request-quote" }}
        secondary={{ label: "Contact Solutions Team", href: "/contact" }}
      />
    </div>
  );
}
