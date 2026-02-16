"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";

type WidgetMountOptions = {
  container: HTMLElement;
  tenantId?: string;
  clientId?: string;
  apiBaseUrl?: string;
  destinationBaseUrl?: string;
  limit?: number;
  autoNavigate?: boolean;
  initialQuery?: string;
};

type WidgetController = {
  destroy?: () => void;
};

type WidgetApi = {
  mount: (options: WidgetMountOptions) => WidgetController | void;
};

type AiSearchWidgetHostProps = {
  initialQuery?: string;
  limit?: number;
  className?: string;
  autoNavigate?: boolean;
  tenantId?: string;
  clientId?: string;
  apiBaseUrl?: string;
  destinationBaseUrl?: string;
  scriptUrl?: string;
};

declare global {
  interface Window {
    AtlasSearchWidget?: WidgetApi;
  }
}

function normalizeBaseUrl(value: string): string {
  return value.replace(/\/+$/, "");
}

const defaultApiBaseUrl = normalizeBaseUrl(
  process.env.NEXT_PUBLIC_WIDGET_API_BASE_URL ??
    "https://search-bar-api-project.vercel.app",
);
const defaultDestinationBaseUrl =
  process.env.NEXT_PUBLIC_WIDGET_DESTINATION_BASE_URL ??
  process.env.NEXT_PUBLIC_SITE_URL;
const defaultClientId = process.env.NEXT_PUBLIC_WIDGET_CLIENT_ID;
const defaultWidgetScriptUrl =
  process.env.NEXT_PUBLIC_WIDGET_SCRIPT_URL ??
  `${defaultApiBaseUrl}/widgets/atlas-search-widget.js`;

export function AiSearchWidgetHost({
  initialQuery,
  limit = 8,
  className,
  autoNavigate = true,
  tenantId = "atlas-default",
  clientId,
  apiBaseUrl,
  destinationBaseUrl,
  scriptUrl,
}: AiSearchWidgetHostProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<WidgetController | null>(null);

  const mountWidget = useCallback(() => {
    if (!containerRef.current || !window.AtlasSearchWidget) {
      return;
    }

    controllerRef.current?.destroy?.();

    const controller = window.AtlasSearchWidget.mount({
      container: containerRef.current,
      tenantId,
      clientId: clientId ?? defaultClientId,
      limit,
      autoNavigate,
      initialQuery,
      apiBaseUrl: normalizeBaseUrl(apiBaseUrl ?? defaultApiBaseUrl),
      destinationBaseUrl: destinationBaseUrl ?? defaultDestinationBaseUrl,
    });

    controllerRef.current = controller ?? null;
  }, [apiBaseUrl, autoNavigate, clientId, destinationBaseUrl, initialQuery, limit, tenantId]);

  useEffect(() => {
    mountWidget();

    return () => {
      controllerRef.current?.destroy?.();
      controllerRef.current = null;
    };
  }, [mountWidget]);

  return (
    <>
      <Script src={scriptUrl ?? defaultWidgetScriptUrl} strategy="afterInteractive" onLoad={mountWidget} />
      <div ref={containerRef} className={className} />
    </>
  );
}
