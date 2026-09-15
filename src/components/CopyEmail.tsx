"use client";

import { useState } from "react";
import { site } from "@/data/site";

export function CopyEmail({
  copyLabel,
  copiedLabel,
}: {
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = site.social.email;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-line-strong px-6 py-3 text-[13px] tracking-[0.14em] text-ink-muted uppercase transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
