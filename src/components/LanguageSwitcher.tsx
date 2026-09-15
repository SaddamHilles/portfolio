"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocalePath, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const nextLocale: Locale = locale === "en" ? "ar" : "en";
  const href = switchLocalePath(pathname, nextLocale);

  function persist() {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
  }

  return (
    <Link
      href={href}
      onClick={persist}
      className="rounded-full border border-line-strong px-3 py-1.5 text-[12px] tracking-[0.12em] text-ink-muted transition-colors hover:border-accent hover:text-accent"
      hrefLang={nextLocale}
    >
      {nextLocale === "ar" ? "العربية" : "EN"}
    </Link>
  );
}
