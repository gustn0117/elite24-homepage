import Image from "next/image";
import Link from "next/link";

const FOOT_NAV = [
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스" },
  { href: "/pricing", label: "견적안내" },
  { href: "/process", label: "이사절차" },
  { href: "/contact", label: "문의하기" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navyDeep text-white/70">
      <div className="container-pad py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Image
              src="/logo-white.png"
              alt="(주)엘리트24"
              width={170}
              height={48}
              className="h-10 w-auto"
            />
            <p className="mt-5 text-[14px] leading-[1.85] max-w-md">
              (주)엘리트24는 사무실·공장·창고 이전을 전문으로 하는 기업이사
              이사짐센터입니다. 합리적 가격, 명확한 견적, 책임감 있는 작업으로
              기업 고객을 모십니다.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="tel:01039566618"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange text-white px-5 py-3 text-sm font-bold hover:bg-brand-orangeDark transition"
              >
                상담 전화
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-5 py-3 text-sm font-bold hover:bg-white/10 transition"
              >
                온라인 견적
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[12px] tracking-wider2 uppercase text-brand-orange font-bold">Sitemap</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              {FOOT_NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-white/75 hover:text-brand-orange transition"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[12px] tracking-wider2 uppercase text-brand-orange font-bold">Contact</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/55">대표 연락처</span>
                <a href="tel:01039566618" className="text-white font-semibold hover:text-brand-orange">010-3956-6618</a>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/55">사무실</span>
                <a href="tel:0269588067" className="text-white font-semibold hover:text-brand-orange">02-6958-8067</a>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/55">이메일</span>
                <a href="mailto:pirseng0825@naver.com" className="text-white font-semibold hover:text-brand-orange text-[13px]">pirseng0825@naver.com</a>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/55">대표</span>
                <span className="text-white font-semibold">황필성</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/55">주소</span>
                <span className="text-white font-semibold text-right">서울 금천구 독산로 106길 15</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-white/45">
          <span>© {new Date().getFullYear()} (주)엘리트24. All rights reserved.</span>
          <span>기업이사 전문 · 가정이사 미진행</span>
        </div>
      </div>
    </footer>
  );
}
