import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { companyData } from '../data';
import { Logo } from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Capabilities', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Clients', href: '#clients' },
    { name: 'Projects', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-3 text-slate-900 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
        >
          <Logo variant="dark" className="w-10 h-8" />
          <span className="font-display font-bold text-lg tracking-tight text-slate-900 whitespace-nowrap shrink-0">
            {companyData.name}
          </span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-1 hover:text-slate-900 border-b-2 border-transparent hover:border-sky-700 transition-colors whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-800 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Request Quote
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-800 rounded-md transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
