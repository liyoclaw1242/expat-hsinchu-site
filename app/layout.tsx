import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import ThemeScript from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "易澤居 EasyRent | 新竹外商租屋專家 | 竹科外派住宅服務",
    template: "%s | 易澤居 EasyRent",
  },
  description:
    "新竹最專業的外商租屋代管服務。英語、日語、中文三語全程服務，專為 ASML、竹科外派人員量身打造。竹北高鐵特區精選住宅，入住保障，與 Relocation Agent 深度合作。",
  keywords: [
    "新竹外商租屋",
    "竹科外籍人員住宅",
    "Hsinchu expat rental",
    "新竹包租代管外商",
    "竹北外商公寓",
    "ASML 員工租屋",
    "新竹英語房仲",
    "Hsinchu furnished apartment",
    "竹北高鐵特區租屋",
    "新竹外商代管",
    "新竹日商租屋",
    "Hsinchu Japan expat housing",
  ],
  authors: [{ name: "易澤居 EasyRent" }],
  creator: "易澤居 EasyRent",
  publisher: "易澤居 EasyRent",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    alternateLocale: ["en_US", "ja_JP"],
    url: "https://www.easyrents.xyz",
    siteName: "易澤居 EasyRent",
    title: "易澤居 EasyRent | 新竹外商租屋專家",
    description:
      "新竹最專業的外商租屋代管服務。英日中三語，竹科外派人員首選。",
    images: [
      {
        url: "https://www.easyrents.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "易澤居 EasyRent - 新竹外商租屋專家",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "易澤居 EasyRent | 新竹外商租屋專家",
    description: "新竹最專業的外商租屋代管服務。英日中三語，竹科外派人員首選。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.easyrents.xyz",
    languages: {
      "zh-TW": "https://www.easyrents.xyz",
      "en-US": "https://www.easyrents.xyz/en",
      "ja-JP": "https://www.easyrents.xyz/ja",
    },
  },
};

const LANG_MAP: Record<string, string> = {
  zh: "zh-TW",
  en: "en",
  ja: "ja",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-locale") ?? "zh";
  const lang = LANG_MAP[locale] ?? "zh-TW";

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
