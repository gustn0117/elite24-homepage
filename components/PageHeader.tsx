import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  current: string;
};

export default function PageHeader({ eyebrow, title, description, current }: Props) {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 25%, rgba(201,164,92,0.2) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(46,77,122,0.5) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 ornament-grid opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(7,15,36,0) 0%, rgba(7,15,36,0.55) 100%)",
        }}
      />

      <div className="container-pad relative z-10 pt-44 pb-24 sm:pt-52 sm:pb-32">
        <div className="max-w-3xl">
          <span className="eyebrow-light animate-fade-up">{eyebrow}</span>
          <h1 className="mt-6 font-serif text-[44px] sm:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white animate-fade-up">
            {title}
          </h1>
          {description && (
            <p className="mt-7 max-w-2xl text-base sm:text-lg text-white/75 leading-[1.85] animate-fade-up-slow">
              {description}
            </p>
          )}
        </div>

        <div className="mt-14 flex items-center gap-3 text-[11px] tracking-wider2 uppercase text-white/55 animate-fade-in">
          <Link href="/" className="hover:text-brand-goldLight transition">Home</Link>
          <span className="opacity-50">/</span>
          <span className="text-brand-goldLight">{current}</span>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
    </section>
  );
}
