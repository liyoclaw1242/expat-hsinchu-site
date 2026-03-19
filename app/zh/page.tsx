import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Globe,
  MagnifyingGlass,
  Handshake,
  Buildings,
  ChatCircle,
  ChartBar,
  ArrowRight,
  Star,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "易澤居 EasyRent | 新竹外商租屋專家 | 竹科外派住宅服務",
  description:
    "新竹最專業的外商租屋代管服務。英語・日語・中文三語全程服務，專為 ASML、竹科外派人員量身打造。竹北高鐵特區精選住宅，入住保障，與 Relocation Agent 深度合作。",
  alternates: { canonical: "https://www.easyrents.xyz" },
};

const features = [
  {
    Icon: Globe,
    title: "英日中三語服務",
    desc: "合約、溝通、文件全三語，零語言障礙入住。",
  },
  {
    Icon: MagnifyingGlass,
    title: "入住前驗屋保障",
    desc: "入住前拍照記錄房況，退租押金有憑有據。",
  },
  {
    Icon: Handshake,
    title: "Relocation 合作夥伴",
    desc: "Santa Fe、Crown Relocations 等搬遷公司指定合作夥伴。",
  },
  {
    Icon: Buildings,
    title: "竹科外商專業知識",
    desc: "深懂 ASML、Applied Materials 外商住宿補貼流程。",
  },
  {
    Icon: ChatCircle,
    title: "即時三語支援",
    desc: "LINE、WhatsApp 即時回覆，維修快速到位。",
  },
  {
    Icon: ChartBar,
    title: "透明月報管理",
    desc: "每月收租、維修、水電費明細一覽無遺。",
  },
];

const companies = ["ASML", "Applied Materials", "Lam Research", "Tokyo Electron", "KLA", "Synopsys"];

const steps = [
  { n: "01", title: "需求諮詢", desc: "了解預算、偏好、入住時間" },
  { n: "02", title: "精選配對", desc: "篩選符合條件的竹北精選物件" },
  { n: "03", title: "帶看驗屋", desc: "陪同看房，入住前完整驗屋" },
  { n: "04", title: "三語簽約", desc: "中英日三語合約，清晰透明" },
  { n: "05", title: "持續代管", desc: "維修、收租、月報，全程管理" },
];

const testimonials = [
  {
    name: "Thomas M.",
    company: "ASML Taiwan",
    flag: "🇳🇱",
    text: "易澤居 made my relocation to Hsinchu incredibly smooth. They handled everything in English — exactly what I needed.",
  },
  {
    name: "田中 健一",
    company: "東京エレクトロン台湾",
    flag: "🇯🇵",
    text: "日本語対応がとても助かりました。竹北の物件選びから入居後のサポートまで、安心してお任せできました。",
  },
  {
    name: "李先生",
    company: "房東・竹北",
    flag: "🇹🇼",
    text: "把房子交給他們管完全不用操心，每月準時收租和管理報告，租的都是外商員工，品質穩定。",
  },
];

const blogPosts = [
  {
    href: "/blog/hsinchu-expat-housing-guide",
    tag: "完整指南",
    title: "2025 新竹外派租屋完整指南",
    desc: "從選區域、找房到簽約，含英語服務資源與住宿補貼流程。",
    meta: "8 min · 中文 · EN",
  },
  {
    href: "/blog/zhubei-expat-apartments",
    tag: "區域比較",
    title: "竹北高鐵特區 vs 關埔重劃區",
    desc: "交通、機能、租金行情，找到最適合你的外商公寓。",
    meta: "6 min · 中文",
  },
  {
    href: "/blog/asml-employee-housing-hsinchu",
    tag: "ASML 專屬",
    title: "ASML 員工新竹住宿完整指南",
    desc: "住宿補貼申請流程、推薦房型，中英雙語。",
    meta: "5 min · EN · 中文",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "易澤居 EasyRent",
    description: "新竹外商租屋代管，英日中三語服務，專為竹科外派人員",
    url: "https://www.easyrents.xyz",
    areaServed: ["新竹市", "新竹縣", "竹北市"],
    availableLanguage: ["Chinese", "English", "Japanese"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══ HERO ══ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden"
        style={{ background: "var(--hero-bg)" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.png"
            alt="竹北新竹城市夜景"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          {/* directional overlay — text readable on left */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #0A1F1E 45%, #0A1F1E88 70%, transparent 100%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-8 border"
            style={{ background: "oklch(96% 0.05 178 / 0.12)", borderColor: "oklch(80% 0.1 178 / 0.3)", color: "#5EEAD4" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5EEAD4" }} />
            竹科外派人員首選租屋代管
          </div>

          <h1 className="text-[clamp(3rem,2rem+5vw,5rem)] font-bold leading-none tracking-tighter text-balance mb-5 max-w-2xl"
            style={{ color: "#F0FDFA" }}>
            Your Home<br />
            <span style={{ color: "#5EEAD4" }}>in Hsinchu</span>
          </h1>

          <p className="text-sm font-semibold tracking-[0.12em] uppercase mb-5"
            style={{ color: "#99F6E4", opacity: 0.9 }}>
            In English &nbsp;·&nbsp; In Japanese &nbsp;·&nbsp; 中文
          </p>

          <p className="text-base leading-relaxed mb-10 max-w-[55ch] text-pretty"
            style={{ color: "oklch(85% 0.015 178)" }}>
            竹科外派人員的租屋代管專家。從找房、驗屋到全程管理，三語零障礙，讓您安心住在新竹。
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-colors"
              style={{ background: "var(--blue)" }}
            >
              免費諮詢
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border transition-colors"
              style={{ borderColor: "oklch(80% 0.1 178 / 0.4)", color: "#F0FDFA", background: "transparent" }}
            >
              查看房源
            </Link>
          </div>

          {/* Stats — tabular-nums */}
          <div className="mt-16 pt-10 border-t grid grid-cols-3 gap-6 max-w-xs"
            style={{ borderColor: "oklch(80% 0.05 178 / 0.2)" }}>
            {[
              { num: "100+", label: "服務外籍租客" },
              { num: "3", label: "語言支援" },
              { num: "24h", label: "緊急響應" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold tabular-nums" style={{ color: "#F0FDFA" }}>{s.num}</div>
                <div className="text-xs mt-0.5" style={{ color: "#6ecfc7" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR ══ */}
      <section className="border-b py-4" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#3d7870" }}>
              服務外商員工包含
            </span>
            {companies.map((c) => (
              <span key={c} className="text-sm font-semibold" style={{ color: "var(--text-subtle)" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="py-24 px-6" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-7xl mx-auto">
          {/* Left-aligned heading — not centered */}
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>
              為什麼選我們
            </p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance"
              style={{ color: "var(--text)" }}>
              不只是仲介，<br />是你在新竹的夥伴
            </h2>
          </div>

          {/* No identical icon-heading-text grid — use split layout for first card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Feature 1: large card */}
            <div className="md:col-span-5 rounded-2xl p-8 flex flex-col justify-between min-h-[260px] card-lift"
              style={{ background: "var(--teal)" }}>
              <Globe size={36} weight="duotone" style={{ color: "#5EEAD4" }} />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{features[0].title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#d1f5f0" }}>{features[0].desc}</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.slice(1).map(({ Icon, title, desc }) => (
                <div key={title}
                  className="rounded-2xl p-6 border card-lift"
                  style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                  <Icon size={28} weight="duotone" style={{ color: "var(--teal)" }} />
                  <h3 className="text-base font-semibold mt-4 mb-1.5" style={{ color: "var(--text)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="py-24 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>服務流程</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance"
              style={{ color: "var(--text)" }}>
              從第一次諮詢到入住，五個步驟
            </h2>
          </div>

          {/* Steps: use border-l for visual connection, not identical cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px border rounded-2xl overflow-hidden"
            style={{ borderColor: "var(--border)", background: "#99F6E4" }}>
            {steps.map((s) => (
              <div key={s.n} className="p-6 flex flex-col gap-4"
                style={{ background: "var(--surface)" }}>
                <span aria-hidden="true" className="text-3xl font-bold tabular-nums" style={{ color: "var(--teal)", opacity: 0.25 }}>{s.n}</span>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--text)" }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-24 px-6" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>客戶評價</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance"
              style={{ color: "var(--text)" }}>
              三語客戶，同樣的好評
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl p-8 border card-lift"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} weight="fill" style={{ color: "#D97706" }} />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed mb-6 text-pretty"
                  style={{ color: "var(--text-secondary)" }}>
                  "{t.text}"
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <span className="text-2xl" aria-hidden="true">{t.flag}</span>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--text-subtle)" }}>{t.company}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BLOG ══ */}
      <section className="py-24 px-6" style={{ background: "var(--hero-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#5EEAD4" }}>租屋指南</p>
              <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance"
                style={{ color: "#F0FDFA" }}>
                深度內容，<br />幫你在新竹找到家
              </h2>
            </div>
            <Link href="/blog"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "#5EEAD4" }}>
              查看全部 <ArrowRight size={16} weight="bold" />
            </Link>
          </div>

          {/* Blog grid: asymmetric — first post larger */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Featured post */}
            <Link href={blogPosts[0].href} className="md:col-span-6 group block">
              <article className="h-full rounded-2xl overflow-hidden border card-lift"
                style={{ borderColor: "oklch(40% 0.05 178 / 0.3)" }}>
                <div className="relative h-52 overflow-hidden">
                  <Image src="/images/blog-cover.png" alt={blogPosts[0].title} fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0A1F1E 0%, transparent 60%)" }} />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-md"
                    style={{ background: "var(--teal)", color: "#F0FDFA" }}>
                    {blogPosts[0].tag}
                  </span>
                </div>
                <div className="p-6" style={{ background: "oklch(14% 0.015 178)" }}>
                  <p className="text-xs mb-2" style={{ color: "#5EEAD4", opacity: 0.7 }}>{blogPosts[0].meta}</p>
                  <h3 className="text-base font-bold leading-snug mb-2 group-hover:underline"
                    style={{ color: "#F0FDFA" }}>
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(75% 0.015 178)" }}>{blogPosts[0].desc}</p>
                </div>
              </article>
            </Link>

            {/* Smaller posts */}
            <div className="md:col-span-6 flex flex-col gap-5">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.href} href={post.href} className="group block flex-1">
                  <article className="h-full rounded-2xl border p-6 card-lift flex gap-4"
                    style={{ background: "oklch(14% 0.015 178)", borderColor: "oklch(40% 0.05 178 / 0.3)" }}>
                    <div className="relative w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden">
                      <Image src="/images/blog-cover.png" alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded"
                          style={{ background: "#0F766E22", color: "#5EEAD4" }}>{post.tag}</span>
                        <span className="text-[11px]" style={{ color: "oklch(60% 0.015 178)" }}>{post.meta}</span>
                      </div>
                      <h3 className="text-sm font-bold leading-snug group-hover:underline"
                        style={{ color: "#F0FDFA" }}>
                        {post.title}
                      </h3>
                      <p className="text-xs mt-1 leading-relaxed line-clamp-2"
                        style={{ color: "oklch(65% 0.015 178)" }}>
                        {post.desc}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 px-6" style={{ background: "var(--blue)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance text-white mb-4">
            準備在新竹找到理想的家了嗎？
          </h2>
          <p className="text-base leading-relaxed mb-10 text-pretty max-w-[55ch] mx-auto"
            style={{ color: "oklch(92% 0.02 220)" }}>
            免費諮詢，英日中均可溝通。告訴我們您的需求，我們為您量身配對。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-colors"
              style={{ background: "var(--card-bg)", color: "var(--blue)" }}>
              LINE 免費諮詢
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border transition-colors text-white"
              style={{ borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}>
              Email 聯絡
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
