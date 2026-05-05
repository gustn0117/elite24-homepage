"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
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
    <section id="contact" className="section bg-white">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">CONTACT</span>
          <h2 className="section-title mt-4">무료 견적 문의</h2>
          <p className="section-sub">
            아래 양식을 작성해 주시거나, 전화·이메일로 편하게 연락 주세요.
            빠르게 답변드리겠습니다.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 rounded-3xl bg-brand-navy text-white p-7 sm:p-9 relative overflow-hidden">
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-brand-orange/20 blur-3xl"
              aria-hidden
            />
            <h3 className="text-xl font-bold relative">연락처 안내</h3>
            <p className="mt-2 text-sm text-white/70 relative">
              상담은 평일·주말 모두 가능합니다.
            </p>

            <ul className="mt-7 space-y-5 relative">
              <InfoRow
                icon={<PhoneIcon />}
                label="대표 연락처"
                value="010-3956-6618"
                href="tel:01039566618"
              />
              <InfoRow
                icon={<OfficeIcon />}
                label="사무실"
                value="02-6958-8067"
                href="tel:0269588067"
              />
              <InfoRow
                icon={<MailIcon />}
                label="이메일"
                value="pirseng0825@naver.com"
                href="mailto:pirseng0825@naver.com"
              />
              <InfoRow
                icon={<MapIcon />}
                label="주소"
                value="서울 금천구 독산로 106길 15"
              />
              <InfoRow
                icon={<UserIcon />}
                label="대표"
                value="황필성"
              />
            </ul>

            <a
              href="tel:01039566618"
              className="mt-8 relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-bold text-white hover:bg-brand-orangeDark transition"
            >
              <PhoneIcon /> 지금 바로 전화 상담
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-navy-100 bg-white p-7 sm:p-9 shadow-sm"
          >
            <h3 className="text-xl font-bold text-brand-navy">
              온라인 상담 신청
            </h3>
            <p className="mt-1 text-sm text-navy-500">
              기재해 주신 내용은 메일로 발송됩니다.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="회사명" required>
                <input
                  name="company"
                  required
                  value={form.company}
                  onChange={onChange}
                  className="input"
                  placeholder="(주)엘리트"
                />
              </Field>
              <Field label="담당자명" required>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="input"
                  placeholder="홍길동"
                />
              </Field>
              <Field label="연락처" required>
                <input
                  name="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  className="input"
                  placeholder="010-0000-0000"
                />
              </Field>
              <Field label="이전 유형">
                <select
                  name="type"
                  value={form.type}
                  onChange={onChange}
                  className="input"
                >
                  <option>사무실 이전</option>
                  <option>공장 / 창고 이전</option>
                  <option>법인 / 기관 이전</option>
                  <option>기타</option>
                </select>
              </Field>
              <Field label="희망 일정">
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={onChange}
                  className="input"
                />
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
              className="mt-6 w-full rounded-full bg-brand-orange px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-brand-orangeDark transition"
            >
              견적 요청 보내기
            </button>

            {submitted && (
              <p className="mt-3 text-center text-xs text-brand-orangeDark">
                메일 앱이 열리지 않으면 pirseng0825@naver.com 으로 직접 보내주세요.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid #e3e8f1;
          border-radius: 12px;
          padding: 11px 14px;
          font-size: 14px;
          color: #16223a;
          background: #fff;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          border-color: #f5a623;
          box-shadow: 0 0 0 3px rgba(245,166,35,0.15);
        }
      `}</style>
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
      <span className="block text-xs font-bold text-navy-700 mb-1.5">
        {label}
        {required && <span className="text-brand-orange ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-orange shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-white/60 font-medium">{label}</div>
        <div className="text-sm sm:text-base font-bold mt-0.5">{value}</div>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-3 hover:text-brand-orange transition">
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-3">{content}</div>
      )}
    </li>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.5 4.5C5.5 4.5 7 4 8.5 4C9.5 4 10 6.5 10 7.5C10 8.5 8.5 9.5 8.5 9.5C8.5 9.5 9.5 12.5 12 14.5C14.5 16.5 17 17 17 17C17 17 18 15.5 19 15.5C20 15.5 22 16 22 17C22 18.5 21.5 20 21.5 20C21.5 20 19 21 14 18C9 15 5.5 9 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function OfficeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 21V6a1 1 0 011-1h10a1 1 0 011 1v15M16 11h3a1 1 0 011 1v9M8 9h2M8 13h2M8 17h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-18 0a2 2 0 012-2h14a2 2 0 012 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13zM12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 11a4 4 0 11-8 0 4 4 0 018 0zM4 21a8 8 0 0116 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
