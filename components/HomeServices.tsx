import Link from "next/link";
import { IMG } from "@/lib/images";

const SERVICES = [
  {
    no: "01",
    eng: "Office Relocation",
    title: "사무실 이전",
    desc:
      "본사·지사·사무실 전체 이전. IT 장비, OA가구, 서류 보관함까지 안전 포장으로 이송합니다.",
    image: IMG.office,
  },
  {
    no: "02",
    eng: "Factory & Warehouse",
    title: "공장 / 창고 이전",
    desc:
      "생산 라인, 자재, 재고를 무중단으로 이전. 중량물 작업 노하우와 협업 장비를 갖췄습니다.",
    image: IMG.warehouse,
  },
  {
    no: "03",
    eng: "Institutional",
    title: "법인 / 기관 이전",
    desc:
      "병원·학원·관공서 등 기관 이전을 정해진 일정과 비용 안에서 책임지고 진행합니다.",
    image: IMG.hospital,
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
              기업이사 전 영역, 한 팀이 책임지는 통합 서비스.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-[15px] leading-[1.95] text-navy-600 max-w-md lg:ml-auto text-pretty">
              사무실부터 공장·창고, 법인 시설까지 — 기업의 규모와 환경에 맞춰
              가장 적합한 이전 솔루션을 제안합니다.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s) => (
            <Link
              key={s.no}
              href="/services"
              className="group relative bg-white border border-navy-100 overflow-hidden transition hover:shadow-soft hover:border-brand-gold/40"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="image-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDeep/80 via-brand-navyDeep/20 to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="font-serif text-2xl leading-[1] text-brand-goldLight">
                    {s.no}
                  </span>
                  <span className="text-[10px] leading-none tracking-eyebrow uppercase text-white/75">
                    {s.eng}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-3xl leading-[1.15] text-white">
                    {s.title}
                  </h3>
                  <span className="block mt-3 w-10 h-px bg-brand-gold" />
                </div>
              </div>
              <div className="p-7 lg:p-9">
                <p className="text-[14.5px] leading-[1.85] text-navy-600 text-pretty">
                  {s.desc}
                </p>
                <div className="mt-8 inline-flex items-center gap-3 text-[11px] leading-none font-bold tracking-wider2 uppercase text-brand-navy group-hover:text-brand-gold transition">
                  자세히 보기 <ArrowIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 border border-amber-200/70 bg-cream/60 px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-11 h-11 shrink-0 bg-brand-gold/15 text-brand-goldDark flex items-center justify-center">
            <InfoIcon />
          </div>
          <p className="text-sm leading-[1.85] text-navy-700 flex-1 text-pretty">
            <strong className="text-brand-navy">안내사항.</strong> (주)엘리트24는
            기업·법인·사업장 이전만 진행하며,{" "}
            <strong className="text-brand-goldDark">
              가정이사는 진행하지 않습니다.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 8v.01M12 11v5M12 22a10 10 0 100-20 10 10 0 000 20z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
