import Link from "next/link";
import { QuoteIllustration } from "@/components/Illustrations";

export default function HomeQuote() {
  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-32 w-[400px] h-[400px] rounded-full bg-brand-orange/8 blur-3xl pointer-events-none" />

      <div className="container-pad grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <span className="chip">대표 인사말</span>
          <h2 className="mt-5 section-title text-balance">
            모든 작업은 결국 책임의 문제입니다
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.95] text-navy-700 text-pretty">
            저희 (주)엘리트24는 사무실·공장·창고 이전 현장에서 쌓아온 경험을
            바탕으로, 기업 고객이 가장 중요하게 여기는{" "}
            <strong className="text-brand-navy">시간·비용·자산의 안전</strong>
            을 지키는 데 모든 자원을 집중합니다.
          </p>
          <p className="mt-4 text-[15px] leading-[1.95] text-navy-600 text-pretty">
            작은 사무실 한 칸이라도 제 손으로 직접 살펴보고 마무리하는 것이
            저희의 원칙입니다.
          </p>

          <div className="mt-8">
            <Link href="/about" className="btn-outline">
              회사 소개 자세히 보기 <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative aspect-square max-w-md mx-auto">
            <QuoteIllustration className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
