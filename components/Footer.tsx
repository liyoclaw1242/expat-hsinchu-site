import Link from "next/link";
import { Phone, EnvelopeSimple, ChatCircle } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer style={{ background: "#060F0F", color: "#F0FDFA" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 w-fit">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "#0F766E" }}>E</div>
              <div className="leading-none">
                <span className="text-[15px] font-semibold tracking-tight text-white">EasyRent</span>
                <span className="text-[11px] block font-medium" style={{ color: "#5EEAD4" }}>新竹</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-1.5 max-w-[38ch] text-pretty" style={{ color: "oklch(75% 0.015 178)" }}>
              新竹最專業的外商租屋代管服務。英語・日語・中文，全程三語服務。
            </p>
            <p className="text-xs italic" style={{ color: "#9aa0a8" }}>
              易澤居 — 新竹外商租屋首選。英語・日語・中文全程服務。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#9aa0a8" }}>導航</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/services", label: "代管服務" },
                { href: "/properties", label: "精選房源" },
                { href: "/blog", label: "租屋指南" },
                { href: "/about", label: "關於我們" },
                { href: "/contact", label: "聯絡我們" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors"
                    style={{ color: "oklch(65% 0.015 178)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#9aa0a8" }}>聯絡</h3>
            <ul className="space-y-3">
              {[
                { Icon: ChatCircle, label: "LINE: @198evsjq" },
                { Icon: Phone, label: "WhatsApp: 0989-059-618" },
                { Icon: EnvelopeSimple, label: "info@198evsjq.com" },
              ].map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm" style={{ color: "oklch(65% 0.015 178)" }}>
                  <Icon size={15} weight="regular" style={{ color: "#0F766E", flexShrink: 0 }} />
                  {label}
                </li>
              ))}
              <li className="text-xs pt-1" style={{ color: "#8a9099" }}>
                週一至週六 09:00–18:00 (GMT+8)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-3"
          style={{ borderColor: "oklch(25% 0.01 178)" }}>
          <p className="text-xs" style={{ color: "#818990" }}>© 2025 易澤居 EasyRent. 版權所有。</p>
          <p className="text-xs" style={{ color: "#818990" }}>服務區域：新竹市・新竹縣・竹北市・竹科</p>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "易澤居 EasyRent",
          description: "新竹外商租屋代管服務，英日中三語，專為竹科外派人員服務",
          url: "https://www.easyrents.xyz",
          address: { "@type": "PostalAddress", addressLocality: "新竹縣竹北市", addressCountry: "TW" },
          geo: { "@type": "GeoCoordinates", latitude: 24.8388, longitude: 120.9972 },
          areaServed: ["新竹市", "新竹縣", "竹北市"],
          availableLanguage: ["Chinese", "English", "Japanese"],
          openingHours: "Mo-Sa 09:00-18:00",
        }),
      }} />
    </footer>
  );
}
