import Link from "next/link";
import { IMG } from "@/lib/images";

const STEPS = [
  {
    no: "01",
    label: "Consultation",
    title: "전화 / 온라인 상담",
    desc: "이전 일정과 규모를 알려주시면 1차 개략 견적을 빠르게 안내드립니다. 상담 단계에서 작업 가능 여부와 예상 일정도 함께 공유합니다.",
    points: ["대표 직접 상담", "당일 응대 원칙", "평일·주말 모두 가능"],
    image: IMG.laptopWork,
  },
  {
    no: "02",
    label: "Site Survey",
    title: "현장 방문 조사",
    desc: "현장을 직접 방문하여 짐의 양, 작업 환경, 진입로, 엘리베이터 사용 여부를 점검합니다. 현장 조사는 무료이며, 추가 작업 가능성을 미리 안내드립니다.",
    points: ["짐 규모·동선 확인", "장비 필요 여부 점검", "특이사항 사전 공유"],
    image: IMG.warehouseAisle,
  },
  {
    no: "03",
    label: "Quotation",
    title: "정확한 견적 제안",
    desc: "현장 조사 결과를 바탕으로 합리적이고 명확한 최종 견적을 안내드립니다. 추가 작업이 발생할 가능성이 있는 부분은 견적서에 모두 반영합니다.",
    points: ["기본 단가 + 추가 작업 명시", "부가세·옵션 별도 표기", "투명한 산정 기준"],
    image: IMG.meeting,
  },
  {
    no: "04",
    label: "Execution",
    title: "이사 진행 · 마무리",
    desc: "전문 인력이 약속한 일정에 맞춰 안전하게 작업을 진행합니다. 작업 종료 후 기본 정리까지 마치고 현장을 인계드립니다.",
    points: ["전 과정 한 팀 진행", "안전 작업 기준 적용", "기본 정리 포함"],
    image: IMG.movingBoxes,
  },
];

const SAFETY = [
  { title: "안전 포장", desc: "전용 포장재·완충재로 자산 손상을 사전에 방지합니다." },
  { title: "보험 가입", desc: "필요 시 작업 보험을 통해 추가 보호 장치를 마련합니다." },
  { title: "동선 점검", desc: "작업 전 진입로와 동선을 점검해 사고 가능성을 차단합니다." },
];

const FAQS = [
  { q: "이사 시간은 얼마나 소요되나요?", a: "현장 규모와 짐의 양에 따라 차이가 있습니다. 일반적으로 사무실 이전은 반나절~1일, 공장·창고 이전은 1~수일이 소요되며, 견적 단계에서 정확히 안내드립니다." },
  { q: "이사 당일 입회가 필요한가요?", a: "고객 측 담당자 한 분의 입회를 권장드립니다. 동선과 우선순위를 현장에서 함께 협의하면 작업이 더 정확하게 진행됩니다." },
];

export default function Process() {
  return (
    <>
      {/* Steps */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chip">Process</span>
            <h2 className="mt-5 section-title text-balance">
              상담부터 마무리까지, 명확한 4단계
            </h2>
            <p className="section-sub text-pretty">
              복잡한 단계 없이, 모든 진행 사항을 사전에 공유하고 약속된 일정
              안에서 책임감 있게 마무리합니다.
            </p>
          </div>

          <ol className="space-y-10 lg:space-y-14">
            {STEPS.map((s, i) => (
              <li
                key={s.no}
                className={`grid lg:grid-cols-12 gap-8 items-center ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="relative aspect-[5/4] rounded-3xl overflow-hidden">
                    <img src={s.image} alt={s.title} className="image-cover" />
                  </div>
                </div>
                <div className="lg:col-span-7 lg:px-2">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-extrabold">
                      {s.no}
                    </span>
                    <span className="text-[12px] tracking-wider2 uppercase text-brand-orange font-bold">
                      {s.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[22px] sm:text-2xl leading-[1.3] font-bold text-brand-navy text-balance">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.85] text-navy-700 text-pretty">
                    {s.desc}
                  </p>
                  <ul className="mt-5 grid sm:grid-cols-3 gap-2.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-[13.5px] leading-[1.4] text-navy-700 bg-navy-50/60 rounded-xl px-3.5 py-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
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
      <section className="section-tight bg-navy-50/40">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Safety</span>
            <h2 className="mt-5 section-title text-balance">
              안전하게 진행하기 위한 원칙
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SAFETY.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-cardHover transition"
              >
                <div className="text-[11px] tracking-wider2 uppercase text-brand-orange font-bold">
                  Principle
                </div>
                <h3 className="mt-3 text-[17px] font-bold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.85] text-navy-600 text-pretty">
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
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">FAQ</span>
            <h2 className="mt-5 section-title text-balance">
              진행 관련 자주 묻는 질문
            </h2>
          </div>
          <ul className="mt-10 max-w-3xl mx-auto space-y-3">
            {FAQS.map((f) => (
              <li
                key={f.q}
                className="bg-navy-50/50 rounded-2xl px-6 py-5 hover:bg-white hover:shadow-card transition border border-transparent hover:border-navy-100"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-orange text-white flex items-center justify-center text-[13px] font-extrabold">
                    Q
                  </span>
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

          <div className="mt-10 flex justify-center">
            <Link href="/contact" className="btn-primary">
              추가 문의하기 <ArrowIcon />
            </Link>
          </div>
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
