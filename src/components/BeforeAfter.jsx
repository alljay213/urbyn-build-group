// ── BeforeAfter.jsx ────────────────────────────────────────────────
import { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";
import Before from "../assets/before-1.jpg";
import After from "../assets/after-1.jpg";

// Swap these URLs for real before/after photos from the client.
const BEFORE_IMG = Before;
const AFTER_IMG = After;

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50); // 0–100 %
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const getPos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return Math.round((x / rect.width) * 100);
  };

  const onMouseMove = (e) => {
    if (dragging.current) setSliderPos(getPos(e.clientX));
  };
  const onTouchMove = (e) => setSliderPos(getPos(e.touches[0].clientX));

  return (
    <section className="py-24 md:py-32 bg-brand-warm">
      <div className="max-w-site mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="section-label">Transformation</span>
          <h2 className="section-heading">Before &amp; After</h2>
          <span className="divider" />
          <p className="text-brand-slate leading-relaxed">
            Drag the slider to reveal the transformation. Byron Heights kitchen
            — from a 1990s galley to a fully open, custom-built dream kitchen.
          </p>
        </div>

        {/* Slider wrapper */}
        <div
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto rounded-sm overflow-hidden
                     select-none shadow-[0_12px_48px_0_rgba(21,22,24,0.15)] cursor-col-resize"
          style={{ aspectRatio: "16/9" }}
          onMouseMove={onMouseMove}
          onMouseUp={() => {
            dragging.current = false;
          }}
          onMouseLeave={() => {
            dragging.current = false;
          }}
          onTouchMove={onTouchMove}
          aria-label="Before and after comparison slider"
        >
          {/* AFTER image — full width base */}
          <img
            src={AFTER_IMG}
            alt="After renovation"
            className="absolute inset-0 w-full h-full object-cover"
            draggable="false"
          />

          {/* BEFORE image — clipped to slider position */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={BEFORE_IMG}
              alt="Before renovation"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: `${10000 / sliderPos}%`, maxWidth: "none" }}
              draggable="false"
            />
          </div>

          {/* Divider line */}
          <div
            className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] z-10 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          />

          {/* Drag handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20
                       w-11 h-11 rounded-full bg-white border-2 border-[#ba4a2b]
                       flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)]
                       cursor-col-resize"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={() => {
              dragging.current = true;
            }}
            onTouchStart={() => {}}
            aria-hidden="true"
          >
            <MoveHorizontal size={16} className="text-[#ba4a2b]" />
          </div>

          {/* Labels */}
          <span className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-sm pointer-events-none z-10">
            Before
          </span>
          <span className="absolute bottom-4 right-4 bg-[#ba4a2b] text-white text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-sm pointer-events-none z-10">
            After
          </span>
        </div>

        {/* Native range input for accessibility & touch fallback */}
        <div className="max-w-4xl mx-auto mt-4 px-2">
          <label htmlFor="ba-slider" className="sr-only">
            Drag to compare before and after
          </label>
          <input
            id="ba-slider"
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="before-after-slider"
          />
        </div>

        {/* Caption */}
        <p className="text-center text-brand-slate text-sm mt-4">
          Byron Heights Kitchen · 6 weeks · Full custom build
        </p>
      </div>
    </section>
  );
}
