"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
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
          className="flex items-center gap-3 font-display text-xl text-ink tracking-tight"
          aria-label="Ashish Kumar home"
        >
          <img
            src="/logo.svg"
            alt="Ashish Kumar logo"
            className="h-9 w-9"
          />
          Ashish Kumar
        </a>

        <button
          type="button"
          className="md:hidden btn-ghost"
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
        </ul>
      </div>
    </header>
  );
}
