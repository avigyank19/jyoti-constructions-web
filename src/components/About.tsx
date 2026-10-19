import React from 'react';
import { companyData } from '../data';
import { Logo } from './Logo';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-stretch">
          {/* Left Column: Institutional Profile & Commitments */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                <span className="text-sky-700 font-semibold">Corporate Profile</span>
                <span aria-hidden="true">·</span>
                <span>Established by {companyData.founder}</span>
              </div>

              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6"
                style={{ textWrap: 'balance' }}
              >
                Engineering Backbone for Thermal Power &amp; Heavy Industrial Plants
              </h2>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed max-w-2xl">
                <p>{companyData.about}</p>
                <p>{companyData.mission}</p>
              </div>
            </div>

            {/* 2x2 Grid of Verifiable Operational Commitments */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companyData.commitments.map((item, idx) => (
                <div key={item.title} className="bg-white border border-slate-200/90 rounded-lg p-5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-sky-700 font-semibold">STD-0{idx + 1}</span>
                    <span>SITE MANDATE</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Charter & Isometric Structural Blueprint */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-white border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <Logo variant="dark" className="w-11 h-9" />
                    <div>
                      <div className="font-display font-bold text-sm text-slate-900">{companyData.legalName}</div>
                      <div className="text-xs text-slate-500">{companyData.tagline}</div>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-500">TELANGANA, IN</span>
                </div>

                {/* Architectural Isometric Engineering Illustration */}
                <div className="my-6 bg-slate-900 rounded-md p-5 border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
                    <span>QUALITY ASSURANCE &amp; ERECTION WORKFLOW</span>
                    <span className="text-sky-400">ISO / IBR ALIGNED</span>
                  </div>
                  <svg
                    viewBox="0 0 380 185"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Engineering workflow from fabrication to site commissioning"
                  >
                    <rect width="380" height="185" rx="4" fill="#0F172A" />
                    {/* Grid lines */}
                    <line x1="20" y1="45" x2="360" y2="45" stroke="#1E293B" strokeWidth="1" />
                    <line x1="20" y1="95" x2="360" y2="95" stroke="#1E293B" strokeWidth="1" />
                    <line x1="20" y1="145" x2="360" y2="145" stroke="#1E293B" strokeWidth="1" />

                    {/* Stage 1: Shop Fabrication */}
                    <rect x="24" y="35" width="95" height="95" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="34" y="55" fill="#38BDF8" fontSize="9" fontFamily="monospace">01. FABRICATION</text>
                    <path d="M40 85 H102 M40 100 H88" stroke="#94A3B8" strokeWidth="2" />
                    <circle cx="95" cy="100" r="4" fill="#F59E0B" />

                    {/* Connector 1 */}
                    <path d="M119 82 H142" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 2" />

                    {/* Stage 2: Heavy Erection & Alignment */}
                    <rect x="142" y="35" width="95" height="95" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="152" y="55" fill="#38BDF8" fontSize="9" fontFamily="monospace">02. ERECTION</text>
                    <rect x="162" y="68" width="12" height="48" stroke="#CBD5E1" strokeWidth="1.5" />
                    <rect x="204" y="68" width="12" height="48" stroke="#CBD5E1" strokeWidth="1.5" />
                    <line x1="174" y1="78" x2="204" y2="106" stroke="#0284C7" strokeWidth="1.5" />
                    <line x1="204" y1="78" x2="174" y2="106" stroke="#0284C7" strokeWidth="1.5" />

                    {/* Connector 2 */}
                    <path d="M237 82 H260" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 2" />

                    {/* Stage 3: Hydro-Test & Commissioning */}
                    <rect x="260" y="35" width="96" height="95" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="270" y="55" fill="#38BDF8" fontSize="9" fontFamily="monospace">03. COMMISSION</text>
                    <polyline points="274,108 292,92 310,98 334,72" fill="none" stroke="#38BDF8" strokeWidth="2" />
                    <circle cx="334" cy="72" r="4" fill="#38BDF8" />

                    {/* Bottom summary strip */}
                    <text x="24" y="165" fill="#94A3B8" fontSize="9.5" fontFamily="monospace">
                      ALL-INDIA MOBILIZATION · ZERO-DEFECT WELDING &amp; RIGGING
                    </text>
                  </svg>
                </div>
              </div>

              {/* Leadership & Operational Factsheet */}
              <div className="space-y-3 pt-2 border-t border-slate-100 text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Proprietor &amp; Lead Engineer</span>
                  <span className="font-semibold text-slate-900">{companyData.founder}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Operational Base</span>
                  <span className="font-medium text-slate-900">Ramagundam, Peddapalli Dist.</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Service Coverage</span>
                  <span className="font-medium text-slate-900">Pan-India Industrial Sites</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-500">Primary Sector</span>
                  <span className="font-medium text-slate-900">Supercritical Thermal Power</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
