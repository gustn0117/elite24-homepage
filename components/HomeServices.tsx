import Link from "next/link";

const SERVICES = [
  {
    no: "01",
    eng: "Office",
    title: "사무실 이전",
    desc: "본사·지사·사무실 전체 이전. IT 장비, OA 가구, 서류 보관함을 안전 포장으로 이송합니다.",
    icon: OfficeIcon,
  },
  {
    no: "02",
    eng: "Factory & Warehouse",
    title: "공장 / 창고 이전",
    desc: "생산 라인, 자재, 재고를 무중단으로 이전. 중량물 작업 노하우와 협업 장비를 갖췄습니다.",
    icon: FactoryIcon,
  },
  {
    no: "03",
    eng: "Institutional",
    title: "법인 / 기관 이전",
    desc: "병원·학원·관공서 등 기관 이전을 정해진 일정과 비용 안에서 책임지고 진행합니다.",
    icon: InstitutionIcon,
  },
];

export default function HomeServices() {
  return (
    <section className="section bg-white relative">
      <div className="container-pad">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-6 section-title-serif text-balance">
              기업이사 전 영역,
              <br />
              한 팀이 책임지는 통합 서비스.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-[15px] text-navy-600 leading-[1.95] max-w-md lg:ml-auto">
              사무실부터 공장·창고, 법인 시설까지 — 기업의 규모와 환경에 맞춰
              가장 적합한 이전 솔루션을 제안합니다.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-navy-100/60 border border-navy-100/60">
          {SERVICES.map((s) => (
            <Link
              key={s.no}
              href="/services"
              className="group relative bg-white p-9 lg:p-11 transition hover:bg-cream/60"
            >
              <div className="flex items-start justify-between">
                <span className="text-brand-gold font-serif text-2xl">{s.no}</span>
                <span className="text-[10px] tracking-eyebrow uppercase text-navy-400">{s.eng}</span>
              </div>
              <div className="mt-12 w-14 h-14 border border-navy-200/70 flex items-center justify-center text-brand-navy group-hover:border-brand-gold group-hover:text-brand-gold transition">
                <s.icon />
              </div>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-brand-navy">{s.title}</h3>
              <p className="mt-3 text-[14.5px] text-navy-600 leading-[1.85]">{s.desc}</p>
              <div className="mt-10 inline-flex items-center gap-3 text-xs font-bold tracking-wider2 uppercase text-brand-navy group-hover:text-brand-gold transition">
                자세히 보기 <ArrowIcon />
              </div>
              <span className="absolute left-0 top-0 h-full w-px bg-brand-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
            </Link>
          ))}
        </div>

        <div className="mt-12 border border-amber-200/70 bg-cream/60 px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-11 h-11 shrink-0 bg-brand-gold/15 text-brand-goldDark flex items-center justify-center">
            <InfoIcon />
          </div>
          <p className="text-sm text-navy-700 leading-[1.85] flex-1">
            <strong className="text-brand-navy">안내사항.</strong> (주)엘리트24는 기업·법인·사업장 이전만 진행하며,{" "}
            <strong className="text-brand-goldDark">가정이사는 진행하지 않습니다.</strong>
          </p>
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
function OfficeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 21V6a1 1 0 011-1h10a1 1 0 011 1v15M16 11h3a1 1 0 011 1v9M8 9h2M8 13h2M8 17h2M12 9h2M12 13h2M12 17h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function FactoryIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 21V11l5 3V11l5 3V8l8-3v16M7 21v-4M11 21v-4M15 21v-4M19 21v-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function InstitutionIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6M11 11h.01M13 11h.01M11 13h.01M13 13h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 8v.01M12 11v5M12 22a10 10 0 100-20 10 10 0 000 20z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
