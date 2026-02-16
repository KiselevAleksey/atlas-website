import Link from "next/link";

import { ContentImageCard } from "@/components/content-image-card";
import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { industryPrograms } from "@/lib/site-content";

export default function IndustriesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Industry Programs"
        title="Segment-specific procurement and fulfillment models"
        description="Each industry program maps catalog logic, pricing controls, and operational workflows to real service requirements."
        imageSrc={mediaLibrary.restaurantDining.src}
        imageAlt={mediaLibrary.restaurantDining.alt}
        actions={[
          { label: "Request Program Review", href: "/request-quote", primary: true },
          { label: "Browse Catalog", href: "/catalog" },
        ]}
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {industryPrograms.map((industry) => (
          <div key={industry.slug} className="space-y-3">
            <ContentImageCard
              title={industry.name}
              body={industry.summary}
              imageSrc={industry.heroImage}
              imageAlt={industry.name}
              kicker={`${industry.metrics[0]?.label}: ${industry.metrics[0]?.value}`}
            />
            <Link
              href={`/industries/${industry.slug}`}
              className="inline-flex rounded-full border border-[#c7daf4] bg-white px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#eef6ff]"
            >
              View industry program
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
