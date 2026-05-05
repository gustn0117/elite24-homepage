import Link from "next/link";
import { IMG } from "@/lib/images";
import { HeaderDecor } from "@/components/Illustrations";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-navy text-white">
      <HeaderDecor className="absolute inset-0 w-full h-full opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15,29,58,0.92) 0%, rgba(29,53,87,0.7) 60%, rgba(29,53,87,0.55) 100%)",
        }}
      />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-brand-orange/15 blur-[110px] animate-pulse-soft" />
      <div className="absolute -bottom-40 right-10 w-[460px] h-[460px] rounded-full bg-brand-orange/10 blur-[110px] animate-float-slow" />

      <div className="container-pad relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3.5 py-1.5 text-[12px] font-semibold text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-blink" />
            기업이사 전문 · (주)엘리트24
          </span>

          <h1 className="mt-6 text-[36px] sm:text-5xl lg:text-[60px] leading-[1.2] font-extrabold tracking-tight text-balance">
            사무실·공장 이사,
            <br className="hidden sm:inline" />
            <span className="text-brand-orange"> 엘리트가 책임집니다.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] sm:text-lg leading-[1.85] text-white/80 text-pretty">
            저희 (주)엘리트24는 사무실·공장·창고 등 기업 이전을 전문으로 합니다.
            합리적인 가격, 책임감 있는 작업으로 빠르고 안전한 이사를
            약속드립니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              무료 견적 받기 <ArrowIcon />
            </Link>
            <a href="tel:01039566618" className="btn-ghost-light">
              <PhoneIcon /> 010-3956-6618
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 max-w-lg">
            {[
              { v: "기업 전문", l: "100% 기업이사" },
              { v: "30만원~", l: "1톤 기본 단가" },
              { v: "당일 응대", l: "빠른 견적 회신" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="rounded-2xl bg-white/8 backdrop-blur border border-white/15 px-4 py-4 animate-fade-up"
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                <div className="text-base sm:text-lg font-bold text-white">{s.v}</div>
                <div className="mt-1.5 text-[11px] sm:text-xs leading-[1.4] text-white/65">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block animate-fade-in">
          <div className="relative max-w-md ml-auto">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-brand-orange/30 blur-2xl animate-pulse-soft" />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white/10 blur-2xl" />

            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-cardHover ring-1 ring-white/15">
              <img src={IMG.building} alt="기업 외관 빌딩" className="image-cover" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(15,29,58,0.1) 30%, rgba(15,29,58,0.85) 100%)",
                }}
              />

              {/* 떠다니는 카드 */}
              <div className="absolute top-5 left-5 right-5 flex justify-end">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 text-brand-navy px-3 py-1.5 text-[11px] font-bold shadow-card">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-blink" />
                  Corporate Moving
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 text-brand-navy p-5 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/15 flex items-center justify-center text-brand-orangeDark">
                    <CheckIcon />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brand-orangeDark uppercase tracking-wider2">
                      Trusted
                    </div>
                    <div className="mt-0.5 text-[14px] font-bold leading-[1.3]">
                      사무실 · 공장 · 창고 이전
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/55 z-10 animate-fade-in">
        <span className="text-[10px] tracking-wider2 uppercase">Scroll</span>
        <span className="block w-px h-7 bg-white/40" />
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
function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M5.5 4.5C5.5 4.5 7 4 8.5 4C9.5 4 10 6.5 10 7.5C10 8.5 8.5 9.5 8.5 9.5C8.5 9.5 9.5 12.5 12 14.5C14.5 16.5 17 17 17 17C17 17 18 15.5 19 15.5C20 15.5 22 16 22 17C22 18.5 21.5 20 21.5 20C21.5 20 19 21 14 18C9 15 5.5 9 5.5 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5L10 17.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
