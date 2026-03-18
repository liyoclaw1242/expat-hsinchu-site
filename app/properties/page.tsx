import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Bed, Ruler, Elevator, Car, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "精選房源 | 竹北外商公寓 | ExpatHome Hsinchu",
  description: "ExpatHome Hsinchu 精選竹北外商公寓房源。高鐵特區、關埔重劃區精選物件，英語日語服務，適合竹科外派人員。",
  alternates: { canonical: "https://expathome-hsinchu.vercel.app/properties" },
};

const properties = [
  {
    id: "p1",
    title: "竹北高鐵特區 · 精裝 3 房",
    area: "竹北高鐵特區",
    rooms: "3房2廳2衛",
    size: "45 坪",
    floor: "12F / 22F",
    price: "42,000",
    features: ["全套家具", "停車位", "24h 管理員", "健身房"],
    badge: "熱門",
    highlight: true,
  },
  {
    id: "p2",
    title: "竹北縣治 · 電梯 2 房 Furnished",
    area: "竹北縣治二路",
    rooms: "2房2廳1衛",
    size: "28 坪",
    floor: "8F / 15F",
    price: "28,000",
    features: ["全套家具", "停車位", "電梯大樓"],
    badge: "適合單身",
    highlight: false,
  },
  {
    id: "p3",
    title: "竹北高鐵 · 豪華 3 房",
    area: "竹北高鐵站步行 5 分",
    rooms: "3房2廳2衛",
    size: "52 坪",
    floor: "18F / 25F",
    price: "55,000",
    features: ["精品家具", "2 個車位", "游泳池", "健身房"],
    badge: "攜眷首選",
    highlight: false,
  },
  {
    id: "p4",
    title: "關埔重劃區 · 竹科步行 2 房",
    area: "關埔重劃區",
    rooms: "2房2廳1衛",
    size: "32 坪",
    floor: "6F / 12F",
    price: "23,000",
    features: ["部分家具", "機車位", "電梯"],
    badge: "高性價比",
    highlight: false,
  },
];

export default function PropertiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-64 md:h-72 overflow-hidden" style={{ background: "#0A1F1E" }}>
        <Image
          src="/images/properties-banner.png"
          alt="竹北精裝公寓"
          fill className="object-cover object-center opacity-55" priority
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #0A1F1E 40%, #0A1F1E55 70%, transparent)" }} />
        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#5EEAD4" }}>竹北精選房源</p>
            <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)] font-bold tracking-tighter text-white mb-2">
              精選房源
            </h1>
            <p className="text-sm" style={{ color: "oklch(80% 0.015 178)" }}>每間都經過嚴格篩選，符合外商外派人員標準</p>
          </div>
        </div>
      </section>

      {/* ── Notice ── */}
      <div className="px-6 py-3 border-b" style={{ background: "#FFFBEB", borderColor: "#FDE68A" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs" style={{ color: "#92400E" }}>
            ⚠ 以下為示範房源。實際可用房源請聯絡我們詢問最新釋出物件。
          </p>
        </div>
      </div>

      {/* ── Properties Grid ── */}
      <section className="py-16 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((p) => (
              <article key={p.id}
                className="rounded-2xl border overflow-hidden card-lift"
                style={{ borderColor: p.highlight ? "#0F766E" : "#E2E8F0", background: "#ffffff" }}>
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/properties-banner.png"
                    alt={p.title}
                    fill className="object-cover object-center"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,31,30,0.5) 0%, transparent 50%)" }} />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md"
                    style={{ background: p.highlight ? "#0F766E" : "#0369A1", color: "#ffffff" }}>
                    {p.badge}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h2 className="text-base font-bold leading-tight" style={{ color: "#0A1F1E" }}>{p.title}</h2>
                      <p className="text-xs mt-1 flex items-center gap-1" style={{ color: "#6B7280" }}>
                        <span>📍</span> {p.area}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-bold tabular-nums" style={{ color: "#0F766E" }}>
                        NT${p.price}
                      </div>
                      <div className="text-[10px]" style={{ color: "#9BA3AF" }}>/月（含管理費）</div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="flex flex-wrap gap-3 text-xs mb-4 py-3 border-y" style={{ borderColor: "#F1F5F9", color: "#52696B" }}>
                    <span className="flex items-center gap-1">
                      <Bed size={13} weight="duotone" style={{ color: "#0F766E" }} /> {p.rooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler size={13} weight="duotone" style={{ color: "#0F766E" }} /> {p.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <Elevator size={13} weight="duotone" style={{ color: "#0F766E" }} /> {p.floor}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.features.map((f) => (
                      <span key={f} className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                        style={{ background: "#F0FDFA", color: "#0F766E" }}>
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact"
                    className="flex w-full items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
                    style={{ background: "#0369A1" }}>
                    詢問這間房源
                    <ArrowRight size={15} weight="bold" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Can't find CTA */}
          <div className="mt-10 rounded-2xl p-8 border flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
            <div>
              <h2 className="text-xl font-bold tracking-tight" style={{ color: "#0A1F1E" }}>找不到喜歡的？</h2>
              <p className="text-sm mt-1" style={{ color: "#52696B" }}>告訴我們您的需求，竹北、新竹全都找</p>
            </div>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white flex-shrink-0"
              style={{ background: "#0369A1" }}>
              說說你的需求 <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
