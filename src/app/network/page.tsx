import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { distributionCenters } from "@/lib/site-content";

export default function NetworkPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Distribution Network"
        title="Regional fulfillment designed for reliability"
        description="Our network blends frozen, chilled, and ambient capacity with route orchestration to meet strict B2B delivery windows."
        imageSrc={mediaLibrary.distributionCenter.src}
        imageAlt={mediaLibrary.distributionCenter.alt}
        actions={[
          { label: "View Industries", href: "/industries", primary: true },
          { label: "Request Network Review", href: "/request-quote" },
        ]}
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {distributionCenters.map((center) => (
          <article
            key={`${center.city}-${center.state}`}
            className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-[0_16px_36px_rgba(16,36,61,0.08)]"
          >
            <div className="relative h-48">
              <Image src={center.image} alt={`${center.city} distribution center`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
            </div>
            <div className="p-5">
              <h2 className="font-display text-xl font-semibold text-[#10243d]">
                {center.city}, {center.state}
              </h2>
              <p className="mt-1 text-sm font-semibold text-[#0b6cff]">{center.region}</p>
              <dl className="mt-3 space-y-2 text-sm text-[#365273]">
                <div className="flex justify-between gap-4">
                  <dt>Facility Size</dt>
                  <dd className="font-semibold text-[#10243d]">{center.squareFeet}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Cold Capacity</dt>
                  <dd className="font-semibold text-[#10243d]">{center.coldCapacity}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>

      <CtaBanner
        title="Need a region-by-region rollout plan?"
        description="We can model facility coverage, cut-off windows, and fill-rate targets for your operating footprint."
        primary={{ label: "Book Planning Session", href: "/request-quote" }}
        secondary={{ label: "Contact Operations", href: "/contact" }}
      />
    </div>
  );
}
