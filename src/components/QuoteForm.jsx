// ── QuoteForm.jsx ──────────────────────────────────────────────────
// Front-end only. Replace the handleFinalSubmit function body with
// your actual API call (e.g. Formspree, EmailJS, or your own endpoint).
import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

const PROJECT_TYPES = [
  'Kitchen Renovation',
  'Bathroom Renovation',
  'Basement Finishing',
  'Home Addition',
  'Full Home Remodel',
  'General Contracting',
  'Other',
]

const BUDGET_RANGES = [
  'Under $15,000',
  '$15,000 – $30,000',
  '$30,000 – $60,000',
  '$60,000 – $100,000',
  '$100,000+',
  'Not sure yet',
]

const TIMELINES = [
  'ASAP',
  '1 – 3 months',
  '3 – 6 months',
  '6 – 12 months',
  'Just planning ahead',
]

const TOTAL_STEPS = 3

const initialForm = {
  name: '', phone: '', email: '',
  projectType: '', budget: '', timeline: '',
  message: '',
}

export default function QuoteForm() {
  const [step, setStep]       = useState(1)
  const [form, setForm]       = useState(initialForm)
  const [submitted, setSubmit] = useState(false)

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  // ── TODO: Replace this stub with your backend integration ─────────
  // Options: Formspree, EmailJS, Netlify Forms, custom REST endpoint,
  // Zapier webhook, HubSpot form API, etc.
  const handleFinalSubmit = (e) => {
    e.preventDefault()
    console.log('Quote form submission:', form)
    // await fetch('/api/quote', { method: 'POST', body: JSON.stringify(form) })
    setSubmit(true)
  }
  // ─────────────────────────────────────────────────────────────────

  if (submitted) return <SuccessState onReset={() => { setForm(initialForm); setStep(1); setSubmit(false) }} />

  return (
    <section id="quote" className="py-24 md:py-32 bg-brand-warm">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <span className="section-label">Free Quote</span>
            <h2 className="section-heading">Tell Us About Your Project</h2>
            <span className="divider" />
            <p className="text-brand-slate leading-relaxed mb-8">
              Fill out the form and we'll come back to you within one business day
              with a realistic, no-pressure assessment. No commitment required.
            </p>
            <ul className="space-y-3">
              {[
                'Response within 1 business day',
                  'No pushy sales tactics — ever',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-brand-slate">
                  <CheckCircle size={15} className="text-[#ba4a2b] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form card */}
          <div className="card p-8">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div key={i} className="flex items-center gap-2 flex-1">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold
                                transition-colors duration-200 flex-shrink-0 ${
                      i + 1 < step
                        ? 'bg-[#ba4a2b] text-white'
                        : i + 1 === step
                        ? 'bg-brand-dark text-white'
                        : 'bg-brand-border text-brand-slate'
                    }`}
                  >
                    {i + 1 < step ? '✓' : i + 1}
                  </div>
                  {i < TOTAL_STEPS - 1 && (
                    <div className={`flex-1 h-px ${i + 1 < step ? 'bg-[#ba4a2b]' : 'bg-brand-border'}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleFinalSubmit} noValidate>
              {step === 1 && <StepOne form={form} set={set} onNext={next} />}
              {step === 2 && <StepTwo form={form} set={set} onNext={next} onBack={back} />}
              {step === 3 && <StepThree form={form} set={set} onBack={back} />}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Step 1: Contact info ───────────────────────────────────────────
function StepOne({ form, set, onNext }) {
  const valid = form.name.trim() && form.email.trim()
  return (
    <div className="space-y-5">
      <h3 className="font-display text-xl text-brand-dark mb-4">Contact Information</h3>
      <Field label="Full Name *" required>
        <input type="text" value={form.name} onChange={set('name')} placeholder="Jane Smith" required className="form-input" />
      </Field>
      <Field label="Phone Number">
        <input type="tel" value={form.phone} onChange={set('phone')} placeholder="(519) 555-0100" className="form-input" />
      </Field>
      <Field label="Email Address *" required>
        <input type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" required className="form-input" />
      </Field>
      <button
        type="button"
        onClick={onNext}
        disabled={!valid}
        className="btn-primary w-full justify-center mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next Step <ArrowRight size={16} />
      </button>
    </div>
  )
}

// ── Step 2: Project details ────────────────────────────────────────
function StepTwo({ form, set, onNext, onBack }) {
  const valid = form.projectType && form.budget && form.timeline
  return (
    <div className="space-y-5">
      <h3 className="font-display text-xl text-brand-dark mb-4">Project Details</h3>
      <Field label="Project Type *">
        <select value={form.projectType} onChange={set('projectType')} required className="form-input">
          <option value="">Select project type…</option>
          {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <Field label="Rough Budget Range *">
        <select value={form.budget} onChange={set('budget')} required className="form-input">
          <option value="">Select budget range…</option>
          {BUDGET_RANGES.map((b) => <option key={b}>{b}</option>)}
        </select>
      </Field>
      <Field label="Ideal Timeline *">
        <select value={form.timeline} onChange={set('timeline')} required className="form-input">
          <option value="">When are you looking to start?</option>
          {TIMELINES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <div className="flex gap-3 mt-2">
        <button type="button" onClick={onBack} className="btn-secondary flex-1 justify-center">
          <ArrowLeft size={15} /> Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!valid}
          className="btn-primary flex-1 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next <ArrowRight size={15} />
        </button>
      </div>
    </div>
  )
}

// ── Step 3: Message + submit ───────────────────────────────────────
function StepThree({ form, set, onBack }) {
  return (
    <div className="space-y-5">
      <h3 className="font-display text-xl text-brand-dark mb-4">Anything Else?</h3>
      <Field label="Tell us about your project (optional)">
        <textarea
          value={form.message}
          onChange={set('message')}
          rows={5}
          placeholder="Share any details about what you have in mind, questions you have, or timing notes…"
          className="form-input resize-none"
        />
      </Field>
      <p className="text-[12px] text-brand-slate">
        By submitting, you agree to be contacted by Urbyn Build Group regarding your
        inquiry. We will never sell your information.
      </p>
      <div className="flex gap-3 mt-2">
        <button type="button" onClick={onBack} className="btn-secondary flex-1 justify-center">
          <ArrowLeft size={15} /> Back
        </button>
        <button type="submit" className="btn-primary flex-1 justify-center">
          Send Request <ArrowRight size={15} />
        </button>
      </div>
    </div>
  )
}

// ── Field wrapper ─────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[12.5px] font-medium text-brand-dark mb-1.5">{label}</label>
      {children}
    </div>
  )
}

// ── Success screen ────────────────────────────────────────────────
function SuccessState({ onReset }) {
  return (
    <section id="quote" className="py-24 md:py-32 bg-brand-warm">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#f5d5cc] flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-[#ba4a2b]" />
          </div>
          <h2 className="font-display text-3xl text-brand-dark mb-3">Request Received</h2>
          <p className="text-brand-slate leading-relaxed mb-8">
            Thanks! We'll review your project details and reach out within one business day
            to follow up about your project.
          </p>
          <button onClick={onReset} className="btn-secondary">
            Submit another inquiry
          </button>
        </div>
      </div>
    </section>
  )
}
