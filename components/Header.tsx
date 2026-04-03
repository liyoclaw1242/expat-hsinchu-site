"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import ThemeToggle from "./ThemeToggle";

type Locale = "zh" | "en" | "ja";

const navByLocale: Record<Locale, { href: string; label: string }[]> = {
  zh: [
    { href: "/zh", label: "首頁" },
    { href: "/zh/services", label: "服務" },
    { href: "/zh/properties", label: "房源" },
    { href: "/zh/blog", label: "指南" },
    { href: "/zh/about", label: "關於" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/services", label: "Services" },
    { href: "/en/properties", label: "Properties" },
    { href: "/en/blog", label: "Guides" },
    { href: "/en/about", label: "About" },
  ],
  ja: [
    { href: "/ja", label: "ホーム" },
    { href: "/ja/services", label: "サービス" },
    { href: "/ja/properties", label: "物件" },
    { href: "/ja/blog", label: "ガイド" },
    { href: "/ja/about", label: "会社概要" },
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
  return "zh"; // covers /zh and any fallback
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
          <Link href={locale === "en" ? "/en" : locale === "ja" ? "/ja" : "/zh"} className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "var(--teal)" }}
            >
              E
            </div>
            <span className="text-[15px] font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              易澤居
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-colors duration-150 hover:text-[var(--teal)] hover:bg-[var(--surface)]"
                style={{ color: "var(--text-secondary)" }}
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
                style={{ color: locale === "zh" ? "var(--teal)" : "var(--text-subtle)", fontWeight: locale === "zh" ? 700 : 500 }}
              >
                中
              </Link>
              <span style={{ color: "var(--border)" }}>/</span>
              <Link
                href="/en"
                className="transition-colors"
                style={{ color: locale === "en" ? "var(--teal)" : "var(--text-subtle)", fontWeight: locale === "en" ? 700 : 500 }}
              >
                EN
              </Link>
              <span style={{ color: "var(--border)" }}>/</span>
              <Link
                href="/ja"
                className="transition-colors"
                style={{ color: locale === "ja" ? "var(--teal)" : "var(--text-subtle)", fontWeight: locale === "ja" ? 700 : 500 }}
              >
                日
              </Link>
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* CTA */}
            <Link
              href={locale === "en" ? "/en/contact" : locale === "ja" ? "/ja/contact" : "/contact"}
              className="hidden md:inline-flex items-center text-[13.5px] font-semibold px-4 py-2 rounded-lg text-white transition-colors"
              style={{ background: "var(--blue)" }}
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
                <X size={20} weight="bold" style={{ color: "var(--text-secondary)" }} />
              ) : (
                <List size={20} weight="bold" style={{ color: "var(--text-secondary)" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden py-3 border-t space-y-0.5" style={{ borderColor: "var(--border)" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium rounded-lg"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile language switcher */}
            <div className="flex items-center gap-3 px-3 py-2 text-xs font-medium">
              <Link href="/" style={{ color: locale === "zh" ? "var(--teal)" : "var(--text-subtle)" }} onClick={() => setOpen(false)}>中文</Link>
              <Link href="/en" style={{ color: locale === "en" ? "var(--teal)" : "var(--text-subtle)" }} onClick={() => setOpen(false)}>English</Link>
              <Link href="/ja" style={{ color: locale === "ja" ? "var(--teal)" : "var(--text-subtle)" }} onClick={() => setOpen(false)}>日本語</Link>
            </div>
            <div className="pt-1">
              <Link
                href={locale === "en" ? "/en/contact" : locale === "ja" ? "/ja/contact" : "/contact"}
                className="block text-center py-2.5 text-sm font-semibold rounded-lg text-white"
                style={{ background: "var(--blue)" }}
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
