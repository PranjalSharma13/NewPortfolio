// src/i18n/languages.ts

import type { LanguageItem } from "./types";

const flag = (cc: string) => `/flags/${cc.toLowerCase()}.svg`;

export const LANGUAGES: LanguageItem[] = [
  { code: "en",    label: "English (US)", cc: "US", icon: flag("US") },
  { code: "ne",    label: "नेपाली",        cc: "NP", icon: flag("NP") },
  { code: "hi",    label: "हिन्दी",        cc: "IN", icon: flag("IN") },
  { code: "es",    label: "Español",      cc: "ES", icon: flag("ES") },
];

export const LANG_BY_CODE = Object.fromEntries(LANGUAGES.map(l => [l.code, l]));
