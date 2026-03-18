import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://expathome-hsinchu.vercel.app";

  return [
    // Language roots
    {
      url: `${baseUrl}/en`,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ja`,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: baseUrl,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/hsinchu-expat-housing-guide`,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/zhubei-expat-apartments`,
      lastModified: new Date("2025-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/asml-employee-housing-hsinchu`,
      lastModified: new Date("2025-03-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
