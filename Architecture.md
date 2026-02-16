# Architecture

## Objective
Build a production-ready MVP for a multi-tenant embeddable AI search widget service with a Python backend, fast responses, client isolation, and Cloud Run readiness.

## System Boundaries
- Frontend widget runtime: embeddable script served from `public/widgets/atlas-search-widget.js`.
- Widget host pages: Next.js pages/components mounting the widget.
- Search backend: standalone FastAPI service in `backend_py`.
- Tenant/client content layer: per-client document store and resolver.
- Ranking layer: lexical + intent + signal scoring.
- Analytics layer: event ingestion and in-memory ranking signals.

## Runtime Topology (MVP)
1. Browser loads widget script and mounts in a host container.
2. Widget sends `POST /api/widget/search` with query + context + tenant/client identity.
3. FastAPI resolves client id, checks origin policy, applies rate limits, ranks documents, returns top results + next route.
4. Widget renders suggestions/results and sends click/outcome events.
5. Events API updates ranking signals per client.

## Multi-Tenant / Multi-Client Model
- Primary partition key: `client_id`.
- Backward-compatible alias: `tenantId`.
- Resolution order:
1. Explicit `clientId` payload/header.
2. `tenantId` payload/header.
3. Host mapping from `WIDGET_CLIENT_HOST_MAP`.
4. `WIDGET_DEFAULT_CLIENT_ID` fallback.
- Documents, events, and ranking signals are isolated per client.

## Security Model (MVP)
- Admin ingestion endpoints protected by `WIDGET_ADMIN_TOKEN`.
- Public search/events endpoints protected by client-scoped origin allowlist checks.
- In-memory rate limiting by bucket + client + request fingerprint.
- Strict payload validation and field clamping.

## Performance Model (MVP)
- Low-overhead in-memory ranking and event signal updates.
- Debounced typeahead in widget.
- Suggestion threshold at 3 characters.
- Cloud Run-ready stateless service image.

## Observability and Operations (MVP)
- `GET /api/health` with config/readiness diagnostics.
- CORS and rate-limit response headers for client-side behavior.
- Deployment artifacts in `backend_py/Dockerfile` and backend runbook in `backend_py/README.md`.

## Deployment Topology
- Frontend (Next.js) can stay on Vercel or any static/app host.
- Widget API runs independently on Cloud Run.
- Frontend points widget to backend via:
- `NEXT_PUBLIC_WIDGET_API_BASE_URL`
- `NEXT_PUBLIC_WIDGET_DESTINATION_BASE_URL`

## Data Contracts
### Search Request
- `query` (required)
- `clientId` or `tenantId` (optional)
- `sessionId`, `limit`, `context` (optional)

### Search Response
- `query`, `clientId`, `tenantId`, `sessionId`, `nextRoute`, `results[]`

### Event Request
- `type` in `search|click|outcome` (required)
- optional `clientId|tenantId`, `sessionId`, `query`, `resultId`, `destination`, `context`, `metadata`

### Client Documents Upsert
- `PUT/POST /api/widget/clients/{client_id}/documents`
- or backward-compatible `.../tenants/{tenant_id}/documents`

## Non-Goals (MVP)
- Persistent analytics database.
- Advanced ML reranking.
- Tenant self-serve admin UI.
- Billing/metering.
