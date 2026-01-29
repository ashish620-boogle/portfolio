"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
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
    <header className="sticky top-0 z-50 bg-canvas/70 backdrop-blur border-b border-line">
      <nav
        className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="font-display text-xl text-ink tracking-tight"
          aria-label="Ashish Kumar home"
        >
          Ashish Kumar
        </a>

        <button
          type="button"
          className="md:hidden border border-line text-ink px-3 py-2 font-body uppercase tracking-[0.2em] text-[0.7rem] rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm lg:text-base">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                className="font-body text-ink/70 uppercase tracking-[0.2em] text-xs hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        </div>
        
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden border-t border-line bg-canvas ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="px-4 pb-6 pt-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block font-body text-ink uppercase tracking-[0.2em] text-xs focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
}
