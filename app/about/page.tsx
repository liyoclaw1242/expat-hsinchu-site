import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我們 | ExpatHome Hsinchu | 新竹外商租屋專家",
  description:
    "ExpatHome Hsinchu 的故事：為什麼我們專注外商租屋代管，我們的使命、團隊與服務理念。",
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">關於 ExpatHome Hsinchu</h1>
        <p className="text-xl text-gray-600">
          我們不只是仲介，我們是外派員工在新竹的在地夥伴。
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-10">

        <section className="bg-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">我們的使命</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            在新竹這個全球半導體重鎮，每年有數百名外籍工程師、主管從世界各地來到這裡。
            他們為台灣的科技產業貢獻巨大，但他們面對的租屋挑戰卻鮮少有人認真解決：
            語言不通、合約看不懂、維修聯絡不上房東、押金被莫名扣留……
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            ExpatHome Hsinchu 存在的理由很簡單：讓每一位外派員工在新竹都能有一個舒適、安心的家。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">我們的差異化</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🌐",
                title: "真正的三語服務",
                desc: "不只是翻譯，而是真正理解三種文化下的租屋習慣和期待。荷蘭工程師、日本駐在員、美國主管，我們都有經驗。",
              },
              {
                icon: "🎯",
                title: "專注外商市場",
                desc: "我們不做所有客戶，我們只做外商外派人員租屋。專注讓我們比任何通才仲介都更懂這個客群的需求。",
              },
              {
                icon: "🔗",
                title: "Relocation 生態系",
                desc: "與 Santa Fe、Crown Relocations 等國際搬遷公司建立合作，融入外商搬遷的正式流程，而非等待散客詢問。",
              },
              {
                icon: "📜",
                title: "透明、可信賴",
                desc: "入住前驗屋拍照、三語合約、月報告。每一個環節都有紀錄，每一筆費用都說清楚。",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">服務範圍</h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { area: "竹北市", detail: "高鐵特區・縣治二路・自強南路", icon: "🏙️" },
                { area: "新竹市", detail: "關埔重劃區・竹科周邊・光復路", icon: "🏫" },
                { area: "其他地區", detail: "湖口・竹東・頭份（洽詢）", icon: "📍" },
              ].map((a) => (
                <div key={a.area}>
                  <div className="text-3xl mb-2">{a.icon}</div>
                  <div className="font-bold text-gray-900">{a.area}</div>
                  <div className="text-gray-500 text-xs mt-1">{a.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">語言服務</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { flag: "🇹🇼", lang: "繁體中文", note: "主要服務語言" },
              { flag: "🇬🇧", lang: "English", note: "All services available" },
              { flag: "🇯🇵", lang: "日本語", note: "全サービス対応" },
            ].map((l) => (
              <div key={l.lang} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-4">
                <span className="text-2xl">{l.flag}</span>
                <div>
                  <div className="font-bold text-gray-900">{l.lang}</div>
                  <div className="text-gray-500 text-xs">{l.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-4">有問題嗎？直接聯絡我們。</p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
        >
          聯絡我們 →
        </a>
      </div>
    </div>
  );
}
