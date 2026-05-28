import type { MetadataRoute } from "next";

const BASE = "https://elite24.co.kr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/admin", "/api/admin/", "/api/chat"],
      },
      // 네이버 검색
      { userAgent: "Yeti", allow: "/", disallow: ["/admin", "/api/admin"] },
      // 다음 검색
      { userAgent: "Daumoa", allow: "/", disallow: ["/admin", "/api/admin"] },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
