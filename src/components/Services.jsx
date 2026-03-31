// ── Services.jsx ───────────────────────────────────────────────────
import {
  ChefHat, Droplets, Layers, Plus, HardHat, ClipboardList, ArrowRight
} from 'lucide-react'
import { services } from '../data/services'

// Map icon string names from data to actual Lucide components
const iconMap = { ChefHat, Droplets, Layers, Plus, HardHat, ClipboardList }

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-site mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <span className="section-label">What We Build</span>
          <h2 className="section-heading">
            Full-Service Renovation &amp; Construction
          </h2>
          <span className="divider" />
          <p className="text-brand-slate leading-relaxed">
            From a single bathroom refresh to a complete whole-home transformation,
            Urbyn Build Group has the trades, experience, and systems to see it through.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || HardHat
            return (
              <div
                key={service.id}
                className="card p-7 group flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-sm bg-[#f5d5cc] flex items-center justify-center mb-5
                             group-hover:bg-[#ba4a2b] transition-colors duration-300"
                >
                  <Icon
                    size={20}
                    className="text-[#ba4a2b] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title + highlight badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-[19px] text-brand-dark leading-snug">
                    {service.title}
                  </h3>
                  {service.highlight && (
                    <span className="flex-shrink-0 text-[10px] font-medium tracking-wider uppercase
                                     bg-[#f5d5cc] text-[#ba4a2b] px-2.5 py-1 rounded-full mt-0.5">
                      {service.highlight}
                    </span>
                  )}
                </div>

                <p className="text-brand-slate text-[14px] leading-relaxed flex-1">
                  {service.description}
                </p>

                <a
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#ba4a2b]
                             hover:gap-2.5 transition-all duration-200"
                >
                  Request a quote <ArrowRight size={13} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
