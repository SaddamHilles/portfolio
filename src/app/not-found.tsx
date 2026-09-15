import Link from "next/link";
import { defaultLocale, localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function NotFound() {
  const t = getDictionary(defaultLocale);
  return (
    <html lang="en">
      <body className="bg-[#0b0a09] text-[#f3efe6]">
        <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
          <p className="text-[11px] tracking-[0.22em] text-[#d4b483] uppercase">
            404
          </p>
          <h1 className="mt-4 text-5xl">{t.notFound.title}</h1>
          <Link
            href={localizedPath(defaultLocale)}
            className="mt-8 rounded-full border border-white/20 px-6 py-3 text-[13px] tracking-[0.14em] uppercase"
          >
            {t.notFound.back}
          </Link>
        </div>
      </body>
    </html>
  );
}
