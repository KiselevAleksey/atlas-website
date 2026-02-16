import Link from "next/link";

const primaryNav = [
  { href: "/catalog", label: "Catalog" },
  { href: "/industries", label: "Industries" },
  { href: "/solutions", label: "Solutions" },
  { href: "/network", label: "Network" },
  { href: "/brands", label: "Brands" },
  { href: "/resources", label: "Resources" },
  { href: "/sustainability", label: "Sustainability" },
];

const utilityNav = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f7f3]/90 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-display text-xl font-semibold tracking-tight text-[#10243d]">
            Atlas Wholesale Foods
          </Link>

          <nav className="hidden items-center gap-4 text-sm font-medium text-[#3c5f83] md:flex">
            {utilityNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#0b6cff]">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/request-quote"
            className="rounded-full bg-[#0b6cff] px-4 py-2 text-xs font-semibold text-white shadow-[0_6px_20px_rgba(11,108,255,0.35)] sm:text-sm"
          >
            Request Quote
          </Link>
        </div>

        <nav className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#d7e4f7] pt-3 text-sm font-medium text-[#1f456c]">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors duration-150 hover:text-[#0b6cff]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
