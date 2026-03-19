import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "外国人向け住宅ガイド | 易澤居 EasyRent 新竹",
  description:
    "新竹で生活・賃貸する外国人のための実践的なガイドとヒント。日本語版コンテンツは近日公開予定です。",
  alternates: {
    canonical: "https://www.easyrents.xyz/ja/blog",
    languages: {
      "zh-TW": "https://www.easyrents.xyz/zh/blog",
      "en-US": "https://www.easyrents.xyz/en/blog",
      "ja-JP": "https://www.easyrents.xyz/ja/blog",
    },
  },
};

export default function JaBlogPage() {
  return (
    <section
      className="min-h-[60dvh] flex flex-col items-center justify-center px-6 py-24 text-center"
      style={{ background: "var(--surface)" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--teal)" }}
      >
        ガイド &amp; 情報
      </p>
      <h1
        className="text-[clamp(2rem,1.5rem+2.5vw,3.5rem)] font-bold leading-tight tracking-tighter text-balance mb-4"
        style={{ color: "var(--text)" }}
      >
        日本語ガイドは近日公開
      </h1>
      <p
        className="text-base leading-relaxed max-w-[48ch] text-pretty mb-10"
        style={{ color: "var(--text-muted)" }}
      >
        新竹への赴任・転居を考えている方向けに、賃貸契約のポイント、エリア解説、竹科の住宅手当に関する日本語ガイドを準備中です。
      </p>
      <Link
        href="/ja/contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white"
        style={{ background: "var(--blue)" }}
      >
        日本語でお問い合わせ <ArrowRight size={16} weight="bold" />
      </Link>
    </section>
  );
}
