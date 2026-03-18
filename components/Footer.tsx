import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🏠</span>
              <div>
                <span className="text-xl font-bold text-indigo-400">ExpatHome</span>
                <span className="text-sm text-gray-400 block leading-none">Hsinchu</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              新竹最專業的外商租屋代管服務。<br />
              英語・日語・中文，全程三語服務。<br />
              竹科外派人員的可靠住宅夥伴。
            </p>
            <p className="text-gray-500 text-xs">
              Your Home in Hsinchu. In English, In Japanese, In Chinese.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">服務</h3>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "代管服務" },
                { href: "/properties", label: "精選房源" },
                { href: "/blog", label: "租屋指南" },
                { href: "/about", label: "關於我們" },
                { href: "/contact", label: "聯絡我們" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">聯絡方式</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📱 LINE: @expathome-hsinchu</li>
              <li>💬 WhatsApp: +886-xxx-xxx-xxx</li>
              <li>📧 info@expathome-hsinchu.com</li>
              <li className="pt-2 text-xs text-gray-500">
                服務時間：週一至週六<br />
                09:00 - 18:00 (GMT+8)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs">
              © 2025 ExpatHome Hsinchu. 版權所有。
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/sitemap.xml" className="text-gray-500 hover:text-gray-400 text-xs">
                Sitemap
              </Link>
              <span className="text-gray-500 text-xs">
                服務區域：新竹市・新竹縣・竹北市・竹科
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ExpatHome Hsinchu",
            description: "新竹外商租屋代管服務，英日中三語，專為竹科外派人員服務",
            url: "https://expathome-hsinchu.vercel.app",
            telephone: "+886-xxx-xxx-xxx",
            email: "info@expathome-hsinchu.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "竹北市",
              addressLocality: "新竹縣",
              addressCountry: "TW",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 24.8388,
              longitude: 120.9972,
            },
            areaServed: ["新竹市", "新竹縣", "竹北市", "竹科"],
            serviceType: ["房屋代管", "租屋仲介", "外商住宅服務"],
            availableLanguage: ["Chinese", "English", "Japanese"],
            openingHours: "Mo-Sa 09:00-18:00",
          }),
        }}
      />
    </footer>
  );
}
