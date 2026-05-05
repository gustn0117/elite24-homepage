import Link from "next/link";

const STEPS = [
  { no: "01", title: "전화 / 온라인 상담", desc: "이전 일정과 규모를 알려주시면 1차 견적을 빠르게 안내드립니다." },
  { no: "02", title: "현장 방문 조사", desc: "현장을 직접 방문해 짐의 양·작업 환경·진입로를 점검합니다." },
  { no: "03", title: "정확한 견적 제안", desc: "방문 조사 결과를 바탕으로 합리적이고 명확한 최종 견적을 안내합니다." },
  { no: "04", title: "이사 진행 / 마무리", desc: "전문 인력이 안전하게 작업을 진행하고, 약속한 일정 안에 마무리합니다." },
];

export default function HomeProcess() {
  return (
    <section className="relative bg-brand-navyDeep text-white overflow-hidden section">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(201,164,92,0.18) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(46,77,122,0.5) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 ornament-grid opacity-25" />

      <div className="container-pad relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow-light">Process</span>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-[52px] font-medium leading-[1.15] text-balance">
              상담부터 마무리까지,
              <br />
              명확한 4단계 진행.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-white/65 text-[15px] leading-[1.95] max-w-md lg:ml-auto">
              복잡한 단계 없이, 모든 진행 사항을 사전에 공유하고
              약속드린 일정 안에서 책임감 있게 마무리합니다.
            </p>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {STEPS.map((s) => (
            <div
              key={s.no}
              className="relative bg-brand-navyDeep p-9 group hover:bg-brand-navy transition"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl text-brand-goldLight">{s.no}</span>
                <span className="block w-8 h-px bg-brand-gold/60" />
              </div>
              <h3 className="mt-10 text-xl font-semibold tracking-tight text-white">{s.title}</h3>
              <p className="mt-3 text-sm text-white/65 leading-[1.85]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/process" className="btn-ghost-light">
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
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
