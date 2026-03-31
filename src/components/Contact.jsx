// ── Contact.jsx ────────────────────────────────────────────────────
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

// ── Swap these for the real client's details ──────────────────────
const contactInfo = {
  phone:   '519-630-9914',
  email:   'quote@urbynbuildgroup.com',
  address: 'London, Ontario',
  hours: [
    { days: 'Monday – Friday', times: '7:30 AM – 5:30 PM' },
    { days: 'Saturday',        times: '8:00 AM – 2:00 PM' },
    { days: 'Sunday',          times: 'Closed' },
  ],
  serviceAreas: [
    'London', 'Lambeth', 'Byron', 'Hyde Park',
    'Komoka', 'Strathroy', 'St. Thomas', 'Dorchester',
  ],
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-site mx-auto px-5 md:px-8">
        {/* Top — closing CTA banner */}
        <div
          className="relative overflow-hidden rounded-sm bg-brand-dark px-8 py-12 md:py-14 mb-16
                     flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Background accent */}
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle at top right, #ba4a2b, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="max-w-lg">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed">
              Get in touch for a free on-site assessment. We'll walk through your project,
              answer every question, and leave you with a clear plan — no pressure, no obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="#quote" className="btn-primary">
              Get a Free Quote <ArrowRight size={15} />
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\D/g,'')}`}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white
                         font-medium text-sm px-6 py-3.5 rounded-sm hover:bg-white/15 transition-colors"
            >
              <Phone size={14} /> Call Us
            </a>
          </div>
        </div>

        {/* Bottom — contact details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <ContactBlock icon={Phone} label="Phone">
            <a
              href={`tel:${contactInfo.phone.replace(/\D/g,'')}`}
              className="text-brand-dark font-medium hover:text-[#ba4a2b] transition-colors"
            >
              {contactInfo.phone}
            </a>
          </ContactBlock>

          {/* Email */}
          <ContactBlock icon={Mail} label="Email">
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-brand-dark font-medium hover:text-[#ba4a2b] transition-colors break-all"
            >
              {contactInfo.email}
            </a>
          </ContactBlock>

          {/* Hours */}
          <ContactBlock icon={Clock} label="Business Hours">
            <ul className="space-y-1">
              {contactInfo.hours.map(({ days, times }) => (
                <li key={days} className="text-[13px]">
                  <span className="text-brand-dark font-medium">{days}: </span>
                  <span className="text-brand-slate">{times}</span>
                </li>
              ))}
            </ul>
          </ContactBlock>

          {/* Service area */}
          <ContactBlock icon={MapPin} label="Service Area">
            <p className="text-brand-slate text-[13px] leading-relaxed">
              {contactInfo.serviceAreas.join(' · ')}
            </p>
          </ContactBlock>
        </div>
      </div>
    </section>
  )
}

function ContactBlock({ icon: Icon, label, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={14} className="text-[#ba4a2b]" />
        <span className="text-[11px] font-medium tracking-widest uppercase text-brand-slate">{label}</span>
      </div>
      {children}
    </div>
  )
}
