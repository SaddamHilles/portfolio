"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong font-serif text-[13px] text-accent">
            SH
          </span>
          <span className="text-[13px] tracking-[0.18em] text-ink-muted uppercase">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
              className="nav-link text-[13px] tracking-[0.16em] text-ink-muted uppercase transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-line-strong px-4 py-2 text-[12px] tracking-[0.14em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Hire me
          </Link>
        </nav>

        <button
          type="button"
          className="relative h-10 w-10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "absolute left-2 right-2 h-px bg-ink transition-all duration-300",
              open ? "top-1/2 rotate-45" : "top-[14px]",
            )}
          />
          <span
            className={cn(
              "absolute left-2 right-2 h-px bg-ink transition-all duration-300",
              open ? "top-1/2 -rotate-45" : "top-[24px]",
            )}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg/95 px-5 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-3xl text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
