import Image from "next/image";

const VALUES = [
  {
    title: "기업이사 전문성",
    desc: "법인·사업장 이전 경험을 바탕으로 까다로운 업무 환경에 최적화된 작업을 제공합니다.",
  },
  {
    title: "투명한 견적",
    desc: "현장 조사 후 명확하게 산정된 견적을 안내하며, 추가 비용은 사전에 모두 공유합니다.",
  },
  {
    title: "책임 있는 작업",
    desc: "포장부터 운반·정리까지 한 팀이 일관되게 진행하여 책임 소재를 분명히 합니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-navy-50/60">
      <div className="container-pad grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="chip">ABOUT</span>
          <h2 className="section-title mt-4">
            기업이사,
            <br />
            엘리트24가 다른 이유
          </h2>
          <p className="section-sub">
            (주)엘리트24는 사무실·공장·창고 등 기업 이전을 전문으로 하는
            이사짐센터입니다. 합리적 가격, 명확한 견적, 책임감 있는 작업을
            기본으로 합니다.
          </p>

          <div className="mt-8 space-y-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="flex items-start gap-4 rounded-2xl bg-white border border-navy-100 p-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-bold text-brand-navy">{v.title}</div>
                  <div className="text-sm text-navy-600 mt-1 leading-relaxed">
                    {v.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-brand-navy to-navy-800 p-10 flex items-center justify-center shadow-2xl">
            <Image
              src="/logo-white.png"
              alt="(주)엘리트24"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white rounded-2xl shadow-xl p-5 border border-navy-100 max-w-[260px]">
            <div className="text-xs font-bold text-brand-orangeDark">
              REPRESENTATIVE
            </div>
            <div className="mt-1 text-base font-bold text-brand-navy">
              대표 황필성
            </div>
            <div className="text-xs text-navy-600 mt-0.5">
              직접 상담 · 직접 작업
            </div>
          </div>
          <div className="absolute -top-6 -right-2 sm:-right-6 bg-brand-orange text-white rounded-2xl shadow-xl p-5 max-w-[200px]">
            <div className="text-xs font-bold opacity-80">SINCE</div>
            <div className="mt-1 text-2xl font-extrabold">(주)엘리트24</div>
            <div className="text-xs opacity-90 mt-0.5">
              기업이사 전문 법인
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
