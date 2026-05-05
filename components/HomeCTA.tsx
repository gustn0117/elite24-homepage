import Link from "next/link";
import { IMG } from "@/lib/images";

export default function HomeCTA() {
  return (
    <section className="section-tight bg-white">
      <div className="container-pad">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy text-white">
          <img
            src={IMG.building}
            alt=""
            aria-hidden
            className="image-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/40" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-14">
            <div className="lg:col-span-7">
              <span className="chip bg-brand-orange text-white">Free Consultation</span>
              <h2 className="mt-5 text-[26px] sm:text-3xl lg:text-[36px] leading-[1.3] font-bold tracking-tight text-balance">
                기업이사, 지금 견적부터 받아보세요
              </h2>
              <p className="mt-4 text-[15px] sm:text-base leading-[1.85] text-white/75 max-w-xl text-pretty">
                평일·주말·야간 상담 모두 가능합니다. 전화·이메일·온라인 양식 어디로
                연락 주시든 빠르게 답변드리겠습니다.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href="tel:01039566618"
                className="flex items-center justify-between gap-4 rounded-2xl bg-brand-orange text-white px-6 py-5 hover:bg-brand-orangeDark transition"
              >
                <div>
                  <div className="text-[11px] tracking-wider2 uppercase font-bold opacity-90">
                    Direct Call
                  </div>
                  <div className="mt-1 text-xl font-extrabold">010-3956-6618</div>
                </div>
                <ArrowIcon />
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 px-6 py-5 hover:bg-white/20 transition"
              >
                <div>
                  <div className="text-[11px] tracking-wider2 uppercase font-bold text-brand-orange">
                    Online Inquiry
                  </div>
                  <div className="mt-1 text-base font-bold">온라인 견적 요청서 작성</div>
                </div>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
