/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ── BRAND COLOUR SYSTEM ────────────────────────────────────────
      // Swap these six values to re-skin the template for any client.
      colors: {
        brand: {
          gold: "#ba4a2b",      // primary accent – CTAs, highlights
          "gold-dark": "#9e3d23", // hover/pressed state for primary accent
          "gold-lt": "#f5d5cc", // light tint (badge backgrounds, selections)
          dark: "#151618",      // primary text / dark surfaces
          slate: "#6b5c57",     // secondary / muted text (warmed to match palette)
          cream: "#f7f2ec",     // page background
          warm: "#ede8e1",      // alternating section background
          border: "#d9d3cc",    // card borders, dividers
        },
      },
      // ── TYPOGRAPHY ─────────────────────────────────────────────────
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      // ── SPACING / SIZING ───────────────────────────────────────────
      maxWidth: {
        site: "1240px",
      },
      // ── SHADOWS ────────────────────────────────────────────────────
      boxShadow: {
        card: "0 2px 16px 0 rgba(21,22,24,0.07)",
        "card-hover": "0 8px 32px 0 rgba(21,22,24,0.12)",
        cta: "0 4px 24px 0 rgba(186,74,43,0.25)",
      },
    },
  },
  plugins: [],
};
