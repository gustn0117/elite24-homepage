import Link from "next/link";

const SERVICES = [
  {
    no: "01",
    eng: "Office Relocation",
    kr: "사무실 이전",
    intro: "본사·지사·사무실 전체 이전을 책임집니다.",
    desc: "임원실·업무공간·회의실의 IT 장비, OA가구, 서류 보관함까지 안전 포장으로 이송합니다. 야간·주말 작업이 가능하여 업무 공백을 최소화합니다.",
    features: [
      "PC·모니터·서버 등 IT 장비 안전 포장",
      "OA가구·캐비넷·서류 무중단 이전",
      "주말·공휴일·야간 작업 가능",
      "사후 정리·배치 작업 지원",
    ],
  },
  {
    no: "02",
    eng: "Factory & Warehouse",
    kr: "공장 / 창고 이전",
    intro: "생산 라인과 자재·재고를 무중단으로.",
    desc: "중량물 운반과 분할 이전 노하우로 생산 차질을 최소화합니다. 지게차·사다리차 등 협업 장비 운용으로 효율적이고 안전한 이송이 가능합니다.",
    features: [
      "중량물·정밀 장비 운반 전문",
      "지게차·사다리차 협업 운용",
      "단계별 분할 이전 가능",
      "재고·자재 분류 보관 지원",
    ],
  },
  {
    no: "03",
    eng: "Institutional",
    kr: "법인 / 기관 이전",
    intro: "병원·학원·관공서 등 기관 이전.",
    desc: "정해진 일정과 비용 안에서 진행하며, 보안이 요구되는 자료·물품에 대한 케어 프로세스를 적용합니다. 사후 정리까지 한 번에 마무리합니다.",
    features: [
      "정해진 일정·비용 준수",
      "보안 자료·기밀 물품 케어",
      "기관별 맞춤 동선 설계",
      "사후 정리 · 배치 지원",
    ],
  },
];

const CAPABILITIES = [
  { label: "Packing", title: "포장재 자체 운용", desc: "박스·완충재·전용 케이스를 자체 보유하여 즉시 작업이 가능합니다." },
  { label: "Vehicle", title: "전용 차량", desc: "1톤·2.5톤·5톤 등 작업 규모에 맞춘 차량을 직접 운용합니다." },
  { label: "Manpower", title: "전문 인력", desc: "기업이사 경험을 갖춘 한 팀이 처음부터 끝까지 작업합니다." },
  { label: "Equipment", title: "협업 장비", desc: "사다리차·지게차 등 작업 환경에 맞춰 추가 장비를 운용합니다." },
];

export default function Services() {
  return (
    <>
      {/* Service detail list */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="eyebrow">Services</span>
              <h2 className="mt-6 section-title-serif text-balance">
                기업이사 전 영역,
                <br />
                한 팀이 책임집니다.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-[15px] text-navy-600 leading-[1.95] max-w-md lg:ml-auto">
                (주)엘리트24는 기업·법인·사업장 이전만 진행하며,
                가정이사는 진행하지 않습니다.
              </p>
            </div>
          </div>

          <div className="space-y-px">
            {SERVICES.map((s, i) => (
              <article
                key={s.no}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-14 py-14 ${
                  i !== 0 ? "border-t border-navy-100" : ""
                }`}
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-4xl text-brand-gold">{s.no}</span>
                    <span className="block w-10 h-px bg-brand-gold" />
                  </div>
                  <div className="mt-6 text-[10px] tracking-eyebrow uppercase text-navy-400 font-semibold">
                    {s.eng}
                  </div>
                  <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-medium text-brand-navy leading-[1.2]">
                    {s.kr}
                  </h3>
                  <p className="mt-5 text-base text-brand-gold/90 font-medium">{s.intro}</p>
                </div>

                <div className="lg:col-span-8 lg:pl-12 lg:border-l lg:border-navy-100">
                  <p className="text-[15.5px] text-navy-700 leading-[2]">{s.desc}</p>
                  <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14.5px] text-navy-700">
                        <span className="mt-2 w-1.5 h-1.5 bg-brand-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link href="/pricing" className="btn-outline">
                      견적 안내 <ArrowIcon />
                    </Link>
                    <Link href="/contact" className="btn-outline">
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
      <section className="section bg-cream">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Capabilities</span>
            <h2 className="mt-6 section-title-serif">
              전 과정에 필요한 자원을
              <br />
              자체적으로 운용합니다.
            </h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-100/60 border border-navy-100/60">
            {CAPABILITIES.map((c) => (
              <div key={c.label} className="bg-white p-8 lg:p-10">
                <div className="text-[10px] tracking-eyebrow uppercase text-brand-gold font-semibold">{c.label}</div>
                <h3 className="mt-6 text-xl font-bold text-brand-navy">{c.title}</h3>
                <span className="block mt-4 w-8 h-px bg-brand-gold" />
                <p className="mt-5 text-[14px] text-navy-600 leading-[1.85]">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-amber-200/70 bg-white px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-11 h-11 shrink-0 bg-brand-gold/15 text-brand-goldDark flex items-center justify-center">
              <InfoIcon />
            </div>
            <p className="text-sm text-navy-700 leading-[1.85] flex-1">
              <strong className="text-brand-navy">안내사항.</strong> 가정이사 문의는 정중히 사양드립니다.
              저희는 기업·법인·사업장 이전 전문 이사짐센터입니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
