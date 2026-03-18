import Link from "next/link";
import type { Metadata } from "next";
import { Target, Handshake, ShieldCheck, UsersThree, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About Us | ExpatHome Hsinchu",
  description: "ExpatHome Hsinchu — the story behind Hsinchu's specialist expat housing service. Our mission, service areas, and language capabilities.",
  alternates: {
    canonical: "https://www.easyrents.xyz/en/about",
    languages: { "zh-TW": "https://www.easyrents.xyz/about", "en-US": "https://www.easyrents.xyz/en/about", "ja-JP": "https://www.easyrents.xyz/ja/about" },
  },
};

const differentiators = [
  { Icon: Target, title: "Expat-Only Focus", desc: "We don't serve everyone — we specialise in expat housing. That focus makes us more effective than any generalist agent for international clients." },
  { Icon: Handshake, title: "Relocation Ecosystem", desc: "Official partner of Santa Fe Relocations and Crown Relocations. We're embedded in the expat relocation chain, not waiting for walk-ins." },
  { Icon: ShieldCheck, title: "Transparent & Trustworthy", desc: "Pre-move-in inspection, trilingual lease, monthly reports. Every step documented, every fee explained." },
  { Icon: UsersThree, title: "True Trilingual Service", desc: "We don't just translate — we understand rental expectations in Dutch, American, Japanese, and Taiwanese culture. We've worked with all of them." },
];

export default function EnAboutPage() {
  return (
    <div style={{ background: "#ffffff" }}>
      <section className="py-16 px-6 border-b" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>About</p>
          <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)] font-bold tracking-tighter text-balance mb-4" style={{ color: "#0A1F1E" }}>ExpatHome Hsinchu</h1>
          <p className="text-base leading-relaxed max-w-[55ch] text-pretty" style={{ color: "#52696B" }}>More than an agent — your partner in Hsinchu.</p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>Mission</p>
              <h2 className="text-2xl font-bold tracking-tight mb-5" style={{ color: "#0A1F1E" }}>Every expat in Hsinchu<br />deserves a home that works</h2>
              <p className="text-sm leading-relaxed text-pretty mb-4" style={{ color: "#374151" }}>
                Hsinchu is one of the world's most important semiconductor hubs, yet the hundreds of engineers and managers arriving each year face rental challenges that almost nobody addresses properly.
              </p>
              <p className="text-sm leading-relaxed text-pretty" style={{ color: "#374151" }}>
                Language barriers, opaque contracts, unresponsive landlords, unfair deposit deductions — ExpatHome Hsinchu exists to solve all of this.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ num: "100+", label: "Expat clients served" }, { num: "3", label: "Languages supported" }, { num: "24h", label: "Emergency response" }, { num: "2+", label: "Relocation partners" }].map((s) => (
                <div key={s.label} className="rounded-2xl p-6 border" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
                  <div className="text-3xl font-bold tabular-nums tracking-tighter" style={{ color: "#0F766E" }}>{s.num}</div>
                  <div className="text-xs mt-1" style={{ color: "#52696B" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "#F0FDFA" }}>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>Differentiators</p>
            <h2 className="text-2xl font-bold tracking-tight text-balance" style={{ color: "#0A1F1E" }}>Why we're different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6 border" style={{ background: "#ffffff", borderColor: "#99F6E4" }}>
                <Icon size={26} weight="duotone" style={{ color: "#0F766E" }} />
                <h3 className="text-sm font-semibold mt-4 mb-1.5" style={{ color: "#0A1F1E" }}>{title}</h3>
                <p className="text-xs leading-relaxed text-pretty" style={{ color: "#52696B" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#0F766E" }}>Service Areas</p>
            <div className="divide-y rounded-2xl overflow-hidden border" style={{ borderColor: "#99F6E4" }}>
              {[{ area: "Zhubei City", detail: "HSR district · Zhungzhi Road" }, { area: "Hsinchu City", detail: "Guanpu zone · near HSIP" }, { area: "Other areas", detail: "Hukou · Zhudong · on request" }].map((a) => (
                <div key={a.area} className="flex items-center justify-between px-5 py-4" style={{ background: "#ffffff" }}>
                  <span className="text-sm font-semibold" style={{ color: "#0A1F1E" }}>{a.area}</span>
                  <span className="text-xs" style={{ color: "#6B7280" }}>{a.detail}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#0F766E" }}>Languages</p>
            <div className="space-y-3">
              {[{ flag: "🇬🇧", lang: "English", note: "All services available" }, { flag: "🇯🇵", lang: "日本語", note: "全サービス対応" }, { flag: "🇹🇼", lang: "繁體中文", note: "主要服務語言" }].map((l) => (
                <div key={l.lang} className="flex items-center gap-4 px-5 py-4 rounded-xl border" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
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

      <section className="py-12 px-6 border-t" style={{ background: "#F0FDFA", borderColor: "#99F6E4" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold" style={{ color: "#0A1F1E" }}>Questions? Let's talk.</p>
            <p className="text-sm mt-0.5" style={{ color: "#52696B" }}>English, Japanese, or Chinese — free consultation</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white flex-shrink-0" style={{ background: "#0369A1" }}>
            Contact us <ArrowRight size={15} weight="bold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
