// ── Hero.jsx ───────────────────────────────────────────────────────
import {
  ArrowRight,
  ShieldCheck,
  Award,
  MapPin,
  ChevronDown,
} from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Award, label: "12+ Years Experience" },
  { icon: MapPin, label: "Locally Trusted" },
];

const stats = [
  { value: "340+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12", label: "Years in Business" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-dark pt-16"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&fit=crop"
          alt="Premium kitchen renovation by Urbyn Build Group"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay — heavier on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/92 via-brand-dark/72 to-brand-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
        {/* Terracotta brand tint — bottom-left warmth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ba4a2b]/18 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-site mx-auto px-5 md:px-8 w-full py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="section-label text-[#ba4a2b]/90 mb-4">
            London, Ontario's Premier Renovation Firm
          </p>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08] mb-6">
            Built Right.{" "}
            <em className="not-italic text-[#ba4a2b]">Done Clean.</em>{" "}
            Trusted&nbsp;Locally.
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Urbyn Build Group delivers premium kitchen renovations, bathroom
            remodels, basement finishing, and full home additions — with
            transparent pricing and a two-year workmanship guarantee.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a href="#quote" className="btn-primary">
              Get a Free Quote <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-transparent backdrop-blur-sm border border-white/30
                         text-white font-sans font-medium px-6 py-3.5 rounded-sm text-sm tracking-wide
                         hover:border-[#ba4a2b] hover:text-[#ba4a2b] transition-all duration-200"
            >
              View Our Work
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-[#f5d5cc] backdrop-blur-sm border border-[#ba4a2b]/30
                           rounded-sm px-3.5 py-2"
              >
                <Icon size={14} className="text-[#ba4a2b] flex-shrink-0" />
                <span className="text-[#ba4a2b] text-[12px] font-medium tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar — bottom of section */}
        <div
          className="mt-16 inline-grid grid-cols-3 divide-x divide-[#ba4a2b]/20
                     bg-brand-dark/60 backdrop-blur-sm border border-[#ba4a2b]/25 rounded-sm overflow-hidden"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="px-7 py-4 text-center">
              <p className="font-display text-2xl md:text-3xl text-white font-semibold">
                {value}
              </p>
              <p className="text-[#ba4a2b]/70 text-[11px] font-medium tracking-widest uppercase mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                   text-[#ba4a2b]/50 hover:text-[#ba4a2b] transition-colors animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown size={26} />
      </a>
    </section>
  );
}
