"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function isFaqAnchor(hash: string): boolean {
  return /^#faq-\d+$/i.test(hash);
}

function normalizeHash(hash: string): string {
  return hash.startsWith("#") ? hash : `#${hash}`;
}

export function RouteScrollGuard() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    const currentHash = window.location.hash;
    const pathChanged = previousPathname.current !== null && previousPathname.current !== pathname;
    previousPathname.current = pathname;

    // Defensive cleanup in case any script leaves viewport locked.
    document.documentElement.style.overflow = "";
    document.documentElement.style.overflowY = "";
    document.documentElement.style.position = "";
    document.documentElement.style.top = "";
    document.body.style.overflow = "";
    document.body.style.overflowY = "";
    document.body.style.position = "";
    document.body.style.top = "";

    if (pathChanged && !isFaqAnchor(currentHash)) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (isFaqAnchor(currentHash)) {
      const target = document.querySelector<HTMLElement>(normalizeHash(currentHash));
      target?.scrollIntoView({ block: "start", behavior: "auto" });
    }
  }, [pathname, searchParams]);

  return null;
}
