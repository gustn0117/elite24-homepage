import Link from "next/link";
import {
  OfficeIllustration,
  FactoryIllustration,
  InstitutionIllustration,
} from "@/components/Illustrations";

const SERVICES = [
  {
    eng: "OFFICE RELOCATION",
    title: "사무실 이전",
    intro: "본사·지사·사무실 전체 이전을 책임집니다.",
    desc: "임원실·업무공간·회의실의 IT 장비, OA가구, 서류 보관함까지 안전 포장으로 이송합니다. 야간·주말 작업이 가능하여 업무 공백을 최소화합니다.",
    features: [
      "PC·모니터·서버 등 IT 장비 안전 포장",
      "OA가구·캐비넷·서류 무중단 이전",
      "주말·공휴일·야간 작업 가능",
      "사후 정리·배치 작업 지원",
    ],
    Illus: OfficeIllustration,
  },
  {
    eng: "FACTORY & WAREHOUSE",
    title: "공장 / 창고 이전",
    intro: "생산 라인과 자재·재고를 무중단으로.",
    desc: "중량물 운반과 분할 이전 노하우로 생산 차질을 최소화합니다. 지게차·사다리차 등 협업 장비 운용으로 효율적이고 안전한 이송이 가능합니다.",
    features: [
      "중량물·정밀 장비 운반 전문",
      "지게차·사다리차 협업 운용",
      "단계별 분할 이전 가능",
      "재고·자재 분류 보관 지원",
    ],
    Illus: FactoryIllustration,
  },
  {
    eng: "INSTITUTIONAL",
    title: "법인 / 기관 이전",
    intro: "병원·학원·관공서 등 기관 이전.",
    desc: "정해진 일정과 비용 안에서 진행하며, 보안이 요구되는 자료·물품에 대한 케어 프로세스를 적용합니다. 사후 정리까지 한 번에 마무리합니다.",
    features: [
      "정해진 일정·비용 준수",
      "보안 자료·기밀 물품 케어",
      "기관별 맞춤 동선 설계",
      "사후 정리·배치 지원",
    ],
    Illus: InstitutionIllustration,
  },
];

const CAPABILITIES = [
  { label: "Packing", title: "포장재 자체 운용", desc: "박스·완충재·전용 케이스를 자체 보유하여 즉시 작업이 가능합니다.", icon: BoxIcon },
  { label: "Vehicle", title: "전용 차량", desc: "1톤·2.5톤·5톤 등 작업 규모에 맞춘 차량을 직접 운용합니다.", icon: TruckIcon },
  { label: "Manpower", title: "전문 인력", desc: "기업이사 경험을 갖춘 한 팀이 처음부터 끝까지 작업합니다.", icon: TeamIcon },
  { label: "Equipment", title: "협업 장비", desc: "사다리차·지게차 등 작업 환경에 맞춰 추가 장비를 운용합니다.", icon: ToolsIcon },
];

export default function Services() {
  return (
    <>
      {/* Service detail list */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chip">Services</span>
            <h2 className="mt-5 section-title text-balance">
              기업이사 전 영역, 한 팀이 책임집니다
            </h2>
            <p className="section-sub text-pretty">
              정직하고 투명한 가격, 양심적인 작업으로 사무실·공장·창고 이전 전 영역을 책임집니다.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-6">
                  <div className="relative aspect-[5/4] rounded-3xl overflow-hidden bg-gradient-to-br from-navy-50 to-white border border-navy-100/70">
                    <s.Illus className="absolute inset-0 w-full h-full" />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="text-[12px] tracking-wider2 uppercase text-brand-orange font-bold">
                    {s.eng}
                  </div>
                  <h3 className="mt-3 text-[24px] sm:text-3xl leading-[1.3] font-bold text-brand-navy text-balance">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-brand-orangeDark font-semibold">
                    {s.intro}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.85] text-navy-700 text-pretty">
                    {s.desc}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[14px] leading-[1.6] text-navy-700"
                      >
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href="/pricing" className="btn-outline">
                      견적 안내 <ArrowIcon />
                    </Link>
                    <Link href="/contact" className="btn-primary">
                      상담 문의 <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-navy-50/40">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Capabilities</span>
            <h2 className="mt-5 section-title text-balance">
              필요한 자원을 자체 운용합니다
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPABILITIES.map((c, i) => (
              <div
                key={c.label}
                className="bg-white rounded-2xl p-7 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 text-brand-orangeDark flex items-center justify-center">
                  <c.icon />
                </div>
                <div className="mt-4 text-[11px] tracking-wider2 uppercase text-brand-orange font-bold">
                  {c.label}
                </div>
                <h3 className="mt-1 text-[17px] font-bold text-brand-navy">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.8] text-navy-600 text-pretty">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-200 bg-brand-orangeSoft px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-10 h-10 shrink-0 rounded-full bg-brand-orange text-white flex items-center justify-center">
              <InfoIcon />
            </div>
            <p className="text-[14px] leading-[1.7] text-navy-800 flex-1 text-pretty">
              <strong className="text-brand-navy">엘리트24의 약속.</strong>{" "}
              현장 조사 후 산정된 견적 그대로,{" "}
              <strong className="text-brand-orangeDark">
                추가 비용 없이 정직하고 양심적으로 작업
              </strong>
              합니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-orange shrink-0 mt-0.5">
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
function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 8v.01M12 11v5M12 22a10 10 0 100-20 10 10 0 000 20z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
function TruckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M2 7h12v10H2zM14 11h4l3 3v3h-7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function TeamIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.5 19c0-3 3-5 6.5-5s6.5 2 6.5 5M15 19c0-2 2-4 4-4s2.5 1 2.5 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function ToolsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M14 6l4-4 4 4-4 4-1-1-3 3M10 14l-3 3-3-3M10 14l-6 6M14.5 9.5l-9 9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
