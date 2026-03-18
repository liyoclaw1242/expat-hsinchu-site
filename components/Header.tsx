"use client";
import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "服務" },
  { href: "/properties", label: "房源" },
  { href: "/blog", label: "指南" },
  { href: "/about", label: "關於" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-teal-100 sticky top-0 z-50"
      style={{ borderBottomColor: "#99F6E4" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "#0F766E" }}>
              E
            </div>
            <div className="leading-none">
              <span className="text-[15px] font-semibold tracking-tight"
                style={{ color: "#0A1F1E" }}>ExpatHome</span>
              <span className="text-[11px] block font-medium"
                style={{ color: "#0F766E" }}>Hsinchu</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-colors duration-150"
                style={{ color: "#374151" }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = "#0F766E";
                  (e.target as HTMLElement).style.background = "#F0FDFA";
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = "#374151";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language */}
            <div className="hidden md:flex items-center gap-1.5 text-xs font-medium"
              style={{ color: "#6B7280" }}>
              <span style={{ color: "#0F766E", fontWeight: 600 }}>中</span>
              <span className="opacity-30">/</span>
              <Link href="/en" className="hover:underline" style={{ color: "#6B7280" }}>EN</Link>
              <span className="opacity-30">/</span>
              <Link href="/ja" className="hover:underline" style={{ color: "#6B7280" }}>日</Link>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center text-[13.5px] font-semibold px-4 py-2 rounded-lg text-white transition-colors"
              style={{ background: "#0369A1" }}
            >
              免費諮詢
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ color: "#374151" }}
            >
              {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
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
            <div className="pt-2">
              <Link href="/contact" className="block text-center py-2.5 text-sm font-semibold rounded-lg text-white"
                style={{ background: "#0369A1" }}
                onClick={() => setOpen(false)}>
                免費諮詢
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
