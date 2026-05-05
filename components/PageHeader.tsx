import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  current: string;
  image: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  current,
  image,
}: Props) {
  return (
    <section className="relative bg-brand-navyDeep text-white overflow-hidden">
      <img src={image} alt="" aria-hidden className="image-cover" />
      <div className="absolute inset-0 photo-veil" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 25%, rgba(201,164,92,0.18) 0%, transparent 45%)",
        }}
      />
      <div className="absolute inset-0 ornament-grid opacity-25" />

      <div className="container-pad relative z-10 pt-44 pb-24 sm:pt-52 sm:pb-32">
        <div className="max-w-3xl">
          <span className="eyebrow-light animate-fade-up">{eyebrow}</span>
          <h1 className="mt-6 font-serif font-medium tracking-tight text-balance text-[40px] sm:text-6xl lg:text-7xl leading-[1.1] animate-fade-up">
            {title}
          </h1>
          {description && (
            <p className="mt-7 max-w-2xl text-[15px] sm:text-lg leading-[1.95] text-white/75 animate-fade-up-slow">
              {description}
            </p>
          )}
        </div>

        <div className="mt-14 flex items-center gap-3 text-[11px] leading-none tracking-wider2 uppercase text-white/55 animate-fade-in">
          <Link href="/" className="hover:text-brand-goldLight transition">
            Home
          </Link>
          <span className="opacity-50">/</span>
          <span className="text-brand-goldLight">{current}</span>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent z-10" />
    </section>
  );
}
