import Link from "next/link";
import { IMG } from "@/lib/images";

const PILLARS = [
  {
    title: "기업이사 전문성",
    desc: "사무실·공장·창고 이전 등 까다로운 작업 환경에 최적화된 전문 인력과 장비를 운용합니다.",
    icon: TargetIcon,
  },
  {
    title: "투명한 견적 정책",
    desc: "현장 조사 후 산정된 명확한 견적을 제공하며, 추가 비용은 사전에 모두 안내드립니다.",
    icon: DocIcon,
  },
  {
    title: "원팀 책임 작업",
    desc: "포장·운반·정리까지 한 팀이 일관되게 진행하여 책임 소재를 분명하게 합니다.",
    icon: ShieldIcon,
  },
];

export default function HomeIntro() {
  return (
    <section className="section bg-white">
      <div className="container-pad">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">About Elite24</span>
            <h2 className="mt-5 section-title text-balance">
              기업의 신뢰가 머무는 이사짐센터
            </h2>
            <p className="section-sub max-w-md text-pretty">
              저희 (주)엘리트24는 법인·사업장 이전을 전문으로 하는 이사짐센터입니다.
              기업 환경에서 요구되는 정확성·안전성·책임감을 가장 중요한 가치로 삼습니다.
            </p>

            <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={IMG.meeting} alt="기업 회의 장면" className="image-cover" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-outline">
                회사 소개 <ArrowIcon />
              </Link>
              <Link href="/services" className="btn-outline">
                서비스 보기 <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-navy-50/60 p-7 hover:bg-white hover:shadow-card transition border border-transparent hover:border-navy-100"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orangeDark flex items-center justify-center">
                  <p.icon />
                </div>
                <h3 className="mt-5 text-[18px] font-bold text-brand-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.85] text-navy-600 text-pretty">
                  {p.desc}
                </p>
              </div>
            ))}
            <div className="rounded-2xl bg-brand-navy text-white p-7 sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <div className="text-[12px] tracking-wider2 uppercase text-brand-orange font-bold">Direct Care</div>
                <h3 className="mt-2 text-xl font-bold">대표가 직접 상담하고 책임집니다.</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/70 max-w-md">
                  결정과 책임이 한 곳에서 이루어지므로 작업 품질이 일정합니다.
                </p>
              </div>
              <a href="tel:01039566618" className="btn-primary shrink-0">
                <PhoneIcon /> 010-3956-6618
              </a>
            </div>
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
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5.5 4.5C5.5 4.5 7 4 8.5 4C9.5 4 10 6.5 10 7.5C10 8.5 8.5 9.5 8.5 9.5C8.5 9.5 9.5 12.5 12 14.5C14.5 16.5 17 17 17 17C17 17 18 15.5 19 15.5C20 15.5 22 16 22 17C22 18.5 21.5 20 21.5 20C21.5 20 19 21 14 18C9 15 5.5 9 5.5 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
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
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2.2 2.2L15 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
