import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import MusicPlayer from "@/components/MusicPlayer";
import SiteConfigProvider from "@/components/SiteConfigProvider";
import { getSiteConfig } from "@/lib/site-config-server";

const SITE_URL = "https://elite24.co.kr";
const SITE_NAME = "(주)엘리트24";
// 네이버 권장 80자 이내, '엘리트24' 키워드 선두 배치
const DESCRIPTION =
  "엘리트24 — 사무실·공장·창고 등 기업이사 전문 이사짐센터. 정직한 견적, 양심적인 작업, 약속한 가격 그대로.";
const OG_IMAGE = `${SITE_URL}/img/building.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — 기업이사 전문 이사짐센터`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    // 브랜드 (최우선 — 검색엔진 가중치)
    "엘리트24",
    "(주)엘리트24",
    "주식회사 엘리트24",
    "ELITE24",
    "elite24",
    // 핵심 서비스
    "기업이사",
    "사무실이사",
    "공장이전",
    "창고이전",
    "이사짐센터",
    "사무실이전",
    "법인이사",
    "기관이사",
    "사무실 이사 전문",
    "공장 이전 전문",
    "병원 이전",
    "관공서 이전",
    "기업이사 견적",
    "중량물 운반",
    "서울 이사짐센터",
    "금천구 이사짐센터",
  ],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    title: `${SITE_NAME} — 기업이사 전문 이사짐센터`,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — 기업이사 전문 이사짐센터`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — 기업이사 전문 이사짐센터`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "naver-site-verification": "a4784315780c8f52a1cb0b751db1f4cab7e24270",
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = getSiteConfig();

  // LocalBusiness / MovingCompany 구조화 데이터 (JSON-LD)
  const phoneE164 = `+82-2-${config.phonePrimary.replace(/^0?2-?/, "")}`.replace(/--/g, "-");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${SITE_URL}#organization`,
    name: config.companyName,
    alternateName: ["엘리트24", "ELITE24"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: OG_IMAGE,
    description: DESCRIPTION,
    telephone: phoneE164,
    email: config.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address,
      addressLocality: "금천구",
      addressRegion: "서울",
      addressCountry: "KR",
    },
    areaServed: {
      "@type": "Country",
      name: "대한민국",
    },
    priceRange: "₩₩",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "기업이사 서비스",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "사무실 이전",
            description: "본사·지사·사무실 전체 이전. IT 장비, OA가구, 서류 보관함까지 안전 포장으로 이송",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "공장 / 창고 이전",
            description: "생산 라인, 자재, 재고 무중단 이전. 중량물·지게차·사다리차 협업",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "법인 / 기관 이전",
            description: "병원·학원·관공서 등 기관 이전, 보안 자료 케어, 정해진 일정 준수",
          },
        },
      ],
    },
  };

  return (
    <html lang="ko">
      <body>
        <SiteConfigProvider config={config}>
          <Header />
          <main>{children}</main>
          <Footer />
          <AIChat />
          <MusicPlayer />
        </SiteConfigProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
