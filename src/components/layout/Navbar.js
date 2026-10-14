"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  ["Work", "#work"],
  ["Engineering", "#engineering"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#060807]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="group flex items-center gap-3"
          onClick={closeMenu}
          aria-label="Damilola Ayoola home"
        >
          <span className="flex h-9 w-9 items-center justify-center border border-white/15 font-mono text-xs font-bold text-[var(--accent)] transition group-hover:border-[var(--accent)]/50">
            DA
          </span>

          <span className="hidden text-sm font-medium tracking-wide text-white/75 sm:block">
            DAMILOLA AYOOLA
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/70 transition hover:border-white/25 hover:text-white md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.06] bg-[#060807] px-6 py-5 md:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                className="text-sm text-white/70 transition hover:text-white"
                href={href}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
