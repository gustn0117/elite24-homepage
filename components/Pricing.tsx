import Link from "next/link";

const PLANS = [
  {
    badge: "Self Pack",
    title: "고객 사전포장",
    price: "30",
    unit: "만원 / 1톤",
    desc: "고객님이 개인짐을 사전에 포장해 두시면, 운반 작업만 진행하는 합리적인 단가입니다.",
    features: [
      "운반 / 상하차 작업",
      "차량 및 인력 제공",
      "기본 단가 기준 산정",
      "단순 이전 작업에 적합",
    ],
    highlight: false,
  },
  {
    badge: "Full Service",
    title: "엘리트 풀패키지",
    price: "40",
    unit: "만원 / 1톤",
    desc: "포장 단계부터 운반·정리까지 (주)엘리트24가 처음부터 끝까지 진행하는 통합 패키지입니다.",
    features: [
      "포장재·박스 일체 제공",
      "전문 인력 포장 작업",
      "운반 후 기본 정리",
      "기업 환경에 최적화된 일정 운용",
    ],
    highlight: true,
  },
];

const EXTRAS = [
  { title: "계단 작업", detail: "엘리베이터 사용이 어려운 경우", fee: "+30%", note: "기본 단가 대비 30% 추가 산정" },
  { title: "사다리차 작업", detail: "고층 / 외부 작업이 필요한 경우", fee: "별도", note: "사다리 비용 별도 산정" },
];

const FAQS = [
  { q: "현장 조사 없이 견적이 가능한가요?", a: "이전 규모를 알려주시면 1차 개략 견적은 빠르게 안내드릴 수 있습니다. 다만 정확한 비용은 현장 조사 후 확정되며, 현장 조사는 무료입니다." },
  { q: "공휴일·야간 작업도 진행하나요?", a: "기업이사 특성상 평일 외 시간 작업이 자주 필요합니다. 공휴일·야간 작업 모두 가능하며, 요청 시 사전에 일정을 협의해 드립니다." },
  { q: "추가 비용이 갑자기 발생할 수 있나요?", a: "추가 작업이 예상되는 경우에는 사전에 모두 안내드립니다. 현장 조건 변동이 없는 한 견적 외 추가 청구는 발생하지 않습니다." },
];

export default function Pricing() {
  return (
    <>
      {/* Plans */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Pricing</span>
            <h2 className="mt-5 section-title text-balance">
              투명한 견적, 두 가지 패키지
            </h2>
            <p className="section-sub text-pretty">
              기업이사 기준 1톤당 단가입니다. 정확한 견적은 무료 현장 조사 후
              안내드립니다.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {PLANS.map((p) => (
              <div
                key={p.title}
                className={`relative rounded-3xl p-7 sm:p-9 transition ${
                  p.highlight
                    ? "bg-brand-navy text-white shadow-cardHover lg:scale-[1.02]"
                    : "bg-white border border-navy-100 shadow-card"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[11px] tracking-wider2 uppercase font-bold px-4 py-1.5 rounded-full">
                    Recommended
                  </span>
                )}
                <div
                  className={`text-[11px] tracking-wider2 uppercase font-bold ${
                    p.highlight ? "text-brand-orange" : "text-brand-orangeDark"
                  }`}
                >
                  {p.badge}
                </div>
                <h3
                  className={`mt-2 text-2xl font-bold ${
                    p.highlight ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {p.title}
                </h3>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={`text-5xl font-extrabold ${
                      p.highlight ? "text-brand-orange" : "text-brand-navy"
                    }`}
                  >
                    {p.price}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      p.highlight ? "text-white/75" : "text-navy-600"
                    }`}
                  >
                    {p.unit}
                  </span>
                </div>
                <p
                  className={`mt-3 text-[14px] leading-[1.85] text-pretty ${
                    p.highlight ? "text-white/80" : "text-navy-600"
                  }`}
                >
                  {p.desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-[14px] leading-[1.6] ${
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
                          <path d="M5 12.5L10 17.5L19 7.5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition ${
                    p.highlight
                      ? "bg-brand-orange text-white hover:bg-brand-orangeDark"
                      : "bg-brand-navy text-white hover:bg-brand-navyDeep"
                  }`}
                >
                  상담 신청 <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-navy-500">
            * 표시된 단가는 부가세 별도이며, 현장 조사 후 최종 견적이 확정됩니다.
          </p>
        </div>
      </section>

      {/* Extras */}
      <section className="section-tight bg-navy-50/40">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Add-On</span>
            <h2 className="mt-5 section-title text-balance">
              추가 작업 안내
            </h2>
            <p className="section-sub text-pretty">
              현장 환경에 따라 아래 작업이 추가될 수 있으며, 해당하는 경우
              견적 단계에서 모두 안내드립니다.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {EXTRAS.map((e) => (
              <div
                key={e.title}
                className="bg-white rounded-2xl border border-navy-100 p-6 flex items-start gap-5"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-orange/10 text-brand-orangeDark flex items-center justify-center font-extrabold text-sm">
                  {e.fee}
                </div>
                <div className="flex-1">
                  <div className="text-[16px] font-bold text-brand-navy">{e.title}</div>
                  <div className="text-[12px] leading-[1.6] text-navy-500 mt-1">{e.detail}</div>
                  <p className="mt-2 text-[13.5px] leading-[1.7] text-navy-700 text-pretty">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">FAQ</span>
            <h2 className="mt-5 section-title text-balance">
              견적 관련 자주 묻는 질문
            </h2>
          </div>
          <ul className="mt-10 max-w-3xl mx-auto space-y-3">
            {FAQS.map((f) => (
              <li
                key={f.q}
                className="bg-navy-50/50 rounded-2xl px-6 py-5 hover:bg-white hover:shadow-card transition border border-transparent hover:border-navy-100"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-orange text-white flex items-center justify-center text-[13px] font-extrabold">Q</span>
                  <h3 className="text-[16px] leading-[1.5] font-bold text-brand-navy text-balance">
                    {f.q}
                  </h3>
                </div>
                <p className="mt-3 ml-10 text-[14px] leading-[1.85] text-navy-700 text-pretty">
                  {f.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
