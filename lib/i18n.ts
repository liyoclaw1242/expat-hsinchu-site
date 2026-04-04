export const locales = ["zh", "en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  ja: "日本語",
};

export const localePaths: Record<Locale, string> = {
  zh: "/zh",
  en: "/en",
  ja: "/ja",
};

// ── Translation strings ──────────────────────────────────────────────────────

export type TranslationKey =
  | "nav.home"
  | "nav.services"
  | "nav.properties"
  | "nav.blog"
  | "nav.about"
  | "nav.contact"
  | "hero.badge"
  | "hero.title1"
  | "hero.title2"
  | "hero.subtitle"
  | "hero.body"
  | "hero.cta.primary"
  | "hero.cta.secondary"
  | "hero.stats.clients"
  | "hero.stats.languages"
  | "hero.stats.response"
  | "trust.label"
  | "features.label"
  | "features.heading1"
  | "features.heading2"
  | "cta.heading"
  | "cta.body"
  | "cta.line"
  | "cta.email"
  | "contact.heading"
  | "contact.sub";

type Translations = Record<TranslationKey, string>;

export const t: Record<Locale, Translations> = {
  zh: {
    "nav.home": "首頁",
    "nav.services": "服務",
    "nav.properties": "房源",
    "nav.blog": "指南",
    "nav.about": "關於",
    "nav.contact": "免費諮詢",
    "hero.badge": "竹科外派人員首選租屋代管",
    "hero.title1": "Your Home",
    "hero.title2": "in Hsinchu",
    "hero.subtitle": "In English · In Japanese · 中文",
    "hero.body": "竹科外派人員的租屋代管專家。從找房、驗屋到全程管理，三語零障礙，讓您安心住在新竹。",
    "hero.cta.primary": "免費諮詢",
    "hero.cta.secondary": "查看房源",
    "hero.stats.clients": "服務外籍租客",
    "hero.stats.languages": "語言支援",
    "hero.stats.response": "緊急響應",
    "trust.label": "服務外商員工包含",
    "features.label": "為什麼選我們",
    "features.heading1": "不只是仲介，",
    "features.heading2": "是你在新竹的夥伴",
    "cta.heading": "準備在新竹找到理想的家了嗎？",
    "cta.body": "免費諮詢，英日中均可溝通。告訴我們您的需求，我們為您量身配對。",
    "cta.line": "LINE 免費諮詢",
    "cta.email": "Email 聯絡",
    "contact.heading": "英語・日語・中文，任選一種",
    "contact.sub": "我們都接得住。免費諮詢，告訴我們您的需求，我們為您量身配對。",
  },

  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.properties": "Properties",
    "nav.blog": "Guides",
    "nav.about": "About",
    "nav.contact": "Free Consultation",
    "hero.badge": "Hsinchu Science Park Expat Housing Specialist",
    "hero.title1": "Your Home",
    "hero.title2": "in Hsinchu",
    "hero.subtitle": "In English · In Japanese · 中文",
    "hero.body": "Full-service property management for expats at TSMC suppliers, ASML, Applied Materials, and more. English-first service, zero language barriers.",
    "hero.cta.primary": "Free Consultation",
    "hero.cta.secondary": "View Properties",
    "hero.stats.clients": "Expat clients served",
    "hero.stats.languages": "Languages supported",
    "hero.stats.response": "Emergency response",
    "trust.label": "Serving employees from",
    "features.label": "Why choose us",
    "features.heading1": "More than an agent —",
    "features.heading2": "your partner in Hsinchu",
    "cta.heading": "Ready to find your home in Hsinchu?",
    "cta.body": "Free consultation in English, Japanese, or Chinese. Tell us your needs and we'll match you.",
    "cta.line": "Chat on LINE",
    "cta.email": "Send Email",
    "contact.heading": "English, Japanese, or Chinese —",
    "contact.sub": "We speak your language. Free consultation, no commitment.",
  },

  ja: {
    "nav.home": "ホーム",
    "nav.services": "サービス",
    "nav.properties": "物件",
    "nav.blog": "ガイド",
    "nav.about": "会社概要",
    "nav.contact": "無料相談",
    "hero.badge": "竹科駐在員向け賃貸管理専門",
    "hero.title1": "Your Home",
    "hero.title2": "in Hsinchu",
    "hero.subtitle": "In English · In Japanese · 中文",
    "hero.body": "ASML、東京エレクトロン、新竹科学工業園区の駐在員向け賃貸管理サービス。日本語完全対応、安心してお任せください。",
    "hero.cta.primary": "無料相談",
    "hero.cta.secondary": "物件を見る",
    "hero.stats.clients": "外国人入居者実績",
    "hero.stats.languages": "対応言語",
    "hero.stats.response": "緊急対応",
    "trust.label": "対応企業（一部）",
    "features.label": "選ばれる理由",
    "features.heading1": "仲介以上の存在—",
    "features.heading2": "新竹でのパートナー",
    "cta.heading": "新竹での理想の住まいを見つけましょう",
    "cta.body": "日本語・英語・中国語で無料相談承ります。ご要望をお聞かせください。",
    "cta.line": "LINEで相談",
    "cta.email": "メールで相談",
    "contact.heading": "日本語・英語・中国語",
    "contact.sub": "お気軽にお問い合わせください。無料相談、いつでも承ります。",
  },
};
