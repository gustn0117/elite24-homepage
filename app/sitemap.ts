import type { MetadataRoute } from "next";

const BASE = "https://elite24.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/process`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio`, lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/contact`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
