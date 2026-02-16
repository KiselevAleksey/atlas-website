# B2B Website Build Plan

## Goal

Ship a high-performance B2B foodservice website for a very large catalog, with strong product discovery,
account-aware buying workflows, and enterprise integrations.

## Phase 1: Foundation (done in this setup)

- Bootstrap fresh Next.js app with App Router + TypeScript.
- Establish route IA: home, catalog, product detail, industries, solutions.
- Implement scalable catalog domain model (categories, sub-products, variants).
- Build premium UI baseline and reusable layout components.

## Phase 2: Catalog Scale

- Connect to real PIM/CMS data source (Akeneo, Salsify, or custom backend).
- Move catalog search to dedicated index (Algolia/OpenSearch/Meilisearch).
- Add faceting for brand, dietary flags, pack size, region, lead time.
- Add merchandising controls (featured assortments, seasonal sets, substitutions).

## Phase 3: B2B Commerce Workflows

- Account auth with buyer roles and branch-level permissions.
- Price lists per account/region and contract-based catalog visibility.
- Cart + quote + reorder + approval chains.
- Order cut-off windows, delivery-day constraints, and minimum order logic.

## Phase 4: Integration + Operations

- ERP/procurement integrations (API + EDI): orders, invoices, inventory snapshots.
- Observability: funnel analytics, search relevance metrics, conversion by segment.
- Performance hardening: caching strategy, image optimization, route segment boundaries.
- Security/compliance: audit logs, PII boundaries, key rotation, uptime/incident runbooks.

## Phase 5: Launch Execution

- Pilot with one region + one customer segment.
- Validate fill-rate, search success, reorder completion, time-to-order.
- Roll out by region and category waves.
- Maintain weekly taxonomy governance and relevance tuning.
