import Link from "next/link";

import type { CatalogProduct } from "@/lib/catalog";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function ProductCard({ product }: { product: CatalogProduct }) {
  const startingPrice = Math.min(...product.variants.map((variant) => variant.pricePerCaseUsd));

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/90 p-5 shadow-[0_18px_40px_rgba(16,36,61,0.08)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1">
      <div className="absolute right-4 top-4 rounded-full bg-[#e8f2ff] px-3 py-1 text-xs font-semibold text-[#0b6cff]">
        {product.temperature}
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4a6684]">{product.category}</p>
      <h3 className="mt-3 font-display text-xl font-semibold text-[#10243d]">{product.name}</h3>
      <p className="mt-2 text-sm leading-6 text-[#365273]">{product.description}</p>

      <dl className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-[#f3f7fe] p-3 text-sm">
        <div>
          <dt className="text-[#53718f]">SKU</dt>
          <dd className="font-semibold text-[#10243d]">{product.sku}</dd>
        </div>
        <div>
          <dt className="text-[#53718f]">Lead Time</dt>
          <dd className="font-semibold text-[#10243d]">{product.leadTimeDays} days</dd>
        </div>
        <div>
          <dt className="text-[#53718f]">Sub-products</dt>
          <dd className="font-semibold text-[#10243d]">{product.subProducts.length}</dd>
        </div>
        <div>
          <dt className="text-[#53718f]">From</dt>
          <dd className="font-semibold text-[#10243d]">{currency.format(startingPrice)}</dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs font-medium text-[#527091]">Brand: {product.brand}</p>
        <Link
          href={`/catalog/${product.slug}`}
          className="rounded-full border border-[#d3e3f8] bg-white px-4 py-2 text-sm font-semibold text-[#0b6cff] transition-colors duration-150 hover:bg-[#eaf3ff]"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}
