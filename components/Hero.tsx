import Link from "next/link";
import { IMG } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-navy text-white">
      <img
        src={IMG.building}
        alt=""
        aria-hidden
        className="image-cover opacity-45"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,29,58,0.85) 0%, rgba(15,29,58,0.75) 60%, rgba(29,53,87,0.7) 100%)",
        }}
      />

      {/* 도면 그리드 — 미세 */}
      <svg
        viewBox="0 0 1200 800"
        className="hidden md:block absolute inset-0 w-full h-full opacity-[0.16] pointer-events-none"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 50}
            y1="0"
            x2={i * 50}
            y2="800"
            stroke="#fff"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 17 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 50}
            x2="1200"
            y2={i * 50}
            stroke="#fff"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      <div className="container-pad relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-28 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3.5 py-1.5 text-[12px] font-semibold text-white animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-blink" />
          기업이사 전문 · (주)엘리트24
        </span>

        <h1 className="mt-7 text-[36px] sm:text-5xl lg:text-[64px] leading-[1.18] font-extrabold tracking-tight text-balance animate-fade-up max-w-4xl mx-auto">
          사무실 · 공장 이전,
          <br />
          <span className="text-brand-orange">엘리트가 책임집니다.</span>
        </h1>

        <p
          className="mt-6 max-w-2xl mx-auto text-[15px] sm:text-lg leading-[1.85] text-white/80 text-pretty animate-fade-up"
          style={{ animationDelay: "0.08s" }}
        >
          (주)엘리트24는 사무실·공장·창고 등 기업 이전을 전문으로 합니다.
          합리적인 가격, 책임감 있는 작업으로 빠르고 안전한 이사를
          약속드립니다.
        </p>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.14s" }}
        >
          <Link href="/contact" className="btn-primary">
            무료 견적 받기 <ArrowIcon />
          </Link>
          <a href="tel:01039566618" className="btn-ghost-light">
            <PhoneIcon /> 010-3956-6618
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-px bg-white/15 max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/15">
          {[
            { v: "100%", l: "기업이사 전문" },
            { v: "30만원~", l: "1톤 기본 단가" },
            { v: "당일 응대", l: "빠른 견적 회신" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="bg-brand-navy/70 backdrop-blur px-5 py-5 sm:px-6 sm:py-6 animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.06}s` }}
            >
              <div className="text-lg sm:text-2xl font-extrabold text-brand-orange">
                {s.v}
              </div>
              <div className="mt-1.5 text-[11px] sm:text-[12px] leading-[1.5] text-white/70 font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/55 z-10">
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
