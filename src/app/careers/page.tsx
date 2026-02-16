import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { jobOpenings } from "@/lib/site-content";

const culturePoints = [
  "Mission-driven work on high-impact foodservice infrastructure",
  "Cross-functional collaboration between product, operations, and customer teams",
  "Clear ownership, pragmatic execution, and measurable outcomes",
  "Growth pathways across technology, category, and operations domains",
];

export default function CareersPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Careers"
        title="Build the infrastructure behind modern foodservice"
        description="Join a team shaping catalog intelligence, procurement workflows, and distribution reliability for enterprise operators."
        imageSrc={mediaLibrary.kitchenPrep.src}
        imageAlt={mediaLibrary.kitchenPrep.alt}
        actions={[
          { label: "Open Roles", href: "/careers", primary: true },
          { label: "Contact Recruiting", href: "/contact" },
        ]}
      />

      <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-3xl font-semibold text-[#10243d]">Why Atlas</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[#365273]">
            {culturePoints.map((point) => (
              <li key={point} className="rounded-xl border border-[#d5e4f8] bg-[#f6faff] px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-black/10 shadow-[0_18px_38px_rgba(16,36,61,0.12)]">
          <Image src={mediaLibrary.chefPlating.src} alt={mediaLibrary.chefPlating.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
        </div>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-3xl font-semibold text-[#10243d]">Open Positions</h2>
        <div className="mt-5 space-y-3">
          {jobOpenings.map((role) => (
            <article key={`${role.title}-${role.location}`} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#d5e4f8] bg-[#f7fbff] px-4 py-3">
              <div>
                <h3 className="font-semibold text-[#10243d]">{role.title}</h3>
                <p className="text-sm text-[#365273]">
                  {role.team} • {role.location}
                </p>
              </div>
              <span className="rounded-full border border-[#bfd5f5] bg-white px-3 py-1 text-xs font-semibold text-[#245588]">
                {role.type}
              </span>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Interested in joining us?"
        description="Share your background and we will route your profile to the right hiring team."
        primary={{ label: "Contact Recruiting", href: "/contact" }}
        secondary={{ label: "Learn About Us", href: "/about" }}
      />
    </div>
  );
}
