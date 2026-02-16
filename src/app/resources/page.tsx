import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { brochures, caseStudies, insights } from "@/lib/site-content";

export default function ResourcesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Resources"
        title="Customer stories, playbooks, and implementation insights"
        description="Browse practical content for catalog strategy, procurement workflows, integrations, and operational excellence."
        imageSrc={mediaLibrary.kitchenPrep.src}
        imageAlt={mediaLibrary.kitchenPrep.alt}
        actions={[
          { label: "Case Studies", href: "/resources/case-studies", primary: true },
          { label: "Insights", href: "/resources/insights" },
          { label: "Brochures", href: "/resources/brochures" },
        ]}
      />

      <section>
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-3xl font-semibold text-[#10243d]">Case Studies</h2>
          <Link
            href="/resources/case-studies"
            className="rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
          >
            View all
          </Link>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <article key={study.slug} className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-[0_16px_36px_rgba(16,36,61,0.08)]">
              <div className="relative h-44">
                <Image src={study.heroImage} alt={study.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4d6f95]">{study.segment}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{study.title}</h3>
                <Link
                  href={`/resources/case-studies/${study.slug}`}
                  className="mt-4 inline-flex rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#e9f3ff]"
                >
                  Read case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-3xl font-semibold text-[#10243d]">Brochures</h2>
          <Link
            href="/resources/brochures"
            className="rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
          >
            View all
          </Link>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {brochures.slice(0, 3).map((brochure) => (
            <article key={brochure.slug} className="rounded-3xl border border-black/10 bg-white/90 p-5 shadow-[0_16px_36px_rgba(16,36,61,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4d6f95]">
                {brochure.format} • {brochure.pages} pages
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{brochure.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{brochure.summary}</p>
              <Link
                href={`/resources/brochures/${brochure.slug}`}
                className="mt-4 inline-flex rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#e9f3ff]"
              >
                Open brochure
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-3xl font-semibold text-[#10243d]">Insights</h2>
          <Link
            href="/resources/insights"
            className="rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
          >
            View all
          </Link>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {insights.slice(0, 4).map((insight) => (
            <article key={insight.slug} className="rounded-3xl border border-black/10 bg-white/90 p-5 shadow-[0_16px_36px_rgba(16,36,61,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4d6f95]">
                {insight.category} • {insight.readTime}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{insight.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{insight.summary}</p>
              <Link
                href={`/resources/insights/${insight.slug}`}
                className="mt-4 inline-flex rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#e9f3ff]"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
