import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { StatGrid } from "@/components/stat-grid";
import { mediaLibrary } from "@/lib/media";
import { faqItems, globalStats, leadershipTeam } from "@/lib/site-content";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="About"
        title="Built for modern B2B foodservice operations"
        description="Atlas Wholesale Foods combines deep distribution expertise with modern product and data systems to help enterprise operators buy smarter at scale."
        imageSrc={mediaLibrary.heroWarehouse.src}
        imageAlt={mediaLibrary.heroWarehouse.alt}
        actions={[
          { label: "Explore Solutions", href: "/solutions", primary: true },
          { label: "View Network", href: "/network" },
        ]}
      />

      <StatGrid items={globalStats} />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {leadershipTeam.map((member) => (
          <article
            key={member.name}
            className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-[0_16px_36px_rgba(16,36,61,0.09)]"
          >
            <div className="relative h-52">
              <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <h2 className="font-display text-xl font-semibold text-[#10243d]">{member.name}</h2>
              <p className="mt-1 text-sm font-semibold text-[#0b6cff]">{member.role}</p>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{member.focus}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-[0_18px_40px_rgba(16,36,61,0.08)]">
        <h2 className="font-display text-3xl font-semibold text-[#10243d]">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-2xl border border-[#d5e4f8] bg-[#f6faff] p-4">
              <h3 className="font-semibold text-[#10243d]">{item.question}</h3>
              <p className="mt-2 text-sm leading-6 text-[#365273]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Partner with a team that understands scale"
        description="From category strategy to integration delivery, we support every phase of your B2B procurement transformation."
        primary={{ label: "Request Quote", href: "/request-quote" }}
        secondary={{ label: "Contact Team", href: "/contact" }}
      />
    </div>
  );
}
