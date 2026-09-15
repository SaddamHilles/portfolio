"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { site } from "@/data/site";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { cn } from "@/lib/utils";

export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = localizedPath(locale);
  const items = [
    { href: localizedPath(locale, "/work"), label: t.nav.work },
    { href: localizedPath(locale, "/about"), label: t.nav.about },
    { href: localizedPath(locale, "/contact"), label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link href={home} className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong font-serif text-[13px] text-accent">
            SH
          </span>
          <span className="text-[13px] tracking-[0.18em] text-ink-muted uppercase">
            {locale === "ar" ? `${t.hero.firstName} ${t.hero.lastName}` : site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
              className="nav-link text-[13px] tracking-[0.16em] text-ink-muted uppercase transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
          <Link
            href={localizedPath(locale, "/contact")}
            className="rounded-full border border-line-strong px-4 py-2 text-[12px] tracking-[0.14em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
          >
            {t.nav.hire}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="relative h-10 w-10"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "absolute start-2 end-2 h-px bg-ink transition-all duration-300",
                open ? "top-1/2 rotate-45" : "top-[14px]",
              )}
            />
            <span
              className={cn(
                "absolute start-2 end-2 h-px bg-ink transition-all duration-300",
                open ? "top-1/2 -rotate-45" : "top-[24px]",
              )}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg/95 px-5 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-3xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={localizedPath(locale, "/contact")}
              className="font-serif text-3xl text-accent"
            >
              {t.nav.hire}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
