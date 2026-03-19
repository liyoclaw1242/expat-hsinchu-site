import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Expat Housing Guides | 易澤居 EasyRent Hsinchu",
  description:
    "Practical guides and tips for expats living and renting in Hsinchu, Taiwan. Coming soon in English.",
  alternates: {
    canonical: "https://www.easyrents.xyz/en/blog",
    languages: {
      "zh-TW": "https://www.easyrents.xyz/zh/blog",
      "en-US": "https://www.easyrents.xyz/en/blog",
      "ja-JP": "https://www.easyrents.xyz/ja/blog",
    },
  },
};

export default function EnBlogPage() {
  return (
    <section
      className="min-h-[60dvh] flex flex-col items-center justify-center px-6 py-24 text-center"
      style={{ background: "var(--surface)" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--teal)" }}
      >
        Guides &amp; Resources
      </p>
      <h1
        className="text-[clamp(2rem,1.5rem+2.5vw,3.5rem)] font-bold leading-tight tracking-tighter text-balance mb-4"
        style={{ color: "var(--text)" }}
      >
        English guides coming soon
      </h1>
      <p
        className="text-base leading-relaxed max-w-[48ch] text-pretty mb-10"
        style={{ color: "var(--text-muted)" }}
      >
        We&apos;re preparing English-language guides for expats relocating to Hsinchu — covering
        lease tips, neighbourhood breakdowns, and Science Park housing allowances.
      </p>
      <Link
        href="/en/contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white"
        style={{ background: "var(--blue)" }}
      >
        Talk to us in English <ArrowRight size={16} weight="bold" />
      </Link>
    </section>
  );
}
