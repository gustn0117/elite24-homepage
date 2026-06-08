import type { Metadata } from "next";
import Process from "@/components/Process";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "이사절차",
  description:
    "엘리트24 이사절차 — 상담 → 무료 현장조사 → 정확한 견적 → 이사 진행, 명확한 4단계.",
  alternates: { canonical: "/process" },
  openGraph: {
    url: "/process",
    title: "이사절차 | (주)엘리트24",
    description:
      "전화/온라인 상담 → 무료 현장 조사 → 정확한 견적 → 이사 진행. 약속된 일정 그대로.",
  },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="명확한 4단계, 책임 있는 마무리"
        description="복잡한 단계 없이, 모든 진행 사항을 사전에 공유하고 약속된 일정 안에서 책임감 있게 마무리합니다."
        current="이사절차"
      />
      <Process />
    </>
  );
}
