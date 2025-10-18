// src/hooks/useLanguage.ts
import { useCallback, useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    i18next?: {
      changeLanguage: (lng: string) => Promise<void> | void;
      language?: string;
      on?: (event: "languageChanged", cb: (lng: string) => void) => void;
      off?: (event: "languageChanged", cb: (lng: string) => void) => void;
    };
  }
}

const STORAGE_KEY = "app.language";

// Map external locale variants to your app's exact codes
const CANON: Record<string, string> = {
  "en": "en",
  "en-us": "en",

  "es": "es",
  "es-es": "es",

  "hi": "hi",
  "hi-in": "hi",

  "ne": "ne",
  "ne-np": "ne"
};

function canon(lng?: string): string {
  if (!lng) return "en"; // default = English (US)
  const key = lng.toLowerCase();
  return CANON[key] ?? "en";
}

function safeGetStored(): string | null {
  try {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null; // private mode / blocked storage
  }
}

function safeSetStored(code: string) {
  try {
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // ignore; don't break UX over storage issues
  }
}

export function useLanguage() {
  // Initial value priority: localStorage -> i18next -> "en"
  const initial = useMemo(() => {
    const fromStorage = safeGetStored();
    if (fromStorage) return canon(fromStorage);

    const fromI18n = typeof window !== "undefined" ? window.i18next?.language : undefined;
    return canon(fromI18n);
  }, []);

  // Store the exact app code ("en", "en-GB", etc.)
  const [current, setCurrent] = useState<string>(initial);

  // Keep in sync with i18next (and persist when it changes externally)
  useEffect(() => {
    const i18n = window.i18next;
    const handler = (lng: string) => {
      const next = canon(lng);
      setCurrent(next);
      safeSetStored(next);
    };

    if (i18n?.on) {
      i18n.on("languageChanged", handler);
      // one-shot sync in case i18n finished init after mount
      if (i18n.language) handler(i18n.language);
      return () => i18n.off?.("languageChanged", handler);
    }
  }, []);

  const setLanguage = useCallback((code: string) => {
    const next = canon(code);
    setCurrent(next);      // optimistic UI
    safeSetStored(next);   // persist

    try {
      const res = window.i18next?.changeLanguage?.(next);
      if (res && typeof (res as Promise<void>).then === "function") {
        (res as Promise<void>).catch((e) =>
          console.warn(`[useLanguage] changeLanguage('${next}') failed:`, e)
        );
      }
    } catch (e) {
      console.warn(`[useLanguage] changeLanguage('${next}') threw:`, e);
    }
  }, []);

  return { current, setLanguage };
}
