const SERVICES = [
  {
    title: "사무실 이전",
    desc: "본사·지사·사무실 전체 이전. 컴퓨터, OA가구, 서류 보관함까지 안전하게 이송합니다.",
    points: ["IT 장비 안전 포장", "주말·야간 작업 가능", "원스톱 진행"],
    icon: OfficeIcon,
  },
  {
    title: "공장 / 창고 이전",
    desc: "생산 라인, 자재, 재고를 무중단으로 이전. 중량물 작업 노하우로 안전 이송합니다.",
    points: ["중량물 운반 전문", "지게차·사다리차 협업", "단계별 분할 이전"],
    icon: FactoryIcon,
  },
  {
    title: "법인 / 기관 이전",
    desc: "병원, 학원, 관공서 등 기관 이전을 정해진 일정과 비용 안에서 책임지고 진행합니다.",
    points: ["일정 준수", "보안 자료 케어", "사후 정리 지원"],
    icon: BuildingIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">SERVICES</span>
          <h2 className="section-title mt-4">기업이사 전문 서비스</h2>
          <p className="section-sub">
            (주)엘리트24는 <strong className="text-brand-navy">기업이사만</strong>{" "}
            전문으로 합니다. 가정이사는 진행하지 않으며, 오직 법인·사업장 이전에
            집중합니다.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl border border-navy-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:border-brand-orange/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orangeDark flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition">
                <s.icon />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-navy-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="w-11 h-11 shrink-0 rounded-full bg-brand-orange text-white flex items-center justify-center">
            <InfoIcon />
          </div>
          <p className="text-sm sm:text-base text-navy-800 leading-relaxed">
            <strong className="text-brand-navy">안내사항.</strong> (주)엘리트24는
            기업·법인·사업장 이전만 진행하고 있으며,{" "}
            <strong className="text-brand-orangeDark">가정이사는 진행하지 않습니다.</strong>{" "}
            가정이사 문의는 정중히 사양드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function OfficeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 21V6a1 1 0 011-1h10a1 1 0 011 1v15M16 11h3a1 1 0 011 1v9M8 9h2M8 13h2M8 17h2M12 9h2M12 13h2M12 17h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 21V11l5 3V11l5 3V8l8-3v16M7 21v-4M11 21v-4M15 21v-4M19 21v-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16M3 21h18M9 8h.01M9 12h.01M9 16h.01M15 8h.01M15 12h.01M15 16h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 8v.01M12 11v5M12 22a10 10 0 100-20 10 10 0 000 20z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
