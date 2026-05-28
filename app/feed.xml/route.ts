import { getSiteConfig } from "@/lib/site-config-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 3600;

const BASE = "https://elite24.co.kr";

const ITEMS: { slug: string; title: string; desc: string; category: string }[] = [
  {
    slug: "/about",
    title: "회사소개 — 기업이사 전문 이사짐센터",
    desc: "(주)엘리트24는 사무실·공장·창고 등 기업 이전을 전문으로 합니다. 정확한 일정, 정직하고 투명한 가격, 안전한 자산 보호.",
    category: "회사소개",
  },
  {
    slug: "/services",
    title: "서비스 — 사무실·공장·법인 이전",
    desc: "사무실 이전, 공장/창고 이전, 법인/기관 이전 — 한 팀이 책임집니다. 자체 차량·인력·장비.",
    category: "서비스",
  },
  {
    slug: "/pricing",
    title: "견적 안내 — 1톤 30만원부터, 투명한 가격",
    desc: "고객 사전포장 30만원/톤, 엘리트 풀패키지 40만원/톤. 20km 이내 추가비용 없음.",
    category: "견적",
  },
  {
    slug: "/process",
    title: "이사 절차 — 상담부터 마무리까지 4단계",
    desc: "전화/온라인 상담 → 무료 현장 조사 → 정확한 견적 → 이사 진행. 약속한 견적 그대로.",
    category: "절차",
  },
  {
    slug: "/portfolio",
    title: "작업 사례 — 실제 이전 현장 사진·영상",
    desc: "(주)엘리트24가 진행한 사무실·공장·창고 이전 작업 사례.",
    category: "작업사례",
  },
  {
    slug: "/contact",
    title: "문의하기 — 무료 견적·상담",
    desc: "전화·이메일·온라인 양식으로 무료 견적 상담. 평일·주말 24시간 응대.",
    category: "문의",
  },
];

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const c = getSiteConfig();
  const buildDate = new Date().toUTCString();
  const pubDate = new Date().toUTCString();

  const itemsXml = ITEMS.map((it) => {
    const link = `${BASE}${it.slug}`;
    return `    <item>
      <title>${esc(it.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${esc(it.desc)}</description>
      <category>${esc(it.category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(c.companyName)} — 기업이사 전문 이사짐센터</title>
    <link>${BASE}</link>
    <description>(주)엘리트24는 사무실·공장·창고 등 기업 이전을 전문으로 하는 이사짐센터입니다. 정직하고 투명한 가격, 양심적인 작업으로 일합니다.</description>
    <language>ko-KR</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <generator>Next.js</generator>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
