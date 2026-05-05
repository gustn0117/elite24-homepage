import Link from "next/link";

const PILLARS = [
  {
    no: "01",
    title: "기업이사 전문성",
    desc: "사무실·공장·창고 이전 등 까다로운 작업 환경에 최적화된 전문 인력과 장비를 운용합니다.",
  },
  {
    no: "02",
    title: "투명한 견적 정책",
    desc: "현장 조사 후 산정된 명확한 견적을 제공하며, 추가 비용은 사전에 모두 안내드립니다.",
  },
  {
    no: "03",
    title: "원팀 책임 작업",
    desc: "포장·운반·정리까지 한 팀이 일관되게 진행하여 책임 소재를 분명하게 합니다.",
  },
];

export default function HomeIntro() {
  return (
    <section className="relative bg-ivory section overflow-hidden">
      <div className="absolute top-0 right-0 w-[520px] h-[520px] -translate-y-1/3 translate-x-1/3 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="container-pad relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">About Elite24</span>
            <h2 className="mt-6 section-title-serif text-balance">
              기업의 신뢰가
              <br />
              머무는 자리.
            </h2>
            <p className="section-sub max-w-md">
              저희 (주)엘리트24는 법인·사업장 이전을 전문으로 하는 이사짐센터로,
              기업 환경에서 요구되는 정확성·안전성·책임감을 가장 중요한 가치로 삼습니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/about" className="btn-outline">
                회사 소개 <ArrowIcon />
              </Link>
              <Link href="/services" className="btn-outline">
                서비스 보기 <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-px">
              {PILLARS.map((p, i) => (
                <li
                  key={p.no}
                  className="group grid grid-cols-12 gap-6 py-7 border-b border-navy-200/60 first:border-t first:border-navy-200/60 hover:bg-white/40 transition px-2"
                >
                  <div className="col-span-2 sm:col-span-1 font-serif text-2xl text-brand-gold">{p.no}</div>
                  <div className="col-span-10 sm:col-span-4">
                    <div className="text-lg font-bold text-brand-navy tracking-tight">{p.title}</div>
                  </div>
                  <p className="col-span-12 sm:col-span-7 text-[14.5px] text-navy-600 leading-[1.85]">
                    {p.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
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
