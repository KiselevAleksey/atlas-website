import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/product-card";
import { catalogProducts, getProductBySlug, getRelatedProducts } from "@/lib/catalog";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10">
      <Link
        href="/catalog"
        className="inline-flex items-center rounded-full border border-[#c8dbf6] bg-white px-4 py-2 text-sm font-semibold text-[#245588] hover:bg-[#edf5ff]"
      >
        Back to Catalog
      </Link>

      <section className="mt-5 grid gap-6 rounded-[2rem] border border-black/10 bg-white/85 p-8 shadow-[0_22px_52px_rgba(16,36,61,0.1)] md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4a6b8f]">
            {product.category} / {product.subCategory}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-[#10243d]">{product.name}</h1>
          <p className="mt-4 max-w-2xl leading-7 text-[#365273]">{product.description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#eff6ff] p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-[#4d6f95]">SKU</p>
              <p className="mt-1 font-semibold text-[#10243d]">{product.sku}</p>
            </div>
            <div className="rounded-2xl bg-[#eff6ff] p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-[#4d6f95]">Brand</p>
              <p className="mt-1 font-semibold text-[#10243d]">{product.brand}</p>
            </div>
            <div className="rounded-2xl bg-[#eff6ff] p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-[#4d6f95]">Lead Time</p>
              <p className="mt-1 font-semibold text-[#10243d]">{product.leadTimeDays} days</p>
            </div>
            <div className="rounded-2xl bg-[#eff6ff] p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-[#4d6f95]">Shelf Life</p>
              <p className="mt-1 font-semibold text-[#10243d]">{product.shelfLifeDays} days</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-[#355573]">
            {product.highlights.map((highlight) => (
              <li key={highlight} className="rounded-xl border border-[#d7e6fa] bg-[#f8fbff] px-3 py-2">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[#d4e4f9] bg-[#f4f9ff] p-5">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Product Specs</h2>
          <dl className="mt-4 space-y-3 text-sm text-[#355573]">
            <div>
              <dt className="font-semibold text-[#10243d]">Temperature Zone</dt>
              <dd>{product.temperature}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#10243d]">Storage</dt>
              <dd>{product.storage}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#10243d]">Origin</dt>
              <dd>{product.origin}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#10243d]">Allergen Profile</dt>
              <dd>{product.allergenProfile}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#10243d]">Certifications</dt>
              <dd>{product.certifications.join(" | ")}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#10243d]">Primary Industries</dt>
              <dd>{product.industries.join(" | ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-black/10 bg-white/85 p-8 shadow-[0_18px_40px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Sub-products</h2>
        <p className="mt-2 text-sm text-[#355573]">
          This SKU includes multiple sub-products to support different prep and service models.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {product.subProducts.map((subProduct) => (
            <article key={subProduct.id} className="rounded-2xl border border-[#d4e4f9] bg-[#f6faff] p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-[#4d6f95]">{subProduct.format}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-[#10243d]">{subProduct.name}</h3>
              <p className="mt-2 text-sm text-[#355573]">{subProduct.useCase}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-black/10 bg-white/85 p-8 shadow-[0_18px_40px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Pack Variants</h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#cfe1f8]">
          <table className="min-w-full border-collapse bg-white text-left text-sm">
            <thead className="bg-[#edf5ff] text-[#1f456c]">
              <tr>
                <th className="px-4 py-3 font-semibold">Variant</th>
                <th className="px-4 py-3 font-semibold">Pack</th>
                <th className="px-4 py-3 font-semibold">MOQ (cases)</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Price / Case</th>
              </tr>
            </thead>
            <tbody>
              {product.variants.map((variant) => (
                <tr key={variant.id} className="border-t border-[#e3eefc] text-[#2b4b6d]">
                  <td className="px-4 py-3 font-medium text-[#10243d]">{variant.label}</td>
                  <td className="px-4 py-3">{variant.pack}</td>
                  <td className="px-4 py-3">{variant.minimumOrderCases}</td>
                  <td className="px-4 py-3">{variant.status}</td>
                  <td className="px-4 py-3 font-semibold text-[#0b6cff]">
                    {currency.format(variant.pricePerCaseUsd)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-[#10243d]">Related Products</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.slug} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  );
}
