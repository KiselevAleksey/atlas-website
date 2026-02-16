import Image from "next/image";
import Link from "next/link";

import { AiSearchWidgetHost } from "@/components/ai-search-widget-host";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { StatGrid } from "@/components/stat-grid";
import { catalogCategories, featuredProducts } from "@/lib/catalog";
import {
  caseStudies,
  featuredGallery,
  globalStats,
  industryPrograms,
  solutionPillars,
} from "@/lib/site-content";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-14 px-6 pb-20 pt-10">
      <PageHero
        eyebrow="Enterprise B2B Foodservice"
        title="Production-grade wholesale platform for massive catalogs and complex procurement"
        description="Atlas Wholesale Foods combines deep catalog architecture, account-aware buying workflows, and high-reliability distribution operations for enterprise operators."
        imageSrc={featuredGallery[0].src}
        imageAlt={featuredGallery[0].alt}
        actions={[
          { label: "Explore Catalog", href: "/catalog", primary: true },
          { label: "Request Quote", href: "/request-quote" },
        ]}
      />

      <section className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-[0_20px_48px_rgba(16,36,61,0.08)]">
        <AiSearchWidgetHost limit={10} />
      </section>

      <StatGrid items={globalStats} />

      <section>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4a6b8f]">Visual Overview</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#10243d]">Operations in action</h2>
          </div>
          <Link
            href="/network"
            className="rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
          >
            View Distribution Network
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredGallery.map((asset) => (
            <div key={asset.src} className="relative h-56 overflow-hidden rounded-3xl border border-black/10 shadow-[0_12px_30px_rgba(16,36,61,0.1)]">
              <Image src={asset.src} alt={asset.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-[#10243d]">Industry Programs</h2>
            <p className="mt-2 text-[#355573]">Purpose-built buying models by operating segment.</p>
          </div>
          <Link
            href="/industries"
            className="rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
          >
            All Programs
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {industryPrograms.slice(0, 8).map((industry) => (
            <article
              key={industry.slug}
              className="rounded-3xl border border-black/10 bg-white/90 p-5 shadow-[0_16px_34px_rgba(16,36,61,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4d6f95]">{industry.metrics[0]?.value}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{industry.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{industry.summary}</p>
              <Link
                href={`/industries/${industry.slug}`}
                className="mt-4 inline-flex rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#e9f3ff]"
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-[#10243d]">Solution Stack</h2>
            <p className="mt-2 text-[#355573]">Modular platform capabilities ready for enterprise rollout.</p>
          </div>
          <Link
            href="/solutions"
            className="rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
          >
            Explore Solutions
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutionPillars.map((solution) => (
            <article key={solution.slug} className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-[0_16px_36px_rgba(16,36,61,0.09)]">
              <div className="relative h-44">
                <Image src={solution.heroImage} alt={solution.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-[#10243d]">{solution.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#365273]">{solution.summary}</p>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="mt-4 inline-flex rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#e9f3ff]"
                >
                  Open module
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-[#10243d]">Featured Categories</h2>
            <p className="mt-2 text-[#355573]">Structured category architecture for high-SKU programs.</p>
          </div>
          <Link
            href="/catalog"
            className="rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
          >
            Browse Catalog
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {catalogCategories.map((category) => (
            <article
              key={category.name}
              className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-[0_16px_32px_rgba(16,36,61,0.08)]"
            >
              <h3 className="font-display text-xl font-semibold text-[#10243d]">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{category.description}</p>
              <p className="mt-4 text-sm font-semibold text-[#0b6cff]">{category.productCount} SKUs</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl font-semibold text-[#10243d]">Sample Products</h2>
        <p className="mt-2 text-[#355573]">Production-like product cards including variants and sub-products.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-[#10243d]">Customer Stories</h2>
            <p className="mt-2 text-[#355573]">Operational outcomes from recent enterprise deployments.</p>
          </div>
          <Link
            href="/resources/case-studies"
            className="rounded-full border border-[#bdd4f5] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] hover:bg-[#eef6ff]"
          >
            All Case Studies
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <article
              key={study.slug}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-[0_16px_36px_rgba(16,36,61,0.09)]"
            >
              <div className="relative h-48">
                <Image src={study.heroImage} alt={study.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4d6f95]">{study.segment}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{study.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#365273]">{study.excerpt}</p>
                <Link
                  href={`/resources/case-studies/${study.slug}`}
                  className="mt-4 inline-flex rounded-full border border-[#c7daf4] bg-[#f4f9ff] px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#e9f3ff]"
                >
                  Read story
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ready to launch a production B2B procurement experience?"
        description="Start with a scoped rollout by region and customer segment, then expand to full network deployment with governance, analytics, and integration support."
        primary={{ label: "Start a Project", href: "/request-quote" }}
        secondary={{ label: "Talk to Sales", href: "/contact" }}
      />
    </div>
  );
}
