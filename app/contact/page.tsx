import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡我們 | ExpatHome Hsinchu | LINE・WhatsApp・Email",
  description:
    "聯絡 ExpatHome Hsinchu。英語、日語、中文均可。LINE、WhatsApp、Email 多管道聯絡，免費諮詢新竹外商租屋服務。",
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "聯絡 ExpatHome Hsinchu",
    url: "https://expathome-hsinchu.vercel.app/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "ExpatHome Hsinchu",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["Chinese", "English", "Japanese"],
        },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">聯絡我們</h1>
          <p className="text-xl text-gray-600">英語・日語・中文，任選一種，我們都接得住。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "💬",
              title: "LINE",
              subtitle: "@expathome-hsinchu",
              desc: "最快速的聯絡方式，通常 1 小時內回覆",
              cta: "加 LINE 諮詢",
              href: "https://line.me/ti/p/%40expathome-hsinchu",
              bg: "bg-green-500",
            },
            {
              icon: "📱",
              title: "WhatsApp",
              subtitle: "+886-xxx-xxx-xxx",
              desc: "適合外籍員工習慣的聯絡方式",
              cta: "WhatsApp 諮詢",
              href: "https://wa.me/886xxxxxxxxx",
              bg: "bg-indigo-500",
            },
            {
              icon: "📧",
              title: "Email",
              subtitle: "info@expathome-hsinchu.com",
              desc: "適合較複雜的需求或文件往來",
              cta: "發送 Email",
              href: "mailto:info@expathome-hsinchu.com",
              bg: "bg-gray-700",
            },
          ].map((channel) => (
            <div key={channel.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="text-5xl mb-4">{channel.icon}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{channel.title}</h2>
              <p className="text-indigo-600 text-sm font-medium mb-3">{channel.subtitle}</p>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{channel.desc}</p>
              <a
                href={channel.href}
                className={`inline-block ${channel.bg} text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity`}
              >
                {channel.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">常見問題 FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "你們服務哪些區域？",
                a: "主要服務範圍：新竹縣竹北市（高鐵特區、縣治二路一帶）、新竹市（關埔重劃區、竹科周邊）。其他新竹地區請洽詢。",
              },
              {
                q: "Do you provide services in English?",
                a: "Yes, absolutely. All our consultations, property tours, lease negotiations, and ongoing management communications are fully available in English. We also offer Japanese.",
              },
              {
                q: "日本語でのサービスはありますか？",
                a: "はい、対応可能です。相談から契約、入居後のサポートまで、すべて日本語でご利用いただけます。",
              },
              {
                q: "我是房東，想把房子交給你們管，怎麼開始？",
                a: "透過 LINE 或 Email 聯絡我們，告知物件基本資料（地址、坪數、設備）。我們會安排免費評估，說明代管條件和費用，再決定是否合作。",
              },
              {
                q: "需要多久可以幫我找到租客？",
                a: "視物件條件而定。符合外商需求的物件（竹北、電梯大樓、2-3 房、家具齊全），通常 2-6 週可以找到合適租客。",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:text-indigo-600">
                  {faq.q}
                </summary>
                <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do you provide services in English?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all consultations, property tours, lease negotiations, and management communications are fully available in English.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas do you serve in Hsinchu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We primarily serve Zhubei (High-Speed Rail district) and Hsinchu City (Guanpu Redevelopment Zone, near Hsinchu Science Park).",
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </>
  );
}
