"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteConfig, } from "@/components/SiteConfigProvider";
import { emailHref, phoneHref } from "@/lib/site-config";

const FOOT_NAV = [
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스" },
  { href: "/portfolio", label: "작업사례" },
  { href: "/pricing", label: "견적안내" },
  { href: "/process", label: "이사절차" },
  { href: "/contact", label: "문의하기" },
];

export default function Footer() {
  const c = useSiteConfig();
  return (
    <footer className="bg-navy-50 text-navy-700 border-t border-navy-100">
      <div className="container-pad py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Image
              src="/logo.png"
              alt={c.companyName}
              width={170}
              height={48}
              className="h-10 w-auto"
            />
            <p className="mt-5 text-[14px] leading-[1.85] max-w-md text-navy-600">
              {c.companyName}는 사무실·공장·창고 이전을 전문으로 하는 기업이사
              이사짐센터입니다. 합리적 가격, 명확한 견적, 책임감 있는 작업으로
              기업 고객을 모십니다.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a href={phoneHref(c.phonePrimary)} className="btn-primary">상담 전화</a>
              <Link href="/contact" className="btn-outline">온라인 견적</Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[12px] tracking-wider2 uppercase text-brand-orange font-bold">Sitemap</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              {FOOT_NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-navy-700 hover:text-brand-orange transition">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[12px] tracking-wider2 uppercase text-brand-orange font-bold">Contact</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li className="flex justify-between border-b border-navy-100 pb-3">
                <span className="text-navy-500">{c.phonePrimaryLabel}</span>
                <a href={phoneHref(c.phonePrimary)} className="text-brand-navy font-bold hover:text-brand-orange">{c.phonePrimary}</a>
              </li>
              {c.phoneSecondary && (
                <li className="flex justify-between border-b border-navy-100 pb-3">
                  <span className="text-navy-500">{c.phoneSecondaryLabel || "보조 연락처"}</span>
                  <a href={phoneHref(c.phoneSecondary)} className="text-brand-navy font-bold hover:text-brand-orange">{c.phoneSecondary}</a>
                </li>
              )}
              {c.fax && (
                <li className="flex justify-between border-b border-navy-100 pb-3">
                  <span className="text-navy-500">팩스</span>
                  <span className="text-brand-navy font-bold">{c.fax}</span>
                </li>
              )}
              <li className="flex justify-between border-b border-navy-100 pb-3">
                <span className="text-navy-500">이메일</span>
                <a href={emailHref(c.email)} className="text-brand-navy font-bold hover:text-brand-orange text-[13px]">{c.email}</a>
              </li>
              <li className="flex justify-between">
                <span className="text-navy-500">주소</span>
                <span className="text-brand-navy font-bold text-right">{c.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 신뢰 지표 strip */}
        {(c.cargoLicense || c.insurance) && (
          <div className="mt-10 pt-5 border-t border-navy-200 flex flex-wrap gap-2 text-[11px]">
            {c.cargoLicense && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-navy-200 px-3 py-1.5 text-navy-700">
                <ShieldIcon /> 화물운송허가 <strong className="text-brand-navy">{c.cargoLicense}</strong>
              </span>
            )}
            {c.insurance && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-navy-200 px-3 py-1.5 text-navy-700">
                <CheckIcon /> 적재물 배상책임보험 <strong className="text-brand-navy">{c.insurance}</strong>
              </span>
            )}
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-navy-200 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-navy-500">
          <div className="space-y-1">
            <div>© {new Date().getFullYear()} {c.companyName}. All rights reserved.</div>
            {c.businessNumber && (
              <div>사업자등록번호 {c.businessNumber}</div>
            )}
          </div>
          <span>기업이사 전문 · 정직한 견적 · 양심 작업</span>
        </div>
      </div>
    </footer>
  );
}

function ShieldIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-brand-orange shrink-0">
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-brand-orange shrink-0">
      <path d="M5 12.5L10 17.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
