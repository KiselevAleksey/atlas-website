import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";
import { officeLocations } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Contact"
        title="Talk with our sales and operations team"
        description="Whether you are evaluating platform fit or planning a regional rollout, we can help you scope the right next step."
        imageSrc={mediaLibrary.logisticsTruck.src}
        imageAlt={mediaLibrary.logisticsTruck.alt}
        actions={[
          { label: "Request Quote", href: "/request-quote", primary: true },
          { label: "Explore Resources", href: "/resources" },
        ]}
      />

      <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
        <form className="rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Send us a message</h2>
          <div className="mt-4 grid gap-3">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              className="rounded-xl border border-[#c5d9f4] bg-white px-3 py-2.5 text-sm text-[#10243d] outline-none focus:border-[#0b6cff]"
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              className="rounded-xl border border-[#c5d9f4] bg-white px-3 py-2.5 text-sm text-[#10243d] outline-none focus:border-[#0b6cff]"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="rounded-xl border border-[#c5d9f4] bg-white px-3 py-2.5 text-sm text-[#10243d] outline-none focus:border-[#0b6cff]"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us what you are trying to build"
              className="rounded-xl border border-[#c5d9f4] bg-white px-3 py-2.5 text-sm text-[#10243d] outline-none focus:border-[#0b6cff]"
            />
            <button
              type="submit"
              className="mt-2 rounded-full bg-[#0b6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(11,108,255,0.32)]"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {officeLocations.map((office) => (
            <article
              key={office.city}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-[0_16px_36px_rgba(16,36,61,0.08)]"
            >
              <div className="relative h-36">
                <Image src={office.image} alt={`${office.city} office`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-semibold text-[#10243d]">{office.city}</h3>
                <p className="mt-1 text-sm text-[#365273]">{office.address}</p>
                <p className="mt-1 text-sm font-semibold text-[#245588]">{office.phone}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Need immediate pricing or integration scoping?"
        description="Our team can review your current stack and provide an implementation-ready plan."
        primary={{ label: "Request Quote", href: "/request-quote" }}
        secondary={{ label: "View Solutions", href: "/solutions" }}
      />
    </div>
  );
}
