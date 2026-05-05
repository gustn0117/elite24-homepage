"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/about", label: "회사소개", en: "About" },
  { href: "/services", label: "서비스", en: "Services" },
  { href: "/pricing", label: "견적안내", en: "Pricing" },
  { href: "/process", label: "이사절차", en: "Process" },
  { href: "/contact", label: "문의하기", en: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,29,58,0.06)]"
      }`}
    >
      <div
        className={`hidden md:block border-b transition-colors ${
          transparent ? "border-white/15 text-white/70" : "border-navy-100 text-navy-500"
        }`}
      >
        <div className="container-pad flex items-center justify-between h-9 text-[11px] font-medium tracking-wider2 uppercase">
          <span className="opacity-80">기업이사 전문 이사짐센터 · (주)엘리트24</span>
          <div className="flex items-center gap-6">
            <a href="tel:0269588067" className="hover:text-brand-gold transition">02-6958-8067</a>
            <span className={transparent ? "text-white/25" : "text-navy-200"}>·</span>
            <a href="mailto:pirseng0825@naver.com" className="hover:text-brand-gold transition">pirseng0825@naver.com</a>
          </div>
        </div>
      </div>

      <div className="container-pad flex items-center justify-between h-[68px] sm:h-[80px]">
        <Link href="/" className="flex items-center gap-3" aria-label="(주)엘리트24 홈">
          <Image
            src={transparent ? "/logo-white.png" : "/logo.png"}
            alt="(주)엘리트24"
            width={160}
            height={44}
            priority
            className="h-9 sm:h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2 text-sm font-semibold transition group ${
                  transparent ? "text-white/85 hover:text-white" : "text-navy-800 hover:text-brand-navy"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-px bg-brand-gold transition-all duration-300 ${
                    active ? "w-6" : "w-0 group-hover:w-6"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href="tel:01039566618"
            className={`ml-4 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider2 uppercase transition ${
              transparent
                ? "border border-white/30 text-white hover:bg-white hover:text-brand-navy"
                : "bg-brand-navy text-white hover:bg-brand-navyDeep"
            }`}
          >
            <PhoneIcon /> 010-3956-6618
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴"
          className={`lg:hidden p-2 ${transparent ? "text-white" : "text-navy-800"}`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy-100">
          <nav className="container-pad py-4 flex flex-col">
            {NAV.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between py-4 border-b border-navy-100/70 ${
                    active ? "text-brand-navy" : "text-navy-800"
                  }`}
                >
                  <span className="font-semibold">{item.label}</span>
                  <span className="text-[10px] font-semibold tracking-eyebrow uppercase text-brand-gold">{item.en}</span>
                </Link>
              );
            })}
            <a
              href="tel:01039566618"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-5 py-4 text-xs font-bold tracking-wider2 uppercase"
            >
              <PhoneIcon /> 010-3956-6618 상담 전화
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.5 4.5C5.5 4.5 7 4 8.5 4C9.5 4 10 6.5 10 7.5C10 8.5 8.5 9.5 8.5 9.5C8.5 9.5 9.5 12.5 12 14.5C14.5 16.5 17 17 17 17C17 17 18 15.5 19 15.5C20 15.5 22 16 22 17C22 18.5 21.5 20 21.5 20C21.5 20 19 21 14 18C9 15 5.5 9 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
