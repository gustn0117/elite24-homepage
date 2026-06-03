"use client";

import { useState } from "react";
import { useSiteConfig } from "@/components/SiteConfigProvider";
import { emailHref, phoneHref } from "@/lib/site-config";

export default function Contact() {
  const c = useSiteConfig();
  const [form, setForm] = useState({
    company: "",
    name: "",
    position: "",
    phone: "",
    email: "",
    type: "사무실 이전",
    date: "",
    visitTime: "협의 가능",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[견적문의] ${form.company || "기업"} - ${form.type}`);
    const body = encodeURIComponent(
      `■ 회사명: ${form.company}\n` +
        `■ 담당자: ${form.name}${form.position ? ` (${form.position})` : ""}\n` +
        `■ 연락처: ${form.phone}\n` +
        `■ 이메일: ${form.email}\n` +
        `■ 이전 유형: ${form.type}\n` +
        `■ 희망 일정: ${form.date}\n` +
        `■ 사전 방문 희망 시간: ${form.visitTime}\n\n` +
        `■ 추가 사항\n${form.message}\n`,
    );
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const CONTACT_ROWS: { label: string; value: string; href?: string; Icon: () => React.ReactElement }[] = [
    { label: c.phonePrimaryLabel || "전화", value: c.phonePrimary, href: phoneHref(c.phonePrimary), Icon: OfficeIcon },
    ...(c.phoneSecondary
      ? [{ label: c.phoneSecondaryLabel || "보조 연락처", value: c.phoneSecondary, href: phoneHref(c.phoneSecondary), Icon: PhoneIcon }]
      : []),
    ...(c.fax ? [{ label: "팩스", value: c.fax, Icon: FaxIcon }] : []),
    { label: "이메일", value: c.email, href: emailHref(c.email), Icon: MailIcon },
    { label: "주소", value: c.address, Icon: MapIcon },
  ];

  return (
    <section className="section bg-white">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="chip">Get in Touch</span>
          <h2 className="mt-5 section-title text-balance">
            기업이사 상담, 지금 시작하세요
          </h2>
          <p className="section-sub text-pretty">
            {c.businessHours}. 전화·이메일·온라인 양식 어디로 연락 주시든 가장 빠른 채널로 답변드립니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <div className="lg:col-span-2 rounded-3xl bg-brand-navy text-white p-7 sm:p-9 relative overflow-hidden">
            <div
              className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-brand-orange/15 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <span className="chip bg-brand-orange text-white">Contact</span>
              <h3 className="mt-4 text-xl font-bold">연락처 안내</h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-white/65 text-pretty">
                {c.businessHours}
              </p>

              <ul className="mt-7 space-y-4">
                {CONTACT_ROWS.map((row) => {
                  const content = (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-orange flex items-center justify-center shrink-0">
                        <row.Icon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] text-white/55 font-semibold">{row.label}</div>
                        <div className="mt-0.5 text-[14px] sm:text-[15px] leading-[1.4] font-bold truncate">
                          {row.value}
                        </div>
                      </div>
                    </>
                  );
                  return (
                    <li key={row.label}>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="flex items-center gap-3 hover:text-brand-orange transition"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <a
                href={phoneHref(c.phonePrimary)}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange text-white px-5 py-3.5 text-sm font-bold hover:bg-brand-orangeDark transition"
              >
                <PhoneIcon /> 지금 바로 전화 상담
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-navy-100 bg-white p-7 sm:p-9 shadow-card"
          >
            <h3 className="text-xl font-bold text-brand-navy">온라인 상담 신청</h3>
            <p className="mt-1.5 text-[13px] leading-[1.6] text-navy-500 text-pretty">
              기재해 주신 내용은 메일로 발송됩니다.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="회사명" required>
                <input name="company" required value={form.company} onChange={onChange} className="input" placeholder={c.companyName} />
              </Field>
              <Field label="담당자명" required>
                <input name="name" required value={form.name} onChange={onChange} className="input" placeholder="홍길동" />
              </Field>
              <Field label="직위">
                <input name="position" value={form.position} onChange={onChange} className="input" placeholder="예: 대표 / 총무팀장 / 시설관리" />
              </Field>
              <Field label="연락처" required>
                <input name="phone" required type="tel" value={form.phone} onChange={onChange} className="input" placeholder="010-0000-0000" />
              </Field>
              <Field label="이메일">
                <input name="email" type="email" value={form.email} onChange={onChange} className="input" placeholder="example@company.com" />
              </Field>
              <Field label="이전 유형">
                <select name="type" value={form.type} onChange={onChange} className="input">
                  <option>사무실 이전</option>
                  <option>공장 / 창고 이전</option>
                  <option>법인 / 기관 이전</option>
                  <option>기타</option>
                </select>
              </Field>
              <Field label="희망 일정">
                <input name="date" type="date" value={form.date} onChange={onChange} className="input" />
              </Field>
              <Field label="사전 방문 희망 시간대" className="sm:col-span-2">
                <select name="visitTime" value={form.visitTime} onChange={onChange} className="input">
                  <option>협의 가능</option>
                  <option>오전 (09:00 ~ 12:00)</option>
                  <option>점심 (12:00 ~ 13:30)</option>
                  <option>오후 일찍 (13:30 ~ 15:30)</option>
                  <option>오후 늦게 (15:30 ~ 18:00)</option>
                  <option>퇴근 후 / 야간 (18:00 이후)</option>
                  <option>주말 / 공휴일</option>
                </select>
              </Field>
            </div>

            <Field label="요청 사항" className="mt-4">
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                className="input resize-none"
                placeholder="대략적인 짐의 양, 출발지/도착지, 특이사항 등을 알려주세요."
              />
            </Field>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange text-white px-5 py-4 text-sm font-bold hover:bg-brand-orangeDark transition shadow-glow"
            >
              견적 요청 보내기 <ArrowIcon />
            </button>

            {submitted && (
              <p className="mt-3 text-center text-xs text-brand-orangeDark">
                메일 앱이 열리지 않으면 {c.email} 으로 직접 보내주세요.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, className = "", children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="label">
        {label}
        {required && <span className="text-brand-orange ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M5.5 4.5C5.5 4.5 7 4 8.5 4C9.5 4 10 6.5 10 7.5C10 8.5 8.5 9.5 8.5 9.5C8.5 9.5 9.5 12.5 12 14.5C14.5 16.5 17 17 17 17C17 17 18 15.5 19 15.5C20 15.5 22 16 22 17C22 18.5 21.5 20 21.5 20C21.5 20 19 21 14 18C9 15 5.5 9 5.5 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function OfficeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 21V6a1 1 0 011-1h10a1 1 0 011 1v15M16 11h3a1 1 0 011 1v9M8 9h2M8 13h2M8 17h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-18 0a2 2 0 012-2h14a2 2 0 012 2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13zM12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function FaxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="3" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 14h8M8 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
