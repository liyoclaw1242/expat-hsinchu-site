import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { UsersFour, FileText, MagnifyingGlass, CurrencyCircleDollar, Wrench, ChartBar, Globe, MapPin, ShieldCheck, ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Property Management Services | ExpatHome Hsinchu",
  description: "Full-service property management for expats in Hsinchu. English-speaking agents, bilingual contracts, pre-move-in inspection, monthly reporting. Serving ASML, Applied Materials and all Hsinchu Science Park expats.",
  alternates: {
    canonical: "https://www.easyrents.xyz/en/services",
    languages: { "zh-TW": "https://www.easyrents.xyz/services", "en-US": "https://www.easyrents.xyz/en/services", "ja-JP": "https://www.easyrents.xyz/ja/services" },
  },
};

const landlordServices = [
  { Icon: UsersFour, title: "Expat Tenant Sourcing", desc: "We work directly with expat HR departments and relocation agents to find quality international tenants. Stable occupancy, less vacancy." },
  { Icon: FileText, title: "Bilingual Lease (EN/ZH/JA)", desc: "Full English, Japanese, and Chinese lease — clear terms, legally sound, protecting both landlord and tenant." },
  { Icon: MagnifyingGlass, title: "Pre-Move-In Inspection", desc: "Photo documentation of property condition before move-in. Clear record at move-out to protect your deposit claims." },
  { Icon: CurrencyCircleDollar, title: "Rent Collection", desc: "We handle rent reminders and follow-up. Landlords receive rent on time, every month." },
  { Icon: Wrench, title: "Maintenance Coordination", desc: "Single point of contact for repairs. We handle vendors, scheduling, and cost transparency." },
  { Icon: ChartBar, title: "Monthly Report", desc: "Rent receipts, maintenance log, and utility summaries delivered every month." },
];

const tenantServices = [
  { Icon: Globe, title: "English-First Service", desc: "Every step — consultation, viewing, negotiation, and lease — handled in English. No language barriers." },
  { Icon: MapPin, title: "Curated Property Matching", desc: "We shortlist properties based on your budget, preferences, and timeline. No wasted viewings." },
  { Icon: FileText, title: "Lease Negotiation", desc: "We negotiate rent, furnishings, and terms on your behalf." },
  { Icon: ShieldCheck, title: "Pre-Move-In Protection", desc: "Full photo record before you move in. Your deposit is protected." },
];

export default function EnServicesPage() {
  return (
    <>
      <section className="relative h-64 md:h-80 overflow-hidden" style={{ background: "#0A1F1E" }}>
        <Image src="/images/services-banner.png" alt="ExpatHome Hsinchu professional property management service" fill className="object-cover object-center opacity-50" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A1F1E 40%, #0A1F1E66 70%, transparent)" }} />
        <div className="absolute inset-0 flex items-center px-8 md:px-16 max-w-7xl mx-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#5EEAD4" }}>English · 日本語 · 中文</p>
            <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)] font-bold tracking-tighter text-white mb-3">Our Services</h1>
            <p className="text-base leading-relaxed max-w-[45ch]" style={{ color: "oklch(85% 0.015 178)" }}>Full-service property management. Landlords relax, tenants feel at home.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>For Landlords</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance" style={{ color: "#0A1F1E" }}>Property Management</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 rounded-2xl p-8 flex flex-col justify-between min-h-[220px]" style={{ background: "#0F766E" }}>
              <UsersFour size={36} weight="duotone" style={{ color: "#5EEAD4" }} />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{landlordServices[0].title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#d1f5f0" }}>{landlordServices[0].desc}</p>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {landlordServices.slice(1).map(({ Icon, title, desc }) => (
                <div key={title} className="rounded-2xl p-6 border" style={{ background: "#ffffff", borderColor: "#99F6E4" }}>
                  <Icon size={26} weight="duotone" style={{ color: "#0F766E" }} />
                  <h3 className="text-sm font-semibold mt-4 mb-1.5" style={{ color: "#0A1F1E" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#52696B" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#F0FDFA" }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>For Tenants</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance" style={{ color: "#0A1F1E" }}>Finding Your Home</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tenantServices.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6 border" style={{ background: "#ffffff", borderColor: "#99F6E4" }}>
                <Icon size={26} weight="duotone" style={{ color: "#0F766E" }} />
                <h3 className="text-sm font-semibold mt-4 mb-1.5" style={{ color: "#0A1F1E" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#52696B" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0F766E" }}>Transparent Pricing</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance" style={{ color: "#0A1F1E" }}>Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8 border" style={{ borderColor: "#99F6E4", background: "#F0FDFA" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#0F766E" }}>Landlord Management Fee</p>
              <div className="text-5xl font-bold tabular-nums mb-2 tracking-tighter" style={{ color: "#0F766E" }}>8–10%</div>
              <p className="text-xs mb-6" style={{ color: "#52696B" }}>of monthly rent</p>
              <ul className="space-y-2.5">
                {["Rent collection & maintenance", "Trilingual communication", "Emergency handling"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "#374151" }}>
                    <CheckCircle size={16} weight="fill" style={{ color: "#0F766E", flexShrink: 0 }} />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 text-white" style={{ background: "#0369A1" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "oklch(85% 0.04 220)" }}>Tenant Placement</p>
              <div className="text-5xl font-bold mb-2 tracking-tighter">Free</div>
              <p className="text-xs mb-6" style={{ color: "oklch(85% 0.04 220)" }}>Basic tenant search is free</p>
              <ul className="space-y-2.5">
                {["Needs consultation", "Property shortlist", "Accompanied viewings", "Move-in inspection"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle size={16} weight="fill" style={{ color: "oklch(80% 0.1 220)", flexShrink: 0 }} />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "#F0FDFA" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#0A1F1E" }}>Free Consultation</h2>
            <p className="text-sm mt-1" style={{ color: "#52696B" }}>English, Japanese, or Chinese — we speak your language</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white flex-shrink-0" style={{ background: "#0369A1" }}>
            Get in touch <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  );
}
