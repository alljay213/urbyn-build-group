// ── Process.jsx ────────────────────────────────────────────────────
import { MessageSquare, FileText, HardHat, CheckCircle } from 'lucide-react'
import { processSteps } from '../data/process'

const iconMap = { MessageSquare, FileText, HardHat, CheckCircle }

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-brand-warm">
      <div className="max-w-site mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="section-heading">Your Project, Start to Finish</h2>
          <span className="divider" />
          <p className="text-brand-slate leading-relaxed">
            A clear process means no confusion, no surprises. Here's exactly what
            working with Urbyn Build Group looks like from first contact to final walkthrough.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-brand-border z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || CheckCircle
              return (
                <div key={step.step} className="flex flex-col">
                  {/* Step number circle */}
                  <div className="flex items-center gap-4 md:flex-col md:items-start mb-5">
                    <div
                      className="w-14 h-14 rounded-sm bg-brand-dark flex items-center justify-center
                                 flex-shrink-0 shadow-card relative"
                    >
                      <Icon size={22} className="text-[#ba4a2b]" />
                      {/* Step number badge */}
                      <span
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#ba4a2b]
                                   text-white text-[9px] font-bold flex items-center justify-center shadow"
                      >
                        {i + 1}
                      </span>
                    </div>
                    {/* Mobile connector line */}
                    {i < processSteps.length - 1 && (
                      <div className="flex-1 h-px bg-brand-border md:hidden" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="font-display text-[18px] text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-brand-slate text-[13.5px] leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-brand-slate text-sm mb-4">
            Ready to get started? Fill out the quote form and we'll take it from there.
          </p>
          <a href="#quote" className="btn-primary">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
