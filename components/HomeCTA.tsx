import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="relative section-tight bg-cream overflow-hidden">
      <div className="container-pad relative">
        <div className="relative bg-white border border-navy-100/70 p-10 sm:p-14 lg:p-20 overflow-hidden">
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-brand-navy/5 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">Free Consultation</span>
              <h2 className="mt-6 section-title-serif text-balance">
                기업이사,
                <br />
                지금 견적부터 요청해보세요.
              </h2>
              <p className="section-sub max-w-xl">
                평일·주말·야간 상담 모두 가능합니다. 전화·이메일·온라인 양식 어디로
                연락 주시든 빠르게 답변드리겠습니다.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-stretch gap-4">
              <a
                href="tel:01039566618"
                className="group flex items-center justify-between border border-brand-navy bg-brand-navy text-white px-7 py-6 hover:bg-brand-navyDeep transition"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow uppercase text-brand-goldLight">Direct Call</div>
                  <div className="mt-2 text-2xl font-bold">010-3956-6618</div>
                </div>
                <ArrowIcon />
              </a>
              <Link
                href="/contact"
                className="group flex items-center justify-between border border-navy-200 px-7 py-6 hover:border-brand-gold hover:bg-brand-gold/5 transition"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow uppercase text-brand-gold">Online Inquiry</div>
                  <div className="mt-2 text-lg font-bold text-brand-navy">온라인 견적 요청서 작성</div>
                </div>
                <ArrowIcon className="text-brand-navy" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
