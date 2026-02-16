import { AiSearchWidgetHost } from "@/components/ai-search-widget-host";
import { ProductCard } from "@/components/product-card";
import { catalogSummary, featuredProducts } from "@/lib/catalog";

type CatalogPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialQuery = typeof resolvedSearchParams.q === "string" ? resolvedSearchParams.q : undefined;

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10">
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_20px_48px_rgba(16,36,61,0.08)] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4a6b8f]">Catalog AI Widget</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-[#10243d]">
          Embedded Search and Routing
        </h1>
        <p className="mt-4 max-w-3xl text-[#355573]">
          This page runs the same embeddable search widget your team can drop into any site. It returns
          AI-ranked results and recommends the best next route for each user query.
        </p>
      </section>

      <section className="mt-8 rounded-3xl border border-black/10 bg-white/90 p-6 shadow-[0_20px_48px_rgba(16,36,61,0.08)]">
        <AiSearchWidgetHost initialQuery={initialQuery} limit={10} />
      </section>

      <section className="mt-10 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_18px_40px_rgba(16,36,61,0.06)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Popular SKUs</h2>
          <p className="text-sm text-[#456789]">
            {catalogSummary.totalProducts} products • {catalogSummary.totalSubProducts} sub-products
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

