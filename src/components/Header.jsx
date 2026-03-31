// ── Header.jsx ─────────────────────────────────────────────────────
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Services',     href: '#services'    },
  { label: 'Our Work',     href: '#projects'    },
  { label: 'Process',      href: '#process'     },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ',          href: '#faq'         },
  { label: 'Contact',      href: '#contact'     },
]

export default function Header() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(21,22,24,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-sans font-medium text-brand-dark hover:text-[#ba4a2b] transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Phone */}
          <a
            href="tel:+15196309914"
            className="flex items-center gap-1.5 text-[13px] font-medium text-brand-slate hover:text-brand-dark transition-colors"
          >
            <Phone size={13} />
            519-630-9914
          </a>
          <a href="#quote" className="btn-primary text-[13px] py-2.5 px-5">
            Get a Quote
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-brand-dark"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-border px-5 pb-6 pt-4 space-y-1 shadow-card-hover">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="block py-3 text-[15px] font-medium text-brand-dark border-b border-brand-border last:border-0"
            >
              {label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a href="tel:+15196309914" className="flex items-center gap-2 text-sm text-brand-slate font-medium">
              <Phone size={14} />
              519-630-9914
            </a>
            <a href="#quote" onClick={close} className="btn-primary justify-center">
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
