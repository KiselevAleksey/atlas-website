"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { DEFAULT_WIDGET_API_BASE_URL, normalizeBaseUrl } from "@/lib/runtime-defaults";

const TRACK_DELAY_MS = 900;
const defaultWidgetApiBaseUrl =
  process.env.NEXT_PUBLIC_WIDGET_API_BASE_URL ?? DEFAULT_WIDGET_API_BASE_URL;
const widgetTrackingParams = [
  "ws_session",
  "ws_tenant",
  "ws_client",
  "ws_query",
  "ws_target",
  "ws_product",
];

function cleanupWidgetTrackingUrl(targetId?: string): void {
  try {
    const url = new URL(window.location.href);
    let changed = false;

    for (const key of widgetTrackingParams) {
      if (!url.searchParams.has(key)) {
        continue;
      }

      url.searchParams.delete(key);
      changed = true;
    }

    if (url.hash && targetId && (url.hash === `#${targetId}` || url.hash.startsWith("#faq-"))) {
      url.hash = "";
      changed = true;
    }

    if (!changed) {
      return;
    }

    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState(window.history.state, "", nextUrl);
  } catch {
    // Ignore URL parsing issues in older/embedded browser contexts.
  }
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
      cleanupWidgetTrackingUrl(targetId);
      return;
    }

    const timer = window.setTimeout(() => {
      fetch(`${normalizeBaseUrl(defaultWidgetApiBaseUrl)}/api/widget/events`, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
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
      cleanupWidgetTrackingUrl(targetId);
    }, TRACK_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname, productSlug, query, sessionId, targetId, tenantId]);

  return null;
}
