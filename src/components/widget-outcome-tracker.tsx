"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const TRACK_DELAY_MS = 900;
const defaultWidgetApiBaseUrl =
  process.env.NEXT_PUBLIC_WIDGET_API_BASE_URL ?? "https://search-bar-api-project.vercel.app";

function normalizeBaseUrl(value: string): string {
  return value.replace(/\/+$/, "");
}

export function WidgetOutcomeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("ws_session");
  const tenantId = searchParams.get("ws_tenant") ?? undefined;
  const targetId = searchParams.get("ws_target") ?? searchParams.get("ws_product");
  const productSlug = searchParams.get("ws_product");
  const query = searchParams.get("ws_query");

  useEffect(() => {
    if (!sessionId || !targetId) {
      return;
    }

    const dedupeKey = `atlas_outcome_${sessionId}_${targetId}_${pathname}`;

    if (window.sessionStorage.getItem(dedupeKey)) {
      return;
    }

    const timer = window.setTimeout(() => {
      fetch(`${normalizeBaseUrl(defaultWidgetApiBaseUrl)}/api/widget/events`, {
        method: "POST",
        mode: "cors",
        keepalive: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "outcome",
          tenantId,
          sessionId,
          query: query ?? undefined,
          resultId: targetId,
          productSlug: productSlug ?? undefined,
          destination: window.location.pathname,
          context: {
            pageUrl: window.location.href,
            pagePath: window.location.pathname,
            pageTitle: document.title,
            referrer: document.referrer || undefined,
          },
          metadata: {
            outcome: "landed",
          },
        }),
      }).catch(() => undefined);

      window.sessionStorage.setItem(dedupeKey, "1");
    }, TRACK_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname, productSlug, query, sessionId, targetId, tenantId]);

  return null;
}
