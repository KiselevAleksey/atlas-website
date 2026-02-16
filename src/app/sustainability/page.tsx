import { ContentImageCard } from "@/components/content-image-card";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { sustainabilityInitiatives } from "@/lib/site-content";

export default function SustainabilityPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Sustainability"
        title="Operational sustainability that scales with growth"
        description="Our initiatives focus on transport efficiency, refrigeration optimization, waste reduction, and packaging impact reduction across the network."
        imageSrc={mediaLibrary.farmHarvest.src}
        imageAlt={mediaLibrary.farmHarvest.alt}
        actions={[
          { label: "See Network", href: "/network", primary: true },
          { label: "Talk to Team", href: "/contact" },
        ]}
      />

      <section className="grid gap-5 md:grid-cols-2">
        {sustainabilityInitiatives.map((initiative) => (
          <ContentImageCard
            key={initiative.title}
            title={initiative.title}
            body={`${initiative.summary} ${initiative.metric}`}
            imageSrc={initiative.image}
            imageAlt={initiative.title}
            kicker={initiative.metric}
          />
        ))}
      </section>

      <CtaBanner
        title="Build sustainability metrics into procurement strategy"
        description="We can align your category and logistics decisions to measurable environmental and operational targets."
        primary={{ label: "Request Assessment", href: "/request-quote" }}
        secondary={{ label: "Contact Team", href: "/contact" }}
      />
    </div>
  );
}
