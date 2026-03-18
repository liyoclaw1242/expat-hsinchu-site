"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "服務" },
  { href: "/properties", label: "房源" },
  { href: "/blog", label: "指南" },
  { href: "/about", label: "關於" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white text-sm font-bold">E</span>
            </div>
            <div className="leading-none">
              <span className="text-[15px] font-bold text-slate-900 tracking-tight">ExpatHome</span>
              <span className="text-[11px] text-slate-400 block font-medium">Hsinchu</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[13.5px] font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-3 flex items-center gap-2">
              <Link
                href="/contact"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-[13.5px] font-semibold rounded-lg transition-colors shadow-sm"
              >
                免費諮詢
              </Link>
            </div>
          </nav>

          {/* Language + Mobile */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-[11.5px] text-slate-400 font-medium">
              <span className="text-slate-700">中</span>
              <span>/</span>
              <Link href="/en" className="hover:text-indigo-600 transition-colors">EN</Link>
              <span>/</span>
              <Link href="/ja" className="hover:text-indigo-600 transition-colors">日</Link>
            </div>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-slate-100 space-y-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block px-3 py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                免費諮詢 →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
