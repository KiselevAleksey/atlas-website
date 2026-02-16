import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { insights } from "@/lib/site-content";

export default function InsightsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Insights"
        title="Playbooks and guidance for enterprise B2B teams"
        description="Deep dives on catalog strategy, search relevance, pricing governance, and integration operations."
        imageSrc={mediaLibrary.freshVegetables.src}
        imageAlt={mediaLibrary.freshVegetables.alt}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {insights.map((article) => (
          <article key={article.slug} className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-[0_16px_36px_rgba(16,36,61,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4d6f95]">
              {article.category} • {article.readTime}
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{article.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#365273]">{article.summary}</p>
            <Link
              href={`/resources/insights/${article.slug}`}
              className="mt-4 inline-flex rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#e9f3ff]"
            >
              Read article
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
