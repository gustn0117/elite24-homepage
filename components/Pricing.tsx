const PLANS = [
  {
    badge: "셀프포장",
    title: "고객 사전포장",
    price: "30",
    unit: "만원 / 1톤",
    desc: "고객님이 개인짐을 사전에 포장해 두시면, 운반 작업만 진행하는 합리적인 단가입니다.",
    features: [
      "운반 / 상하차 작업",
      "차량 및 인력 제공",
      "기본 견적 기준",
    ],
    highlight: false,
  },
  {
    badge: "전체 패키지",
    title: "엘리트 풀패키지",
    price: "40",
    unit: "만원 / 1톤",
    desc: "포장 단계부터 운반·정리까지 저희가 처음부터 끝까지 모두 진행해 드립니다.",
    features: [
      "포장재·박스 일체 제공",
      "전문 인력 포장 작업",
      "운반 후 기본 정리",
    ],
    highlight: true,
  },
];

const EXTRAS = [
  {
    title: "계단 작업",
    detail: "엘리베이터 사용이 어려운 경우",
    fee: "+30%",
    note: "기본 단가 대비 30% 추가",
  },
  {
    title: "사다리차 작업",
    detail: "고층 / 외부 작업 필요 시",
    fee: "별도",
    note: "사다리 비용 별도 산정",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-navy-50/60">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">PRICING</span>
          <h2 className="section-title mt-4">투명한 견적 안내</h2>
          <p className="section-sub">
            기업이사 기준 1톤당 단가입니다. 현장 상황에 따라 정확한 견적은 무료
            상담을 통해 안내드립니다.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PLANS.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-3xl p-7 sm:p-9 transition ${
                p.highlight
                  ? "bg-brand-navy text-white shadow-2xl shadow-navy-900/20 scale-[1.02]"
                  : "bg-white border border-navy-100"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  추천
                </span>
              )}
              <span
                className={`inline-block text-xs font-bold tracking-wider uppercase ${
                  p.highlight ? "text-brand-orange" : "text-brand-orangeDark"
                }`}
              >
                {p.badge}
              </span>
              <h3
                className={`mt-2 text-2xl font-bold ${
                  p.highlight ? "text-white" : "text-brand-navy"
                }`}
              >
                {p.title}
              </h3>
              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className={`text-5xl font-extrabold ${
                    p.highlight ? "text-brand-orange" : "text-brand-navy"
                  }`}
                >
                  {p.price}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    p.highlight ? "text-white/80" : "text-navy-600"
                  }`}
                >
                  {p.unit}
                </span>
              </div>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  p.highlight ? "text-white/80" : "text-navy-600"
                }`}
              >
                {p.desc}
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${
                      p.highlight ? "text-white/90" : "text-navy-700"
                    }`}
                  >
                    <span
                      className={`mt-1 w-4 h-4 shrink-0 rounded-full flex items-center justify-center ${
                        p.highlight
                          ? "bg-brand-orange text-white"
                          : "bg-brand-orange/15 text-brand-orangeDark"
                      }`}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12.5L10 17.5L19 7.5"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                  p.highlight
                    ? "bg-brand-orange text-white hover:bg-brand-orangeDark"
                    : "bg-brand-navy text-white hover:bg-navy-800"
                }`}
              >
                상담 신청하기
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m0 0l-6-6m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-lg font-bold text-brand-navy">추가 작업 안내</h3>
            <p className="mt-2 text-sm text-navy-600">
              현장 환경에 따라 아래 작업이 추가될 수 있습니다.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {EXTRAS.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl bg-white border border-navy-100 p-5 flex items-start gap-4"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-orange/10 text-brand-orangeDark flex items-center justify-center font-extrabold text-sm">
                  {e.fee}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-brand-navy">{e.title}</div>
                  <div className="text-xs text-navy-500 mt-0.5">
                    {e.detail}
                  </div>
                  <div className="text-sm text-navy-700 mt-2">{e.note}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-navy-500">
            * 표시된 단가는 부가세 별도이며, 현장 조사 후 최종 견적이 확정됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
