"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import ThemeToggle from "./ThemeToggle";

type Locale = "zh" | "en" | "ja";

const navByLocale: Record<Locale, { href: string; label: string }[]> = {
  zh: [
    { href: "/", label: "首頁" },
    { href: "/services", label: "服務" },
    { href: "/properties", label: "房源" },
    { href: "/blog", label: "指南" },
    { href: "/about", label: "關於" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/properties", label: "Properties" },
    { href: "/blog", label: "Guides" },
    { href: "/about", label: "About" },
  ],
  ja: [
    { href: "/ja", label: "ホーム" },
    { href: "/services", label: "サービス" },
    { href: "/properties", label: "物件" },
    { href: "/blog", label: "ガイド" },
    { href: "/about", label: "会社概要" },
  ],
};

const ctaByLocale: Record<Locale, string> = {
  zh: "免費諮詢",
  en: "Free Consultation",
  ja: "無料相談",
};

function detectLocale(pathname: string): Locale {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/ja")) return "ja";
  return "zh";
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const navItems = navByLocale[locale];
  const cta = ctaByLocale[locale];

  return (
    <header
      className="border-b sticky top-0 z-50"
      style={{ background: "var(--card-bg)", borderBottomColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={locale === "en" ? "/en" : locale === "ja" ? "/ja" : "/"} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "#0F766E" }}
            >
              E
            </div>
            <div className="leading-none">
              <span className="text-[15px] font-semibold tracking-tight" style={{ color: "#0A1F1E" }}>
                EasyRent
              </span>
              <span className="text-[11px] block font-medium" style={{ color: "#0F766E" }}>
                易澤居
                Hsinchu
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-colors duration-150 hover:text-teal-700 hover:bg-teal-50"
                style={{ color: "#374151" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="hidden md:flex items-center gap-1.5 text-xs font-medium">
              <Link
                href="/"
                className="transition-colors"
                style={{ color: locale === "zh" ? "#0F766E" : "#9CA3AF", fontWeight: locale === "zh" ? 700 : 500 }}
              >
                中
              </Link>
              <span style={{ color: "#E5E7EB" }}>/</span>
              <Link
                href="/en"
                className="transition-colors"
                style={{ color: locale === "en" ? "#0F766E" : "#9CA3AF", fontWeight: locale === "en" ? 700 : 500 }}
              >
                EN
              </Link>
              <span style={{ color: "#E5E7EB" }}>/</span>
              <Link
                href="/ja"
                className="transition-colors"
                style={{ color: locale === "ja" ? "#0F766E" : "#9CA3AF", fontWeight: locale === "ja" ? 700 : 500 }}
              >
                日
              </Link>
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center text-[13.5px] font-semibold px-4 py-2 rounded-lg text-white transition-colors"
              style={{ background: "#0369A1" }}
            >
              {cta}
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <X size={20} weight="bold" style={{ color: "#374151" }} />
              ) : (
                <List size={20} weight="bold" style={{ color: "#374151" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden py-3 border-t space-y-0.5" style={{ borderColor: "#99F6E4" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium rounded-lg"
                style={{ color: "#374151" }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile language switcher */}
            <div className="flex items-center gap-3 px-3 py-2 text-xs font-medium">
              <Link href="/" style={{ color: locale === "zh" ? "#0F766E" : "#9CA3AF" }} onClick={() => setOpen(false)}>中文</Link>
              <Link href="/en" style={{ color: locale === "en" ? "#0F766E" : "#9CA3AF" }} onClick={() => setOpen(false)}>English</Link>
              <Link href="/ja" style={{ color: locale === "ja" ? "#0F766E" : "#9CA3AF" }} onClick={() => setOpen(false)}>日本語</Link>
            </div>
            <div className="pt-1">
              <Link
                href="/contact"
                className="block text-center py-2.5 text-sm font-semibold rounded-lg text-white"
                style={{ background: "#0369A1" }}
                onClick={() => setOpen(false)}
              >
                {cta}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
