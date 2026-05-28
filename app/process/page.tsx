import type { Metadata } from "next";
import Process from "@/components/Process";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "이사절차",
  description:
    "(주)엘리트24의 기업이사 4단계 절차. 상담부터 현장 조사, 견적 제안, 이사 진행까지 명확한 프로세스를 안내드립니다.",
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
