import { ContentImageCard } from "@/components/content-image-card";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { brandPartners } from "@/lib/site-content";

export default function BrandsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Brand Partners"
        title="Supplier ecosystem built for category depth"
        description="We partner with trusted producers and manufacturers to deliver quality, consistency, and innovation across every major foodservice category."
        imageSrc={mediaLibrary.farmHarvest.src}
        imageAlt={mediaLibrary.farmHarvest.alt}
        actions={[
          { label: "Browse Catalog", href: "/catalog", primary: true },
          { label: "Contact Category Team", href: "/contact" },
        ]}
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {brandPartners.map((brand) => (
          <ContentImageCard
            key={brand.name}
            title={brand.name}
            body={brand.specialty}
            imageSrc={brand.image}
            imageAlt={brand.name}
            kicker="Brand Partner"
          />
        ))}
      </section>

      <CtaBanner
        title="Want to onboard your brand to our marketplace?"
        description="Our category management team can evaluate fit, compliance requirements, and regional rollout options."
        primary={{ label: "Start Partnership", href: "/contact" }}
        secondary={{ label: "View Solutions", href: "/solutions" }}
      />
    </div>
  );
}
