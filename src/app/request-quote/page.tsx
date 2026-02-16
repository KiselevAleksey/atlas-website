import { PageHero } from "@/components/page-hero";
import { mediaLibrary } from "@/lib/media";

const steps = [
  "Discovery call and requirements mapping",
  "Data and integration assessment",
  "Pilot scope and rollout timeline",
  "Implementation and enablement",
];

export default function RequestQuotePage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 pb-16 pt-10">
      <PageHero
        eyebrow="Request Quote"
        title="Get a tailored proposal for your B2B catalog platform"
        description="Share your requirements and we will respond with implementation scope, timeline, and commercial model."
        imageSrc={mediaLibrary.supplyChain.src}
        imageAlt={mediaLibrary.supplyChain.alt}
      />

      <section className="grid gap-6 md:grid-cols-[1fr_0.95fr]">
        <form className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">Project details</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input type="text" placeholder="Full name" className="rounded-xl border border-[#c5d9f4] px-3 py-2.5 text-sm outline-none focus:border-[#0b6cff]" />
            <input type="email" placeholder="Work email" className="rounded-xl border border-[#c5d9f4] px-3 py-2.5 text-sm outline-none focus:border-[#0b6cff]" />
            <input type="text" placeholder="Company" className="rounded-xl border border-[#c5d9f4] px-3 py-2.5 text-sm outline-none focus:border-[#0b6cff]" />
            <input type="text" placeholder="Role" className="rounded-xl border border-[#c5d9f4] px-3 py-2.5 text-sm outline-none focus:border-[#0b6cff]" />
            <input type="text" placeholder="Primary industry" className="rounded-xl border border-[#c5d9f4] px-3 py-2.5 text-sm outline-none focus:border-[#0b6cff]" />
            <input type="text" placeholder="Number of locations" className="rounded-xl border border-[#c5d9f4] px-3 py-2.5 text-sm outline-none focus:border-[#0b6cff]" />
          </div>

          <textarea
            rows={6}
            placeholder="Describe your current stack, goals, and key challenges"
            className="mt-3 w-full rounded-xl border border-[#c5d9f4] px-3 py-2.5 text-sm outline-none focus:border-[#0b6cff]"
          />

          <button
            type="submit"
            className="mt-4 rounded-full bg-[#0b6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(11,108,255,0.32)]"
          >
            Submit Request
          </button>
        </form>

        <div className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-[0_18px_38px_rgba(16,36,61,0.08)]">
          <h2 className="font-display text-2xl font-semibold text-[#10243d]">What happens next</h2>
          <ol className="mt-4 space-y-3 text-sm text-[#365273]">
            {steps.map((step, index) => (
              <li key={step} className="rounded-xl border border-[#d5e4f8] bg-[#f7fbff] px-4 py-3">
                <span className="mr-2 font-semibold text-[#0b6cff]">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-2xl border border-[#d5e4f8] bg-[#f7fbff] p-4">
            <p className="text-sm font-semibold text-[#10243d]">Typical pilot timeline</p>
            <p className="mt-1 text-sm text-[#365273]">8-12 weeks from kickoff to first-region launch.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
