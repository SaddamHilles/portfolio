import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-[11px] tracking-[0.22em] text-accent uppercase">404</p>
      <h1 className="mt-4 font-serif text-5xl text-ink">This page is not in the index.</h1>
      <Link
        href="/"
        className="mt-8 rounded-full border border-line-strong px-6 py-3 text-[13px] tracking-[0.14em] uppercase"
      >
        Back home
      </Link>
    </div>
  );
}
