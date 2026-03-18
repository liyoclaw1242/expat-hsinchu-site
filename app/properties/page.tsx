import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "精選房源 | 竹北外商公寓 | ExpatHome Hsinchu",
  description:
    "ExpatHome Hsinchu 精選竹北外商公寓房源。高鐵特區、關埔重劃區精選物件，英語日語服務，適合竹科外派人員。",
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app/properties",
  },
};

const properties = [
  {
    id: "p1",
    title: "竹北高鐵特區 · 精裝3房",
    area: "竹北高鐵特區",
    rooms: "3房2廳2衛",
    size: "約45坪",
    floor: "12F / 22F",
    price: "NTD 42,000/月",
    features: ["全套家具", "停車位", "24h管理員", "健身房", "近COSTCO"],
    badge: "熱門",
    badgeColor: "bg-red-500",
  },
  {
    id: "p2",
    title: "竹北縣治 · 電梯2房 Furnished",
    area: "竹北縣治二路",
    rooms: "2房2廳1衛",
    size: "約28坪",
    floor: "8F / 15F",
    price: "NTD 28,000/月",
    features: ["全套家具", "停車位", "電梯大樓", "近生活機能"],
    badge: "適合單身",
    badgeColor: "bg-blue-500",
  },
  {
    id: "p3",
    title: "竹北高鐵 · 豪華3房 附車位",
    area: "竹北高鐵站步行5分",
    rooms: "3房2廳2衛",
    size: "約52坪",
    floor: "18F / 25F",
    price: "NTD 55,000/月",
    features: ["精品家具", "2個車位", "Swimming Pool", "健身房", "門廳管理"],
    badge: "攜眷首選",
    badgeColor: "bg-purple-500",
  },
  {
    id: "p4",
    title: "關埔重劃區 · 竹科步行可達 2房",
    area: "關埔重劃區",
    rooms: "2房2廳1衛",
    size: "約32坪",
    floor: "6F / 12F",
    price: "NTD 23,000/月",
    features: ["部分家具", "機車停車位", "電梯", "步行至竹科"],
    badge: "高性價比",
    badgeColor: "bg-green-500",
  },
];

export default function PropertiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">精選房源</h1>
        <p className="text-xl text-gray-600">
          每間都經過我們嚴格篩選，符合外商外派人員標準
        </p>
        <div className="mt-4 inline-block bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1 text-sm text-yellow-700">
          ⚠️ 以下為示範房源。實際可用房源請聯絡我們詢問。
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {properties.map((p) => (
          <article key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Property Image Placeholder */}
            <div className="bg-indigo-100 h-48 flex items-center justify-center relative">
              <span className="text-6xl">🏢</span>
              <span className={`absolute top-4 left-4 ${p.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {p.badge}
              </span>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{p.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">📍 {p.area}</p>
                </div>
                <div className="text-right">
                  <div className="text-indigo-600 font-bold text-lg">{p.price}</div>
                  <div className="text-gray-400 text-xs">（含管理費）</div>
                </div>
              </div>

              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span>🛏 {p.rooms}</span>
                <span>📐 {p.size}</span>
                <span>🏗 {p.floor}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.features.map((f) => (
                  <span key={f} className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200">
                    {f}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                詢問這間房源 →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">找不到喜歡的？</h2>
        <p className="text-gray-600 mb-6">
          告訴我們您的需求，我們為您客製搜尋，竹北、新竹市全都找。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
        >
          說說你的需求 →
        </Link>
      </div>
    </div>
  );
}
