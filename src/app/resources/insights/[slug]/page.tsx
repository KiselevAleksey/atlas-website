import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { insights } from "@/lib/site-content";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = insights.find((entry) => entry.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-16 pt-10">
      <PageHero
        eyebrow={`${article.category} • ${article.readTime}`}
        title={article.title}
        description={article.summary}
        imageSrc={article.heroImage}
        imageAlt={article.title}
        actions={[{ label: "Back to Insights", href: "/resources/insights", primary: true }]}
      />

      <article className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <div className="space-y-8">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-[#10243d]">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-[#365273]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Link
          href="/request-quote"
          className="mt-8 inline-flex rounded-full bg-[#0b6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(11,108,255,0.32)]"
        >
          Discuss your implementation
        </Link>
      </article>
    </div>
  );
}
