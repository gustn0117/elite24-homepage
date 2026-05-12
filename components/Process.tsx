import Link from "next/link";
import { ProcessIllustration } from "@/components/Illustrations";

const STEPS = [
  {
    no: "01",
    label: "Consultation",
    title: "전화 / 온라인 상담",
    desc: "이전 일정과 규모를 알려주시면 1차 개략 견적을 빠르게 안내드립니다. 상담 단계에서 작업 가능 여부와 예상 일정도 함께 공유합니다.",
    points: ["1차 견적 무료", "당일 응대 원칙", "평일·주말 모두 가능"],
    icon: ChatIcon,
  },
  {
    no: "02",
    label: "Site Survey",
    title: "현장 방문 조사",
    desc: "현장을 직접 방문하여 짐의 양, 작업 환경, 진입로, 엘리베이터 사용 여부를 점검합니다. 현장 조사는 무료이며, 추가 작업 가능성을 미리 안내드립니다.",
    points: ["짐 규모·동선 확인", "장비 필요 여부 점검", "특이사항 사전 공유"],
    icon: ClipIcon,
  },
  {
    no: "03",
    label: "Quotation",
    title: "정확한 견적 제안",
    desc: "현장 조사 결과를 바탕으로 합리적이고 명확한 최종 견적을 안내드립니다. 추가 작업이 발생할 가능성이 있는 부분은 견적서에 모두 반영합니다.",
    points: ["기본 단가 + 추가 작업 명시", "부가세·옵션 별도 표기", "투명한 산정 기준"],
    icon: DocIcon,
  },
  {
    no: "04",
    label: "Execution",
    title: "이사 진행 · 마무리",
    desc: "전문 인력이 약속한 일정에 맞춰 안전하게 작업을 진행합니다. 작업 종료 후 기본 정리까지 마치고 현장을 인계드립니다.",
    points: ["전 과정 한 팀 진행", "안전 작업 기준 적용", "기본 정리 포함"],
    icon: TruckIcon,
  },
];

const SAFETY = [
  { title: "안전 포장", desc: "전용 포장재·완충재로 자산 손상을 사전에 방지합니다.", icon: BoxIcon },
  { title: "보험 가입", desc: "필요 시 작업 보험을 통해 추가 보호 장치를 마련합니다.", icon: ShieldIcon },
  { title: "동선 점검", desc: "작업 전 진입로와 동선을 점검해 사고 가능성을 차단합니다.", icon: RouteIcon },
];

const FAQS = [
  { q: "이사 시간은 얼마나 소요되나요?", a: "현장 규모와 짐의 양에 따라 차이가 있습니다. 일반적으로 사무실 이전은 반나절~1일, 공장·창고 이전은 1~수일이 소요되며, 견적 단계에서 정확히 안내드립니다." },
  { q: "이사 당일 입회가 필요한가요?", a: "고객 측 담당자 한 분의 입회를 권장드립니다. 동선과 우선순위를 현장에서 함께 협의하면 작업이 더 정확하게 진행됩니다." },
];

export default function Process() {
  return (
    <>
      {/* Hero illus */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="chip">Process</span>
            <h2 className="mt-5 section-title text-balance">
              상담부터 마무리까지, 명확한 4단계
            </h2>
            <p className="section-sub text-pretty">
              복잡한 단계 없이, 모든 진행 사항을 사전에 공유하고 약속된 일정
              안에서 책임감 있게 마무리합니다.
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto aspect-[5/3] rounded-3xl overflow-hidden bg-navy-50/60 border border-navy-100">
            <ProcessIllustration className="absolute inset-0 w-full h-full" />
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <div
                key={s.no}
                className="relative bg-white rounded-2xl p-7 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition border border-navy-100/40 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-extrabold relative">
                    <span className="absolute inset-0 rounded-full bg-brand-orange/30 animate-pulse-soft" aria-hidden />
                    <span className="relative">{s.no}</span>
                  </span>
                  <div className="text-brand-navy/70">
                    <s.icon />
                  </div>
                </div>
                <div className="mt-4 text-[11px] tracking-wider2 uppercase text-brand-orange font-bold">
                  {s.label}
                </div>
                <h3 className="mt-1 text-[17px] font-bold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.85] text-navy-600 text-pretty">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-[13px] leading-[1.5] text-navy-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
            {SAFETY.map((s, i) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-cardHover transition animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orangeDark flex items-center justify-center">
                  <s.icon />
                </div>
                <div className="mt-4 text-[11px] tracking-wider2 uppercase text-brand-orange font-bold">
                  Principle
                </div>
                <h3 className="mt-1 text-[17px] font-bold text-brand-navy">
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
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function ClipIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="4" width="12" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 4h6M9 10h6M9 14h6M9 18h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3v5h5M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M2 7h12v10H2zM14 11h4l3 3v3h-7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 8l9 5 9-5M12 13v8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2.2 2.2L15 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function RouteIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 8.5v3a4 4 0 004 4h3.5M18 15.5v-3a4 4 0 00-4-4h-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
