import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { brochures } from "@/lib/site-content";

export default function BrochuresPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Brochures"
        title="Practical brochures for buyers, operators, and IT teams"
        description="Download-ready style guides for pricing, search, integrations, cold-chain operations, and program rollout."
        imageSrc={mediaLibrary.deliveryBoxes.src}
        imageAlt={mediaLibrary.deliveryBoxes.alt}
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {brochures.map((brochure) => (
          <article
            key={brochure.slug}
            className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-[0_16px_36px_rgba(16,36,61,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4d6f95]">
              {brochure.format} • {brochure.pages} pages
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{brochure.title}</h2>
            <p className="mt-1 text-sm text-[#4a6b8f]">{brochure.audience}</p>
            <p className="mt-2 text-sm leading-6 text-[#365273]">{brochure.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {brochure.topics.slice(0, 4).map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-[#c6daf4] bg-[#f2f8ff] px-3 py-1 text-xs font-semibold text-[#2f5c88]"
                >
                  {topic}
                </span>
              ))}
            </div>
            <Link
              href={`/resources/brochures/${brochure.slug}`}
              className="mt-4 inline-flex rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#e9f3ff]"
            >
              Open brochure
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

