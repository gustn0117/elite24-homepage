import type { Metadata } from "next";
import About from "@/components/About";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "엘리트24 회사소개 — 기업이사 전문 이사짐센터. 정확한 일정, 투명한 견적, 책임 있는 작업.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "회사소개 | (주)엘리트24",
    description:
      "(주)엘리트24는 사무실·공장·창고 등 기업 이전을 전문으로 하는 이사짐센터입니다.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Elite24"
        title="기업의 신뢰가 머무는 자리"
        description="(주)엘리트24는 기업·법인·사업장 이전만 진행하는 전문 이사짐센터입니다. 정확한 일정, 분명한 비용, 안전한 자산 이송을 무엇보다 중요하게 여깁니다."
        current="회사소개"
      />
      <About />
    </>
  );
}
