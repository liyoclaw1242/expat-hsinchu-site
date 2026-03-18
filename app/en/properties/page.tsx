import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Bed, Ruler, Elevator, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Hsinchu Expat Properties | Furnished Apartments | 易澤居 EasyRent",
  description: "Curated furnished apartments for expats in Hsinchu, Taiwan. Zhubei High-Speed Rail district and Guanpu area. 2–3 bedroom, elevator buildings, English-speaking management.",
  alternates: {
    canonical: "https://www.easyrents.xyz/en/properties",
    languages: { "zh-TW": "https://www.easyrents.xyz/properties", "en-US": "https://www.easyrents.xyz/en/properties", "ja-JP": "https://www.easyrents.xyz/ja/properties" },
  },
};

const properties = [
  { id: "p1", title: "Zhubei HSR District · 3-Bed Furnished", area: "Zhubei HSR district", rooms: "3 bed / 2 bath", size: "45 ping (~149 sqm)", floor: "12F / 22F", price: "42,000", features: ["Fully furnished", "Parking included", "24h security", "Gym"], badge: "Popular", highlight: true },
  { id: "p2", title: "Zhubei Zhungzhi · 2-Bed Furnished", area: "Zhubei Zhungzhi Road", rooms: "2 bed / 1 bath", size: "28 ping (~93 sqm)", floor: "8F / 15F", price: "28,000", features: ["Fully furnished", "Parking", "Elevator"], badge: "Great for singles", highlight: false },
  { id: "p3", title: "Zhubei HSR · Premium 3-Bed", area: "5 min walk to HSR station", rooms: "3 bed / 2 bath", size: "52 ping (~172 sqm)", floor: "18F / 25F", price: "55,000", features: ["Premium furnishings", "2 parking spaces", "Pool", "Gym"], badge: "Family pick", highlight: false },
  { id: "p4", title: "Guanpu · Walk to HSIP · 2-Bed", area: "Guanpu Redevelopment Zone", rooms: "2 bed / 1 bath", size: "32 ping (~106 sqm)", floor: "6F / 12F", price: "23,000", features: ["Part furnished", "Scooter parking", "Elevator"], badge: "Best value", highlight: false },
];

export default function EnPropertiesPage() {
  return (
    <>
      <section className="relative h-64 md:h-72 overflow-hidden" style={{ background: "var(--hero-bg)" }}>
        <Image src="/images/properties-banner.png" alt="Furnished expat apartment in Zhubei Hsinchu" fill className="object-cover object-center opacity-55" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A1F1E 40%, #0A1F1E55 70%, transparent)" }} />
        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#5EEAD4" }}>Zhubei & Hsinchu</p>
            <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)] font-bold tracking-tighter text-white mb-2">Properties</h1>
            <p className="text-sm" style={{ color: "oklch(80% 0.015 178)" }}>Curated apartments — all meet expat standards</p>
          </div>
        </div>
      </section>

      <div className="px-6 py-3 border-b" style={{ background: "#FFFBEB", borderColor: "#FDE68A" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs" style={{ color: "#92400E" }}>⚠ Sample listings shown. Contact us for current availability.</p>
        </div>
      </div>

      <section className="py-16 px-6" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((p) => (
              <article key={p.id} className="rounded-2xl border overflow-hidden card-lift" style={{ borderColor: p.highlight ? "#0F766E" : "#E2E8F0", background: "var(--card-bg)" }}>
                <div className="relative h-44 overflow-hidden">
                  <Image src="/images/properties-banner.png" alt={p.title} fill className="object-cover object-center" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,31,30,0.5) 0%, transparent 50%)" }} />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md" style={{ background: p.highlight ? "#0F766E" : "#0369A1", color: "#ffffff" }}>{p.badge}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h2 className="text-base font-bold leading-tight" style={{ color: "var(--text)" }}>{p.title}</h2>
                      <p className="text-xs mt-1" style={{ color: "var(--text-subtle)" }}>📍 {p.area}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-bold tabular-nums" style={{ color: "var(--teal)" }}>NT${p.price}</div>
                      <div className="text-[10px]" style={{ color: "var(--text-subtle)" }}>/month (incl. mgmt fee)</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs mb-4 py-3 border-y" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                    <span className="flex items-center gap-1"><Bed size={13} weight="duotone" style={{ color: "var(--teal)" }} /> {p.rooms}</span>
                    <span className="flex items-center gap-1"><Ruler size={13} weight="duotone" style={{ color: "var(--teal)" }} /> {p.size}</span>
                    <span className="flex items-center gap-1"><Elevator size={13} weight="duotone" style={{ color: "var(--teal)" }} /> {p.floor}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.features.map((f) => <span key={f} className="text-[11px] px-2.5 py-1 rounded-md font-medium" style={{ background: "var(--surface)", color: "var(--teal)" }}>{f}</span>)}
                  </div>
                  <Link href="/contact" className="flex w-full items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: "var(--blue)" }}>
                    Enquire about this property <ArrowRight size={15} weight="bold" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl p-8 border flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <div>
              <h2 className="text-xl font-bold tracking-tight" style={{ color: "var(--text)" }}>Don't see what you need?</h2>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Tell us your requirements — we'll search across Zhubei and Hsinchu</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white flex-shrink-0" style={{ background: "var(--blue)" }}>
              Tell us what you need <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
