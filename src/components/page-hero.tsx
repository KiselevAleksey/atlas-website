import Image from "next/image";
import Link from "next/link";

type HeroAction = {
  label: string;
  href: string;
  primary?: boolean;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actions?: HeroAction[];
};

export function PageHero({ eyebrow, title, description, imageSrc, imageAlt, actions = [] }: PageHeroProps) {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_48px_rgba(16,36,61,0.12)] md:grid-cols-[1.08fr_0.92fr] md:p-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4a6b8f]">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#10243d] md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#365273]">{description}</p>

        {actions.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={
                  action.primary
                    ? "rounded-full bg-[#0b6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(11,108,255,0.32)]"
                    : "rounded-full border border-[#bfd5f5] bg-white px-5 py-2.5 text-sm font-semibold text-[#245588] hover:bg-[#edf5ff]"
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      <div className="relative min-h-[260px] overflow-hidden rounded-3xl">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
      </div>
    </section>
  );
}
