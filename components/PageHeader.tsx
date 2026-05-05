import Link from "next/link";
import { HeaderDecor } from "@/components/Illustrations";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  current: string;
};

export default function PageHeader({ eyebrow, title, description, current }: Props) {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      <HeaderDecor className="absolute inset-0 w-full h-full opacity-65" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15,29,58,0.85) 0%, rgba(29,53,87,0.65) 100%)",
        }}
      />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-orange/15 blur-3xl animate-pulse-soft" aria-hidden />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl animate-float-slow" aria-hidden />

      <div className="container-pad relative z-10 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="flex items-center gap-2 text-[12px] tracking-wider2 uppercase text-white/55 animate-fade-in">
          <Link href="/" className="hover:text-brand-orange transition">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-brand-orange">{current}</span>
        </div>

        <span className="mt-7 chip animate-fade-up">{eyebrow}</span>

        <h1 className="mt-5 text-[34px] sm:text-5xl lg:text-[52px] leading-[1.2] font-extrabold tracking-tight text-balance animate-fade-up">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-[15px] sm:text-base leading-[1.85] text-white/75 animate-fade-up">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
