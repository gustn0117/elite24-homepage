import { IMG } from "@/lib/images";

const STATS = [
  { v: "100%", l: "기업이사 전문" },
  { v: "1ON1", l: "대표 직접 상담" },
  { v: "365일", l: "주말·야간 가능" },
  { v: "당일", l: "견적 회신 원칙" },
];

export default function HomeStats() {
  return (
    <section className="relative overflow-hidden border-y border-navy-100">
      {/* 빌딩 배경 */}
      <img
        src={IMG.buildingModern}
        alt=""
        aria-hidden
        className="image-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.92) 100%)",
        }}
      />

      <div className="container-pad relative z-10 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {STATS.map((s, i) => (
            <div
              key={s.l}
              className="bg-white/95 backdrop-blur-sm rounded-2xl border border-navy-100 px-5 py-6 text-center shadow-soft hover:shadow-cardHover hover:-translate-y-1 transition animate-fade-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-orange">
                {s.v}
              </div>
              <div className="mt-2 text-[12px] sm:text-[13px] leading-[1.5] text-navy-600 font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
