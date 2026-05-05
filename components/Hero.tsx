import Link from "next/link";
import { IMG } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-navyDeep text-white grain">
      {/* Background photograph */}
      <img
        src={IMG.heroBuilding}
        alt=""
        aria-hidden
        className="image-cover scale-105"
      />
      {/* Cinematic veil */}
      <div className="absolute inset-0 photo-veil" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 30%, rgba(201,164,92,0.18) 0%, transparent 45%), radial-gradient(circle at 82% 75%, rgba(46,77,122,0.4) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 ornament-grid opacity-30" />

      <div className="container-pad relative z-10 pt-36 pb-32 sm:pt-44 sm:pb-40 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 animate-fade-up">
          <span className="eyebrow-light">Premium Corporate Moving</span>

          <h1 className="mt-7 font-serif font-medium tracking-tight text-balance text-[44px] sm:text-7xl lg:text-[88px] leading-[1.04]">
            기업의 이전을 완성하는
            <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic"> 단 하나의 기준.</span>
          </h1>

          <div className="mt-10 max-w-2xl">
            <span className="block w-12 h-px bg-brand-gold animate-slide-line" />
            <p className="mt-7 text-[15px] sm:text-lg leading-[1.95] text-white/80 text-pretty">
              사무실·공장·창고 이전을 전문으로 하는 (주)엘리트24는, 까다로운 기업
              환경을 가장 잘 이해하는 한 팀이 처음부터 끝까지 책임집니다. 정확한
              일정, 분명한 견적, 안전한 자산 이송을 약속드립니다.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gold">
              무료 견적 문의 <ArrowIcon />
            </Link>
            <a href="tel:01039566618" className="btn-ghost-light">
              <PhoneIcon /> 010-3956-6618
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-px bg-white/15 max-w-2xl border border-white/15">
            {[
              { v: "100%", l: "기업이사 전문" },
              { v: "30만원~", l: "1톤 기본 단가" },
              { v: "당일", l: "상담 응대" },
            ].map((s) => (
              <div key={s.l} className="bg-brand-navyDeep/55 backdrop-blur px-5 py-5 sm:px-6 sm:py-6">
                <div className="text-xl sm:text-3xl leading-[1.1] font-semibold text-white">
                  {s.v}
                </div>
                <div className="mt-2 text-[10px] sm:text-[11px] leading-none tracking-wider2 uppercase text-white/55">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 animate-fade-in hidden lg:block">
          <div className="relative max-w-sm ml-auto">
            <div className="absolute -inset-5 border border-brand-gold/30" />
            <div className="absolute -inset-2 border border-brand-gold/15" />
            <div className="relative aspect-[3/4] overflow-hidden border border-brand-gold/30 shadow-glow">
              <img src={IMG.workspace} alt="" className="image-cover" />
              <div className="absolute inset-0 photo-veil-soft" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] tracking-eyebrow uppercase text-brand-goldLight font-semibold">
                  Trusted Operations
                </div>
                <div className="mt-3 font-serif text-2xl leading-[1.2] text-white">
                  사무실 · 공장 · 창고
                </div>
                <span className="block mt-4 w-10 h-px bg-brand-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 z-10 animate-fade-in">
        <span className="text-[10px] leading-none tracking-eyebrow uppercase text-white/45">
          Scroll
        </span>
        <span className="block w-px h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px z-10 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.5 4.5C5.5 4.5 7 4 8.5 4C9.5 4 10 6.5 10 7.5C10 8.5 8.5 9.5 8.5 9.5C8.5 9.5 9.5 12.5 12 14.5C14.5 16.5 17 17 17 17C17 17 18 15.5 19 15.5C20 15.5 22 16 22 17C22 18.5 21.5 20 21.5 20C21.5 20 19 21 14 18C9 15 5.5 9 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
