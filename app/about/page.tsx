import Link from "next/link";
import type { Metadata } from "next";
import { Target, Handshake, ShieldCheck, UsersThree, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "關於我們 | ExpatHome Hsinchu | 新竹外商租屋專家",
  description: "ExpatHome Hsinchu 的故事：為什麼我們專注外商租屋代管，我們的使命、服務範圍與語言支援。",
  alternates: { canonical: "https://expathome-hsinchu.vercel.app/about" },
};

const differentiators = [
  {
    Icon: Target,
    title: "專注外商市場",
    desc: "我們不做所有客戶，我們只做外商外派人員租屋。專注讓我們比任何通才仲介都更懂這個客群的需求。",
  },
  {
    Icon: Handshake,
    title: "Relocation 生態系",
    desc: "與 Santa Fe、Crown Relocations 等國際搬遷公司建立合作，融入外商搬遷的正式流程，而非等待散客詢問。",
  },
  {
    Icon: ShieldCheck,
    title: "透明、可信賴",
    desc: "入住前驗屋拍照、三語合約、月報告。每一個環節都有紀錄，每一筆費用都說清楚。",
  },
  {
    Icon: UsersThree,
    title: "真正的三語服務",
    desc: "不只是翻譯，而是真正理解三種文化下的租屋習慣和期待。荷蘭工程師、日本駐在員、美國主管，我們都有經驗。",
  },
];

const areas = [
  { name: "竹北市", detail: "高鐵特區・縣治二路・自強南路" },
  { name: "新竹市", detail: "關埔重劃區・竹科周邊・光復路" },
  { name: "其他地區", detail: "湖口・竹東・頭份（洽詢）" },
];

const langs = [
  { flag: "🇹🇼", lang: "繁體中文", note: "主要服務語言" },
  { flag: "🇬🇧", lang: "English", note: "All services available" },
  { flag: "🇯🇵", lang: "日本語", note: "全サービス対応" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#ffffff" }}>
      {/* ── Header ── */}
      <section className="py-16 px-6 border-b" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>關於我們</p>
          <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)] font-bold tracking-tighter text-balance mb-4"
            style={{ color: "#0A1F1E" }}>
            ExpatHome Hsinchu
          </h1>
          <p className="text-base leading-relaxed max-w-[55ch] text-pretty" style={{ color: "#52696B" }}>
            我們不只是仲介，我們是外派員工在新竹的在地夥伴。
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-16 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>使命</p>
              <h2 className="text-2xl font-bold tracking-tight mb-5" style={{ color: "#0A1F1E" }}>
                讓每一位外派員工<br />在新竹都能有個家
              </h2>
              <p className="text-sm leading-relaxed text-pretty mb-4" style={{ color: "#374151" }}>
                在新竹這個全球半導體重鎮，每年有數百名外籍工程師、主管從世界各地來到這裡。
                他們為台灣的科技產業貢獻巨大，但他們面對的租屋挑戰卻鮮少有人認真解決。
              </p>
              <p className="text-sm leading-relaxed text-pretty" style={{ color: "#374151" }}>
                語言不通、合約看不懂、維修聯絡不上房東、押金被莫名扣留……
                ExpatHome Hsinchu 存在的理由很簡單：終結這些問題。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "100+", label: "服務外籍租客" },
                { num: "3", label: "語言全程支援" },
                { num: "24h", label: "緊急響應時間" },
                { num: "2+", label: "Relocation 合作夥伴" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-6 border"
                  style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
                  <div className="text-3xl font-bold tabular-nums tracking-tighter" style={{ color: "#0F766E" }}>{s.num}</div>
                  <div className="text-xs mt-1" style={{ color: "#52696B" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section className="py-16 px-6" style={{ background: "#F0FDFA" }}>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>差異化</p>
            <h2 className="text-2xl font-bold tracking-tight text-balance" style={{ color: "#0A1F1E" }}>
              為什麼我們不一樣
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6 border"
                style={{ background: "#ffffff", borderColor: "#99F6E4" }}>
                <Icon size={26} weight="duotone" style={{ color: "#0F766E" }} />
                <h3 className="text-sm font-semibold mt-4 mb-1.5" style={{ color: "#0A1F1E" }}>{title}</h3>
                <p className="text-xs leading-relaxed text-pretty" style={{ color: "#52696B" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas + Languages ── */}
      <section className="py-16 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Areas */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#0F766E" }}>服務範圍</p>
            <div className="divide-y rounded-2xl overflow-hidden border"
              style={{ borderColor: "#99F6E4" }}>
              {areas.map((a) => (
                <div key={a.name} className="flex items-center justify-between px-5 py-4"
                  style={{ background: "#ffffff" }}>
                  <span className="text-sm font-semibold" style={{ color: "#0A1F1E" }}>{a.name}</span>
                  <span className="text-xs" style={{ color: "#6B7280" }}>{a.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#0F766E" }}>語言服務</p>
            <div className="space-y-3">
              {langs.map((l) => (
                <div key={l.lang} className="flex items-center gap-4 px-5 py-4 rounded-xl border"
                  style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
                  <span className="text-2xl" aria-hidden="true">{l.flag}</span>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "#0A1F1E" }}>{l.lang}</div>
                    <div className="text-xs" style={{ color: "#6B7280" }}>{l.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 px-6 border-t" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold" style={{ color: "#0A1F1E" }}>有問題嗎？直接聯絡我們。</p>
            <p className="text-sm mt-0.5" style={{ color: "#52696B" }}>英日中均可溝通，免費諮詢</p>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white flex-shrink-0"
            style={{ background: "#0369A1" }}>
            聯絡我們 <ArrowRight size={15} weight="bold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
