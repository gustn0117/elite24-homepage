import type { Metadata } from "next";
import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "(주)엘리트24 견적·상담 문의. 전화·이메일·온라인 양식으로 빠르게 연락드립니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="기업이사 상담, 지금 시작하세요."
        description="평일·주말 모두 상담 가능합니다. 전화·이메일·온라인 양식 어디로 연락 주시든 가장 빠른 채널로 답변드립니다."
        current="문의하기"
        image={IMG.meeting}
      />
      <Contact />
    </>
  );
}
