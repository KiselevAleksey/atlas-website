import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { caseStudies } from "@/lib/site-content";

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Case Studies"
        title="Real-world outcomes across enterprise foodservice segments"
        description="See how operators improved availability, procurement speed, and cost control with Atlas platform capabilities."
        imageSrc={mediaLibrary.heroWarehouse.src}
        imageAlt={mediaLibrary.heroWarehouse.alt}
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((study) => (
          <article key={study.slug} className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-[0_16px_36px_rgba(16,36,61,0.09)]">
            <div className="relative h-48">
              <Image src={study.heroImage} alt={study.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4d6f95]">{study.segment}</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{study.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{study.excerpt}</p>
              <Link
                href={`/resources/case-studies/${study.slug}`}
                className="mt-4 inline-flex rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#e9f3ff]"
              >
                Read details
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
