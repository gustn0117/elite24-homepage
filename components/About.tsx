import Link from "next/link";
import { IMG } from "@/lib/images";

const VALUES = [
  {
    title: "기업이사 전문성",
    desc: "법인·사업장 이전 경험을 바탕으로 까다로운 작업 환경에 가장 최적화된 솔루션을 제공합니다. 가정이사는 진행하지 않으며 오직 기업이사에 집중합니다.",
    icon: TargetIcon,
  },
  {
    title: "투명한 견적",
    desc: "현장 조사 후 산정된 명확한 견적을 안내하며, 추가 비용은 사전에 모두 공유합니다. 이사 당일에 발생하는 불필요한 갈등을 원천적으로 차단합니다.",
    icon: DocIcon,
  },
  {
    title: "책임 있는 작업",
    desc: "포장부터 운반·정리까지 한 팀이 일관되게 진행합니다. 책임 소재가 분명하고, 대표가 직접 상담과 작업에 참여해 끝까지 챙깁니다.",
    icon: ShieldIcon,
  },
];

const COMPANY_INFO = [
  { label: "상호", value: "(주)엘리트24" },
  { label: "대표", value: "황필성" },
  { label: "전문 분야", value: "기업이사 (사무실·공장·창고 이전)" },
  { label: "주소", value: "서울 금천구 독산로 106길 15" },
  { label: "대표 전화", value: "010-3956-6618" },
  { label: "사무실", value: "02-6958-8067" },
  { label: "이메일", value: "pirseng0825@naver.com" },
];

export default function About() {
  return (
    <>
      {/* Brand statement */}
      <section className="section bg-white">
        <div className="container-pad grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-5 section-title text-balance">
              기업의 이전, 한 곳에 책임을 둡니다
            </h2>
            <div className="mt-7 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={IMG.workspace} alt="기업 업무 환경" className="image-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-[16px] leading-[1.95] text-navy-700 text-pretty">
              (주)엘리트24는 사무실·공장·창고 등 기업 이전을 전문으로 하는
              이사짐센터입니다. 기업이라는 단위가 가지는{" "}
              <strong className="text-brand-navy">정확한 일정</strong>,{" "}
              <strong className="text-brand-navy">분명한 비용 산정</strong>,{" "}
              <strong className="text-brand-navy">민감한 자산 보호</strong>를
              모두 충족시키기 위해 가정이사는 진행하지 않고 오직 기업이사에만
              집중합니다.
            </p>
            <p className="mt-5 text-[15px] leading-[1.95] text-navy-600 text-pretty">
              포장재·차량·인력을 자체 운용하며, 대표가 상담과 작업 현장을 직접
              챙기기 때문에 결정과 책임이 한 곳에서 이루어집니다. 그 결과
              약속된 일정과 견적 안에서 안정된 작업 품질을 유지할 수 있습니다.
            </p>

            <div className="mt-9 grid sm:grid-cols-3 gap-3">
              {[
                { v: "100%", l: "기업이사 전문" },
                { v: "1ON1", l: "대표 직접 상담" },
                { v: "365일", l: "주말·야간 가능" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl bg-navy-50/70 px-5 py-5 text-center sm:text-left"
                >
                  <div className="text-2xl font-extrabold text-brand-orange">
                    {s.v}
                  </div>
                  <div className="mt-1.5 text-[12.5px] leading-[1.5] text-navy-600 font-semibold">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-navy-50/40">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Our Values</span>
            <h2 className="mt-5 section-title text-balance">
              엘리트24의 세 가지 약속
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 text-brand-orangeDark flex items-center justify-center">
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
        <div className="container-pad grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="chip">Representative</span>
            <h2 className="mt-5 section-title text-balance">
              대표 인사말
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.95] text-navy-700 text-pretty">
              저희 (주)엘리트24를 찾아주신 모든 기업 고객 여러분께 진심으로
              감사드립니다.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.95] text-navy-700 text-pretty">
              저희는 사무실·공장·창고 등 기업 이전 현장에서 쌓아온 경험을
              바탕으로, 기업 고객이 가장 중요하게 여기는{" "}
              <strong className="text-brand-navy">시간·비용·자산의 안전</strong>
              을 지키는 데 모든 자원을 집중하고 있습니다.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.95] text-navy-700 text-pretty">
              기업의 새로운 출발을 함께 만들 수 있도록, 정직한 견적과 책임감
              있는 작업으로 보답드리겠습니다.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-brand-orangeSoft border border-amber-200 px-5 py-3">
              <div className="text-[11px] tracking-wider2 uppercase font-bold text-brand-orangeDark">
                CEO
              </div>
              <span className="w-px h-4 bg-amber-300" />
              <div className="text-[15px] font-bold text-brand-navy">대표 황필성</div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={IMG.meeting} alt="" className="image-cover" />
              </div>
              <div className="col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={IMG.laptopWork} alt="" className="image-cover" />
              </div>
              <div className="col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={IMG.movingBoxes} alt="" className="image-cover" />
              </div>
              <div className="col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={IMG.warehouse} alt="" className="image-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="section-tight bg-brand-navy text-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-8">
            <div className="lg:col-span-7">
              <span className="chip bg-brand-orange text-white">Corporate Information</span>
              <h2 className="mt-5 text-[26px] sm:text-3xl lg:text-[34px] leading-[1.3] font-bold text-white text-balance">
                사업자 정보
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link href="/contact" className="btn-primary">
                상담 문의 <ArrowIcon />
              </Link>
            </div>
          </div>
          <ul className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden">
            {COMPANY_INFO.map((c, i) => (
              <li
                key={c.label}
                className={`grid grid-cols-12 gap-4 px-6 sm:px-8 py-4 text-[15px] ${
                  i !== COMPANY_INFO.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="col-span-4 sm:col-span-3 text-[12px] leading-[1.6] tracking-wider2 uppercase text-brand-orange font-bold pt-1">
                  {c.label}
                </div>
                <div className="col-span-8 sm:col-span-9 text-white">{c.value}</div>
              </li>
            ))}
          </ul>
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
