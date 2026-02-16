import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { brochures } from "@/lib/site-content";

type BrochureDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return brochures.map((brochure) => ({ slug: brochure.slug }));
}

export default async function BrochureDetailPage({ params }: BrochureDetailPageProps) {
  const { slug } = await params;
  const brochure = brochures.find((entry) => entry.slug === slug);

  if (!brochure) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-6 pb-16 pt-10">
      <PageHero
        eyebrow={`${brochure.format} • ${brochure.pages} pages`}
        title={brochure.title}
        description={brochure.summary}
        imageSrc={brochure.heroImage}
        imageAlt={brochure.title}
        actions={[
          { label: "Back to Brochures", href: "/resources/brochures", primary: true },
          { label: "Request This Pack", href: `/request-quote?asset=${brochure.slug}` },
        ]}
      />

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-3xl font-semibold text-[#10243d]">Who This Is For</h2>
        <p className="mt-3 text-sm leading-7 text-[#365273]">{brochure.audience}</p>

        <h3 className="mt-7 font-display text-2xl font-semibold text-[#10243d]">Included Topics</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {brochure.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-[#c6daf4] bg-[#f2f8ff] px-3 py-1 text-xs font-semibold text-[#2f5c88]"
            >
              {topic}
            </span>
          ))}
        </div>

        <p className="mt-7 text-sm leading-7 text-[#365273]">
          This brochure package can be configured for your segment, contract model, and rollout scope.
          Use request quote to get the tailored version and pricing guidance.
        </p>

        <Link
          href={`/request-quote?asset=${brochure.slug}`}
          className="mt-6 inline-flex rounded-full bg-[#0b6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(11,108,255,0.32)]"
        >
          Request tailored brochure + pricing
        </Link>
      </section>
    </div>
  );
}

