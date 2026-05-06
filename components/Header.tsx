"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스" },
  { href: "/portfolio", label: "작업사례" },
  { href: "/pricing", label: "견적안내" },
  { href: "/process", label: "이사절차" },
  { href: "/contact", label: "문의하기" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,29,58,0.06)]"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-pad flex items-center justify-between h-16 sm:h-[72px]">
        <Link href="/" className="flex items-center gap-2" aria-label="(주)엘리트24 홈">
          <Image
            src="/logo.png"
            alt="(주)엘리트24"
            width={150}
            height={40}
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
                className={`relative px-3.5 py-2 text-[14px] font-semibold transition ${
                  active ? "text-brand-orange" : "text-navy-700 hover:text-brand-navy"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-5 h-0.5 bg-brand-orange rounded-full" />
                )}
              </Link>
            );
          })}
          <a
            href="tel:01039566618"
            className="ml-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition bg-brand-orange text-white hover:bg-brand-orangeDark hover:-translate-y-0.5 shadow-glow"
          >
            <PhoneIcon /> 010-3956-6618
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴"
          className="lg:hidden p-2 text-navy-800"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy-100">
          <nav className="container-pad py-3 flex flex-col">
            {NAV.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between py-3.5 border-b border-navy-100/70 ${
                    active ? "text-brand-orange font-bold" : "text-navy-800 font-semibold"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowIcon />
                </Link>
              );
            })}
            <a
              href="tel:01039566618"
              className="mt-4 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange text-white px-5 py-3.5 text-sm font-bold"
            >
              <PhoneIcon /> 010-3956-6618
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.5 4.5C5.5 4.5 7 4 8.5 4C9.5 4 10 6.5 10 7.5C10 8.5 8.5 9.5 8.5 9.5C8.5 9.5 9.5 12.5 12 14.5C14.5 16.5 17 17 17 17C17 17 18 15.5 19 15.5C20 15.5 22 16 22 17C22 18.5 21.5 20 21.5 20C21.5 20 19 21 14 18C9 15 5.5 9 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
