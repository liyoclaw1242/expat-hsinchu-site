import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ExpatHome Hsinchu | 新竹外商租屋專家 | 竹科外派住宅服務",
  description:
    "新竹最專業的外商租屋代管服務。英語・日語・中文三語全程服務，專為 ASML、竹科外派人員量身打造。竹北高鐵特區精選住宅，入住保障，與 Relocation Agent 深度合作。",
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app",
  },
};

const features = [
  {
    icon: "🌐",
    title: "英日中三語服務",
    desc: "合約、溝通、文件全三語，零語言障礙入住。",
  },
  {
    icon: "🔍",
    title: "入住前驗屋保障",
    desc: "入住前拍照記錄房況，退租押金有憑有據。",
  },
  {
    icon: "🤝",
    title: "Relocation 合作夥伴",
    desc: "Santa Fe、Crown Relocations 等搬遷公司指定合作夥伴。",
  },
  {
    icon: "🏢",
    title: "竹科外商專業知識",
    desc: "深懂 ASML、Applied Materials 外商住宿補貼流程。",
  },
  {
    icon: "📱",
    title: "24/7 緊急支援",
    desc: "LINE、WhatsApp 即時回覆，維修快速到位。",
  },
  {
    icon: "📊",
    title: "透明月報管理",
    desc: "每月收租、維修、水電費明細一覽無遺。",
  },
];

const companies = ["ASML", "Applied Materials", "Lam Research", "Tokyo Electron", "KLA", "Synopsys", "Cadence"];

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
    lang: "English",
    flag: "🇳🇱",
    text: "ExpatHome made my relocation to Hsinchu incredibly smooth. They handled everything in English — exactly what I needed as an expat.",
  },
  {
    name: "田中 健一",
    company: "東京エレクトロン台湾",
    lang: "日本語",
    flag: "🇯🇵",
    text: "日本語対応がとても助かりました。竹北の物件選びから入居後のサポートまで、安心してお任せできました。",
  },
  {
    name: "李先生",
    company: "房東・竹北",
    lang: "中文",
    flag: "🇹🇼",
    text: "把房子交給他們管完全不用操心，每月準時收到租金和管理報告，租的都是外商員工，品質穩定。",
  },
];

const blogPosts = [
  {
    href: "/blog/hsinchu-expat-housing-guide",
    emoji: "🗺️",
    label: "完整指南",
    title: "2025 新竹外派租屋完整指南",
    desc: "從選區域、找房到簽約，含英語服務資源與住宿補貼流程。",
    readTime: "8 min",
    lang: "中文 · EN",
  },
  {
    href: "/blog/zhubei-expat-apartments",
    emoji: "🏙️",
    label: "區域比較",
    title: "竹北高鐵特區 vs 關埔重劃區",
    desc: "交通、機能、租金行情，找到最適合你的外商公寓。",
    readTime: "6 min",
    lang: "中文",
  },
  {
    href: "/blog/asml-employee-housing-hsinchu",
    emoji: "🔬",
    label: "ASML 專屬",
    title: "ASML 員工新竹住宿完整指南",
    desc: "住宿補貼申請流程、推薦房型，中英雙語。",
    readTime: "5 min",
    lang: "EN · 中文",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ExpatHome Hsinchu",
    description: "新竹外商租屋代管，英日中三語服務，專為竹科外派人員",
    url: "https://expathome-hsinchu.vercel.app",
    areaServed: ["新竹市", "新竹縣", "竹北市"],
    availableLanguage: ["Chinese", "English", "Japanese"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative bg-[#0f1c3f] overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.png"
            alt="竹北新竹城市夜景"
            fill
            className="object-cover object-center"
            priority
          />
          {/* overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c3f]/90 via-[#0f1c3f]/75 to-[#0f1c3f]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-1.5 text-indigo-200 text-xs font-semibold tracking-wide uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            竹科外派人員首選租屋代管
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
            Your Home
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-amber-300 bg-clip-text text-transparent">
              in Hsinchu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-3 font-medium tracking-wide">
            In English &nbsp;·&nbsp; In Japanese &nbsp;·&nbsp; 中文
          </p>

          <p className="text-base md:text-lg text-slate-400 mb-12 max-w-xl leading-relaxed">
            竹科外派人員的租屋代管專家。從找房、驗屋到全程管理，三語零障礙，讓您安心住在新竹。
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-indigo-900/40"
            >
              免費諮詢
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-colors"
            >
              查看房源
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-3 gap-6 max-w-sm">
            {[
              { num: "100+", label: "服務外籍租客" },
              { num: "3", label: "語言支援" },
              { num: "24h", label: "緊急響應" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-white">{s.num}</div>
                <div className="text-slate-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-y border-slate-100 bg-slate-50 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">服務外商員工包含</span>
            {companies.map((c) => (
              <span key={c} className="text-slate-400 text-sm font-semibold">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-wider mb-3">為什麼選我們</p>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              不只是仲介，<br />是你在新竹的夥伴
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`card-hover rounded-2xl p-7 border ${i === 0 ? "bg-indigo-600 border-indigo-600 text-white" : "bg-white border-slate-100 shadow-sm"}`}
              >
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className={`text-lg font-bold mb-2 ${i === 0 ? "text-white" : "text-slate-900"}`}>{f.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? "text-indigo-200" : "text-slate-500"}`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-wider mb-3">服務流程</p>
            <h2 className="text-4xl font-bold text-slate-900">從第一次諮詢<br />到入住，五個步驟</h2>
          </div>

          <div className="relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-100" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="relative flex flex-col items-center text-center z-10">
                  <div className="w-16 h-16 bg-white border-2 border-indigo-200 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-indigo-600 font-bold text-sm">{s.n}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-wider mb-3">客戶評價</p>
            <h2 className="text-4xl font-bold text-slate-900">三語客戶，同樣的好評</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                  <div className="text-2xl">{t.flag}</div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="bg-[#0f1c3f] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-3">租屋指南</p>
              <h2 className="text-4xl font-bold text-white">深度內容，<br />幫你在新竹找到家</h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-1.5 text-indigo-300 hover:text-white text-sm font-medium transition-colors">
              查看全部
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.href} href={post.href} className="group block">
                <article className="h-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src="/images/blog-cover.png"
                      alt={post.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-indigo-300 text-xs font-semibold uppercase tracking-wider">{post.label}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <span>{post.readTime} read</span>
                      <span>·</span>
                      <span className="text-indigo-400">{post.lang}</span>
                    </div>
                    <h3 className="font-bold text-white text-base mb-2 group-hover:text-indigo-300 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{post.desc}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, white 0%, transparent 50%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            準備在新竹找到<br />理想的家了嗎？
          </h2>
          <p className="text-indigo-200 text-lg mb-10">
            免費諮詢，英日中均可溝通。告訴我們您的需求，我們為您量身配對。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors shadow-xl"
            >
              📱 LINE 免費諮詢
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              📧 Email 聯絡
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
