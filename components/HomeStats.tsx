const STATS = [
  { v: "100%", l: "기업이사 전문" },
  { v: "1ON1", l: "대표 직접 상담" },
  { v: "365일", l: "주말·야간 가능" },
  { v: "당일", l: "견적 회신 원칙" },
];

export default function HomeStats() {
  return (
    <section className="relative bg-brand-navy text-white">
      <div className="container-pad py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl bg-white/8 backdrop-blur border border-white/15 px-5 py-6 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-orange">
                {s.v}
              </div>
              <div className="mt-2 text-[12px] sm:text-[13px] leading-[1.5] text-white/75 font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
