import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { ar } from "@/i18n/ar";
import { en } from "@/i18n/en";
import type { Dictionary } from "@/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: string): Dictionary {
  if (isLocale(locale)) return dictionaries[locale];
  return dictionaries[defaultLocale];
}
