import Link from "next/link";
import { IMG } from "@/lib/images";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  current: string;
};

export default function PageHeader({ eyebrow, title, description, current }: Props) {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* 빌딩 배경 */}
      <img
        src={IMG.building}
        alt=""
        aria-hidden
        className="image-cover"
      />
      {/* 화이트 베일 — 빌딩이 보이되 글자 가독성 확보 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0.95) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 25%, rgba(245,166,35,0.15) 0%, transparent 45%)",
        }}
      />

      <div className="container-pad relative z-10 pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="flex items-center gap-2 text-[12px] tracking-wider2 uppercase text-navy-600 font-semibold animate-fade-in">
          <Link href="/" className="hover:text-brand-orange transition">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-brand-orange">{current}</span>
        </div>

        <span className="mt-7 chip animate-fade-up">{eyebrow}</span>

        <h1 className="mt-5 text-[34px] sm:text-5xl lg:text-[52px] leading-[1.2] font-extrabold tracking-tight text-balance animate-fade-up text-brand-navy">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-[15px] sm:text-base leading-[1.85] text-navy-700 font-medium animate-fade-up">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
