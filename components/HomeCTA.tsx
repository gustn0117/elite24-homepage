"use client";

import Link from "next/link";
import { IMG } from "@/lib/images";
import { useSiteConfig } from "@/components/SiteConfigProvider";
import { phoneHref } from "@/lib/site-config";

export default function HomeCTA() {
  const c = useSiteConfig();
  return (
    <section className="section-tight bg-white">
      <div className="container-pad">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy text-white border border-navy-100">
          <img
            src={IMG.buildingTall}
            alt=""
            aria-hidden
            className="image-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(110deg, rgba(15,29,58,0.92) 0%, rgba(15,29,58,0.65) 60%, rgba(15,29,58,0.35) 100%)",
            }}
          />
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-orange/30 blur-3xl animate-pulse-soft" aria-hidden />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-14">
            <div className="lg:col-span-7 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange text-white px-3 py-1 text-[11px] tracking-wider2 uppercase font-bold">
                Free Consultation
              </span>
              <h2 className="mt-5 text-[26px] sm:text-3xl lg:text-[36px] leading-[1.3] font-bold tracking-tight text-balance text-white">
                기업이사, 지금 견적부터 받아보세요
              </h2>
              <p className="mt-4 text-[15px] sm:text-base leading-[1.85] text-white/80 max-w-xl text-pretty">
                {c.businessHours}. 전화·이메일·온라인 양식 어디로
                연락 주시든 빠르게 답변드리겠습니다.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={phoneHref(c.phonePrimary)}
                className="flex items-center justify-between gap-4 rounded-2xl bg-brand-orange text-white px-6 py-5 hover:bg-brand-orangeDark hover:-translate-y-0.5 transition shadow-glow"
              >
                <div>
                  <div className="text-[11px] tracking-wider2 uppercase font-bold opacity-90">
                    {c.phonePrimaryLabel}
                  </div>
                  <div className="mt-1 text-xl font-extrabold">{c.phonePrimary}</div>
                </div>
                <ArrowIcon />
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 backdrop-blur border border-white/30 px-6 py-5 hover:bg-white/20 hover:-translate-y-0.5 transition"
              >
                <div>
                  <div className="text-[11px] tracking-wider2 uppercase font-bold text-brand-orange">
                    Online Inquiry
                  </div>
                  <div className="mt-1 text-base font-bold">온라인 견적 요청서 작성</div>
                </div>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
