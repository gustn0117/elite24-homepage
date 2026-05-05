import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-navy text-white"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #f5a62333 0%, transparent 40%), radial-gradient(circle at 80% 70%, #2e4d7a 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-pad relative z-10 grid lg:grid-cols-12 gap-10 items-center pt-28 pb-20 sm:pt-32 sm:pb-28">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs sm:text-sm font-semibold backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            기업이사 전문 · (주)엘리트24
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
            사무실·공장 이사,
            <br />
            <span className="text-brand-orange">엘리트가 책임집니다</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
            저희 (주)엘리트24는 <strong className="text-white">기업이사 전문</strong>
            으로, 사무실·공장·창고 이전을 합리적인 가격과 책임감 있는 작업으로
            진행합니다. 빠르고 안전한 이사를 약속드립니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              무료 견적 받기
              <ArrowIcon />
            </a>
            <a href="tel:0269588067" className="btn-ghost">
              <PhoneIcon /> 02-6958-8067
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            <Stat label="기업이사 전문" value="100%" />
            <Stat label="기본 단가" value="30만원~" sub="/ 1톤" />
            <Stat label="견적 응대" value="당일" />
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-in">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <Image
                src="/logo-white.png"
                alt="엘리트24"
                width={400}
                height={400}
                className="w-full h-auto opacity-95"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 text-brand-navy p-4 sm:p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-brand-orange/15 flex items-center justify-center text-brand-orangeDark">
                  <CheckIcon />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-navy-500 font-semibold">
                    기업이사 전문
                  </div>
                  <div className="text-sm font-bold leading-tight">
                    사무실 · 공장 · 창고 이전
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-fade-in">
        <div className="flex flex-col items-center gap-2 text-xs">
          <span>스크롤하여 더 보기</span>
          <span className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur">
      <div className="text-xs text-white/60 font-medium">{label}</div>
      <div className="mt-1 text-xl sm:text-2xl font-bold text-white">
        {value}
        {sub && (
          <span className="ml-1 text-xs font-medium text-white/60">{sub}</span>
        )}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.5 4.5C5.5 4.5 7 4 8.5 4C9.5 4 10 6.5 10 7.5C10 8.5 8.5 9.5 8.5 9.5C8.5 9.5 9.5 12.5 12 14.5C14.5 16.5 17 17 17 17C17 17 18 15.5 19 15.5C20 15.5 22 16 22 17C22 18.5 21.5 20 21.5 20C21.5 20 19 21 14 18C9 15 5.5 9 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12.5L10 17.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
