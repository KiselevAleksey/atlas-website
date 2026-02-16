# Documentation

## Purpose
Execution tracker and independent cross-check log for the Python backend migration (Cloud Run + multi-client isolation).

## Scope Traceability Matrix
| MVP Item | Target Implementation | Verification Evidence | Status |
|---|---|---|---|
| 1. Python backend endpoint parity | `backend_py/app/main.py` | `cd backend_py && pytest -q` | Completed |
| 2. Client-isolated search/docs | `backend_py/app/store.py` + `/clients/{client_id}` routes | `test_client_isolation_for_uploaded_documents` | Completed |
| 3. Backward compatibility (`tenantId`) | payload resolver + alias routes in `backend_py/app/main.py` | `test_search_returns_client_and_tenant_ids` | Completed |
| 4. Admin ingestion auth | bearer token checks in `backend_py/app/main.py` | `test_documents_endpoint_requires_admin_token` | Completed |
| 5. Relevance logic and route recommendation | `backend_py/app/search.py` | Search tests and manual endpoint checks | Completed |
| 6. Event loop and ranking signals | `backend_py/app/analytics.py`, `POST /api/widget/events` | pytest suite + endpoint contract | Completed |
| 7. Security baseline | `backend_py/app/origin_policy.py`, `backend_py/app/rate_limit.py` | `test_origin_allowlist_blocks_disallowed_origin`, `test_rate_limit_returns_429` | Completed |
| 8. Cloud Run packaging | `backend_py/Dockerfile`, `backend_py/.dockerignore` | Dockerfile present and runtime command validated | Completed |
| 9. Frontend integration hook | `src/components/ai-search-widget-host.tsx`, `.env.example` | Build-time env fallback wiring added | Completed |
| 10. Docs and runbook updates | `docs/AI_SEARCH_WIDGET.md`, `README.md`, `backend_py/README.md` | Documentation review | Completed |

## Iteration Log
### Iteration 1: Python Service Skeleton
- Date: 2026-02-16
- Planned changes:
1. Create FastAPI app with endpoint parity.
2. Implement parsing, CORS, and response compatibility.
- Test/evidence:
1. Added `backend_py/app/main.py` and supporting modules.
2. Endpoints available: search, events, tenant/client docs, health.
- Independent cross-check:
1. Confirmed response includes both `clientId` and `tenantId`.
2. Confirmed search/events route signatures match existing widget usage.
- Result: Completed

### Iteration 2: Multi-Client Isolation and Security
- Date: 2026-02-16
- Planned changes:
1. Isolate document and signal state per client.
2. Add origin allowlist and rate limiting.
3. Keep tenant alias compatibility.
- Test/evidence:
1. Added `backend_py/app/store.py`, `backend_py/app/origin_policy.py`, `backend_py/app/rate_limit.py`, `backend_py/app/analytics.py`.
2. Added pytest coverage in `backend_py/tests/test_api.py`.
- Independent cross-check:
1. Verified client A data does not leak into client B search results.
2. Verified 403 for disallowed origin and 429 when rate limited.
- Result: Completed

### Iteration 3: Cloud Run and Integration Docs
- Date: 2026-02-16
- Planned changes:
1. Add Cloud Run containerization assets.
2. Update frontend env compatibility and docs.
- Test/evidence:
1. Added `backend_py/Dockerfile`, `backend_py/.env.example`, `backend_py/README.md`.
2. Updated frontend widget host env fallback and root/widget docs.
3. Executed: `cd backend_py && pytest -q` with `6 passed`.
- Independent cross-check:
1. Verified deploy command path and required env list are documented.
2. Verified frontend can target external backend via `NEXT_PUBLIC_WIDGET_API_BASE_URL`.
- Result: Completed
