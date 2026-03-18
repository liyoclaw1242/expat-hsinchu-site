import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "新竹外派租屋指南 | 外商員工必讀 | ExpatHome Hsinchu",
  description:
    "完整的新竹外派租屋指南。竹科外籍人員租屋攻略、竹北熱門區域分析、ASML 員工住宿資訊，英日中三語內容。",
  alternates: {
    canonical: "https://expathome-hsinchu.vercel.app/blog",
  },
};

const posts = [
  {
    href: "/blog/hsinchu-expat-housing-guide",
    title: "2025 新竹外派租屋完整指南：竹科外籍人員必讀",
    desc: "從選區域、找房到簽約，完整解析新竹外派員工租屋流程，含英語服務資源、住宿補貼申請流程與常見注意事項。",
    date: "2025-03-18",
    readTime: "8 分鐘",
    tags: ["租屋指南", "外商", "新竹"],
    lang: "中文・English",
  },
  {
    href: "/blog/zhubei-expat-apartments",
    title: "竹北外商公寓推薦：高鐵特區 vs 關埔重劃區完整比較",
    desc: "竹北兩大熱門外商居住區域深度比較，含交通、配套、租金行情、推薦社區完整分析。",
    date: "2025-03-15",
    readTime: "6 分鐘",
    tags: ["竹北", "房源推薦", "區域分析"],
    lang: "中文",
  },
  {
    href: "/blog/asml-employee-housing-hsinchu",
    title: "ASML 員工新竹租屋指南：住宿補貼流程與推薦房源",
    desc: "專為 ASML 新竹員工整理的租屋攻略，包含公司住宿補貼申請流程、常見問題與推薦物件類型。",
    date: "2025-03-10",
    readTime: "5 分鐘",
    tags: ["ASML", "外商員工", "住宿補貼"],
    lang: "English・中文",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">外派租屋指南</h1>
        <p className="text-xl text-gray-600">
          深度內容，幫助在新竹的外商員工找到理想的家
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="group block">
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 flex gap-6">
              <div className="bg-indigo-100 w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl">
                📖
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}閱讀</span>
                  <span>·</span>
                  <span className="text-indigo-500">{post.lang}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
