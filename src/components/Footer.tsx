import React from 'react';
import { companyData } from '../data';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Corporate Summary */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Logo variant="light" className="w-11 h-9" />
              <div>
                <span className="font-display font-bold text-lg tracking-tight block leading-none text-white">
                  {companyData.name}
                </span>
                <span className="text-xs text-slate-400 mt-1 block">{companyData.tagline}</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-5">
              Specialized mechanical engineering and structural contracting organization executing boiler erection,
              power cycle piping, FGD damper gates, and MRH systems across India.
            </p>
            <div className="text-xs font-mono text-slate-400 space-y-1">
              <div>Ramagundam, Dist. Peddapalli, Telangana – 505215</div>
              <div>Email: {companyData.contact.email}</div>
            </div>
          </div>

          {/* Column 2: Site Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-display text-white font-semibold mb-4 text-xs tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors">
                  Clients &amp; Compliance
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Execution Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Corporate Profile
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Request Quotation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Scopes */}
          <div className="md:col-span-4">
            <h4 className="font-display text-white font-semibold mb-4 text-xs tracking-wider uppercase">
              Execution Scopes
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>01. Structural Fabrication &amp; Boiler Erection</li>
              <li>02. Power Cycle &amp; Cooling Water Piping</li>
              <li>03. FGD Damper Gates Dismantling &amp; Erection</li>
              <li>04. Mill Reject Handling (MRH) Systems</li>
              <li>05. Turnkey Industrial Mechanical Works</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {companyData.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-slate-400">
            <span>GSTIN: {companyData.statutory.gst}</span>
            <span aria-hidden="true">·</span>
            <span>MSME: {companyData.statutory.msme}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
