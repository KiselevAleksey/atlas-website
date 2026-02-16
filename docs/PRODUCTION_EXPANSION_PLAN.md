# Production Expansion Plan

## Objective

Turn the fresh B2B website foundation into a production-grade marketing and catalog experience with:

- richer route architecture
- high-volume, realistic content
- image-heavy layouts
- SEO and crawl readiness

## Execution Tracks

## Track 1: Information Architecture (completed)

- Expanded top-level navigation for company, platform, operations, and resources.
- Added route families:
  - industries + detail pages
  - solutions + detail pages
  - resources + case studies + insights
  - company and operations pages (about, network, brands, sustainability, careers, contact)

## Track 2: Content Depth (completed)

- Added central content model in `src/lib/site-content.ts`:
  - industry programs
  - solution modules
  - case studies
  - insight articles
  - brand partner cards
  - distribution center profiles
  - career openings and FAQ

## Track 3: Visual Realism (completed)

- Added media library in `src/lib/media.ts` and integrated photography across sections.
- Built reusable image-first components for card and hero layouts.
- Increased image density on homepage and all core section pages.

## Track 4: Production Basics (completed)

- Added crawl artifacts:
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
  - `src/app/not-found.tsx`
- Improved global metadata in layout.
- Added scalable CTA patterns and cross-linking between major journeys.

## Track 5: Next Iteration (recommended)

- Wire forms to backend (CRM or ticketing).
- Add legal pages (privacy policy, terms, cookie policy).
- Replace remote image URLs with licensed owned assets.
- Add analytics and conversion events.
- Add content CMS integration for resources and landing pages.
