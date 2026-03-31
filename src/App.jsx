// ── App.jsx ────────────────────────────────────────────────────────
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Projects from "./components/Projects";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import QuoteForm from "./components/QuoteForm";
import FAQ from "./components/FAQ";
import Financing from "./components/Financing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";

export default function App() {
  return (
    <>
      {/* ── Global inline styles for form inputs ─────────────────── */}
      {/* Declared here so QuoteForm inputs inherit from Tailwind context */}
      <style>{`
        .form-input {
          display: block;
          width: 100%;
          background: #f7f2ec;
          border: 1px solid #D8D3C8;
          border-radius: 2px;
          padding: 0.65rem 0.875rem;
          font-size: 0.875rem;
          color: #151618;
          font-family: 'DM Sans', system-ui, sans-serif;
          transition: border-color 0.15s, box-shadow 0.15s;
          outline: none;
          -webkit-appearance: none;
        }
        .form-input:focus {
          border-color: #ba4a2b;
          box-shadow: 0 0 0 3px rgba(186,74,43,0.12);
        }
        .form-input::placeholder {
          color: #9E9892;
        }
        select.form-input {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236A6560' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 2.5rem;
          cursor: pointer;
        }
      `}</style>

      <Header />

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <BeforeAfter />
        <Testimonials />
        <QuoteForm />
        <FAQ />
        <Financing />
        <Contact />
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}
