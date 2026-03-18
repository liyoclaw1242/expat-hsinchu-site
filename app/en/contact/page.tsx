import type { Metadata } from "next";
import { ChatCircle, Phone, EnvelopeSimple, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact Us | 易澤居 EasyRent",
  description: "Contact 易澤居 EasyRent in English, Japanese, or Chinese. LINE, WhatsApp, and Email available. Free consultation for Hsinchu expat housing.",
  alternates: {
    canonical: "https://www.easyrents.xyz/en/contact",
    languages: { "zh-TW": "https://www.easyrents.xyz/contact", "en-US": "https://www.easyrents.xyz/en/contact", "ja-JP": "https://www.easyrents.xyz/ja/contact" },
  },
};

const channels = [
  { Icon: ChatCircle, title: "LINE", handle: "@198evsjq", desc: "Fastest response — usually within 1 hour", cta: "Chat on LINE", href: "https://line.me/R/ti/p/@198evsjq", lang: "English · 日本語 · 中文" },
  { Icon: Phone, title: "WhatsApp", handle: "0989-059-618", desc: "Preferred by most expats", cta: "WhatsApp Us", href: "tel:0989059618", lang: "English · 日本語 · 中文" },
  { Icon: EnvelopeSimple, title: "Email", handle: "info@198evsjq.com", desc: "For detailed enquiries and documents", cta: "Send Email", href: "mailto:info@198evsjq.com", lang: "English · 日本語 · 中文" },
];

const faqs = [
  { q: "Which areas do you serve?", a: "Primarily Zhubei City (High-Speed Rail district, Zhungzhi Road area) and Hsinchu City (Guanpu Redevelopment Zone, near Hsinchu Science Park). Other Hsinchu areas on request." },
  { q: "Do you help with housing allowance paperwork?", a: "Yes. We're familiar with housing allowance processes at ASML, Applied Materials, Tokyo Electron, and other major expat employers. We can provide the documents your HR requires." },
  { q: "How long does it take to find a property?", a: "For well-specified properties (Zhubei, elevator building, 2–3 bedrooms, furnished), typically 2–6 weeks to find a suitable match." },
  { q: "Can you provide a bilingual lease?", a: "Yes. All leases are available in English–Chinese and Japanese–Chinese bilingual format." },
  { q: "I'm a landlord. How do I get started?", a: "Contact us via LINE or Email with basic property details (address, size, furnishings). We'll arrange a free assessment and explain our management terms." },
];

export default function EnContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-16 px-6 border-b" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>Contact</p>
          <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,3.5rem)] font-bold tracking-tighter text-balance mb-3" style={{ color: "var(--text)" }}>
            English, Japanese,<br />or Chinese — your call
          </h1>
          <p className="text-base leading-relaxed max-w-[52ch] text-pretty" style={{ color: "var(--text-muted)" }}>Free consultation, no commitment. Tell us what you need and we'll match you.</p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {channels.map(({ Icon, title, handle, desc, cta, href, lang }) => (
              <div key={title} className="rounded-2xl border p-6 flex flex-col gap-4" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--surface)" }}>
                  <Icon size={22} weight="duotone" style={{ color: "var(--teal)" }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-bold mb-0.5" style={{ color: "var(--text)" }}>{title}</h2>
                  <p className="text-xs font-medium mb-2" style={{ color: "var(--teal)" }}>{handle}</p>
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-muted)" }}>{desc}</p>
                  <p className="text-[10px] font-medium uppercase tracking-wide" style={{ color: "var(--text-subtle)" }}>{lang}</p>
                </div>
                <a href={href} className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: "var(--blue)" }}>
                  {cta} <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 px-5 py-3.5 rounded-xl border text-sm" style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-muted)" }}>
            <span>🕘</span> Office hours: Mon–Sat 09:00–18:00 (GMT+8)
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>FAQ</p>
            <h2 className="text-[clamp(1.875rem,1.5rem+1.875vw,2.5rem)] font-bold tracking-tighter text-balance" style={{ color: "var(--text)" }}>Common questions</h2>
          </div>
          <div className="divide-y rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
            {faqs.map((faq, i) => (
              <details key={i} className="group" style={{ background: "var(--card-bg)" }}>
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none gap-4" style={{ color: "var(--text)" }}>
                  <span className="text-sm font-medium">{faq.q}</span>
                  <span className="text-lg flex-shrink-0 transition-transform group-open:rotate-45" style={{ color: "var(--teal)" }}>+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-pretty" style={{ color: "var(--text-muted)" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
