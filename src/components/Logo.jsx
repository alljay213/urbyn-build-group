export default function Logo({ light = false }) {
  const textColor = light ? "text-white" : "text-brand-dark";

  return (
    <a
      href="#home"
      className={`flex items-center gap-2.5 no-underline ${textColor}`}
      aria-label="Urbyn Build Group – Home"
    >
      {/* Logo Image */}
      <img
        src="/urbyn_build_group_orange_border.svg"
        alt="Urbyn Build Group Logo"
        className="h-[34px] w-auto"
      />

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold text-[15px] tracking-tight ${
            light ? "text-white" : "text-brand-dark"
          }`}
        >
          Urbyn Build
        </span>

        <span
          className={`font-sans text-[9.5px] tracking-widest uppercase font-medium mt-0.5 ${
            light ? "text-white/60" : "text-brand-slate"
          }`}
        >
          Group
        </span>
      </div>
    </a>
  );
}
