"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink border-b-2 border-cream">
      <nav
        className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="font-archivo text-2xl text-cream tracking-wide"
          aria-label="Ashish Kumar home"
        >
          AK
        </a>

        <button
          type="button"
          className="md:hidden border-2 border-cream text-cream px-3 py-2 font-public uppercase tracking-[0.2em] text-xs focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>

        <ul className="hidden md:flex gap-6 text-sm lg:text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-public text-cream uppercase tracking-widest hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden border-t-2 border-cream bg-ink ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="px-4 pb-6 pt-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block font-public text-cream uppercase tracking-[0.2em] text-xs focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
