import Link from "next/link";
import {
  OfficeIllustration,
  FactoryIllustration,
  InstitutionIllustration,
} from "@/components/Illustrations";

const SERVICES = [
  {
    eng: "OFFICE",
    title: "사무실 이전",
    desc: "본사·지사·사무실 전체 이전. IT 장비, OA가구, 서류 보관함까지 안전 포장으로 이송합니다.",
    points: ["IT 장비 안전 포장", "주말·야간 작업 가능", "원스톱 진행"],
    Illus: OfficeIllustration,
  },
  {
    eng: "FACTORY",
    title: "공장 / 창고 이전",
    desc: "생산 라인, 자재, 재고를 무중단으로 이전. 중량물 작업 노하우로 안전 이송합니다.",
    points: ["중량물 운반 전문", "지게차·사다리차 협업", "단계별 분할 이전"],
    Illus: FactoryIllustration,
  },
  {
    eng: "INSTITUTION",
    title: "법인 / 기관 이전",
    desc: "병원, 학원, 관공서 등 기관 이전을 정해진 일정과 비용 안에서 책임지고 진행합니다.",
    points: ["일정 준수", "보안 자료 케어", "사후 정리 지원"],
    Illus: InstitutionIllustration,
  },
];

export default function HomeServices() {
  return (
    <section className="section bg-navy-50/50">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Our Services</span>
          <h2 className="mt-5 section-title text-balance">
            기업이사 전 영역, 한 팀이 책임집니다
          </h2>
          <p className="section-sub text-pretty">
            <strong className="text-brand-navy">정직하고 투명한 가격</strong>으로,
            기업 환경에 최적화된 사무실·공장·창고 이전을 양심적으로 진행합니다.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Link
              key={s.title}
              href="/services"
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 animate-fade-up border border-navy-100/60"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative aspect-[5/3] overflow-hidden bg-navy-50">
                <s.Illus className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 chip bg-white shadow-soft">
                  {s.eng}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-[20px] font-bold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.85] text-navy-600 text-pretty">
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-[13.5px] leading-[1.5] text-navy-700"
                    >
                      <CheckIcon />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-brand-orange group-hover:gap-3 transition-all">
                  자세히 보기 <ArrowIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-brand-orangeSoft px-5 sm:px-7 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-10 h-10 shrink-0 rounded-full bg-brand-orange text-white flex items-center justify-center">
            <CheckCircleIcon />
          </div>
          <p className="text-[14px] leading-[1.7] text-navy-800 flex-1 text-pretty">
            <strong className="text-brand-navy">약속드린 견적 그대로.</strong>{" "}
            추가 비용 없이{" "}
            <strong className="text-brand-orangeDark">
              정직하고 투명한 가격, 양심적인 작업
            </strong>
            을 약속드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-brand-orange shrink-0">
      <path d="M5 12.5L10 17.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
