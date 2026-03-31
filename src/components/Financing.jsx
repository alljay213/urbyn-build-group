// ── Financing.jsx ──────────────────────────────────────────────────
// Front-end only. Replace the CTA link with an actual financing
// partner application URL (e.g. Financeit, SNAP Financial) when ready.
import { ArrowRight, Banknote, Calendar, TrendingUp } from "lucide-react";

const options = [
  {
    icon: Calendar,
    title: "Phased Renovations",
    description:
      "Break large projects into manageable phases — complete the kitchen this year, the basement next. We'll plan the full scope now so the work integrates seamlessly.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Payment Schedules",
    description:
      "Our standard payment schedule is tied to project milestones, not arbitrary dates. You pay as work is completed and inspected.",
  },
  {
    icon: Banknote,
    title: "Third-Party Financing",
    description:
      "We work with approved financing partners who offer competitive rates for home improvement projects. Ask us for details when you submit your quote request.",
  },
];

export default function Financing() {
  return (
    <section className="py-24 md:py-32 bg-brand-warm">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
          {/* Left — image */}
          <div className="relative rounded-sm overflow-hidden shadow-[0_12px_48px_0_rgba(21,22,24,0.12)] hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80&fit=crop"
              alt="Happy homeowner reviewing renovation plans"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            {/* Callout badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-sm p-5 shadow-card">
              <p className="font-display text-[22px] text-brand-dark leading-tight mb-1">
                Your dream home is closer than you think.
              </p>
              <p className="text-brand-slate text-[13px]">
                Let's find an approach that fits your budget.
              </p>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <span className="section-label">Financing & Planning</span>
            <h2 className="section-heading">
              Smart Ways to Fund Your Renovation
            </h2>
            <span className="divider" />
            <p className="text-brand-slate leading-relaxed mb-10">
              A dream renovation doesn't need to mean financial stress. Urbyn
              Build Group helps every client find an approach that fits their
              budget — whether that's phased work, milestone-based payments, or
              third-party financing.
            </p>

            <div className="space-y-6">
              {options.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#f5d5cc] flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-[#ba4a2b]" />
                  </div>
                  <div>
                    <h3 className="font-display text-[17px] text-brand-dark mb-1">
                      {title}
                    </h3>
                    <p className="text-brand-slate text-[13.5px] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#quote" className="btn-primary">
                Discuss Your Budget <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
