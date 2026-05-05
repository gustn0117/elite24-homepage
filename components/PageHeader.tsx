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
    <section className="relative bg-brand-navy text-white overflow-hidden">
      <img src={image} alt="" aria-hidden className="image-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/80 to-brand-navy" />

      <div className="container-pad relative z-10 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="flex items-center gap-2 text-[12px] tracking-wider2 uppercase text-white/55">
          <Link href="/" className="hover:text-brand-orange transition">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-brand-orange">{current}</span>
        </div>

        <span className="mt-7 chip">{eyebrow}</span>

        <h1 className="mt-5 text-[34px] sm:text-5xl lg:text-[52px] leading-[1.2] font-extrabold tracking-tight text-balance">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-[15px] sm:text-base leading-[1.85] text-white/75">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
