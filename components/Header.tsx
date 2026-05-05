"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#services", label: "서비스" },
  { href: "#pricing", label: "견적안내" },
  { href: "#process", label: "이사절차" },
  { href: "#about", label: "회사소개" },
  { href: "#contact", label: "문의하기" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-pad flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="(주)엘리트24"
            width={140}
            height={40}
            priority
            className="h-9 sm:h-10 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition ${
                scrolled
                  ? "text-navy-800 hover:text-brand-orange"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:01039566618"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-sm font-bold text-white shadow hover:bg-brand-orangeDark transition"
          >
            <PhoneIcon />
            010-3956-6618
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴"
          className={`md:hidden p-2 rounded-md ${
            scrolled ? "text-navy-800" : "text-white"
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-navy-100 shadow-lg">
          <nav className="container-pad flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-navy-800 font-semibold border-b border-navy-100 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:01039566618"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-3 text-sm font-bold text-white"
            >
              <PhoneIcon />
              상담 전화 010-3956-6618
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
