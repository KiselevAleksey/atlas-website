# Plan

## Execution Principles
- Keep API contract compatible with existing widget usage.
- Move backend concerns to Python service (`backend_py`).
- Preserve tenant compatibility while introducing explicit `client_id` partitioning.
- Validate every iteration with tests.

## MVP Scope Checklist
1. Python backend with endpoint parity for search/events/docs/health.
2. Client-isolated document indexes (`client_id`).
3. Backward compatibility for `tenantId` payloads/routes.
4. Admin document ingestion with token auth.
5. Search relevance + route recommendation.
6. Event tracking loop and per-client ranking signals.
7. Security baseline (origin allowlist + rate limits).
8. Cloud Run-ready packaging.
9. Frontend integration via configurable API base URL.
10. Updated architecture/runbook documentation.

## Iteration Plan
### Iteration 1: Contract and Data Model Mapping
- Map existing widget contract to Python payload/response schema.
- Define client resolution model and compatibility rules.

### Iteration 2: Core FastAPI Service
- Implement `/api/widget/search`, `/api/widget/events`, `/api/health`.
- Implement request validation/parsing and CORS wrappers.

### Iteration 3: Multi-Client Isolation + Admin Endpoints
- Implement in-memory client store + optional file persistence.
- Implement `/api/widget/clients/{client_id}/documents` and tenant alias routes.
- Enforce admin token authorization.

### Iteration 4: Security and Performance Controls
- Add client-scoped origin allowlist checks.
- Add in-memory rate limits with response headers.
- Keep scoring deterministic and low-latency.

### Iteration 5: Cloud Run Packaging and Verification
- Add Dockerfile and backend environment template.
- Add pytest suite for behavior and isolation.
- Validate end-to-end with local test run.

### Iteration 6: Documentation and Integration Wiring
- Update root docs and widget integration docs.
- Add frontend env fallbacks for external Python backend URL.

## Acceptance Criteria
- Python backend serves required routes and passes tests.
- `client_id` isolation is enforced across search/events/docs.
- Existing widget payloads using `tenantId` still work.
- Cloud Run deployment path is documented and reproducible.
