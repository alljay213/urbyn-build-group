# Summit Ridge Contracting — Website Template

A production-ready, mobile-first contractor website template built with **React + Vite + Tailwind CSS**. Designed for premium local-service businesses — ready to customise for any trades client in under an hour.

---

## Project Overview

**Brand:** Summit Ridge Contracting — London, Ontario  
**Stack:** React 18, Vite 5, Tailwind CSS 3  
**Goal:** Lead generation, quote requests, consultation booking, and portfolio showcase  
**Design:** Minimal premium — warm neutrals, serif/sans pairing, conversion-focused hierarchy

---

## File & Folder Structure

```
summit-ridge-contracting/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Sticky nav + mobile drawer
│   │   ├── Logo.jsx          # SVG wordmark (swap per client)
│   │   ├── Hero.jsx          # Full-bleed hero + stats + trust badges
│   │   ├── Services.jsx      # Service cards grid
│   │   ├── WhyUs.jsx         # Trust/differentiation grid (dark bg)
│   │   ├── Process.jsx       # 4-step client journey
│   │   ├── Projects.jsx      # Filterable portfolio grid
│   │   ├── BeforeAfter.jsx   # Interactive drag-to-reveal slider
│   │   ├── Testimonials.jsx  # Client testimonial cards
│   │   ├── QuoteForm.jsx     # 3-step quote request form
│   │   ├── Booking.jsx       # Date/time consultation picker (UI)
│   │   ├── FAQ.jsx           # Accordion FAQ
│   │   ├── Financing.jsx     # Financing/affordability block
│   │   ├── Contact.jsx       # Contact info + closing CTA banner
│   │   ├── Footer.jsx        # Full footer with nav + socials
│   │   └── StickyBar.jsx     # Mobile-only sticky CTA bar
│   ├── data/
│   │   ├── services.js       # Service card data
│   │   ├── projects.js       # Portfolio project data + categories
│   │   ├── testimonials.js   # Testimonial data
│   │   ├── faqs.js           # FAQ accordion data
│   │   └── process.js        # Process steps data
│   ├── App.jsx               # Root — assembles all sections
│   ├── main.jsx              # React entry point
│   └── index.css             # Tailwind directives + custom utilities
├── index.html                # HTML shell + Google Fonts
├── vite.config.js
├── tailwind.config.js        # Brand colour tokens + typography
├── postcss.config.js
└── package.json
```

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm 9+

### 1. Install dependencies

```bash
cd summit-ridge-contracting
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build for Production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

### Generic Static Hosting (any CDN / hosting provider)
1. Run `npm run build`
2. Upload the entire `dist/` folder to your host
3. Configure your host to serve `index.html` for all routes (SPA routing)

---

### Vercel (recommended — zero config)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) — it auto-detects Vite.  
No configuration file required.

---

### Netlify

**Option A — Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Option B — Drag & drop:**  
Run `npm run build`, then drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

**Option C — Git integration:**  
Connect your repo. Set:
- Build command: `npm run build`
- Publish directory: `dist`

Add a `netlify.toml` to handle SPA routing:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### GitHub Pages

1. In `vite.config.js`, uncomment and update:
   ```js
   base: '/your-repo-name/',
   ```

2. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## Customising for a New Client

All brand content is isolated into a small number of files. A full re-skin takes 20–40 minutes.

### 1. Brand Colours — `tailwind.config.js`
```js
colors: {
  brand: {
    gold:      '#B5782A',   // primary accent — swap to client's brand colour
    'gold-lt': '#F2E6CC',   // tint of gold — auto-adjust
    dark:      '#1C1B18',   // headings / dark surfaces
    slate:     '#6A6560',   // body text / muted
    cream:     '#F8F5EF',   // page background
    warm:      '#EDEBE3',   // alternating section background
    border:    '#D8D3C8',   // borders / dividers
  },
}
```

### 2. Logo — `src/components/Logo.jsx`
Replace the inline SVG with an `<img src="/logo.svg" />` tag, or swap the polyline geometry for the client's mark.

### 3. Company Details — `src/components/Contact.jsx`
Update the `contactInfo` object at the top of the file with real phone, email, hours, and service areas.

### 4. Service Cards — `src/data/services.js`
Edit or replace the array entries. Each entry has: `id`, `icon` (Lucide name), `title`, `description`, `highlight`.

### 5. Portfolio Projects — `src/data/projects.js`
Replace Unsplash URLs with client's real project photos. Update titles, categories, durations, and years.

### 6. Testimonials — `src/data/testimonials.js`
Swap in real client quotes, names, and project types.

### 7. FAQs — `src/data/faqs.js`
Edit questions/answers to match the specific trade and service area.

### 8. Hero image — `src/components/Hero.jsx`
Replace the Unsplash `src` URL with a high-quality client photo (1600×900px minimum).

### 9. Before/After images — `src/components/BeforeAfter.jsx`
Swap `BEFORE_IMG` and `AFTER_IMG` constants at the top of the file.

### 10. Nav links — `src/components/Header.jsx`
Update or remove the `navLinks` array as needed.

---

## Suggested Backend Integrations

### Form Handling (QuoteForm.jsx — `handleFinalSubmit`)
- **Formspree** — Drop-in: `fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', … })`
- **EmailJS** — Client-side email; no server required
- **Netlify Forms** — Add `netlify` attribute to `<form>`, zero config
- **AWS SES / SendGrid** — Custom REST endpoint for full control

### Email Notifications
- Pair any form handler with SendGrid, Mailgun, or AWS SES
- Trigger an auto-reply to the client + a notification to the business owner

### CRM Integration
- **HubSpot** — Free CRM with a forms API; map quote fields to contact properties
- **Pipedrive** — Deals API; auto-create a deal on quote submission
- **Go High Level** — Popular with trades / home-services agencies

### Booking Integration (Booking.jsx — `handleBook`)
- **Calendly** — Embed widget or redirect to scheduling page
- **Acuity Scheduling** — Full embed or API
- **Cal.com** — Open-source option with self-hosting
- **Custom** — POST to a bookings endpoint backed by Google Calendar API

### Quote Request Storage
- **Supabase** — Free tier PostgreSQL; `supabase.from('quotes').insert(form)`
- **Airtable** — REST API; easy for non-dev clients to review submissions
- **Firebase Firestore** — Real-time NoSQL; `addDoc(collection(db, 'quotes'), form)`

---

## Why These Design Choices Help Conversion

| Decision | Conversion rationale |
|---|---|
| **Warm neutral palette** | Signals craftsmanship and trust; avoids the clinical coldness of blue-tech palettes common in contractor sites |
| **Serif display font (Playfair Display)** | Communicates premium positioning without feeling corporate; resonates with homeowners who care about aesthetics |
| **Stats in hero (340+ projects, 98% satisfaction)** | Immediate social proof above the fold before the user scrolls |
| **Dark `WhyUs` section** | Creates visual contrast that makes the differentiation section feel weighty and authoritative, not fluffy |
| **3-step quote form** | Reduces perceived effort — asking for everything on one screen increases abandonment; micro-commitment pattern improves completions |
| **Sticky mobile CTA bar** | Captures high-intent mobile visitors who have scrolled but not yet converted |
| **Filterable project grid** | Lets visitors self-qualify by finding their project type; increases emotional investment before they contact you |
| **Before/after slider** | Visual proof of transformation quality; the most persuasive trust signal for renovation clients |
| **FAQ section with sticky heading** | Removes objections without requiring a call; directly improves conversion rate from organic search traffic |
| **Process section** | Reduces anxiety ("what does working with a contractor actually look like?") — a key barrier for first-time renovators |
| **Dark booking section** | Rhythm break that re-engages attention mid-page and prompts a second conversion action |
| **Milestone-payment language in Financing** | Directly addresses the #1 objection (cost/risk) without actually providing financing |

---

## License

This template is intended for agency use. Customise freely for client projects.  
Remove the template credit line in `Footer.jsx` before going live.
