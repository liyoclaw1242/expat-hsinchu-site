import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASML Employee Housing Guide Hsinchu | ExpatHome Hsinchu",
  description:
    "Complete housing guide for ASML employees in Hsinchu, Taiwan. Housing allowance process, recommended areas (Zhubei High-Speed Rail zone), English-speaking property management services.",
  keywords: [
    "ASML employee housing Hsinchu",
    "ASML 員工租屋新竹",
    "Hsinchu expat rental ASML",
    "ASML Taiwan housing allowance",
    "竹北 ASML 員工公寓",
    "Hsinchu semiconductor expat housing",
  ],
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app/blog/asml-employee-housing-hsinchu",
  },
};

export default function ASMLHousingGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ASML Employee Housing Guide – Hsinchu, Taiwan",
    description: "Complete housing guide for ASML and semiconductor expat employees in Hsinchu",
    datePublished: "2025-03-10",
    dateModified: "2025-03-18",
    author: { "@type": "Organization", name: "ExpatHome Hsinchu" },
    inLanguage: ["en", "zh-TW"],
    about: [
      { "@type": "Organization", name: "ASML" },
      { "@type": "Place", name: "Hsinchu Science Park" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {["ASML", "外商員工", "英文", "住宿補貼"].map((tag) => (
              <span key={tag} className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full">#{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            ASML Employee Housing Guide in Hsinchu
            <br />
            <span className="text-2xl text-gray-500 font-normal">ASML 員工新竹租屋指南</span>
          </h1>
          <p className="text-gray-500 text-sm">Updated: 2025-03-18 · 5 min read · 中文/English bilingual</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 mb-10 border border-blue-200">
          <h2 className="font-bold text-blue-900 mb-2">Quick Summary</h2>
          <p className="text-blue-800 text-sm leading-relaxed">
            ASML Taiwan has a significant presence in Hsinchu Science Park with an estimated 200-400 expat employees.
            Most prefer <strong>Zhubei High-Speed Rail district</strong> for its expat community,
            international school access, and quality housing. Housing allowances typically range
            NTD 25,000-50,000/month depending on seniority.
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Most ASML Employees Choose Zhubei</h2>
            <p className="text-gray-700 leading-relaxed">
              The Zhubei High-Speed Rail district has organically become the de facto expat neighborhood in greater Hsinchu.
              Here's why ASML expats consistently choose it:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li><strong>Expat community:</strong> Largest concentration of non-Taiwanese residents in the area</li>
              <li><strong>COSTCO access:</strong> The only COSTCO in greater Hsinchu area</li>
              <li><strong>International school:</strong> Closer to Hsinchu American School (grades K-12)</li>
              <li><strong>Modern housing:</strong> Post-2010 buildings with professional property management</li>
              <li><strong>HSR connection:</strong> 28 minutes to Taipei Nangang on weekends</li>
              <li><strong>Commute to ASML:</strong> ~20-30 min by car/scooter or company shuttle</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Housing Allowance at ASML Taiwan</h2>
            <p className="text-gray-700 leading-relaxed">
              While specific ASML policies vary and change over time, here's what we've observed from
              working with ASML expats in Hsinchu:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Seniority</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Typical Allowance</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Entry/Mid Engineer", "NTD 20,000-28,000", "Usually individual, unfurnished OK"],
                    ["Senior Engineer", "NTD 28,000-38,000", "Often furnished, 2-bed preferred"],
                    ["Manager/Director", "NTD 38,000-55,000", "3-bed, may include parking"],
                    ["VP+ / Family", "NTD 50,000+", "Premium units, often with family allowance"],
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
            <p className="text-xs text-gray-400 mt-2">
              * These are market observations, not official ASML figures. Confirm with your HR/relocation coordinator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Relocation Process: What to Expect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ASML typically works with established relocation agencies for Taiwan assignments.
              The typical process looks like this:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-3 mt-4">
              <li>
                <strong>Assignment confirmation:</strong> HR sends you the relocation package details,
                usually 4-8 weeks before start date
              </li>
              <li>
                <strong>Relocation agent contact:</strong> Santa Fe or assigned agency reaches out to
                coordinate housing search
              </li>
              <li>
                <strong>Preview trip:</strong> Some assignments include a paid preview trip to Hsinchu
                to view apartments before the official start date
              </li>
              <li>
                <strong>Property selection:</strong> Work with agent (or ExpatHome Hsinchu) to shortlist
                properties that match your allowance and requirements
              </li>
              <li>
                <strong>Lease signing:</strong> Bilingual contract, usually 1-year minimum with renewal option</li>
              <li>
                <strong>Move-in inspection:</strong> Document everything — photos of every room, all appliances</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What to Look for in an Hsinchu Apartment (ASML Checklist)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "✅", item: "Independent electricity meter (台電 account)" },
                { icon: "✅", item: "High-speed internet pre-installed (or ask provider)" },
                { icon: "✅", item: "Full kitchen with oven/microwave" },
                { icon: "✅", item: "Washing machine (dryer is rare in TW)" },
                { icon: "✅", item: "AC units in all rooms" },
                { icon: "✅", item: "Parking space (required if bringing a car)" },
                { icon: "✅", item: "Building security / 24h guard" },
                { icon: "✅", item: "Pet policy confirmed if you have pets" },
                { icon: "⚠️", item: "Check mobile signal strength in the unit" },
                { icon: "⚠️", item: "Elevator – essential for higher floors" },
                { icon: "⚠️", item: "Proximity to international school (if family)" },
                { icon: "⚠️", item: "Public transport access for non-car households" },
              ].map((item) => (
                <div key={item.item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span>{item.icon}</span>
                  <span>{item.item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">需要協助？（中文版）</h2>
            <p className="text-gray-700 leading-relaxed">
              ExpatHome Hsinchu 與多家 ASML 員工合作，熟悉 ASML 的住宿補貼流程和合約需求。
              我們提供英語、日語、中文三語服務，可以協助：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>根據您的補貼金額篩選符合條件的物件</li>
              <li>協助與房東溝通和條件談判（英語或中文）</li>
              <li>提供中英對照合約，條款清晰</li>
              <li>入住前驗屋拍照，保護您的押金</li>
              <li>租期內維修聯絡、水電費協助</li>
            </ul>
          </section>

        </div>

        <div className="mt-16 bg-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Find Your Hsinchu Home?</h3>
          <p className="text-indigo-200 mb-6">
            Free consultation in English, Japanese, or Chinese. We know what ASML expats need.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
          >
            Get Free Consultation →
          </a>
        </div>
      </article>
    </>
  );
}
