// ── Testimonials.jsx ───────────────────────────────────────────────
import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-[#ba4a2b] fill-[#ba4a2b]" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-site mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <span className="section-label">Client Stories</span>
          <h2 className="section-heading">What London Homeowners Say</h2>
          <span className="divider" />
          <p className="text-brand-slate leading-relaxed">
            Our work speaks for itself — but we'll let our clients do the talking.
          </p>
        </div>

        {/* Scrollable testimonial row — works like a horizontal scroll on mobile */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} featured={i === 0} />
          ))}
        </div>

        {/* Google reviews nudge */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-3 justify-center">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={15} className="text-[#ba4a2b] fill-[#ba4a2b]" />
            ))}
          </div>
          <p className="text-brand-slate text-sm text-center">
            <strong className="text-brand-dark">4.9 average</strong> across 80+ Google reviews
          </p>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial: t, featured }) {
  return (
    <article
      role="listitem"
      className={`card p-7 flex flex-col gap-5 ${
        featured
          ? 'bg-brand-dark text-white border-brand-dark'
          : 'bg-white'
      }`}
    >
      {/* Stars */}
      <Stars count={t.rating} />

      {/* Quote */}
      <blockquote
        className={`font-sans text-[14.5px] leading-relaxed flex-1 ${
          featured ? 'text-white/80' : 'text-brand-slate'
        }`}
      >
        "{t.quote}"
      </blockquote>

      {/* Client info */}
      <footer className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 ${
            featured
              ? 'bg-[#ba4a2b] text-white'
              : 'bg-[#f5d5cc] text-[#ba4a2b]'
          }`}
        >
          {t.avatar}
        </div>

        <div>
          <p className={`text-[13.5px] font-semibold leading-none mb-0.5 ${featured ? 'text-white' : 'text-brand-dark'}`}>
            {t.name}
          </p>
          <p className={`text-[11.5px] ${featured ? 'text-white/45' : 'text-brand-slate/70'}`}>
            {t.project} · {t.location}
          </p>
        </div>
      </footer>
    </article>
  )
}
