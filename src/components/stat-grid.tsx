import type { Metric } from "@/lib/site-content";

export function StatGrid({ items }: { items: Metric[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-2xl border border-[#d6e5fa] bg-white/90 p-5 shadow-[0_12px_28px_rgba(16,36,61,0.08)]"
        >
          <p className="text-xs uppercase tracking-[0.12em] text-[#4f7094]">{item.label}</p>
          <p className="mt-2 font-display text-3xl font-semibold text-[#10243d]">{item.value}</p>
          <p className="mt-1 text-sm text-[#3b5b7b]">{item.note}</p>
        </article>
      ))}
    </div>
  );
}
