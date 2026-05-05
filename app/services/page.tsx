import type { Metadata } from "next";
import Services from "@/components/Services";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "사무실 이전, 공장·창고 이전, 법인·기관 이전 등 (주)엘리트24의 기업이사 전문 서비스를 안내드립니다.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="기업이사 전 영역, 한 팀이 책임집니다"
        description="사무실·공장·창고·기관 이전을 전문으로 하는 (주)엘리트24의 통합 서비스를 소개합니다. 자체 인력·차량·장비로 처음부터 끝까지 책임집니다."
        current="서비스"
      />
      <Services />
    </>
  );
}
