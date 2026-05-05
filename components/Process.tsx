import Link from "next/link";
import { IMG } from "@/lib/images";

const STEPS = [
  {
    no: "01",
    label: "Consultation",
    title: "전화 / 온라인 상담",
    desc:
      "이전 일정과 규모를 알려주시면 1차 개략 견적을 빠르게 안내드립니다. 상담 단계에서 작업 가능 여부와 예상 일정도 함께 공유합니다.",
    points: ["대표 직접 상담", "당일 응대 원칙", "평일 · 주말 모두 가능"],
    image: IMG.laptopWork,
  },
  {
    no: "02",
    label: "Site Survey",
    title: "현장 방문 조사",
    desc:
      "현장을 직접 방문하여 짐의 양, 작업 환경, 진입로, 엘리베이터 사용 여부를 점검합니다. 현장 조사는 무료이며, 추가 작업 가능성을 미리 안내드립니다.",
    points: ["짐 규모 · 동선 확인", "장비 필요 여부 점검", "특이사항 사전 공유"],
    image: IMG.warehouseAisle,
  },
  {
    no: "03",
    label: "Quotation",
    title: "정확한 견적 제안",
    desc:
      "현장 조사 결과를 바탕으로 합리적이고 명확한 최종 견적을 안내드립니다. 추가 작업이 발생할 가능성이 있는 부분은 견적서에 모두 반영합니다.",
    points: [
      "기본 단가 + 추가 작업 명시",
      "부가세 · 옵션 별도 표기",
      "투명한 산정 기준",
    ],
    image: IMG.meeting,
  },
  {
    no: "04",
    label: "Execution",
    title: "이사 진행 · 마무리",
    desc:
      "전문 인력이 약속한 일정에 맞춰 안전하게 작업을 진행합니다. 작업 종료 후 기본 정리까지 마치고 현장을 인계드립니다.",
    points: ["전 과정 한 팀 진행", "안전 작업 기준 적용", "기본 정리 포함"],
    image: IMG.movingBoxes,
  },
];

const SAFETY = [
  {
    title: "안전 포장",
    desc: "전용 포장재·완충재로 자산 손상을 사전에 방지합니다.",
  },
  {
    title: "보험 가입",
    desc: "필요 시 작업 보험을 통해 추가 보호 장치를 마련합니다.",
  },
  {
    title: "동선 점검",
    desc: "작업 전 진입로와 동선을 점검해 사고 가능성을 차단합니다.",
  },
];

const FAQS = [
  {
    q: "이사 시간은 얼마나 소요되나요?",
    a: "현장 규모와 짐의 양에 따라 차이가 있습니다. 일반적으로 사무실 이전은 반나절~1일, 공장·창고 이전은 1~수일이 소요되며, 견적 단계에서 정확히 안내드립니다.",
  },
  {
    q: "이사 당일 입회가 필요한가요?",
    a: "고객 측 담당자 한 분의 입회를 권장드립니다. 동선과 우선순위를 현장에서 함께 협의하면 작업이 더 정확하게 진행됩니다.",
  },
];

export default function Process() {
  return (
    <>
      {/* Steps */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="eyebrow">Process</span>
              <h2 className="mt-6 section-title-serif text-balance">
                상담부터 마무리까지, 명확한 4단계 진행.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-[15px] leading-[1.95] text-navy-600 max-w-md lg:ml-auto text-pretty">
                복잡한 단계 없이, 모든 진행 사항을 사전에 공유하고 약속된 일정
                안에서 책임감 있게 마무리합니다.
              </p>
            </div>
          </div>

          <ol className="space-y-px border-t border-navy-100">
            {STEPS.map((s, i) => (
              <li
                key={s.no}
                className={`group grid lg:grid-cols-12 gap-10 lg:gap-14 py-14 border-b border-navy-100 transition hover:bg-cream/40 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="relative aspect-[5/4] overflow-hidden border border-navy-200/60">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="image-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-navyDeep/50 to-transparent" />
                    <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                      <span className="font-serif text-3xl leading-[1] text-brand-goldLight">
                        {s.no}
                      </span>
                      <span className="text-[10px] leading-none tracking-eyebrow uppercase text-white/85">
                        {s.label}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 lg:pl-2">
                  <h3 className="font-serif text-3xl sm:text-4xl leading-[1.2] font-medium text-brand-navy text-balance">
                    {s.title}
                  </h3>
                  <span className="block mt-5 w-12 h-px bg-brand-gold" />
                  <p className="mt-7 text-[15.5px] leading-[2] text-navy-700 text-pretty">
                    {s.desc}
                  </p>
                  <ul className="mt-8 grid sm:grid-cols-3 gap-4">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-sm leading-[1.6] text-navy-700 border border-navy-200/60 px-4 py-3 bg-white"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 bg-brand-gold shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Safety */}
      <section className="section-tight bg-cream">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Safety</span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl leading-[1.2] font-medium text-brand-navy text-balance">
              안전하게 진행하기 위한 원칙
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-navy-100/60 border border-navy-100/60">
            {SAFETY.map((s) => (
              <div key={s.title} className="bg-white p-9">
                <div className="text-[10px] leading-none tracking-eyebrow uppercase text-brand-gold font-semibold">
                  Principle
                </div>
                <h3 className="mt-5 text-lg leading-[1.4] font-bold text-brand-navy">
                  {s.title}
                </h3>
                <span className="block mt-4 w-8 h-px bg-brand-gold" />
                <p className="mt-4 text-[14px] leading-[1.85] text-navy-600 text-pretty">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl leading-[1.2] font-medium text-brand-navy text-balance">
                진행 관련 자주 묻는 질문
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link href="/contact" className="btn-outline">
                추가 문의하기 <ArrowIcon />
              </Link>
            </div>
          </div>
          <ul className="border-t border-navy-100">
            {FAQS.map((f) => (
              <li
                key={f.q}
                className="grid lg:grid-cols-12 gap-6 py-8 border-b border-navy-100"
              >
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span className="font-serif text-2xl leading-[1] text-brand-gold">
                    Q.
                  </span>
                  <h3 className="text-lg leading-[1.5] font-semibold text-brand-navy text-balance">
                    {f.q}
                  </h3>
                </div>
                <p className="lg:col-span-8 text-[15px] leading-[1.95] text-navy-700 text-pretty">
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
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
