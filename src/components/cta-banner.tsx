import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  primary: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
};

export function CtaBanner({ title, description, primary, secondary }: CtaBannerProps) {
  return (
    <section className="rounded-[2rem] border border-black/10 bg-[#10243d] p-8 text-[#e2edff] shadow-[0_24px_56px_rgba(12,35,65,0.38)] md:p-10">
      <h2 className="font-display text-3xl font-semibold text-white">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#bfd4f2]">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primary.href}
          className="rounded-full bg-[#2de27f] px-5 py-2.5 text-sm font-semibold text-[#07243e] hover:bg-[#6ef0aa]"
        >
          {primary.label}
        </Link>
        {secondary ? (
          <Link
            href={secondary.href}
            className="rounded-full border border-[#6f93ba] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d3b61]"
          >
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
