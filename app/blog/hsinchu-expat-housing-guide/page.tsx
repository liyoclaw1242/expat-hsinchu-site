import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025 新竹外派租屋完整指南：竹科外籍人員必讀 | ExpatHome Hsinchu",
  description:
    "2025 年最完整的新竹外派租屋指南。竹北熱門區域分析、英語服務資源、住宿補貼申請流程、注意事項，竹科外籍人員必讀。",
  keywords: [
    "新竹外派租屋",
    "竹科外籍人員住宅",
    "Hsinchu expat rental guide",
    "新竹外商住宿",
    "竹北租屋推薦",
    "新竹英語租屋服務",
  ],
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app/blog/hsinchu-expat-housing-guide",
  },
};

export default function HsinchuExpatGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "2025 新竹外派租屋完整指南：竹科外籍人員必讀",
    description: "完整解析新竹外派員工租屋流程，含英語服務資源、住宿補貼申請流程與注意事項",
    datePublished: "2025-03-18",
    dateModified: "2025-03-18",
    author: { "@type": "Organization", name: "ExpatHome Hsinchu" },
    publisher: { "@type": "Organization", name: "ExpatHome Hsinchu", url: "https://expathome-hsinchu.vercel.app" },
    inLanguage: "zh-TW",
    about: { "@type": "Place", name: "新竹", containsPlace: "竹北市" },
    keywords: "新竹外派租屋, 竹科外籍人員住宅, Hsinchu expat rental",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {["租屋指南", "外商", "新竹", "竹科"].map((tag) => (
              <span key={tag} className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full">#{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            2025 新竹外派租屋完整指南：竹科外籍人員必讀
          </h1>
          <p className="text-gray-500 text-sm">更新日期：2025-03-18 · 閱讀時間：約 8 分鐘</p>
          <p className="mt-4 text-xl text-gray-600 leading-relaxed">
            剛收到外派通知，要去新竹竹科工作？這份指南幫你從選區域、找房、到簽約，全程搞定。
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-200">
          <h2 className="font-bold text-gray-900 mb-3">目錄</h2>
          <ol className="space-y-1 text-sm text-indigo-600">
            {[
              "新竹外派市場現況",
              "選哪個區域？竹北 vs 新竹市區",
              "租金行情參考",
              "如何找到好房？",
              "簽約注意事項",
              "住宿補貼如何申請？",
              "入住後實用資源",
            ].map((item, i) => (
              <li key={item}>
                <a href={`#section-${i + 1}`} className="hover:underline">{i + 1}. {item}</a>
              </li>
            ))}
          </ol>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-12">

          <section id="section-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 新竹外派市場現況</h2>
            <p className="text-gray-700 leading-relaxed">
              新竹是台灣最重要的科技產業聚落，以新竹科學工業園區（竹科）為核心，聚集了全球半導體設備、IC 設計、晶圓代工等領域的頂尖企業。
              近年來，ASML、Applied Materials、Lam Research、Tokyo Electron、KLA、Synopsys 等外商在新竹的外派人員規模持續擴大，
              保守估計竹科地區常駐外籍員工已超過 500 人。
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              這些外籍員工來自荷蘭、美國、日本、韓國、德國等地，租屋需求有幾個共同特點：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>需要整層住宅（非分租），通常 2-3 房</li>
              <li>偏好有電梯、有停車位的社區大樓</li>
              <li>需要全套家具（furnished）或願意短期自行添購</li>
              <li>預算相對充裕：單身月租 NTD 25,000-35,000，攜眷 NTD 35,000-60,000</li>
              <li>需要英語溝通，或透過公司 HR / Relocation Agent 協助</li>
            </ul>
          </section>

          <section id="section-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 選哪個區域？竹北 vs 新竹市區</h2>
            <p className="text-gray-700 leading-relaxed">
              新竹外商員工最常選擇的居住區域主要有兩個：竹北市和新竹市區（尤其是關埔重劃區）。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">竹北高鐵特區（首選）</h3>
            <p className="text-gray-700 leading-relaxed">
              竹北高鐵特區是目前外商員工密度最高的區域。主要原因：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
              <li><strong>外國人社群</strong>：大量外籍員工聚集，有非正式的外國人社群網絡</li>
              <li><strong>高品質住宅</strong>：2010 年後建案為主，社區管理完善</li>
              <li><strong>生活機能</strong>：COSTCO、IKEA、家樂福、各式餐廳齊全</li>
              <li><strong>交通方便</strong>：高鐵竹北站，前往台北 30 分鐘</li>
              <li><strong>國際學校</strong>：距離新竹美國學校（Hsinchu American School）較近</li>
            </ul>
            <p className="text-gray-700 mt-3">
              <strong>租金行情：</strong>2房 NTD 25,000-35,000 / 3房 NTD 35,000-55,000（含管理費、車位另計）
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">關埔重劃區（竹科南門）</h3>
            <p className="text-gray-700 leading-relaxed">
              距離竹科步行可達，適合喜歡騎車或走路上班的員工。租金略低，但外國人社群較少。
            </p>
            <p className="text-gray-700 mt-3">
              <strong>租金行情：</strong>2房 NTD 20,000-28,000 / 3房 NTD 28,000-40,000
            </p>
          </section>

          <section id="section-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 租金行情參考（2025 Q1）</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">房型</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">竹北高鐵區</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">關埔重劃區</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["2房2廳 (furnished)", "NTD 25,000-32,000", "NTD 20,000-26,000"],
                    ["3房2廳 (furnished)", "NTD 35,000-50,000", "NTD 28,000-38,000"],
                    ["3房2廳 (空屋)", "NTD 28,000-38,000", "NTD 22,000-30,000"],
                    ["停車位（另計）", "NTD 3,000-5,000/月", "NTD 2,000-3,500/月"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 border-b border-gray-100 text-gray-700">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">* 以上為含管理費的市場行情，實際依物件狀況、樓層、設備而異</p>
          </section>

          <section id="section-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 如何找到好房？</h2>
            <p className="text-gray-700 leading-relaxed">
              外商員工的租屋管道與一般台灣租客有很大的不同。以下是各管道的評估：
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">✅ 推薦：公司 Relocation Agent</h3>
            <p className="text-gray-700">
              多數大型外商（尤其 ASML、Applied Materials 等）有簽約的 Relocation Agent，例如 Santa Fe Relocations 或 Crown Relocations。
              這些公司有在地人員，熟悉外商需求，英語溝通無障礙。如果公司有提供這個服務，強烈建議善用。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">✅ 推薦：外商專業代管公司</h3>
            <p className="text-gray-700">
              像 ExpatHome Hsinchu 這樣專注外商市場的代管公司，提供英日中三語服務，熟悉外商合約結構，
              可以協助從找房、帶看、驗屋到簽約後的全程管理。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">⚠️ 謹慎：591 租屋網</h3>
            <p className="text-gray-700">
              591 是台灣最大租屋平台，但幾乎全中文，房東英語能力不穩定，合約多為制式中文版本。
              不熟悉繁體中文的外籍員工建議透過仲介或代管公司，避免溝通落差和合約風險。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">ℹ️ 參考：Facebook 社群</h3>
            <p className="text-gray-700">
              「Hsinchu Expats」等 Facebook 社團有時有外籍員工直接分租或轉租的信息，
              適合尋找短租或了解外國人的居住體驗，但交易品質參差不齊。
            </p>
          </section>

          <section id="section-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 簽約注意事項</h2>
            <p className="text-gray-700 leading-relaxed">
              台灣租賃合約有幾個外籍人士常遇到的問題：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mt-4">
              <li>
                <strong>押金</strong>：台灣法律規定押金最多 2 個月租金。
                請確認合約中押金條款清晰，退租時的扣除規則有明文規定。
              </li>
              <li>
                <strong>水電費</strong>：確認是否獨立電表（台電直接繳）還是房東轉抄收費（需確認費率）。
                外籍員工常因不了解台灣夏季的累進電費制度而有意外支出。
              </li>
              <li>
                <strong>家具設備</strong>：建議簽約前拍照記錄所有傢俱家電狀況，附在合約中，避免退租時糾紛。
              </li>
              <li>
                <strong>提前解約</strong>：確認違約條款。外商外派合約可能提前結束，需要靈活的退租條款。
              </li>
              <li>
                <strong>英文合約</strong>：要求提供英文或日文對照版本。正規代管公司通常可提供。
              </li>
            </ul>
          </section>

          <section id="section-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 住宿補貼如何申請？</h2>
            <p className="text-gray-700 leading-relaxed">
              多數外商公司提供住宿補貼（Housing Allowance），但各公司流程不同。一般來說：
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-3 mt-4">
              <li>
                <strong>確認補貼上限</strong>：通常在 Offer Letter 或外派條款中有明確規定。
                常見範圍：NTD 20,000-50,000/月，視職級而定。
              </li>
              <li>
                <strong>提交文件</strong>：租約正本（或影本）+ 繳租收據給 HR。
                部分公司要求合約為公司名義，而非個人名義。
              </li>
              <li>
                <strong>稅務處理</strong>：補貼通常計入薪資所得，需申報所得稅。
                建議諮詢公司指定的稅務顧問。
              </li>
              <li>
                <strong>直接匯款選項</strong>：部分大外商可直接由公司匯款給房東，
                確認與 HR 和房東三方溝通清楚。
              </li>
            </ol>
          </section>

          <section id="section-7">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 入住後實用資源</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🏫", title: "Hsinchu American School", desc: "新竹美國學校，提供 K-12 英語教育" },
                { icon: "🏥", title: "台大醫院新竹分院", desc: "有英語服務窗口，建議先了解外籍就醫流程" },
                { icon: "🛒", title: "好市多 COSTCO", desc: "竹北店，外籍員工最常採購大宗食品的地方" },
                { icon: "🍔", title: "外國料理餐廳", desc: "竹北高鐵附近有多家西餐、日料、韓食" },
                { icon: "🚆", title: "高鐵竹北站", desc: "前往台北南港 28 分鐘，週末到台北方便" },
                { icon: "📱", title: "外籍居留證辦理", desc: "新竹市移民署，提供英語服務窗口" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-gray-600 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">需要協助找房？</h3>
          <p className="text-indigo-200 mb-6">
            ExpatHome Hsinchu 提供免費諮詢，英日中均可溝通。
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
          >
            免費諮詢 →
          </a>
        </div>
      </article>
    </>
  );
}
