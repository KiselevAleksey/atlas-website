# AI Search Widget (Embeddable)

This project exposes a reusable AI search widget that can be embedded in any website.
The backend is now available as a standalone Python FastAPI service (`backend_py`) prepared for Cloud Run and client-level isolation.

Search coverage is site-wide: catalog, industries, solutions, case studies, insights, brochures, pricing/contact flows, and any custom client documents you upload.

## What it does

1. Renders search input + ranked result cards in any container.
2. Sends query + page context (`URL`, `referrer`, `UTM`s) to backend.
3. Receives:
   - ranked result cards
   - `nextRoute` recommendation
4. Navigates to selected destination when user clicks.
5. Tracks events (`search`, `click`, `outcome`) for ranking feedback.

## API endpoints (Python backend)

- `POST /api/widget/search`
- `POST /api/widget/events`
- `GET /api/widget/tenants/:tenantId/documents` (admin)
- `PUT /api/widget/tenants/:tenantId/documents` (admin)
- `GET /api/widget/clients/:clientId/documents` (admin alias)
- `PUT /api/widget/clients/:clientId/documents` (admin alias)
- `GET /api/health`

Search/events include CORS headers, client-scoped origin checks, and rate-limit headers.

Default Python backend indexing uses embedded full-site index file:
- `backend_py/app/site_index.json` (exported from `src/lib/widget-site-index.ts`)

## Client isolation model

- `clientId` is the primary partition key.
- `tenantId` is still supported for backward compatibility.
- The backend resolves identity in this order:
1. `clientId` payload/header
2. `tenantId` payload/header
3. host map (`WIDGET_CLIENT_HOST_MAP`)
4. default (`WIDGET_DEFAULT_CLIENT_ID`)

Every client gets a separate document index, analytics stream, and ranking signals.

## Basic embed snippet

```html
<div
  id="atlas-search-slot"
  data-atlas-search-widget
  data-api-base-url="https://widget-api.yourdomain.com"
  data-destination-base-url="https://www.client-site.com"
  data-client-id="acme-foods"
  data-tenant-id="acme-foods"
  data-limit="8"
></div>

<script src="https://widget-cdn.yourdomain.com/widgets/atlas-search-widget.js" defer></script>
```

If your API and website are on different domains, set `data-destination-base-url` to the website domain so result clicks open site pages (not API paths).

`data-client-id` is preferred. `data-tenant-id` remains supported for backward compatibility.

## Programmatic mount

```html
<div id="atlas-search-slot"></div>
<script src="https://widget-cdn.yourdomain.com/widgets/atlas-search-widget.js" defer></script>
<script>
  window.addEventListener("load", function () {
    window.AtlasSearchWidget.mount({
      container: "#atlas-search-slot",
      apiBaseUrl: "https://widget-api.yourdomain.com",
      destinationBaseUrl: "https://www.client-site.com",
      clientId: "acme-foods",
      tenantId: "acme-foods",
      limit: 10,
      autoNavigate: true,
    });
  });
</script>
```

## Event model

- `search`: tracked by `/api/widget/search`
- `click`: sent by widget on result click
- `outcome`: sent after landing when outcome params exist

Outcome params:

- `ws_session`
- `ws_tenant`
- `ws_query`
- `ws_target` (result id)
- `ws_product` (product slug)

## Onboard a new client

1. Set backend admin token: `WIDGET_ADMIN_TOKEN`.
2. Choose `client_id` (example: `acme-foods`).
3. Upload documents:

```bash
curl -X PUT "https://widget-api.yourdomain.com/api/widget/clients/acme-foods/documents" \
  -H "Authorization: Bearer <WIDGET_ADMIN_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "documents": [
      {
        "id": "pricing-overview",
        "routeType": "pricing",
        "destination": "/pricing",
        "title": "Pricing Overview",
        "subtitle": "Pricing",
        "description": "Contract pricing and quote options",
        "body": "Pricing tiers, quote flow, and contract terms.",
        "keywords": ["pricing", "quote", "contract"],
        "tags": ["pricing", "conversion"]
      }
    ]
  }'
```

## Security and traffic controls

### Client origin allowlist

```env
WIDGET_CLIENT_ALLOWED_ORIGINS=acme-foods:https://acme.com|https://app.acme.com,globex:https://globex.com
WIDGET_ENFORCE_ORIGIN_ALLOWLIST=true
```

Notes:

- `true`: origins not matched for a client are blocked (`403`).
- `false`: unmatched origins are allowed unless that client has an explicit allowlist.

### Public API rate limits

```env
WIDGET_RATE_LIMIT_DISABLED=false
WIDGET_RATE_LIMIT_WINDOW_MS=60000
WIDGET_RATE_LIMIT_SEARCH_PER_WINDOW=120
WIDGET_RATE_LIMIT_EVENTS_PER_WINDOW=360
```

Rate-limited responses return `429` with `Retry-After` and `X-RateLimit-*` headers.

## Performance defaults in current widget

- Suggestions start at 3 characters.
- Suggestions debounce at 180ms.
- Suggestions return up to 5 options.
