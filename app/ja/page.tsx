import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Globe, MagnifyingGlass, Handshake, Buildings, ChatCircle, ChartBar, ArrowRight, Star } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "ExpatHome Hsinchu | 新竹駐在員向け賃貸・住宅管理サービス",
  description:
    "新竹科学工業園区（竹科）に勤務する駐在員向けの賃貸・住宅管理サービス。日本語完全対応。ASML、東京エレクトロン、ラムリサーチ等の企業の駐在員実績多数。竹北高鐵エリアの厳選物件、入居前検査、三ヶ国語契約。",
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app/ja",
    languages: {
      "zh-TW": "https://expathome-hsinchu.vercel.app",
      "en-US": "https://expathome-hsinchu.vercel.app/en",
      "ja-JP": "https://expathome-hsinchu.vercel.app/ja",
    },
  },
};

const features = [
  { Icon: Globe, title: "日本語完全対応", desc: "契約書・やり取り・各種書類すべて日本語対応。言語の壁ゼロで入居まで安心。" },
  { Icon: MagnifyingGlass, title: "入居前物件検査", desc: "入居前に写真撮影・状態記録を実施。退去時の敷金トラブルを未然に防ぎます。" },
  { Icon: Handshake, title: "リロケーション連携", desc: "Santa Fe Relocations・Crown Relocationsと正式提携。引越しから入居後まで一気通貫。" },
  { Icon: Buildings, title: "竹科企業の実績", desc: "ASML・東京エレクトロン・ラムリサーチ等の住宅補助制度・社内手続きを熟知。" },
  { Icon: ChatCircle, title: "迅速な日本語サポート", desc: "LINE・WhatsAppで日本語対応。修繕対応もスピーディー、ストレスなし。" },
  { Icon: ChartBar, title: "透明な月次レポート", desc: "家賃入金・修繕履歴・光熱費明細を毎月オーナーへ報告。" },
];

const steps = [
  { n: "01", title: "ご相談", desc: "ご予算・ご要望・入居希望日をお聞かせください" },
  { n: "02", title: "物件マッチング", desc: "竹北エリアから条件に合う物件をご提案" },
  { n: "03", title: "内見・検査", desc: "同行内見・入居前状態を詳細に記録" },
  { n: "04", title: "三ヶ国語契約", desc: "日本語・中国語・英語の対照契約書" },
  { n: "05", title: "入居後管理", desc: "修繕・家賃管理・月次レポートをすべて代行" },
];

const testimonials = [
  { name: "田中 健一", company: "東京エレクトロン台湾", flag: "🇯🇵", text: "日本語対応がとても助かりました。竹北の物件選びから入居後のサポートまで、安心してお任せできました。" },
  { name: "山田 誠", company: "ASML Japan → Taiwan", flag: "🇯🇵", text: "台湾での賃貸契約は不安でしたが、ExpatHomeが日本語で全部サポートしてくれました。契約書も日中日本語対照で安心です。" },
  { name: "李さん", company: "オーナー・竹北", flag: "🇹🇼", text: "日系企業の駐在員さんを定期的に紹介してもらっています。毎月きちんとレポートも届き、完全に任せられます。" },
];

export default function JapaneseHomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden" style={{ background: "#0A1F1E" }}>
        <div className="absolute inset-0">
          <Image src="/images/hero-banner.png" alt="竹北新竹の夜景" fill className="object-cover object-center opacity-40" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A1F1E 45%, #0A1F1E88 70%, transparent)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-8 border"
            style={{ background: "oklch(96% 0.05 178 / 0.12)", borderColor: "oklch(80% 0.1 178 / 0.3)", color: "#5EEAD4" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5EEAD4" }} />
            竹科駐在員向け賃貸管理専門
          </div>

          <h1 className="text-[clamp(3rem,2rem+5vw,5rem)] font-bold leading-none tracking-tighter text-balance mb-5 max-w-2xl" style={{ color: "#F0FDFA" }}>
            Your Home<br />
            <span style={{ color: "#5EEAD4" }}>in Hsinchu</span>
          </h1>

          <p className="text-sm font-semibold tracking-[0.12em] uppercase mb-5" style={{ color: "#99F6E4", opacity: 0.9 }}>
            In English · In Japanese · 中文
          </p>
          <p className="text-base leading-relaxed mb-10 max-w-[52ch] text-pretty" style={{ color: "oklch(85% 0.015 178)" }}>
            ASML・東京エレクトロン・新竹科学工業園区の駐在員向け賃貸管理サービス。日本語完全対応、安心してお任せください。
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white" style={{ background: "#0369A1" }}>
              無料相談 <ArrowRight size={16} weight="bold" />
            </Link>
            <Link href="/properties" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border" style={{ borderColor: "oklch(80% 0.1 178 / 0.4)", color: "#F0FDFA" }}>
              物件を見る
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t grid grid-cols-3 gap-6 max-w-xs" style={{ borderColor: "oklch(80% 0.05 178 / 0.2)" }}>
            {[{ num: "100+", label: "外国人入居者実績" }, { num: "3", label: "対応言語" }, { num: "24h", label: "緊急対応" }].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold tabular-nums" style={{ color: "#F0FDFA" }}>{s.num}</div>
                <div className="text-xs mt-0.5" style={{ color: "#99F6E4", opacity: 0.7 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-b py-4" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#0F766E", opacity: 0.6 }}>対応企業（一部）</span>
          {["ASML", "東京エレクトロン", "ラムリサーチ", "KLA", "Synopsys", "アプライドマテリアルズ"].map((c) => (
            <span key={c} className="text-sm font-semibold" style={{ color: "#0A1F1E", opacity: 0.45 }}>{c}</span>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>選ばれる理由</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance" style={{ color: "#0A1F1E" }}>
              仲介以上の存在—<br />新竹でのパートナー
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5 rounded-2xl p-8 flex flex-col justify-between min-h-[260px] card-lift" style={{ background: "#0F766E" }}>
              <Globe size={36} weight="duotone" style={{ color: "#5EEAD4" }} />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{features[0].title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(92% 0.04 178)" }}>{features[0].desc}</p>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.slice(1).map(({ Icon, title, desc }) => (
                <div key={title} className="rounded-2xl p-6 border card-lift" style={{ background: "#ffffff", borderColor: "#99F6E4" }}>
                  <Icon size={28} weight="duotone" style={{ color: "#0F766E" }} />
                  <h3 className="text-base font-semibold mt-4 mb-1.5" style={{ color: "#0A1F1E" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#52696B" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-6" style={{ background: "#F0FDFA" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>ご利用の流れ</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance" style={{ color: "#0A1F1E" }}>
              ご相談から入居まで、5ステップ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px border rounded-2xl overflow-hidden" style={{ borderColor: "#99F6E4", background: "#99F6E4" }}>
            {steps.map((s) => (
              <div key={s.n} className="p-6 flex flex-col gap-4" style={{ background: "#F0FDFA" }}>
                <span className="text-3xl font-bold tabular-nums" style={{ color: "#0F766E", opacity: 0.25 }}>{s.n}</span>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "#0A1F1E" }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52696B" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>お客様の声</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance" style={{ color: "#0A1F1E" }}>
              日本人駐在員から選ばれています
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl p-8 border card-lift" style={{ background: "#ffffff", borderColor: "#E2E8F0" }}>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" style={{ color: "#D97706" }} />)}
                </div>
                <blockquote className="text-sm leading-relaxed mb-6 text-pretty" style={{ color: "#374151" }}>"{t.text}"</blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#F1F5F9" }}>
                  <span className="text-2xl" aria-hidden="true">{t.flag}</span>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "#0A1F1E" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#6B7280" }}>{t.company}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6" style={{ background: "#0369A1" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance text-white mb-4">
            新竹での理想の住まいを見つけましょう
          </h2>
          <p className="text-base leading-relaxed mb-10 text-pretty max-w-[52ch] mx-auto" style={{ color: "oklch(92% 0.02 220)" }}>
            日本語・英語・中国語で無料相談承ります。ご要望をお聞かせください。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm" style={{ background: "#ffffff", color: "#0369A1" }}>
              LINEで相談 <ArrowRight size={16} weight="bold" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border text-white" style={{ borderColor: "rgba(255,255,255,0.4)" }}>
              メールで相談
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
