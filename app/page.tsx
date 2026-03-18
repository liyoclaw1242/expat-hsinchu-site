import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ExpatHome Hsinchu | 新竹外商租屋專家 | 竹科外派住宅服務",
  description:
    "新竹最專業的外商租屋代管服務。英語・日語・中文三語全程服務，專為 ASML、竹科外派人員量身打造。竹北高鐵特區精選住宅，入住保障，與 Santa Fe 等 Relocation Agent 深度合作。",
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app",
  },
};

const features = [
  {
    icon: "🌐",
    title: "英日中三語服務",
    desc: "所有溝通、合約、文件均提供中英日三語版本，零語言障礙。",
  },
  {
    icon: "🔍",
    title: "入住前驗屋保障",
    desc: "入住前我們親自驗屋拍照記錄，確認房況，保護您的權益。",
  },
  {
    icon: "🤝",
    title: "Relocation 合作夥伴",
    desc: "與 Santa Fe、Crown Relocations 等國際搬遷公司深度合作，無縫接軌外商搬遷流程。",
  },
  {
    icon: "🏢",
    title: "竹科外商專業知識",
    desc: "深度了解 ASML、Applied Materials 等外商公司的住宿補貼流程與合約需求。",
  },
  {
    icon: "📱",
    title: "24/7 緊急支援",
    desc: "LINE、WhatsApp 即時回覆，水電維修快速處理，讓您安心生活。",
  },
  {
    icon: "📊",
    title: "透明月報管理",
    desc: "每月提供房況報告、收租記錄、水電費明細，房東完全掌握資產狀況。",
  },
];

const companies = ["ASML", "Applied Materials", "Lam Research", "Tokyo Electron", "KLA", "Synopsys", "Cadence"];

const testimonials = [
  {
    name: "Thomas M.",
    company: "ASML Taiwan",
    lang: "English",
    text: "ExpatHome made my relocation to Hsinchu incredibly smooth. They handled everything from contract negotiation to move-in inspection in English — exactly what I needed as an expat.",
  },
  {
    name: "田中 健一",
    company: "東京エレクトロン台湾",
    lang: "日本語",
    text: "日本語対応がとても助かりました。竹北の物件選びから契約、入居後のサポートまで、安心してお任せできました。",
  },
  {
    name: "李先生",
    company: "房東・竹北",
    lang: "中文",
    text: "把房子交給他們管，完全不用操心，每個月準時收到租金和管理報告，找的都是外商公司員工，品質很穩定。",
  },
];

const blogPosts = [
  {
    href: "/blog/hsinchu-expat-housing-guide",
    title: "2025 新竹外派租屋完整指南：竹科外籍人員必讀",
    desc: "從選區域、找房到簽約，完整解析新竹外派員工租屋流程，含英語服務資源與注意事項。",
    date: "2025-03-18",
    readTime: "8 分鐘",
  },
  {
    href: "/blog/zhubei-expat-apartments",
    title: "竹北外商公寓推薦：高鐵特區 vs 關埔重劃區比較",
    desc: "竹北兩大熱門外商居住區域深度比較，含交通、配套、租金行情完整分析。",
    date: "2025-03-15",
    readTime: "6 分鐘",
  },
  {
    href: "/blog/asml-employee-housing-hsinchu",
    title: "ASML 員工新竹租屋指南：住宿補貼流程與推薦房源",
    desc: "專為 ASML 新竹員工整理的租屋攻略，包含公司住宿補貼申請流程與推薦物件類型。",
    date: "2025-03-10",
    readTime: "5 分鐘",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ExpatHome Hsinchu - 新竹外商租屋專家",
    description: "新竹最專業的外商租屋代管服務",
    url: "https://expathome-hsinchu.vercel.app",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "ExpatHome Hsinchu",
      description: "新竹外商租屋代管，英日中三語服務",
      serviceArea: "新竹市、新竹縣、竹北市",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-indigo-600/50 rounded-full px-4 py-1 text-sm mb-6 border border-indigo-400/30">
            🏆 竹科外派人員首選租屋代管
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Home in Hsinchu
            <br />
            <span className="text-indigo-300">新竹，就是你家</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 mb-4">
            In English · In Japanese · In Chinese
          </p>
          <p className="text-lg text-indigo-300 mb-10 max-w-2xl mx-auto">
            專為竹科外商外派人員提供的全方位租屋代管服務。<br />
            從找房、驗屋到全程管理，英日中三語，零煩惱入住。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
            >
              立即免費諮詢 →
            </Link>
            <Link
              href="/properties"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              查看精選房源
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { num: "100+", label: "服務外籍租客" },
              { num: "3", label: "語言支援" },
              { num: "24h", label: "緊急響應" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.num}</div>
                <div className="text-indigo-300 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-gray-50 py-8 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-4">服務外商公司員工包含</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {companies.map((company) => (
              <span key={company} className="text-gray-400 font-semibold text-sm">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              為什麼選擇 ExpatHome？
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我們不是普通房仲。我們是專門為竹科外商外派人員設計的住宅管理夥伴。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">服務流程</h2>
            <p className="text-gray-600">從第一次諮詢到入住，全程有我們陪伴</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
            {[
              { step: "01", title: "需求諮詢", desc: "了解您的預算、偏好、入住時間" },
              { step: "02", title: "精選房源", desc: "為您篩選符合條件的竹北精選物件" },
              { step: "03", title: "帶看驗屋", desc: "陪同看房，入住前完整驗屋拍照" },
              { step: "04", title: "三語簽約", desc: "中英日三語合約，條款清晰透明" },
              { step: "05", title: "持續代管", desc: "維修、收租、月報，全程管理" },
            ].map((s, i) => (
              <div key={s.step} className="relative text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-indigo-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">客戶評價</h2>
            <p className="text-gray-600">三語客戶，同樣的好評</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.company}</div>
                  <div className="text-xs text-indigo-500 mt-1">評價語言：{t.lang}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">外派租屋指南</h2>
              <p className="text-gray-600">深度內容，幫助您在新竹找到理想的家</p>
            </div>
            <Link href="/blog" className="text-indigo-600 font-medium hover:underline hidden md:block">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.href} href={post.href} className="group">
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="bg-indigo-100 h-40 flex items-center justify-center">
                    <span className="text-5xl">📖</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}閱讀</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{post.desc}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            準備好在新竹找到理想的家了嗎？
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            免費諮詢，英日中均可溝通。告訴我們您的需求，我們為您量身配對。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors"
            >
              📱 LINE 免費諮詢
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              📧 Email 聯絡
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
