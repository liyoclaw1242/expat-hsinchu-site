import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">E</span>
              </div>
              <div className="leading-none">
                <span className="text-[15px] font-bold text-white tracking-tight">ExpatHome</span>
                <span className="text-[11px] text-slate-500 block font-medium">Hsinchu</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              新竹最專業的外商租屋代管服務。<br />
              英語・日語・中文，全程三語服務。
            </p>
            <p className="text-slate-600 text-xs italic">
              Your Home in Hsinchu. In English, In Japanese, In Chinese.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">導航</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/services", label: "代管服務" },
                { href: "/properties", label: "精選房源" },
                { href: "/blog", label: "租屋指南" },
                { href: "/about", label: "關於我們" },
                { href: "/contact", label: "聯絡我們" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">聯絡</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-green-400">💬</span> LINE: @expathome-hsinchu
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span> WhatsApp: +886-xxx-xxx
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span> info@expathome-hsinchu.com
              </li>
              <li className="text-xs text-slate-600 pt-2">
                週一至週六 09:00–18:00 (GMT+8)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2025 ExpatHome Hsinchu. 版權所有。</p>
          <p className="text-slate-700 text-xs">服務區域：新竹市・新竹縣・竹北市・竹科</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ExpatHome Hsinchu",
            description: "新竹外商租屋代管服務，英日中三語，專為竹科外派人員服務",
            url: "https://expathome-hsinchu.vercel.app",
            address: { "@type": "PostalAddress", addressLocality: "新竹縣竹北市", addressCountry: "TW" },
            geo: { "@type": "GeoCoordinates", latitude: 24.8388, longitude: 120.9972 },
            areaServed: ["新竹市", "新竹縣", "竹北市"],
            availableLanguage: ["Chinese", "English", "Japanese"],
            openingHours: "Mo-Sa 09:00-18:00",
          }),
        }}
      />
    </footer>
  );
}
