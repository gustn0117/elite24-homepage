import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "작업사례",
  description:
    "엘리트24 작업사례 — 실제 진행한 사무실·공장·창고 이전 사진과 영상.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    url: "/portfolio",
    title: "작업사례 | (주)엘리트24",
    description: "실제 진행한 기업이사 현장 사진·영상으로 신뢰를 확인하세요.",
  },
};

// 업로드된 파일이 즉시 보이도록 캐시 우회
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="현장에서 쌓인 신뢰의 기록"
        description="(주)엘리트24가 직접 진행한 기업이사 작업 사진과 영상입니다. 새로운 사례는 정기적으로 추가됩니다."
        current="작업사례"
      />
      <PortfolioGallery />
    </>
  );
}
