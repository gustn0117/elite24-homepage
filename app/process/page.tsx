import type { Metadata } from "next";
import Process from "@/components/Process";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "이사절차",
  description:
    "(주)엘리트24의 기업이사 4단계 절차. 상담부터 현장 조사, 견적 제안, 이사 진행까지 명확한 프로세스를 안내드립니다.",
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
