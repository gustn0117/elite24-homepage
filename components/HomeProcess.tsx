import Link from "next/link";

const STEPS = [
  { no: "01", title: "전화 / 온라인 상담", desc: "이전 일정과 규모를 알려주시면 1차 견적을 빠르게 안내드립니다." },
  { no: "02", title: "현장 방문 조사", desc: "현장을 직접 방문해 짐의 양·작업 환경·진입로를 점검합니다." },
  { no: "03", title: "정확한 견적 제안", desc: "방문 조사 결과를 바탕으로 합리적이고 명확한 최종 견적을 안내합니다." },
  { no: "04", title: "이사 진행 · 마무리", desc: "전문 인력이 안전하게 작업을 진행하고, 약속한 일정 안에 마무리합니다." },
];

export default function HomeProcess() {
  return (
    <section className="section bg-gradient-to-b from-white to-sky-50/40 relative overflow-hidden">
      <svg
        viewBox="0 0 1200 200"
        className="hidden lg:block absolute top-44 inset-x-0 w-full h-[120px] pointer-events-none"
        fill="none"
        aria-hidden
      >
        <path
          d="M150 80 C 350 -10, 500 170, 700 70 S 1000 130, 1050 60"
          stroke="#f5a623"
          strokeWidth="2"
          strokeDasharray="6 8"
          opacity="0.4"
          strokeLinecap="round"
        />
      </svg>

      <div className="container-pad relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Process</span>
          <h2 className="mt-5 section-title text-balance">
            상담부터 마무리까지, 명확한 4단계
          </h2>
          <p className="section-sub text-pretty">
            복잡한 단계 없이, 모든 진행 사항을 사전에 공유하고 약속된 일정 안에서
            책임감 있게 마무리합니다.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div
              key={s.no}
              className="relative bg-white rounded-2xl p-7 shadow-soft hover:shadow-cardHover hover:-translate-y-1 transition border border-navy-100/60 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-brand-orange/20 animate-pulse-soft" aria-hidden />
                <div className="relative w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-extrabold text-[15px]">
                  {s.no}
                </div>
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-brand-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.85] text-navy-600 text-pretty">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/process" className="btn-outline">
            전체 절차 보기 <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
