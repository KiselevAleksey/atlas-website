# Atlas Website

Atlas marketing and catalog website built with Next.js.

This repository is website-only. The embeddable search widget and widget API live in a separate project.

## Local development

```bash
cd /Users/aleksey/atlas-website
npm install
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Required environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_WIDGET_API_BASE_URL` (widget service base URL)
- `NEXT_PUBLIC_WIDGET_SCRIPT_URL` (widget script URL, for example `/widgets/atlas-search-widget.js` on the widget service)
- `NEXT_PUBLIC_WIDGET_DESTINATION_BASE_URL` (website URL used for result routing)
- `NEXT_PUBLIC_WIDGET_CLIENT_ID`

## Vercel

- Project: `atlas-website`
- Root directory: `./`
- Framework preset: `Next.js`
