import type { Metadata } from "next";
import Pricing from "@/components/Pricing";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "견적안내",
  description:
    "(주)엘리트24의 기업이사 견적 안내. 1톤당 단가 기준의 두 가지 패키지와 추가 작업, 견적 관련 자주 묻는 질문을 확인하세요.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="투명한 견적, 합리적인 단가"
        description="기업이사 1톤당 단가를 기준으로 두 가지 패키지를 제공합니다. 정확한 견적은 무료 현장 조사 후에 안내드립니다."
        current="견적안내"
      />
      <Pricing />
    </>
  );
}
