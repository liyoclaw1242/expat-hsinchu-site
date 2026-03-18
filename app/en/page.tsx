import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Globe, MagnifyingGlass, Handshake, Buildings, ChatCircle, ChartBar, ArrowRight, Star } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "ExpatHome Hsinchu | Expat Housing & Property Management in Hsinchu, Taiwan",
  description:
    "Hsinchu's specialist expat housing and property management service. Full English support for ASML, Applied Materials, Lam Research and all Hsinchu Science Park expats. Bilingual lease, pre-move-in inspection, relocation agent partnerships.",
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app/en",
    languages: {
      "zh-TW": "https://expathome-hsinchu.vercel.app",
      "en-US": "https://expathome-hsinchu.vercel.app/en",
      "ja-JP": "https://expathome-hsinchu.vercel.app/ja",
    },
  },
};

const features = [
  { Icon: Globe, title: "Full English Service", desc: "Contracts, communications, documents — all in English. Zero language barriers from search to move-in." },
  { Icon: MagnifyingGlass, title: "Pre-Move-In Inspection", desc: "We document the property condition before you move in — photos, checklist, signed record. Your deposit is protected." },
  { Icon: Handshake, title: "Relocation Partners", desc: "Official partner of Santa Fe Relocations and Crown Relocations. Seamless handoff from relocation to ongoing tenancy." },
  { Icon: Buildings, title: "Deep HSIP Knowledge", desc: "We know ASML, Applied Materials, Lam Research housing allowance structures and company lease requirements inside-out." },
  { Icon: ChatCircle, title: "Real-Time Support", desc: "LINE and WhatsApp in English. Maintenance requests handled fast, no language friction." },
  { Icon: ChartBar, title: "Transparent Monthly Reports", desc: "Landlords get monthly reports with rent receipts, maintenance log, and utility breakdowns." },
];

const steps = [
  { n: "01", title: "Consultation", desc: "Tell us your budget, preferences, and move-in date" },
  { n: "02", title: "Property Match", desc: "We shortlist Zhubei properties that fit your needs" },
  { n: "03", title: "Viewing & Inspection", desc: "We accompany you and document the property" },
  { n: "04", title: "Bilingual Lease", desc: "English & Chinese lease, clear terms, signed securely" },
  { n: "05", title: "Ongoing Management", desc: "Maintenance, rent, monthly reports — all handled" },
];

const testimonials = [
  { name: "Thomas M.", company: "ASML Taiwan", flag: "🇳🇱", text: "ExpatHome made my relocation to Hsinchu incredibly smooth. They handled everything in English — exactly what I needed as an expat." },
  { name: "Sarah K.", company: "Applied Materials Taiwan", flag: "🇺🇸", text: "Finding an apartment in Taiwan as a foreigner can be stressful. ExpatHome handled the whole process in English and the lease was fully bilingual. Highly recommended." },
  { name: "Mr. Li", company: "Landlord, Zhubei", flag: "🇹🇼", text: "They find quality expat tenants, collect rent reliably, and send me a monthly report. Completely hands-off for me." },
];

export default function EnglishHomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden" style={{ background: "#0A1F1E" }}>
        <div className="absolute inset-0">
          <Image src="/images/hero-banner.png" alt="Zhubei Hsinchu city at night" fill className="object-cover object-center opacity-40" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A1F1E 45%, #0A1F1E88 70%, transparent)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-8 border"
            style={{ background: "oklch(96% 0.05 178 / 0.12)", borderColor: "oklch(80% 0.1 178 / 0.3)", color: "#5EEAD4" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5EEAD4" }} />
            Hsinchu Science Park Expat Housing Specialist
          </div>

          <h1 className="text-[clamp(3rem,2rem+5vw,5rem)] font-bold leading-none tracking-tighter text-balance mb-5 max-w-2xl"
            style={{ color: "#F0FDFA" }}>
            Your Home<br />
            <span style={{ color: "#5EEAD4" }}>in Hsinchu</span>
          </h1>

          <p className="text-sm font-semibold tracking-[0.12em] uppercase mb-5" style={{ color: "#99F6E4", opacity: 0.9 }}>
            In English · In Japanese · 中文
          </p>
          <p className="text-base leading-relaxed mb-10 max-w-[55ch] text-pretty" style={{ color: "oklch(85% 0.015 178)" }}>
            Full-service property management for ASML, Applied Materials, Lam Research and all Hsinchu Science Park expats. English-first, zero language barriers.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white" style={{ background: "#0369A1" }}>
              Free Consultation <ArrowRight size={16} weight="bold" />
            </Link>
            <Link href="/properties" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border" style={{ borderColor: "oklch(80% 0.1 178 / 0.4)", color: "#F0FDFA" }}>
              View Properties
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t grid grid-cols-3 gap-6 max-w-xs" style={{ borderColor: "oklch(80% 0.05 178 / 0.2)" }}>
            {[{ num: "100+", label: "Expat clients" }, { num: "3", label: "Languages" }, { num: "24h", label: "Emergency response" }].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold tabular-nums" style={{ color: "#F0FDFA" }}>{s.num}</div>
                <div className="text-xs mt-0.5" style={{ color: "#6ecfc7" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-b py-4" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#4a938d" }}>Serving employees from</span>
          {["ASML", "Applied Materials", "Lam Research", "Tokyo Electron", "KLA", "Synopsys"].map((c) => (
            <span key={c} className="text-sm font-semibold" style={{ color: "#6B7280" }}>{c}</span>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>Why choose us</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance" style={{ color: "#0A1F1E" }}>
              More than an agent —<br />your partner in Hsinchu
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5 rounded-2xl p-8 flex flex-col justify-between min-h-[260px] card-lift" style={{ background: "#0F766E" }}>
              <Globe size={36} weight="duotone" style={{ color: "#5EEAD4" }} />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{features[0].title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#d1f5f0" }}>{features[0].desc}</p>
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
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>How it works</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance" style={{ color: "#0A1F1E" }}>
              From first call to move-in, five steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px border rounded-2xl overflow-hidden" style={{ borderColor: "#99F6E4", background: "#99F6E4" }}>
            {steps.map((s) => (
              <div key={s.n} className="p-6 flex flex-col gap-4" style={{ background: "#F0FDFA" }}>
                <span aria-hidden="true" className="text-3xl font-bold tabular-nums" style={{ color: "#0F766E", opacity: 0.25 }}>{s.n}</span>
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
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>Reviews</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold leading-tight tracking-tighter text-balance" style={{ color: "#0A1F1E" }}>
              Expats from 3 continents, same result
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
            Ready to find your Hsinchu home?
          </h2>
          <p className="text-base leading-relaxed mb-10 text-pretty max-w-[52ch] mx-auto" style={{ color: "oklch(92% 0.02 220)" }}>
            Free consultation in English, Japanese, or Chinese. Tell us your needs and we'll match you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm" style={{ background: "#ffffff", color: "#0369A1" }}>
              Chat on LINE <ArrowRight size={16} weight="bold" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border text-white" style={{ borderColor: "rgba(255,255,255,0.4)" }}>
              Send Email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
