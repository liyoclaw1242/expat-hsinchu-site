import type { Metadata } from "next";
import { ChatCircle, Phone, EnvelopeSimple, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "聯絡我們 | ExpatHome Hsinchu",
  description: "聯絡 ExpatHome Hsinchu。英語、日語、中文均可。LINE、WhatsApp、Email 多管道聯絡，免費諮詢新竹外商租屋服務。",
  alternates: { canonical: "https://www.easyrents.xyz/contact" },
};

const channels = [
  {
    Icon: ChatCircle,
    title: "LINE",
    handle: "@198evsjq",
    desc: "最快速的聯絡方式，通常 1 小時內回覆",
    cta: "加 LINE 諮詢",
    href: "https://line.me/R/ti/p/@198evsjq",
    lang: "中文・English・日本語",
  },
  {
    Icon: Phone,
    title: "WhatsApp",
    handle: "0989-059-618",
    desc: "適合外籍員工習慣的聯絡方式",
    cta: "WhatsApp 諮詢",
    href: "tel:0989059618",
    lang: "English・日本語・中文",
  },
  {
    Icon: EnvelopeSimple,
    title: "Email",
    handle: "info@198evsjq.com",
    desc: "適合較複雜的需求或文件往來",
    cta: "發送 Email",
    href: "mailto:info@198evsjq.com",
    lang: "中文・English・日本語",
  },
];

const faqs = [
  {
    q: "你們服務哪些區域？",
    a: "主要服務範圍：竹北市（高鐵特區、縣治二路一帶）、新竹市（關埔重劃區、竹科周邊）。其他新竹地區請洽詢。",
  },
  {
    q: "Do you provide services in English?",
    a: "Yes, absolutely. All consultations, property tours, lease negotiations, and ongoing management are fully available in English.",
  },
  {
    q: "日本語でのサービスはありますか？",
    a: "はい、対応可能です。相談から契約、入居後のサポートまで、すべて日本語でご利用いただけます。",
  },
  {
    q: "我是房東，想把房子交給你們管，怎麼開始？",
    a: "透過 LINE 或 Email 聯絡我們，告知物件基本資料（地址、坪數、設備）。我們會安排免費評估，說明代管條件和費用，再決定是否合作。",
  },
  {
    q: "需要多久可以幫我找到租客？",
    a: "符合外商需求的物件（竹北、電梯大樓、2–3 房、家具齊全），通常 2–6 週可以找到合適租客。",
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Header ── */}
      <section className="py-16 px-6 border-b" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>聯絡我們</p>
          <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)] font-bold tracking-tighter text-balance mb-3"
            style={{ color: "#0A1F1E" }}>
            英語・日語・中文，<br />任選一種
          </h1>
          <p className="text-base leading-relaxed max-w-[52ch] text-pretty" style={{ color: "#52696B" }}>
            我們都接得住。免費諮詢，告訴我們您的需求，我們為您量身配對。
          </p>
        </div>
      </section>

      {/* ── Channels ── */}
      <section className="py-16 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {channels.map(({ Icon, title, handle, desc, cta, href, lang }) => (
              <div key={title} className="rounded-2xl border p-6 flex flex-col gap-4"
                style={{ borderColor: "#99F6E4", background: "#ffffff" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#F0FDFA" }}>
                  <Icon size={22} weight="duotone" style={{ color: "#0F766E" }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-bold mb-0.5" style={{ color: "#0A1F1E" }}>{title}</h2>
                  <p className="text-xs font-medium mb-2" style={{ color: "#0F766E" }}>{handle}</p>
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "#52696B" }}>{desc}</p>
                  <p className="text-[10px] font-medium uppercase tracking-wide" style={{ color: "#9BA3AF" }}>{lang}</p>
                </div>
                <a href={href}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
                  style={{ background: "#0369A1" }}>
                  {cta} <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            ))}
          </div>

          {/* Hours note */}
          <div className="mt-6 flex items-center gap-3 px-5 py-3.5 rounded-xl border text-sm"
            style={{ background: "#F0FDFA", borderColor: "#99F6E4", color: "#52696B" }}>
            <span className="text-base">🕘</span>
            服務時間：週一至週六 09:00–18:00 (GMT+8)
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-6" style={{ background: "#F0FDFA" }}>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>FAQ</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance"
              style={{ color: "#0A1F1E" }}>
              常見問題
            </h2>
          </div>

          <div className="divide-y rounded-2xl overflow-hidden border"
            style={{ borderColor: "#99F6E4" }}>
            {faqs.map((faq, i) => (
              <details key={i} className="group" style={{ background: "#ffffff" }}>
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none gap-4"
                  style={{ color: "#0A1F1E" }}>
                  <span className="text-sm font-medium">{faq.q}</span>
                  <span className="text-lg flex-shrink-0 transition-transform group-open:rotate-45"
                    style={{ color: "#0F766E" }}>+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-pretty"
                  style={{ color: "#52696B" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
