import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-12%] right-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(212,180,131,0.12),transparent_62%)]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(143,173,152,0.08),transparent_64%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div
          className="mb-10 flex flex-wrap items-center gap-3 animate-rise"
          style={{ animationDelay: "40ms" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-bg-elevated px-3 py-1.5 text-[11px] tracking-[0.18em] text-ink-muted uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-sage opacity-70 animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-sage" />
            </span>
            {site.availability}
          </span>
          <span className="text-[11px] tracking-[0.18em] text-ink-faint uppercase">
            {site.location} · {site.role}
          </span>
        </div>

        <h1
          className="max-w-5xl font-serif text-[18vw] leading-[0.86] tracking-[-0.035em] text-ink sm:text-[12vw] lg:text-[7.4rem] animate-rise"
          style={{ animationDelay: "120ms" }}
        >
          Saddam
          <br />
          <span className="italic text-accent">Hilles</span>
        </h1>

        <p
          className="mt-10 max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9 animate-rise"
          style={{ animationDelay: "220ms" }}
        >
          {site.headline}
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-4 animate-rise"
          style={{ animationDelay: "320ms" }}
        >
          <Link
            href="/work"
            className="rounded-full bg-ink px-6 py-3 text-[13px] tracking-[0.14em] text-bg uppercase transition-colors hover:bg-accent hover:text-bg"
          >
            View selected work
          </Link>
          <a
            href={site.social.email}
            className="rounded-full border border-line-strong px-6 py-3 text-[13px] tracking-[0.14em] text-ink-muted uppercase transition-colors hover:border-accent hover:text-accent"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
