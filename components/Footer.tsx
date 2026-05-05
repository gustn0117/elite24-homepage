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
    <footer className="bg-brand-navyDeep text-white/65">
      <div className="container-pad py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Image
              src="/logo-white.png"
              alt="(주)엘리트24"
              width={180}
              height={50}
              className="h-11 w-auto"
            />
            <p className="mt-6 text-sm leading-[1.9] max-w-md">
              (주)엘리트24는 사무실·공장·창고 이전을 전문으로 하는 기업이사
              이사짐센터입니다. 합리적 가격, 명확한 견적, 책임감 있는 작업으로
              기업 고객을 모십니다.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="tel:01039566618"
                className="inline-flex items-center gap-2 bg-brand-gold text-white px-5 py-3 text-xs font-bold tracking-wider2 uppercase hover:bg-brand-goldDark transition"
              >
                상담 전화
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/25 text-white px-5 py-3 text-xs font-bold tracking-wider2 uppercase hover:bg-white/10 transition"
              >
                온라인 견적
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-eyebrow uppercase text-brand-goldLight font-semibold">Sitemap</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {FOOT_NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-white/70 hover:text-brand-gold transition flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-white/20" /> {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[11px] tracking-eyebrow uppercase text-brand-goldLight font-semibold">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/50">대표 연락처</span>
                <a href="tel:01039566618" className="text-white font-semibold hover:text-brand-gold">010-3956-6618</a>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/50">사무실</span>
                <a href="tel:0269588067" className="text-white font-semibold hover:text-brand-gold">02-6958-8067</a>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/50">이메일</span>
                <a href="mailto:pirseng0825@naver.com" className="text-white font-semibold hover:text-brand-gold text-[13px]">pirseng0825@naver.com</a>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/50">대표</span>
                <span className="text-white font-semibold">황필성</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/50">주소</span>
                <span className="text-white font-semibold text-right">서울 금천구 독산로 106길 15</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[11px] tracking-wider2 uppercase text-white/40">
          <span>© {new Date().getFullYear()} ELITE24 Co., Ltd. All rights reserved.</span>
          <span>기업이사 전문 · 가정이사 미진행</span>
        </div>
      </div>
    </footer>
  );
}
