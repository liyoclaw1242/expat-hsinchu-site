"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, EnvelopeSimple, ChatCircle } from "@phosphor-icons/react/dist/ssr";

type Locale = "zh" | "en" | "ja";

export default function Footer() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/ja") ? "ja" : "zh";

  const logoHref = locale === "en" ? "/en" : locale === "ja" ? "/ja" : "/";

  const tagline: Record<Locale, { main: string; sub: string }> = {
    zh: {
      main: "新竹最專業的外商租屋代管服務。英語・日語・中文，全程三語服務。",
      sub: "易澤居 — 新竹外商租屋首選。英語・日語・中文全程服務。",
    },
    en: {
      main: "Hsinchu's premier relocation & property management for expats. English · Japanese · Chinese.",
      sub: "EasyRent — The expat's first choice in Hsinchu.",
    },
    ja: {
      main: "新竹で最も信頼される外国人向け賃貸・管理サービス。英語・日本語・中国語対応。",
      sub: "易澤居 — 新竹の外国人賃貸のファーストチョイス。",
    },
  };

  const navHeading: Record<Locale, string> = {
    zh: "導航",
    en: "Navigation",
    ja: "ナビ",
  };

  const navLinks: Record<Locale, { href: string; label: string }[]> = {
    zh: [
      { href: "/services", label: "代管服務" },
      { href: "/properties", label: "精選房源" },
      { href: "/blog", label: "租屋指南" },
      { href: "/about", label: "關於我們" },
      { href: "/contact", label: "聯絡我們" },
    ],
    en: [
      { href: "/en/services", label: "Services" },
      { href: "/en/properties", label: "Properties" },
      { href: "/blog", label: "Guides" },
      { href: "/en/about", label: "About" },
      { href: "/en/contact", label: "Contact" },
    ],
    ja: [
      { href: "/ja/services", label: "サービス" },
      { href: "/ja/properties", label: "物件" },
      { href: "/blog", label: "ガイド" },
      { href: "/ja/about", label: "会社概要" },
      { href: "/ja/contact", label: "お問い合わせ" },
    ],
  };

  const contactHeading: Record<Locale, string> = {
    zh: "聯絡",
    en: "Contact",
    ja: "連絡先",
  };

  const businessHours: Record<Locale, string> = {
    zh: "週一至週六 09:00–18:00 (GMT+8)",
    en: "Mon–Sat 09:00–18:00 (GMT+8)",
    ja: "月〜土 09:00–18:00 (GMT+8)",
  };

  const copyright: Record<Locale, string> = {
    zh: "版權所有",
    en: "All rights reserved",
    ja: "無断複製禁止",
  };

  const serviceArea: Record<Locale, string> = {
    zh: "服務區域：新竹市・新竹縣・竹北市・竹科",
    en: "Service area: Hsinchu City, Hsinchu County, Zhubei, STSP",
    ja: "サービスエリア：新竹市・新竹県・竹北市・竹科",
  };

  return (
    <footer style={{ background: "var(--footer-bg)", color: "#F0FDFA" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={logoHref} className="flex items-center mb-5 w-fit">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "var(--teal)" }}
              >
                E
              </div>
              <span className="ml-2.5 text-[15px] font-semibold tracking-tight text-white">
                易澤居
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-1.5 max-w-[38ch] text-pretty" style={{ color: "oklch(75% 0.015 178)" }}>
              {tagline[locale].main}
            </p>
            <p className="text-xs italic" style={{ color: "#9aa0a8" }}>
              {tagline[locale].sub}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#9aa0a8" }}>
              {navHeading[locale]}
            </h3>
            <ul className="space-y-2.5">
              {navLinks[locale].map((item) => (
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
            <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "#9aa0a8" }}>
              {contactHeading[locale]}
            </h3>
            <ul className="space-y-3">
              {[
                { Icon: ChatCircle, label: "LINE: @198evsjq" },
                { Icon: Phone, label: "WhatsApp: 0989-059-618" },
                { Icon: EnvelopeSimple, label: "info@198evsjq.com" },
              ].map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm" style={{ color: "oklch(65% 0.015 178)" }}>
                  <Icon size={15} weight="regular" style={{ color: "var(--teal)", flexShrink: 0 }} />
                  {label}
                </li>
              ))}
              <li className="text-xs pt-1" style={{ color: "#8a9099" }}>
                {businessHours[locale]}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-3"
          style={{ borderColor: "oklch(25% 0.01 178)" }}>
          <p className="text-xs" style={{ color: "#818990" }}>© {new Date().getFullYear()} 易澤居 EasyRent. {copyright[locale]}。</p>
          <p className="text-xs" style={{ color: "#818990" }}>{serviceArea[locale]}</p>
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
