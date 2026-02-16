import Image from "next/image";

type ContentImageCardProps = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  kicker?: string;
};

export function ContentImageCard({ title, body, imageSrc, imageAlt, kicker }: ContentImageCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-[0_16px_36px_rgba(16,36,61,0.08)]">
      <div className="relative h-52">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-5">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4d6f95]">{kicker}</p>
        ) : null}
        <h3 className="mt-2 font-display text-xl font-semibold text-[#10243d]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#365273]">{body}</p>
      </div>
    </article>
  );
}
