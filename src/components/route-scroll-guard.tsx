"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const FORCE_TOP_TIMINGS_MS = [0, 120, 420] as const;

function isFaqAnchor(hash: string): boolean {
  return /^#faq-\d+$/i.test(hash);
}

function normalizeHash(hash: string): string {
  return hash.startsWith("#") ? hash : `#${hash}`;
}

function unlockViewport(): void {
  const html = document.documentElement;
  const body = document.body;

  html.style.overflow = "";
  html.style.overflowY = "";
  html.style.position = "";
  html.style.top = "";
  html.style.left = "";
  html.style.right = "";
  html.style.width = "";

  body.style.overflow = "";
  body.style.overflowY = "";
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
}

function scrollToTopNow(): void {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function scrollToFaqAnchor(hash: string): void {
  const target = document.querySelector<HTMLElement>(normalizeHash(hash));
  target?.scrollIntoView({ block: "start", behavior: "auto" });
}

export function RouteScrollGuard() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    const currentHash = window.location.hash;
    const pathChanged = previousPathname.current !== null && previousPathname.current !== pathname;
    const hasFaqHash = isFaqAnchor(currentHash);
    const faqTarget = hasFaqHash
      ? document.querySelector<HTMLElement>(normalizeHash(currentHash))
      : null;
    previousPathname.current = pathname;
    const cleanupTasks: Array<() => void> = [];

    unlockViewport();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.attributeName === "style") {
          unlockViewport();
          break;
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    cleanupTasks.push(() => observer.disconnect());

    const onPageShow = () => unlockViewport();
    const onVisibilityChange = () => {
      if (!document.hidden) {
        unlockViewport();
      }
    };

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibilityChange);
    cleanupTasks.push(() => window.removeEventListener("pageshow", onPageShow));
    cleanupTasks.push(() => document.removeEventListener("visibilitychange", onVisibilityChange));

    if (pathChanged && !faqTarget) {
      for (const delay of FORCE_TOP_TIMINGS_MS) {
        const timer = window.setTimeout(() => {
          unlockViewport();
          scrollToTopNow();
        }, delay);

        cleanupTasks.push(() => window.clearTimeout(timer));
      }
    } else if (faqTarget) {
      const timer = window.setTimeout(() => {
        unlockViewport();
        scrollToFaqAnchor(currentHash);
      }, 0);

      cleanupTasks.push(() => window.clearTimeout(timer));
    } else if (!hasFaqHash) {
      // On same-path query-only navigations, keep normal top behavior when no hash target is present.
      const timer = window.setTimeout(() => {
        unlockViewport();
        scrollToTopNow();
      }, 0);

      cleanupTasks.push(() => window.clearTimeout(timer));
    }

    return () => {
      for (const cleanup of cleanupTasks) {
        cleanup();
      }
    };
  }, [pathname, searchParams]);

  return null;
}
