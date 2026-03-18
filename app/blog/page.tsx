import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "新竹外派租屋指南 | 外商員工必讀 | ExpatHome Hsinchu",
  description: "完整的新竹外派租屋指南。竹科外籍人員租屋攻略、竹北熱門區域分析、ASML 員工住宿資訊，英日中三語內容。",
  alternates: { canonical: "https://expathome-hsinchu.vercel.app/blog" },
};

const posts = [
  {
    href: "/blog/hsinchu-expat-housing-guide",
    tag: "完整指南",
    title: "2025 新竹外派租屋完整指南：竹科外籍人員必讀",
    desc: "從選區域、找房到簽約，完整解析新竹外派員工租屋流程，含英語服務資源、住宿補貼申請流程與常見注意事項。",
    date: "2025-03-18",
    readTime: "8 min",
    lang: "中文・EN",
    featured: true,
  },
  {
    href: "/blog/zhubei-expat-apartments",
    tag: "區域比較",
    title: "竹北外商公寓推薦：高鐵特區 vs 關埔重劃區完整比較",
    desc: "竹北兩大熱門外商居住區域深度比較，含交通、配套、租金行情、推薦社區完整分析。",
    date: "2025-03-15",
    readTime: "6 min",
    lang: "中文",
    featured: false,
  },
  {
    href: "/blog/asml-employee-housing-hsinchu",
    tag: "ASML 專屬",
    title: "ASML 員工新竹租屋指南：住宿補貼流程與推薦房源",
    desc: "專為 ASML 新竹員工整理的租屋攻略，包含公司住宿補貼申請流程、常見問題與推薦物件類型。",
    date: "2025-03-10",
    readTime: "5 min",
    lang: "EN・中文",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <div style={{ background: "#ffffff" }}>
      {/* ── Header ── */}
      <section className="py-16 px-6 border-b" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>租屋指南</p>
          <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)] font-bold tracking-tighter text-balance mb-3"
            style={{ color: "#0A1F1E" }}>
            外派租屋指南
          </h1>
          <p className="text-base leading-relaxed max-w-[52ch] text-pretty" style={{ color: "#52696B" }}>
            深度內容，幫助在新竹的外商員工找到理想的家
          </p>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-5">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="group block">
              <article className="rounded-2xl border overflow-hidden card-lift flex flex-col md:flex-row"
                style={{ borderColor: "#E2E8F0", background: "#ffffff" }}>
                {/* Thumbnail */}
                <div className="relative h-44 md:h-auto md:w-56 flex-shrink-0 overflow-hidden">
                  <Image
                    src="/images/blog-cover.png"
                    alt={post.title}
                    fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
                        style={{ background: "#F0FDFA", color: "#0F766E" }}>
                        {post.tag}
                      </span>
                      <span className="text-xs" style={{ color: "#9BA3AF" }}>
                        {post.date} · {post.readTime} · {post.lang}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold leading-snug mb-2 group-hover:underline text-balance"
                      style={{ color: "#0A1F1E" }}>
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-pretty" style={{ color: "#52696B" }}>
                      {post.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-4 text-sm font-semibold"
                    style={{ color: "#0F766E" }}>
                    閱讀全文 <ArrowRight size={14} weight="bold" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
