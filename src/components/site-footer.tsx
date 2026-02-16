import Link from "next/link";

const platformLinks = [
  { href: "/catalog", label: "Product Catalog" },
  { href: "/industries", label: "Industry Programs" },
  { href: "/solutions", label: "Solution Modules" },
  { href: "/network", label: "Distribution Network" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brand Partners" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/careers", label: "Careers" },
];

const resourceLinks = [
  { href: "/resources", label: "Resources Hub" },
  { href: "/resources/case-studies", label: "Case Studies" },
  { href: "/resources/insights", label: "Insights" },
  { href: "/resources/brochures", label: "Brochures" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#10243d] text-[#deecff]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">Atlas Wholesale Foods</p>
          <p className="mt-3 max-w-xs text-sm text-[#b8d3ff]">
            B2B procurement and catalog platform for high-volume operators across foodservice,
            hospitality, education, healthcare, and travel.
          </p>
          <p className="mt-4 text-xs text-[#90b2df]">HQ: 1200 W Fulton Market, Chicago, IL 60607</p>
        </div>

        <nav>
          <p className="text-sm font-semibold text-white">Platform</p>
          <ul className="mt-3 space-y-2 text-sm text-[#c6dcff]">
            {platformLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-[#c6dcff]">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <p className="text-sm font-semibold text-white">Resources</p>
          <ul className="mt-3 space-y-2 text-sm text-[#c6dcff]">
            {resourceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-[#b8d3ff]">Sales: +1 (312) 555-0198</p>
          <p className="text-sm text-[#b8d3ff]">hello@atlaswholesalefoods.com</p>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-4 text-xs text-[#90b2df]">
          <p>© {new Date().getFullYear()} Atlas Wholesale Foods. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/request-quote" className="hover:text-white">
              Request Quote
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
