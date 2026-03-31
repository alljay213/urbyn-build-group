// ── Booking.jsx ────────────────────────────────────────────────────
// Front-end only. The date/time picker UI is fully presentational.
// Replace handleBookingSubmit with Calendly, Acuity, or a custom
// booking API call when backend is ready.
import { useState } from 'react'
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react'

const TIMES = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
]

// Generate the next 10 weekdays from today for the date picker
function getNextWeekdays(count = 10) {
  const days = []
  const d = new Date()
  d.setDate(d.getDate() + 1) // start from tomorrow
  while (days.length < count) {
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      days.push(new Date(d))
    }
    d.setDate(d.getDate() + 1)
  }
  return days
}

export default function Booking() {
  const weekdays = getNextWeekdays(10)
  const [selectedDate, setDate] = useState(null)
  const [selectedTime, setTime] = useState(null)
  const [booked,        setBooked] = useState(false)

  // ── TODO: Replace with real booking API ──────────────────────────
  const handleBook = () => {
    if (!selectedDate || !selectedTime) return
    console.log('Booking request:', {
      date: selectedDate.toDateString(),
      time: selectedTime,
    })
    // e.g. await fetch('/api/booking', { method: 'POST', … })
    setBooked(true)
  }
  // ─────────────────────────────────────────────────────────────────

  const fmt = (d) =>
    d.toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric' })

  if (booked) {
    return (
      <section id="booking" className="py-24 md:py-32 bg-brand-dark">
        <div className="max-w-site mx-auto px-5 md:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-brand-gold/15 flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={28} className="text-brand-gold" />
            </div>
            <h2 className="font-display text-3xl text-white mb-3">Consultation Booked</h2>
            <p className="text-white/60 mb-2">
              {selectedDate && fmt(selectedDate)} at {selectedTime}
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              We'll send a confirmation and a reminder the day before. See you soon!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 md:py-32 bg-brand-dark">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <span className="section-label text-brand-gold/80">Free Consultation</span>
            <h2 className="section-heading text-white">
              Book a Site Visit
            </h2>
            <span className="divider" />
            <p className="text-white/55 leading-relaxed mb-8">
              Pick a date and time that works for you. We'll come to your home,
              walk the space, and give you a professional assessment — completely free,
              with no obligation to proceed.
            </p>
            <ul className="space-y-3">
              {[
                'On-site, not just a phone call',
                '45–60 minute walkthrough',
                'Honest, experience-backed advice',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-white/60">
                  <CheckCircle size={14} className="text-brand-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — date/time picker card */}
          <div className="bg-white/5 border border-white/10 rounded-sm p-8">
            {/* Date selection */}
            <div className="mb-7">
              <p className="flex items-center gap-2 text-[12.5px] font-medium text-white/60 uppercase tracking-widest mb-4">
                <Calendar size={13} /> Choose a Date
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {weekdays.map((d) => {
                  const active = selectedDate?.toDateString() === d.toDateString()
                  return (
                    <button
                      key={d.toDateString()}
                      type="button"
                      onClick={() => { setDate(d); setTime(null) }}
                      className={`text-[12px] font-medium py-2.5 px-3 rounded-sm border transition-all duration-150 ${
                        active
                          ? 'bg-brand-gold border-brand-gold text-white'
                          : 'border-white/15 text-white/60 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {fmt(d)}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Time selection — only shown after date pick */}
            {selectedDate && (
              <div className="mb-7">
                <p className="flex items-center gap-2 text-[12.5px] font-medium text-white/60 uppercase tracking-widest mb-4">
                  <Clock size={13} /> Choose a Time
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIMES.map((t) => {
                    const active = selectedTime === t
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className={`text-[12px] font-medium py-2.5 px-2 rounded-sm border transition-all duration-150 ${
                          active
                            ? 'bg-brand-gold border-brand-gold text-white'
                            : 'border-white/15 text-white/60 hover:border-white/40 hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={handleBook}
              disabled={!selectedDate || !selectedTime}
              className="btn-primary w-full justify-center disabled:opacity-35 disabled:cursor-not-allowed mt-2"
            >
              Confirm Consultation <ArrowRight size={15} />
            </button>

            <p className="text-center text-white/30 text-[11.5px] mt-4">
              Online booking demo — live integration coming with backend setup
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
