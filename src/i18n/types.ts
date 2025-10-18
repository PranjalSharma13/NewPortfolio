// src/i18n/types.ts
export type LanguageItem = {
  code: string;   // e.g., "en", "pt-BR"
  label: string;  // e.g., "English (US)"
  cc: string;     // ISO 3166-1 alpha-2, e.g., "US"
  icon: string;   // URL/path to the flag image
};
