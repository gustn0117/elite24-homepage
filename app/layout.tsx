import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(주)엘리트24 — 기업이사 전문 이사짐센터",
  description:
    "(주)엘리트24는 기업이사 전문 이사짐센터입니다. 사무실, 공장, 창고 이전을 합리적인 가격과 안전한 작업으로 책임집니다.",
  keywords: [
    "기업이사",
    "사무실이사",
    "공장이전",
    "이사짐센터",
    "엘리트24",
    "사무실이전",
    "법인이사",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d3557",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
