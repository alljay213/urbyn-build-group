// ── WhyUs.jsx ──────────────────────────────────────────────────────
import { CheckCircle2, Clock, MessageCircle, Sparkles, ShieldCheck, Banknote } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Fully Licensed & Insured',
    description:
      "Every Urbyn Build Group project is backed by $5M general liability coverage and WSIB protection. You're never exposed.",
  },
  {
    icon: Clock,
    title: 'We Respect Your Timeline',
    description:
      'We build a realistic schedule before we start and we stick to it. If something changes, you hear about it the same day — not at the end.',
  },
  {
    icon: MessageCircle,
    title: 'Proactive Communication',
    description:
      "Weekly photo updates, a direct line to your project lead, and a policy of no surprises. You always know what's happening.",
  },
  {
    icon: Sparkles,
    title: 'Jobsite Left Spotless',
    description:
      'Our crews protect your home with floor coverings and dust barriers, and clean the site at the end of every workday. No exceptions.',
  },
  {
    icon: CheckCircle2,
    title: '2-Year Workmanship Warranty',
    description:
      'We stand behind every nail, tile, and board. Any workmanship issue in the first two years is resolved at no cost to you — period.',
  },
  {
    icon: Banknote,
    title: 'Transparent, Fixed Pricing',
    description:
      'Itemised quotes with no ambiguous allowances. What you sign is what you pay, unless you request a scope change.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative background accent */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #ba4a2b 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-site mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <span className="section-label text-[#ba4a2b]/80">Why Urbyn Build Group</span>
          <h2 className="section-heading text-white">
            The Standard Every Client Deserves
          </h2>
          <span className="divider" />
          <p className="text-white/55 leading-relaxed">
          We've built our reputation by doing the unglamorous things right:
            showing up on time, communicating clearly, and leaving every
            site cleaner than we found it.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 border border-white/8 rounded-sm overflow-hidden">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-brand-dark/80 p-8 group hover:bg-white/[0.03] transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-sm bg-[#f5d5cc] flex items-center justify-center mb-5">
                <Icon size={18} className="text-[#ba4a2b]" />
              </div>
              <h3 className="font-display text-[18px] text-white mb-2">{title}</h3>
              <p className="text-white/50 text-[13.5px] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="mt-12 text-center">
          <a href="#quote" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
