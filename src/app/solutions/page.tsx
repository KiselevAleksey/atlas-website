import Link from "next/link";

import { ContentImageCard } from "@/components/content-image-card";
import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { solutionPillars } from "@/lib/site-content";

export default function SolutionsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Solutions"
        title="Modular platform capabilities for enterprise procurement"
        description="Deploy catalog intelligence, buyer workflows, and integrations as one coordinated stack or phased modules."
        imageSrc={mediaLibrary.supplyChain.src}
        imageAlt={mediaLibrary.supplyChain.alt}
        actions={[
          { label: "Request Solution Mapping", href: "/request-quote", primary: true },
          { label: "Read Case Studies", href: "/resources/case-studies" },
        ]}
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {solutionPillars.map((solution) => (
          <div key={solution.slug} className="space-y-3">
            <ContentImageCard
              title={solution.title}
              body={solution.summary}
              imageSrc={solution.heroImage}
              imageAlt={solution.title}
              kicker="Platform Module"
            />
            <Link
              href={`/solutions/${solution.slug}`}
              className="inline-flex rounded-full border border-[#c7daf4] bg-white px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#eef6ff]"
            >
              View module details
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
