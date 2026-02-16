import type { Metadata } from "next";
import { Suspense } from "react";

import { DEFAULT_ATLAS_SITE_URL } from "@/lib/runtime-defaults";
import "./globals.css";
import { RouteScrollGuard } from "@/components/route-scroll-guard";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WidgetOutcomeTracker } from "@/components/widget-outcome-tracker";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_ATLAS_SITE_URL),
  title: {
    default: "Atlas Wholesale Foods | B2B Catalog Platform",
    template: "%s | Atlas Wholesale Foods",
  },
  description:
    "A modern B2B foodservice catalog experience with scalable product taxonomy and procurement workflows.",
  keywords: [
    "B2B foodservice",
    "wholesale catalog",
    "procurement platform",
    "food distribution",
    "enterprise sourcing",
  ],
  openGraph: {
    title: "Atlas Wholesale Foods",
    description:
      "Production-ready B2B catalog and procurement platform for large foodservice operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[-10%] top-[-8%] h-96 w-96 rounded-full bg-[#7fd4ff]/30 blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-8%] h-[30rem] w-[30rem] rounded-full bg-[#7effb4]/25 blur-3xl" />
          </div>

          <SiteHeader />
          <Suspense fallback={null}>
            <RouteScrollGuard />
          </Suspense>
          <Suspense fallback={null}>
            <WidgetOutcomeTracker />
          </Suspense>
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
