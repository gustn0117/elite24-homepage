import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import MusicPlayer from "@/components/MusicPlayer";
import SiteConfigProvider from "@/components/SiteConfigProvider";
import { getSiteConfig } from "@/lib/site-config-server";

const SITE_URL = "https://elite24-homepage.hsweb.pics";
const DESCRIPTION =
  "(주)엘리트24는 사무실·공장·창고 등 기업 이전을 전문으로 하는 이사짐센터입니다. 합리적 가격, 명확한 견적, 책임감 있는 작업으로 기업 고객을 모십니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "(주)엘리트24 — 기업이사 전문 이사짐센터",
    template: "%s | (주)엘리트24",
  },
  description: DESCRIPTION,
  keywords: [
    "기업이사",
    "사무실이사",
    "공장이전",
    "창고이전",
    "이사짐센터",
    "엘리트24",
    "사무실이전",
    "법인이사",
    "기관이사",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    title: "(주)엘리트24 — 기업이사 전문 이사짐센터",
    description: DESCRIPTION,
    siteName: "(주)엘리트24",
  },
  robots: { index: true, follow: true },
  verification: {
    other: {
      "naver-site-verification": "a4784315780c8f52a1cb0b751db1f4cab7e24270",
    },
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
      </body>
    </html>
  );
}
