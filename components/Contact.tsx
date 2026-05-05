"use client";

import { useState } from "react";

const CONTACT = [
  { label: "Direct Call", title: "대표 연락처", value: "010-3956-6618", href: "tel:01039566618" },
  { label: "Office", title: "사무실", value: "02-6958-8067", href: "tel:0269588067" },
  { label: "Email", title: "이메일", value: "pirseng0825@naver.com", href: "mailto:pirseng0825@naver.com" },
  { label: "Address", title: "주소", value: "서울 금천구 독산로 106길 15" },
  { label: "Representative", title: "대표", value: "황필성" },
];

export default function Contact() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    type: "사무실 이전",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[견적문의] ${form.company || "기업"} - ${form.type}`,
    );
    const body = encodeURIComponent(
      `■ 회사명: ${form.company}\n` +
        `■ 담당자: ${form.name}\n` +
        `■ 연락처: ${form.phone}\n` +
        `■ 이메일: ${form.email}\n` +
        `■ 이전 유형: ${form.type}\n` +
        `■ 희망 일정: ${form.date}\n\n` +
        `■ 추가 사항\n${form.message}\n`,
    );
    window.location.href = `mailto:pirseng0825@naver.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section className="section bg-white">
      <div className="container-pad">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="mt-6 section-title-serif text-balance">
              기업이사 상담,
              <br />
              지금 시작하세요.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-[15px] text-navy-600 leading-[1.95] max-w-md lg:ml-auto">
              평일·주말 모두 상담 가능합니다. 전화·이메일·온라인 양식 어디로
              연락 주시든 가장 빠른 채널로 답변드립니다.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-navy-100/60 border border-navy-100/60">
          {/* Contact info */}
          <div className="lg:col-span-5 bg-brand-navyDeep text-white p-10 sm:p-12 relative overflow-hidden">
            <div
              className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-brand-gold/15 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <span className="eyebrow-light">Contact Information</span>
              <h3 className="mt-6 font-serif text-3xl font-medium leading-[1.2]">
                연락처 안내
              </h3>
              <p className="mt-3 text-sm text-white/65 leading-[1.85]">
                상담은 평일·주말 모두 가능합니다.<br />가장 빠르게는 전화 상담이 답변까지 빠릅니다.
              </p>

              <ul className="mt-10 divide-y divide-white/10 border-t border-white/10">
                {CONTACT.map((c) => (
                  <li key={c.title} className="py-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[10px] tracking-eyebrow uppercase text-brand-goldLight font-semibold">{c.label}</div>
                      <div className="mt-1 text-xs text-white/55">{c.title}</div>
                    </div>
                    {c.href ? (
                      <a href={c.href} className="text-sm sm:text-base font-semibold text-white hover:text-brand-goldLight transition text-right">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-sm sm:text-base font-semibold text-white text-right">{c.value}</span>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href="tel:01039566618"
                className="mt-10 inline-flex w-full items-center justify-between gap-2 bg-brand-gold text-white px-6 py-5 text-xs font-bold tracking-wider2 uppercase hover:bg-brand-goldDark transition"
              >
                <span className="flex items-center gap-3"><PhoneIcon /> 지금 바로 전화 상담</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white p-10 sm:p-12">
            <div className="text-[10px] tracking-eyebrow uppercase text-brand-gold font-semibold">Inquiry Form</div>
            <h3 className="mt-5 font-serif text-3xl font-medium text-brand-navy leading-[1.2]">
              온라인 상담 신청
            </h3>
            <p className="mt-3 text-sm text-navy-500 leading-[1.85]">
              기재해 주신 내용은 등록된 메일로 전송됩니다.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <Field label="회사명" required>
                <input name="company" required value={form.company} onChange={onChange} className="input" placeholder="(주)엘리트" />
              </Field>
              <Field label="담당자명" required>
                <input name="name" required value={form.name} onChange={onChange} className="input" placeholder="홍길동" />
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
            </div>

            <Field label="요청 사항" className="mt-5">
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
              className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-5 text-xs font-bold tracking-wider2 uppercase hover:bg-brand-navyDeep transition"
            >
              견적 요청 보내기 <ArrowIcon />
            </button>

            {submitted && (
              <p className="mt-4 text-center text-xs text-brand-goldDark">
                메일 앱이 열리지 않으면 pirseng0825@naver.com 으로 직접 보내주세요.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="label">
        {label}
        {required && <span className="text-brand-gold ml-1">*</span>}
      </span>
      {children}
    </label>
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
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
