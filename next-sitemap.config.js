/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.easyrents.xyz",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: "https://www.easyrents.xyz/en",
      hreflang: "en",
    },
    {
      href: "https://www.easyrents.xyz/ja",
      hreflang: "ja",
    },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
