import { IMG } from "@/lib/images";

const STATS = [
  { v: "365", l: "Days", desc: "주말 · 야간 작업 가능" },
  { v: "1ON1", l: "Care", desc: "대표 직접 상담 · 책임" },
  { v: "ZERO", l: "Family Move", desc: "기업이사 100% 전문" },
  { v: "FAST", l: "Response", desc: "당일 견적 회신 원칙" },
];

export default function HomeStats() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white grain">
      <img src={IMG.city} alt="" aria-hidden className="image-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navyDeep via-brand-navyDeep/85 to-brand-navy/70" />
      <div className="absolute inset-0 ornament-grid opacity-25" />

      <div className="container-pad relative z-10 py-20 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow-light">By the Numbers</span>
            <h2 className="mt-6 font-serif font-medium text-balance text-3xl sm:text-4xl lg:text-[44px] leading-[1.2]">
              숫자로 보는 엘리트24의 약속.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-[15px] leading-[1.95] text-white/70 max-w-md lg:ml-auto text-pretty">
              매 작업마다 같은 기준을 적용합니다. 우리에게 작업 규모는 다르지만,
              책임의 무게는 같습니다.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="bg-brand-navyDeep/55 backdrop-blur px-7 py-9 sm:px-9 sm:py-10"
            >
              <div className="font-serif text-4xl sm:text-5xl leading-[1.05] gold-gradient-text">
                {s.v}
              </div>
              <div className="mt-4 text-[10px] leading-none tracking-eyebrow uppercase text-brand-goldLight font-semibold">
                {s.l}
              </div>
              <p className="mt-3 text-[13px] leading-[1.7] text-white/65">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
