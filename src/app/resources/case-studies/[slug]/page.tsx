import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/lib/site-content";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow={study.segment}
        title={study.title}
        description={study.excerpt}
        imageSrc={study.heroImage}
        imageAlt={study.title}
        actions={[
          { label: "Back to Case Studies", href: "/resources/case-studies", primary: true },
          { label: "Request Similar Plan", href: "/request-quote" },
        ]}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {study.results.map((result) => (
          <article key={result.label} className="rounded-2xl border border-[#d5e4f8] bg-white/90 p-5 shadow-[0_14px_30px_rgba(16,36,61,0.08)]">
            <p className="text-xs uppercase tracking-[0.12em] text-[#4d6f95]">{result.label}</p>
            <p className="mt-2 font-display text-3xl font-semibold text-[#10243d]">{result.value}</p>
            <p className="mt-1 text-sm text-[#365273]">{result.note}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-3xl font-semibold text-[#10243d]">Project Overview</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-[#365273]">
          {study.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link
          href="/resources/case-studies"
          className="mt-5 inline-flex rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
        >
          Browse more case studies
        </Link>
      </section>

      <CtaBanner
        title="Want outcomes like this?"
        description="We can scope a pilot focused on your target KPIs and launch timeline."
        primary={{ label: "Start Pilot Planning", href: "/request-quote" }}
        secondary={{ label: "Talk to Sales", href: "/contact" }}
      />
    </div>
  );
}
