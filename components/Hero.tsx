import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-navyDeep text-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at 22% 25%, rgba(201,164,92,0.18) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(46,77,122,0.55) 0%, transparent 55%), linear-gradient(180deg, #07112a 0%, #0f1d3a 60%, #1d3557 100%)",
          }}
        />
        <div className="absolute inset-0 ornament-grid opacity-40" />
        <div
          className="absolute inset-x-0 bottom-0 h-72"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent, rgba(7,15,36,0.7))",
          }}
        />
      </div>

      <div className="container-pad relative z-10 pt-36 pb-32 sm:pt-44 sm:pb-36 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="eyebrow-light">Premium Corporate Moving</span>
          <h1 className="mt-7 font-serif text-[42px] sm:text-6xl lg:text-[80px] font-medium tracking-tight leading-[1.05] text-balance">
            기업의 이전,
            <br />
            <span className="gold-gradient-text italic">엘리트24</span>가
            <br />
            완성합니다.
          </h1>

          <div className="mt-10 max-w-xl">
            <span className="block w-12 h-px bg-brand-gold animate-slide-line" />
            <p className="mt-6 text-[15px] sm:text-lg text-white/75 leading-[1.95]">
              사무실·공장·창고 이전을 전문으로 하는 (주)엘리트24는,
              까다로운 기업 환경을 가장 잘 이해하는 한 팀이 책임지고
              <strong className="text-white"> 처음부터 끝까지 </strong>
              담당합니다.
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
        </div>

        <div className="lg:col-span-5 animate-fade-in">
          <div className="relative max-w-md mx-auto lg:ml-auto">
            <div className="absolute -inset-6 border border-brand-gold/30 -z-0" />
            <div className="absolute -inset-3 border border-brand-gold/15 -z-0" />
            <div className="relative aspect-[4/5] bg-gradient-to-br from-brand-navyDeep via-brand-navy to-brand-navyMid border border-brand-gold/25 flex items-center justify-center p-12 shadow-glow">
              <Image
                src="/logo-white.png"
                alt="(주)엘리트24"
                width={420}
                height={420}
                priority
                className="w-full h-auto opacity-95"
              />
            </div>
            <div className="absolute -bottom-7 -left-6 sm:-left-10 bg-white text-brand-navy p-6 max-w-[260px] shadow-soft">
              <div className="text-[10px] tracking-eyebrow uppercase font-bold text-brand-gold">
                Representative
              </div>
              <div className="mt-1.5 text-lg font-bold tracking-tight">대표 황필성</div>
              <div className="mt-1 text-xs text-navy-500">직접 상담 · 직접 작업</div>
              <span className="block mt-3 w-8 h-px bg-brand-gold" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 animate-fade-in z-10">
        <span className="text-[10px] tracking-eyebrow uppercase text-white/45">Scroll</span>
        <span className="block w-px h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent z-10" />
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
      <path
        d="M5.5 4.5C5.5 4.5 7 4 8.5 4C9.5 4 10 6.5 10 7.5C10 8.5 8.5 9.5 8.5 9.5C8.5 9.5 9.5 12.5 12 14.5C14.5 16.5 17 17 17 17C17 17 18 15.5 19 15.5C20 15.5 22 16 22 17C22 18.5 21.5 20 21.5 20C21.5 20 19 21 14 18C9 15 5.5 9 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
