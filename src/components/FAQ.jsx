// ── FAQ.jsx ────────────────────────────────────────────────────────
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../data/faqs'

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Left — header (sticky on desktop) */}
          <div className="lg:sticky lg:top-28">
            <span className="section-label">Common Questions</span>
            <h2 className="section-heading">What Homeowners Ask</h2>
            <span className="divider" />
            <p className="text-brand-slate leading-relaxed mb-6">
              We hear a lot of the same questions. Here are honest answers to the
              ones that matter most before you hire a contractor.
            </p>
            <a href="#quote" className="btn-primary text-[13px] py-3 px-5">
              Still have questions? Talk to us
            </a>
          </div>

          {/* Right — accordion */}
          <div className="space-y-2">
            {faqs.map((faq) => {
              const isOpen = open === faq.id
              return (
                <div
                  key={faq.id}
                  className={`border rounded-sm overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-[#ba4a2b]/50 bg-[#f5d5cc]' : 'border-brand-border bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-sans font-medium text-[14.5px] leading-snug ${
                      isOpen ? 'text-brand-dark' : 'text-brand-dark'
                    }`}>
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f5d5cc] flex items-center justify-center mt-0.5">
                      {isOpen
                        ? <Minus size={12} className="text-[#ba4a2b]" />
                        : <Plus  size={12} className="text-[#ba4a2b]" />
                      }
                    </span>
                  </button>

                  {/* Answer — smooth collapse via max-height trick */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-5 text-brand-slate text-[13.5px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
