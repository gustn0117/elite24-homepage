import Link from "next/link";
import { IMG } from "@/lib/images";

export default function HomeQuote() {
  return (
    <section className="relative bg-white section overflow-hidden">
      <div className="container-pad">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="eyebrow">Representative Message</span>
            <h2 className="mt-6 section-title-serif text-balance">
              모든 작업은 결국 책임의 문제입니다.
            </h2>
            <span className="block mt-7 w-12 h-px bg-brand-gold" />
            <p className="mt-7 text-[15.5px] leading-[2] text-navy-700 text-pretty">
              저희 (주)엘리트24는 사무실·공장·창고 이전 현장에서 쌓아온 경험을
              바탕으로, 기업 고객이 가장 중요하게 여기는{" "}
              <strong className="text-brand-navy">시간·비용·자산의 안전</strong>
              을 지키는 데 모든 자원을 집중하고 있습니다.
            </p>
            <p className="mt-5 text-[15px] leading-[2] text-navy-600 text-pretty">
              작은 사무실 한 칸이라도 제 손으로 직접 살펴보고 마무리하는 것이
              저희의 원칙입니다.
            </p>

            <div className="mt-9 flex items-center gap-4">
              <span className="block w-10 h-px bg-brand-gold" />
              <div>
                <div className="text-[10px] leading-none tracking-eyebrow uppercase text-brand-gold font-bold">
                  CEO
                </div>
                <div className="mt-2 text-lg leading-[1.3] font-bold text-brand-navy">
                  대표 황필성
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/about" className="btn-outline">
                회사 소개 <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-brand-gold/30" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-brand-gold/15" />

              <div className="relative grid grid-cols-12 gap-3">
                <div className="col-span-8 relative aspect-[4/3] overflow-hidden border border-navy-200/60">
                  <img src={IMG.workspace} alt="" className="image-cover" />
                </div>
                <div className="col-span-4 relative aspect-[3/4] overflow-hidden border border-navy-200/60 mt-12">
                  <img src={IMG.office} alt="" className="image-cover" />
                </div>
                <div className="col-span-7 relative aspect-[4/3] overflow-hidden border border-navy-200/60 -mt-2">
                  <img src={IMG.movingBoxes} alt="" className="image-cover" />
                </div>
                <div className="col-span-5 relative aspect-[4/3] overflow-hidden border border-navy-200/60">
                  <img src={IMG.truck} alt="" className="image-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
