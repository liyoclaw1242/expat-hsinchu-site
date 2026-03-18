"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "服務內容" },
  { href: "/properties", label: "精選房源" },
  { href: "/blog", label: "租屋指南" },
  { href: "/about", label: "關於我們" },
  { href: "/contact", label: "立即聯絡" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏠</span>
            <div>
              <span className="text-xl font-bold text-indigo-600">ExpatHome</span>
              <span className="text-sm text-gray-500 block leading-none">Hsinchu</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.href === "/contact" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-indigo-600 text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Language switcher bar */}
      <div className="bg-indigo-50 border-t border-indigo-100 py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-end space-x-4 text-xs text-indigo-600">
          <span className="font-semibold">中文</span>
          <Link href="/en" className="hover:underline">English</Link>
          <Link href="/ja" className="hover:underline">日本語</Link>
        </div>
      </div>
    </header>
  );
}
