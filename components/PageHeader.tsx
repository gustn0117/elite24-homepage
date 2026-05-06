import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  current: string;
};

export default function PageHeader({ eyebrow, title, description, current }: Props) {
  return (
    <section className="relative bg-bright-mesh overflow-hidden">
      {/* 배경 글로우 */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-orange/15 blur-3xl animate-pulse-soft pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl animate-float-slow pointer-events-none" />

      {/* 도면 격자 */}
      <svg
        viewBox="0 0 1200 400"
        className="hidden md:block absolute inset-0 w-full h-full opacity-[0.10] pointer-events-none"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" stroke="#1d3557" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="1200" y2={i * 50} stroke="#1d3557" strokeWidth="0.5" />
        ))}
      </svg>

      <div className="container-pad relative z-10 pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="flex items-center gap-2 text-[12px] tracking-wider2 uppercase text-navy-500 animate-fade-in">
          <Link href="/" className="hover:text-brand-orange transition">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-brand-orange">{current}</span>
        </div>

        <span className="mt-7 chip animate-fade-up">{eyebrow}</span>

        <h1 className="mt-5 text-[34px] sm:text-5xl lg:text-[52px] leading-[1.2] font-extrabold tracking-tight text-balance animate-fade-up text-brand-navy">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-[15px] sm:text-base leading-[1.85] text-navy-600 animate-fade-up">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
