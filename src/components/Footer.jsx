// ── Footer.jsx ─────────────────────────────────────────────────────
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "Kitchen Renovations", href: "#services" },
      { label: "Bathroom Renovations", href: "#services" },
      { label: "Basement Finishing", href: "#services" },
      { label: "Home Additions", href: "#services" },
      { label: "General Contracting", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Work", href: "#projects" },
      { label: "Our Process", href: "#process" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "Free Quote", href: "#quote" },
      { label: "Financing Info", href: "#contact" },
    ],
  },
];

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61586232625703",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/urbynbuild/",
    label: "Instagram",
  },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/8">
      <div className="max-w-site mx-auto px-5 md:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            {/* <img
              src="/urbyn_build_group_orange_border.svg"
              alt="Urbyn Build Group"
              className="h-9 w-auto"
            /> */}
            <Logo light />
            <p className="text-white/40 text-[13px] leading-relaxed mt-5 mb-6 max-w-[220px]">
              Premium renovations in London, Ontario. Licensed, insured, and
              locally trusted since 2012.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="w-8 h-8 rounded-sm bg-white/8 flex items-center justify-center
                             text-white/40 hover:text-white hover:bg-white/15 transition-all duration-150"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-[10.5px] font-medium tracking-widest uppercase text-white/35 mb-4">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[13px] text-white/55 hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-[12px] text-white/30">
            © {year} Urbyn Build Group. All rights reserved. London, Ontario.
          </p>
          <p className="text-[12px] text-white/20"></p>
        </div>
      </div>
    </footer>
  );
}
