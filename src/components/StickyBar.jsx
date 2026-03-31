// ── StickyBar.jsx ──────────────────────────────────────────────────
// Visible on mobile only (hidden md:). Fades in after scrolling
// past the hero section to keep the quote CTA always accessible.
import { useEffect, useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden
                  bg-white border-t border-brand-border shadow-[0_-4px_20px_rgba(21,22,24,0.10)]
                  transition-transform duration-300 ${
                    visible ? "translate-y-0" : "translate-y-full"
                  }`}
    >
      <div className="flex items-center gap-2 px-4 pt-2 pb-1 justify-center border-b border-brand-border">
        <Logo />
      </div>
      <div className="flex items-center gap-2 px-4 py-3">
        <a
          href="tel:+15196309914"
          className="flex-1 flex items-center justify-center gap-2 border border-brand-border
                     text-brand-dark font-medium text-[13px] py-3 rounded-sm hover:border-brand-dark
                     transition-colors"
        >
          <Phone size={14} /> Call Us
        </a>
        <a
          href="#quote"
          className="flex-1 btn-primary justify-center text-[13px] py-3"
        >
          Get a Quote <ArrowRight size={14} />
        </a>
      </div>
      {/* iOS safe area padding */}
      <div className="h-safe-area-inset-bottom bg-white" />
    </div>
  );
}
