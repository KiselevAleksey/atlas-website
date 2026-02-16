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

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryPrograms.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industryPrograms.find((entry) => entry.slug === slug);
  const details = industry ? industryProgramDetails[industry.slug] : undefined;

  if (!industry || !details) {
    notFound();
  }

  const relatedSolutions = solutionPillars.filter((solution) =>
    details.recommendedSolutionSlugs.includes(solution.slug),
  );

  const relatedCaseStudies = caseStudies.filter((study) =>
    details.relatedCaseStudySlugs.includes(study.slug),
  );

  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Industry Program"
        title={industry.name}
        description={industry.summary}
        imageSrc={industry.heroImage}
        imageAlt={industry.name}
        actions={[
          { label: "Request Industry Plan", href: "/request-quote", primary: true },
          { label: "Back to Industries", href: "/industries" },
        ]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-2xl border border-[#d6e5fa] bg-white/90 p-5 shadow-[0_12px_28px_rgba(16,36,61,0.08)]">
          <p className="text-xs uppercase tracking-[0.12em] text-[#4f7094]">Procurement Cadence</p>
          <p className="mt-2 text-sm font-semibold text-[#10243d]">{details.operatingProfile.procurementCadence}</p>
        </article>
        <article className="rounded-2xl border border-[#d6e5fa] bg-white/90 p-5 shadow-[0_12px_28px_rgba(16,36,61,0.08)]">
          <p className="text-xs uppercase tracking-[0.12em] text-[#4f7094]">Demand Pattern</p>
          <p className="mt-2 text-sm font-semibold text-[#10243d]">{details.operatingProfile.demandPattern}</p>
        </article>
        <article className="rounded-2xl border border-[#d6e5fa] bg-white/90 p-5 shadow-[0_12px_28px_rgba(16,36,61,0.08)]">
          <p className="text-xs uppercase tracking-[0.12em] text-[#4f7094]">Service Window</p>
          <p className="mt-2 text-sm font-semibold text-[#10243d]">{details.operatingProfile.serviceWindow}</p>
        </article>
        <article className="rounded-2xl border border-[#d6e5fa] bg-white/90 p-5 shadow-[0_12px_28px_rgba(16,36,61,0.08)]">
          <p className="text-xs uppercase tracking-[0.12em] text-[#4f7094]">Compliance Level</p>
          <p className="mt-2 text-sm font-semibold text-[#10243d]">{details.operatingProfile.complianceLevel}</p>
        </article>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Key challenges</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[#365273]">
            {industry.keyChallenges.map((challenge) => (
              <li key={challenge} className="rounded-xl border border-[#d5e4f8] bg-[#f6faff] px-4 py-3">
                {challenge}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Capabilities</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[#365273]">
            {industry.capabilities.map((capability) => (
              <li key={capability} className="rounded-xl border border-[#d5e4f8] bg-[#f6faff] px-4 py-3">
                {capability}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Implementation roadmap</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {details.implementationPhases.map((phase) => (
            <article key={phase.phase} className="rounded-2xl border border-[#d5e4f8] bg-[#f7fbff] p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-[#4d6f95]">{phase.duration}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{phase.phase}</h3>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{phase.objective}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Buyer journeys</h2>
          <ol className="mt-4 space-y-2 text-sm leading-6 text-[#365273]">
            {details.buyerJourneys.map((journey, index) => (
              <li key={journey} className="rounded-xl border border-[#d5e4f8] bg-[#f6faff] px-4 py-3">
                <span className="mr-2 font-semibold text-[#0b6cff]">{index + 1}.</span>
                {journey}
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Risk controls</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[#365273]">
            {details.riskControls.map((control) => (
              <li key={control} className="rounded-xl border border-[#d5e4f8] bg-[#f6faff] px-4 py-3">
                {control}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Program metrics</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {industry.metrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-[#d5e4f8] bg-[#f7fbff] p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-[#4d6f95]">{metric.label}</p>
              <p className="mt-2 font-display text-3xl font-semibold text-[#10243d]">{metric.value}</p>
              <p className="mt-1 text-sm text-[#365273]">{metric.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Featured categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {industry.featuredCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-1.5 text-sm font-semibold text-[#245588]"
            >
              {category}
            </span>
          ))}
        </div>
        <Link
          href="/catalog"
          className="mt-5 inline-flex rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
        >
          Browse matching products
        </Link>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Recommended solution modules</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedSolutions.map((solution) => (
            <article key={solution.slug} className="overflow-hidden rounded-2xl border border-[#d5e4f8] bg-[#f7fbff]">
              <div className="relative h-36">
                <Image
                  src={solution.heroImage}
                  alt={solution.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-semibold text-[#10243d]">{solution.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#365273]">{solution.summary}</p>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="mt-3 inline-flex rounded-full border border-[#c7daf4] bg-white px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#eef6ff]"
                >
                  View module
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {relatedCaseStudies.length > 0 ? (
        <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Related case studies</h2>
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

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Program FAQ</h2>
        <div className="mt-4 space-y-3">
          {details.faq.map((item) => (
            <article key={item.question} className="rounded-xl border border-[#d5e4f8] bg-[#f7fbff] px-4 py-3">
              <h3 className="font-semibold text-[#10243d]">{item.question}</h3>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title={`Plan your ${industry.name.toLowerCase()} rollout`}
        description="We can design a phased implementation plan with account-specific pricing, workflow controls, and integration requirements."
        primary={{ label: "Start Planning", href: "/request-quote" }}
        secondary={{ label: "Talk to Team", href: "/contact" }}
      />
    </div>
  );
}
