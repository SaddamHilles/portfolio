import Link from "next/link";
import { site } from "@/data/site";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-[13px] tracking-[0.12em] text-ink-faint uppercase">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap gap-6 text-[13px] tracking-[0.14em] text-ink-muted uppercase">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={site.social.twitter}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            Twitter
          </a>
          <a href={site.social.email} className="transition-colors hover:text-ink">
            {t.footer.email}
          </a>
          <Link
            href={localizedPath(locale, "/work")}
            className="transition-colors hover:text-ink"
          >
            {t.footer.selectedWork}
          </Link>
        </div>
      </div>
    </footer>
  );
}
