import type { MetadataRoute } from "next";

import { catalogProducts } from "@/lib/catalog";
import { brochures, caseStudies, industryPrograms, insights, solutionPillars } from "@/lib/site-content";

const staticRoutes = [
  "",
  "/about",
  "/catalog",
  "/industries",
  "/solutions",
  "/network",
  "/brands",
  "/resources",
  "/resources/case-studies",
  "/resources/insights",
  "/resources/brochures",
  "/sustainability",
  "/careers",
  "/contact",
  "/request-quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = industryPrograms.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutionPillars.map((solution) => ({
    url: `${siteUrl}/solutions/${solution.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteUrl}/resources/case-studies/${study.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((article) => ({
    url: `${siteUrl}/resources/insights/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const brochurePages: MetadataRoute.Sitemap = brochures.map((brochure) => ({
    url: `${siteUrl}/resources/brochures/${brochure.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productPages: MetadataRoute.Sitemap = catalogProducts.map((product) => ({
    url: `${siteUrl}/catalog/${product.slug}`,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    ...pages,
    ...industryPages,
    ...solutionPages,
    ...caseStudyPages,
    ...insightPages,
    ...brochurePages,
    ...productPages,
  ];
}
