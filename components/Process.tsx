const STEPS = [
  {
    no: "01",
    title: "전화 / 온라인 상담",
    desc: "이전 일정과 규모를 알려주시면 1차 견적을 빠르게 안내드립니다.",
  },
  {
    no: "02",
    title: "현장 방문 조사",
    desc: "현장을 직접 방문해 짐의 양, 작업 환경, 진입로를 확인합니다.",
  },
  {
    no: "03",
    title: "정확한 견적 제안",
    desc: "방문 조사 결과를 바탕으로 합리적이고 명확한 최종 견적을 드립니다.",
  },
  {
    no: "04",
    title: "이사 진행 / 마무리",
    desc: "전문 인력이 안전하게 작업을 진행하고, 약속한 일정 안에 마무리합니다.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section bg-white">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">PROCESS</span>
          <h2 className="section-title mt-4">간단한 4단계 진행 절차</h2>
          <p className="section-sub">
            상담부터 마무리까지, 복잡한 단계 없이 명확하게 진행해 드립니다.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {STEPS.map((s, i) => (
              <div
                key={s.no}
                className="relative rounded-3xl bg-white border border-navy-100 p-7 hover:shadow-xl hover:border-brand-orange/40 transition group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm group-hover:bg-brand-orange transition">
                    {s.no}
                  </div>
                  {i < STEPS.length - 1 && (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-navy-200 hidden lg:block"
                    >
                      <path
                        d="M5 12h14m0 0l-6-6m6 6l-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
