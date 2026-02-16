# Required Setup Checklist

## 1) Product Data Source

- Choose source of truth for catalog: PIM, CMS, or internal API.
- Define canonical schema:
  - category / sub-category
  - product and sub-product hierarchy
  - pack variants, MOQ, lead time, storage attributes
  - certifications and compliance fields

## 2) Search Infrastructure

- Choose managed search (Algolia/OpenSearch/Meilisearch).
- Index product + sub-product docs.
- Configure facets and synonym dictionaries.
- Add ranking strategy (availability > contract price > relevance).

## 3) Identity and Access

- Integrate auth provider (Firebase Auth/Auth0/Okta).
- Add role model: admin, buyer, approver, branch manager.
- Restrict catalog and pricing by account contract and location.

## 4) Commerce/Order Backend

- API endpoints for quote/cart/order/reorder.
- Pricing engine for account-level contracts and discount tiers.
- Inventory snapshot + substitution rules.

## 5) Integrations

- ERP sync: products, pricing, stock, customer accounts.
- EDI connectors for enterprise procurement partners.
- Logging + alerting for sync failures.

## 6) Frontend Engineering

- Move mock catalog (`src/lib/catalog.ts`) to backend fetch layer.
- Add server-side caching + pagination + loading states.
- Add design system tokens/components for consistent scaling.

## 7) QA + Launch

- Add test suite:
  - unit tests for catalog transform logic
  - integration tests for filters/search
  - e2e tests for buyer flows
- Define pre-launch SLOs (availability, response time, search success).
- Run pilot rollout before global launch.
