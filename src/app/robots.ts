import type { MetadataRoute } from "next";
import { DEFAULT_ATLAS_SITE_URL } from "@/lib/runtime-defaults";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_ATLAS_SITE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
