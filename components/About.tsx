import Image from "next/image";
import Link from "next/link";

const VALUES = [
  {
    no: "01",
    title: "Specialty",
    kr: "기업이사 전문성",
    desc: "법인·사업장 이전 경험을 바탕으로 까다로운 작업 환경에 가장 최적화된 솔루션을 제공합니다. 가정이사는 진행하지 않으며 오직 기업이사에 집중합니다.",
  },
  {
    no: "02",
    title: "Transparency",
    kr: "투명한 견적",
    desc: "현장 조사를 통해 산정된 명확한 견적을 안내하며, 추가 비용은 사전에 모두 공유합니다. 이사 당일에 발생하는 불필요한 갈등을 원천적으로 차단합니다.",
  },
  {
    no: "03",
    title: "Accountability",
    kr: "책임 있는 작업",
    desc: "포장부터 운반·정리까지 한 팀이 일관되게 진행합니다. 책임 소재가 분명하고, 대표자가 직접 상담과 작업에 참여해 끝까지 챙깁니다.",
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
        <div className="container-pad grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-6 section-title-serif text-balance">
              기업의 이전,
              <br />
              한 곳에 책임을 둡니다.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[16px] sm:text-lg text-navy-700 leading-[2]">
              (주)엘리트24는 사무실·공장·창고 등 기업 이전을 전문으로 하는
              이사짐센터입니다. 기업이라는 단위가 가지는{" "}
              <strong className="text-brand-navy">정확한 일정</strong>,{" "}
              <strong className="text-brand-navy">분명한 비용 산정</strong>,{" "}
              <strong className="text-brand-navy">민감한 자산 보호</strong>를
              모두 충족시키기 위해 가정이사는 진행하지 않고
              오직 기업이사에만 집중합니다.
            </p>
            <p className="mt-6 text-[15px] text-navy-600 leading-[1.95]">
              포장재·차량·인력을 자체 운용하며, 대표가 상담과 작업 현장을
              직접 챙기기 때문에 결정과 책임이 한 곳에서 이루어집니다.
              그 결과 약속된 일정과 견적 안에서, 안정된 작업 품질을
              유지할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Representative */}
      <section className="section bg-cream">
        <div className="container-pad grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="eyebrow">Representative</span>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-medium text-brand-navy leading-[1.15]">
              대표 인사말
            </h2>
            <span className="block mt-7 w-12 h-px bg-brand-gold" />
            <p className="mt-7 text-[15.5px] text-navy-700 leading-[2]">
              저희 (주)엘리트24를 찾아주신 모든 기업 고객 여러분께
              진심으로 감사드립니다.
            </p>
            <p className="mt-5 text-[15.5px] text-navy-700 leading-[2]">
              저희는 사무실·공장·창고 등 기업 이전 현장에서 쌓아온 경험을
              바탕으로, 기업 고객이 가장 중요하게 여기는{" "}
              <strong className="text-brand-navy">시간·비용·자산의 안전</strong>을
              지키는 데 모든 자원을 집중하고 있습니다. 작은 사무실 한 칸이라도
              제 손으로 직접 살펴보고 마무리하는 것이 저희의 원칙입니다.
            </p>
            <p className="mt-5 text-[15.5px] text-navy-700 leading-[2]">
              기업의 새로운 출발을 함께 만들 수 있도록, 정직한 견적과
              책임감 있는 작업으로 보답드리겠습니다.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="block w-10 h-px bg-brand-gold" />
              <div>
                <div className="text-[10px] tracking-eyebrow uppercase text-brand-gold font-bold">CEO</div>
                <div className="mt-1 text-lg font-bold text-brand-navy">대표 황필성</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="absolute -inset-5 border border-brand-gold/30" />
              <div className="absolute -inset-2 border border-brand-gold/10" />
              <div className="relative aspect-[4/5] bg-gradient-to-br from-brand-navyDeep via-brand-navy to-brand-navyMid p-12 flex items-center justify-center shadow-soft">
                <Image
                  src="/logo-white.png"
                  alt="(주)엘리트24"
                  width={420}
                  height={420}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-7 left-6 sm:left-10 bg-brand-gold text-white px-5 py-4">
                <div className="text-[10px] tracking-eyebrow uppercase opacity-85 font-bold">Since</div>
                <div className="mt-1 text-xl font-bold">기업이사 전문</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow !text-center" style={{ display: "inline-flex" }}>Our Values</span>
            <h2 className="mt-6 section-title-serif text-balance">
              엘리트24의 세 가지 약속
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-navy-100/60 border border-navy-100/60">
            {VALUES.map((v) => (
              <div key={v.no} className="bg-white p-9 lg:p-11">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-2xl text-brand-gold">{v.no}</span>
                  <span className="text-[10px] tracking-eyebrow uppercase text-navy-400">{v.title}</span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-brand-navy">{v.kr}</h3>
                <span className="block mt-5 w-10 h-px bg-brand-gold" />
                <p className="mt-5 text-[14.5px] text-navy-600 leading-[1.95]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="section-tight bg-brand-navyDeep text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(201,164,92,0.18) 0%, transparent 50%)",
          }}
        />
        <div className="container-pad relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="eyebrow-light">Corporate Information</span>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-medium text-white leading-[1.15]">
                사업자 정보
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link href="/contact" className="btn-ghost-light">
                상담 문의 <ArrowIcon />
              </Link>
            </div>
          </div>
          <ul className="border-t border-white/15">
            {COMPANY_INFO.map((c) => (
              <li
                key={c.label}
                className="grid grid-cols-12 gap-4 py-5 border-b border-white/10 text-[15px]"
              >
                <div className="col-span-4 sm:col-span-3 text-[11px] tracking-wider2 uppercase text-brand-goldLight font-semibold pt-1">{c.label}</div>
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
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
