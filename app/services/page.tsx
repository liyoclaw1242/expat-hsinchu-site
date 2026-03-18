import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "代管服務內容與費用 | ExpatHome Hsinchu 新竹外商租屋代管",
  description:
    "ExpatHome Hsinchu 全方位房屋代管服務：找租客、驗屋、三語合約、收租管理、維修協調。透明費用，專為外商外派人員設計。",
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ExpatHome Hsinchu 房屋代管服務",
    serviceType: "Property Management",
    provider: { "@type": "LocalBusiness", name: "ExpatHome Hsinchu" },
    areaServed: "新竹市、新竹縣、竹北市",
    availableLanguage: ["Chinese", "English", "Japanese"],
    description: "專為外商外派人員的新竹房屋代管服務",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">服務內容</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            從找租客到退租，全程代管。房東省心，租客安心。
          </p>
        </div>

        {/* For Landlords */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🏠 房東代管服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔍",
                title: "精準找租客",
                desc: "對接外商 HR、Relocation Agent，精確觸及竹科外派人員。租客品質穩定，減少空置風險。",
              },
              {
                icon: "📋",
                title: "三語合約服務",
                desc: "提供中英日三語對照合約，條款清晰，保護房東和租客雙方權益。",
              },
              {
                icon: "🔎",
                title: "入住驗屋記錄",
                desc: "入住前完整驗屋拍照，建立房況存檔，退租時有憑有據。",
              },
              {
                icon: "💰",
                title: "每月準時收租",
                desc: "代為催收租金，提醒、跟進，確保房東按時收到租金。",
              },
              {
                icon: "🔧",
                title: "維修協調",
                desc: "維修需求統一處理，對接可靠廠商，最小化干擾，費用透明。",
              },
              {
                icon: "📊",
                title: "月報告",
                desc: "每月提供物件管理報告，含收租記錄、維修摘要、水電費明細。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* For Tenants */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🧳 租客找房服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🌐",
                title: "三語全程陪伴",
                desc: "英語、日語、中文均可溝通，從諮詢到簽約，語言零障礙。",
              },
              {
                icon: "📍",
                title: "精選房源匹配",
                desc: "根據您的預算、需求、偏好，為您篩選竹北精選物件，不浪費時間。",
              },
              {
                icon: "🤝",
                title: "代為談判",
                desc: "協助與房東溝通租金、家具、合約條款，保護租客利益。",
              },
              {
                icon: "📸",
                title: "入住前驗屋保障",
                desc: "入住前完整拍照記錄，確認房況，退租時不怕被無理扣押金。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">費用說明</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">房東代管費</h3>
              <div className="text-4xl font-bold text-indigo-600 my-4">8–10%</div>
              <p className="text-gray-500 text-sm mb-4">每月租金之百分比</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ 包含：收租、維修協調、月報告</li>
                <li>✅ 包含：三語溝通服務</li>
                <li>✅ 包含：緊急聯絡處理</li>
                <li className="text-gray-400">* 首次找租客另計仲介服務費</li>
              </ul>
            </div>
            <div className="bg-indigo-600 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">租客找房服務</h3>
              <div className="text-4xl font-bold my-4">免費</div>
              <p className="text-indigo-200 text-sm mb-4">租客找房基本服務不收費</p>
              <ul className="space-y-2 text-sm text-indigo-100">
                <li>✅ 需求諮詢</li>
                <li>✅ 房源推薦</li>
                <li>✅ 帶看陪伴</li>
                <li>✅ 入住驗屋</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            實際費用視服務範圍而定，歡迎免費諮詢
          </p>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors"
          >
            立即免費諮詢 →
          </Link>
        </div>
      </div>
    </>
  );
}
