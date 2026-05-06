const STATS = [
  { v: "100%", l: "기업이사 전문", icon: "🎯" },
  { v: "1ON1", l: "대표 직접 상담", icon: "🤝" },
  { v: "365일", l: "주말·야간 가능", icon: "📅" },
  { v: "당일", l: "견적 회신 원칙", icon: "⚡" },
];

export default function HomeStats() {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-amber-50 border-y border-navy-100">
      <div className="container-pad py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {STATS.map((s, i) => (
            <div
              key={s.l}
              className="bg-white rounded-2xl border border-navy-100 px-5 py-6 text-center shadow-soft hover:shadow-cardHover hover:-translate-y-1 transition animate-fade-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="text-2xl sm:text-3xl mb-2">{s.icon}</div>
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
