import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  UsersFour,
  FileText,
  MagnifyingGlass,
  CurrencyCircleDollar,
  Wrench,
  ChartBar,
  Globe,
  MapPin,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "代管服務內容與費用 | 易澤居 EasyRent 新竹外商租屋代管",
  description:
    "易澤居 EasyRent 全方位房屋代管服務：找租客、驗屋、三語合約、收租管理、維修協調。透明費用，專為外商外派人員設計。",
  alternates: { canonical: "https://www.easyrents.xyz/services" },
};

const landlordServices = [
  {
    Icon: UsersFour,
    title: "精準找租客",
    desc: "對接外商 HR、Relocation Agent，精確觸及竹科外派人員。租客品質穩定，減少空置風險。",
  },
  {
    Icon: FileText,
    title: "三語合約服務",
    desc: "中英日三語對照合約，條款清晰，保護房東和租客雙方權益。",
  },
  {
    Icon: MagnifyingGlass,
    title: "入住驗屋記錄",
    desc: "入住前完整驗屋拍照，建立房況存檔，退租時有憑有據。",
  },
  {
    Icon: CurrencyCircleDollar,
    title: "每月準時收租",
    desc: "代為催收租金，提醒、跟進，確保房東按時收到租金。",
  },
  {
    Icon: Wrench,
    title: "維修協調",
    desc: "維修需求統一處理，對接可靠廠商，最小化干擾，費用透明。",
  },
  {
    Icon: ChartBar,
    title: "月報告",
    desc: "每月提供物件管理報告，含收租記錄、維修摘要、水電費明細。",
  },
];

const tenantServices = [
  {
    Icon: Globe,
    title: "三語全程陪伴",
    desc: "英語、日語、中文均可溝通，從諮詢到簽約，語言零障礙。",
  },
  {
    Icon: MapPin,
    title: "精選房源匹配",
    desc: "根據您的預算、需求、偏好，為您篩選竹北精選物件，不浪費時間。",
  },
  {
    Icon: FileText,
    title: "代為談判",
    desc: "協助與房東溝通租金、家具、合約條款，保護租客利益。",
  },
  {
    Icon: ShieldCheck,
    title: "入住前驗屋保障",
    desc: "入住前完整拍照記錄，確認房況，退租時不怕被無理扣押金。",
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "易澤居 EasyRent 房屋代管服務",
    serviceType: "Property Management",
    provider: { "@type": "LocalBusiness", name: "易澤居 EasyRent" },
    areaServed: "新竹市、新竹縣、竹北市",
    availableLanguage: ["Chinese", "English", "Japanese"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero Banner ── */}
      <section className="relative h-64 md:h-80 overflow-hidden" style={{ background: "#0A1F1E" }}>
        <Image
          src="/images/services-banner.png"
          alt="易澤居 EasyRent 專業代管服務"
          fill className="object-cover object-center opacity-50" priority
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #0A1F1E 40%, #0A1F1E66 70%, transparent)" }} />
        <div className="absolute inset-0 flex items-center px-8 md:px-16 max-w-7xl mx-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#5EEAD4" }}>
              真人服務・三語溝通
            </p>
            <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)] font-bold tracking-tighter text-white mb-3">
              服務內容
            </h1>
            <p className="text-base leading-relaxed max-w-[45ch]" style={{ color: "oklch(85% 0.015 178)" }}>
              從找租客到退租，全程代管。房東省心，租客安心。
            </p>
          </div>
        </div>
      </section>

      {/* ── Landlord Services ── */}
      <section className="py-20 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>房東</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance"
              style={{ color: "#0A1F1E" }}>
              房東代管服務
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Large featured card */}
            <div className="md:col-span-5 rounded-2xl p-8 flex flex-col justify-between min-h-[220px]"
              style={{ background: "#0F766E" }}>
              <UsersFour size={36} weight="duotone" style={{ color: "#5EEAD4" }} />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{landlordServices[0].title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#d1f5f0" }}>{landlordServices[0].desc}</p>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {landlordServices.slice(1).map(({ Icon, title, desc }) => (
                <div key={title} className="rounded-2xl p-6 border"
                  style={{ background: "#ffffff", borderColor: "#99F6E4" }}>
                  <Icon size={26} weight="duotone" style={{ color: "#0F766E" }} />
                  <h3 className="text-sm font-semibold mt-4 mb-1.5" style={{ color: "#0A1F1E" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52696B" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tenant Services ── */}
      <section className="py-20 px-6" style={{ background: "#F0FDFA" }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>租客</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance"
              style={{ color: "#0A1F1E" }}>
              租客找房服務
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tenantServices.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6 border"
                style={{ background: "#ffffff", borderColor: "#99F6E4" }}>
                <Icon size={26} weight="duotone" style={{ color: "#0F766E" }} />
                <h3 className="text-sm font-semibold mt-4 mb-1.5" style={{ color: "#0A1F1E" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#52696B" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>透明費用</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance"
              style={{ color: "#0A1F1E" }}>
              費用說明
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Landlord pricing */}
            <div className="rounded-2xl p-8 border" style={{ borderColor: "#99F6E4", background: "#F0FDFA" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#0F766E" }}>房東代管費</p>
              <div className="text-5xl font-bold tabular-nums mb-2 tracking-tighter" style={{ color: "#0F766E" }}>8–10%</div>
              <p className="text-xs mb-6" style={{ color: "#52696B" }}>每月租金之百分比</p>
              <ul className="space-y-2.5">
                {[
                  "收租、維修協調、月報告",
                  "三語溝通服務",
                  "緊急聯絡處理",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "#374151" }}>
                    <CheckCircle size={16} weight="fill" style={{ color: "#0F766E", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-4" style={{ color: "#9BA3AF" }}>* 首次找租客另計仲介服務費</p>
            </div>

            {/* Tenant pricing */}
            <div className="rounded-2xl p-8 text-white" style={{ background: "#0369A1" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "oklch(85% 0.04 220)" }}>
                租客找房服務
              </p>
              <div className="text-5xl font-bold mb-2 tracking-tighter">免費</div>
              <p className="text-xs mb-6" style={{ color: "oklch(85% 0.04 220)" }}>租客找房基本服務不收費</p>
              <ul className="space-y-2.5">
                {["需求諮詢", "房源推薦", "帶看陪伴", "入住驗屋"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle size={16} weight="fill" style={{ color: "oklch(80% 0.1 220)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-xs mt-4" style={{ color: "#9BA3AF" }}>
            實際費用視服務範圍而定，歡迎免費諮詢
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6" style={{ background: "#F0FDFA" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#0A1F1E" }}>立即免費諮詢</h2>
            <p className="text-sm mt-1" style={{ color: "#52696B" }}>英日中均可，告訴我們您的需求</p>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white flex-shrink-0"
            style={{ background: "#0369A1" }}>
            免費諮詢
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  );
}
