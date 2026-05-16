"use client";

import Link from "next/link";
import { QuoteIllustration } from "@/components/Illustrations";
import { IMG } from "@/lib/images";
import { useSiteConfig } from "@/components/SiteConfigProvider";

const VALUES = [
  {
    title: "기업이사 전문성",
    desc: "법인·사업장 이전 경험을 바탕으로 까다로운 작업 환경에 가장 최적화된 솔루션을 제공합니다. 풍부한 현장 경험으로 가장 효율적인 진행 방식을 제안드립니다.",
    icon: TargetIcon,
  },
  {
    title: "투명한 견적",
    desc: "현장 조사 후 산정된 명확한 견적을 안내하며, 추가 비용은 사전에 모두 공유합니다. 이사 당일에 발생하는 불필요한 갈등을 원천적으로 차단합니다.",
    icon: DocIcon,
  },
  {
    title: "양심적인 작업",
    desc: "포장부터 운반·정리까지 한 팀이 일관되게 진행합니다. 책임 소재가 분명하고, 약속드린 일정과 견적 안에서 끝까지 책임집니다.",
    icon: ShieldIcon,
  },
];

export default function About() {
  const c = useSiteConfig();
  const COMPANY_INFO = [
    { label: "상호", value: c.companyName },
    { label: "전문 분야", value: "기업이사 (사무실·공장·창고 이전)" },
    { label: "주소", value: c.address },
    { label: c.phonePrimaryLabel, value: c.phonePrimary },
    ...(c.phoneSecondary
      ? [{ label: c.phoneSecondaryLabel || "보조 연락처", value: c.phoneSecondary }]
      : []),
    { label: "이메일", value: c.email },
  ];

  return (
    <>
      {/* Brand statement */}
      <section className="section bg-white">
        <div className="container-pad grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-5 section-title text-balance">
              기업의 이전, 한 곳에 책임을 둡니다
            </h2>
            <p className="mt-5 text-[16px] leading-[1.95] text-navy-700 text-pretty">
              {c.companyName}는 사무실·공장·창고 등 기업 이전을 전문으로 하는
              이사짐센터입니다. 기업이라는 단위가 요구하는{" "}
              <strong className="text-brand-navy">정확한 일정</strong>,{" "}
              <strong className="text-brand-navy">정직하고 투명한 가격</strong>,{" "}
              <strong className="text-brand-navy">민감한 자산 보호</strong>를
              모두 지키기 위해 약속드린 견적 그대로, 양심적인 작업으로
              일해왔습니다.
            </p>
            <p className="mt-4 text-[15px] leading-[1.95] text-navy-600 text-pretty">
              포장재·차량·인력을 자체 운용하며, 대표가 작업 현장을 직접
              챙기기 때문에 결정과 책임이 한 곳에서 이루어집니다.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { v: "100%", l: "기업이사 전문" },
                { v: "투명", l: "정직한 견적" },
                { v: "365일", l: "주말·야간 가능" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white border border-navy-100 px-5 py-5 shadow-soft">
                  <div className="text-2xl font-extrabold text-brand-orange">{s.v}</div>
                  <div className="mt-1.5 text-[12.5px] leading-[1.5] text-navy-600 font-semibold">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-square max-w-md mx-auto bg-navy-50 rounded-3xl">
              <QuoteIllustration className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-navy-50/50">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Our Values</span>
            <h2 className="mt-5 section-title text-balance">
              엘리트24의 세 가지 약속
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 border border-navy-100 hover:shadow-cardHover hover:-translate-y-1 transition animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orangeSoft text-brand-orangeDark flex items-center justify-center">
                  <v.icon />
                </div>
                <h3 className="mt-5 text-[18px] font-bold text-brand-navy">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.85] text-navy-600 text-pretty">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representative */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="relative max-w-4xl mx-auto bg-brand-navy text-white rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden border border-navy-100">
            <img
              src={IMG.buildingTall}
              alt=""
              aria-hidden
              className="image-cover opacity-30"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, rgba(15,29,58,0.92) 0%, rgba(15,29,58,0.65) 100%)",
              }}
            />
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-orange/25 blur-3xl animate-pulse-soft" aria-hidden />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange text-white px-3 py-1 text-[11px] tracking-wider2 uppercase font-bold">
                대표 인사말
              </span>
              <h2 className="mt-5 text-[26px] sm:text-3xl lg:text-[34px] leading-[1.3] font-bold text-balance">
                모든 작업은 결국 책임의 문제입니다
              </h2>
              <div className="mt-6 max-w-2xl">
                <p className="text-[15.5px] leading-[1.95] text-white/90 text-pretty">
                  저희 {c.companyName}를 찾아주신 모든 기업 고객 여러분께 진심으로
                  감사드립니다. 사무실·공장·창고 이전 현장에서 쌓아온 경험을 바탕으로,
                  기업 고객이 가장 중요하게 여기는{" "}
                  <strong className="text-brand-orange">시간·비용·자산의 안전</strong>을
                  지키는 데 모든 자원을 집중하고 있습니다.
                </p>
                <p className="mt-4 text-[15px] leading-[1.95] text-white/80 text-pretty">
                  기업의 새로운 출발을 함께 만들 수 있도록, 정직한 견적과 책임감
                  있는 작업으로 보답드리겠습니다.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="section-tight bg-navy-50/50">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="chip">Corporate Information</span>
            <h2 className="mt-5 section-title text-balance">사업자 정보</h2>
          </div>
          <ul className="rounded-2xl bg-white border border-navy-100 overflow-hidden max-w-3xl mx-auto shadow-soft">
            {COMPANY_INFO.map((row, i) => (
              <li
                key={`${row.label}-${i}`}
                className={`grid grid-cols-12 gap-4 px-6 sm:px-8 py-4 text-[15px] ${
                  i !== COMPANY_INFO.length - 1 ? "border-b border-navy-100" : ""
                }`}
              >
                <div className="col-span-4 sm:col-span-3 text-[12px] leading-[1.6] tracking-wider2 uppercase text-brand-orange font-bold pt-1">
                  {row.label}
                </div>
                <div className="col-span-8 sm:col-span-9 text-navy-800 font-medium">
                  {row.value}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary">
              상담 문의 <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
