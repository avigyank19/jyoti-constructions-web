import React, { useState } from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { companyData } from '../data';

type SchematicTab = 'boiler' | 'piping' | 'fgd';

export function Hero() {
  const [activeLayer, setActiveLayer] = useState<SchematicTab>('boiler');

  const layerDetails: Record<
    SchematicTab,
    {
      code: string;
      title: string;
      spec: string;
      elevation: string;
      standard: string;
      summary: string;
    }
  > = {
    boiler: {
      code: 'SYS-01',
      title: 'Boiler Structural Framework & Erection',
      spec: 'Heavy Girder & Column Alignment · ±1.5mm Tolerance',
      elevation: 'EL +0.00m to +68.50m',
      standard: 'IS 800 / BHEL Site QA Norms',
      summary:
        'Fabrication and high-elevation erection of primary boiler columns, buckstays, ceiling girders, and maintenance galleries for supercritical thermal units.',
    },
    piping: {
      code: 'SYS-02',
      title: 'Power Cycle & Cooling Water Piping',
      spec: 'High-Pressure Alloy & Carbon Steel · 100% NDT / Hydro-Tested',
      elevation: 'TG Hall & CW Pump House',
      standard: 'ASME B31.1 / IBR Compliance',
      summary:
        'End-to-end spool fabrication, precision TIG/SMAW root-and-fill welding, constant-load hanger installation, and hydro-testing of power cycle pipelines.',
    },
    fgd: {
      code: 'SYS-03',
      title: 'FGD Damper Gates & Mill Reject Systems',
      spec: 'Guillotine & Louver Dampers · Dense-Phase MRH Silos',
      elevation: 'ESP to Absorber Ductwork',
      standard: 'NTPC TSTPP Retrofit Standards',
      summary:
        'Specialized dismantling and erection of heavy Flue Gas Desulfurization (FGD) damper gates alongside turnkey Mill Reject Handling (MRH) systems.',
    },
  };

  const currentSpec = layerDetails[activeLayer];

  return (
    <section id="home" className="bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-20">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Quiet unboxed metadata kicker */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-wide text-slate-400 mb-6">
                <span className="text-sky-400 font-semibold">{companyData.tagline}</span>
                <span aria-hidden="true">·</span>
                <span>{companyData.headquarters}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-slate-300">{companyData.statutory.msme}</span>
              </div>

              <h1
                className="font-display font-bold text-white tracking-tight leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', textWrap: 'balance' }}
              >
                Precision Mechanical &amp; Structural Engineering for Power Infrastructure.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
                Established by {companyData.founder}, Jyoti Constructions executes heavy structural steel fabrication,
                boiler erection, high-pressure power cycle piping, FGD damper gate installations, and Mill Reject
                Handling systems for India&apos;s leading thermal power stations.
              </p>
            </div>

            <div>
              {/* Single Primary CTA + Quiet Secondary Action */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-sky-600 hover:bg-sky-500 text-white px-6 py-3.5 rounded-md text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  Request Project Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                >
                  Explore Capabilities
                </a>
                <a
                  href={`tel:${companyData.contact.phones[0].replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white px-2 py-2 transition-colors whitespace-nowrap shrink-0"
                >
                  <PhoneCall className="w-4 h-4 text-sky-400" />
                  <span className="font-mono tabular-nums">{companyData.contact.phones[0]}</span>
                </a>
              </div>

              {/* Unboxed Principal Client Trust Line */}
              <div className="mt-10 pt-6 border-t border-slate-800/90 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                <span className="font-medium text-slate-300">Executed at Principal Installations:</span>
                <span>BHEL (PSWR) / NTPC TSTPP</span>
                <span aria-hidden="true">·</span>
                <span>H.V. Equipments / NTPC Ramagundam</span>
                <span aria-hidden="true">·</span>
                <span>PES Engineers / SCCL Pegadapalli (Mancherial)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Engineering Elevation Schematic */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-slate-950 border border-slate-800 rounded-lg p-5 sm:p-6 flex flex-col justify-between">
              {/* Top Interactive Discipline Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="text-xs font-mono text-slate-400">
                  CAD SCHEMATIC · <span className="text-sky-400">{currentSpec.code}</span>
                </div>
                <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-md">
                  <button
                    type="button"
                    onClick={() => setActiveLayer('boiler')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                      activeLayer === 'boiler'
                        ? 'bg-sky-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Boiler Structure
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLayer('piping')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                      activeLayer === 'piping'
                        ? 'bg-sky-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Piping
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLayer('fgd')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                      activeLayer === 'fgd'
                        ? 'bg-sky-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    FGD &amp; MRH
                  </button>
                </div>
              </div>

              {/* Precision Architectural Blueprint SVG Viewport */}
              <div className="my-4 relative bg-slate-900/70 border border-slate-800/80 rounded p-4 flex items-center justify-center min-h-[220px]">
                <svg
                  viewBox="0 0 420 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto max-h-[210px]"
                  role="img"
                  aria-label={currentSpec.title}
                >
                  {/* Subtle CAD Reference Grid */}
                  <defs>
                    <pattern id="cad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect width="420" height="220" fill="url(#cad-grid)" />

                  {/* Ground Datum Line */}
                  <line x1="20" y1="195" x2="400" y2="195" stroke="#475569" strokeWidth="1.5" />
                  <text x="24" y="210" fill="#64748B" fontSize="9" fontFamily="monospace">
                    DATUM EL +0.00m (PLANT GRADE)
                  </text>
                  <text x="315" y="210" fill="#38BDF8" fontSize="9" fontFamily="monospace">
                    SCALE 1:250
                  </text>

                  {activeLayer === 'boiler' && (
                    <g>
                      {/* Main Structural Columns */}
                      <rect x="75" y="25" width="12" height="170" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                      <rect x="175" y="25" width="12" height="170" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                      <rect x="275" y="25" width="12" height="170" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />

                      {/* Top Ceiling Girder */}
                      <rect x="65" y="18" width="235" height="10" fill="#0284C7" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="1.5" />

                      {/* Horizontal Tier Beams */}
                      <line x1="87" y1="65" x2="275" y2="65" stroke="#94A3B8" strokeWidth="2" />
                      <line x1="87" y1="110" x2="275" y2="110" stroke="#94A3B8" strokeWidth="2" />
                      <line x1="87" y1="155" x2="275" y2="155" stroke="#94A3B8" strokeWidth="2" />

                      {/* Cross Bracing Trusses */}
                      <line x1="87" y1="28" x2="175" y2="65" stroke="#0284C7" strokeWidth="1.2" />
                      <line x1="175" y1="28" x2="87" y2="65" stroke="#0284C7" strokeWidth="1.2" />
                      <line x1="87" y1="65" x2="175" y2="110" stroke="#0284C7" strokeWidth="1.2" />
                      <line x1="175" y1="65" x2="87" y2="110" stroke="#0284C7" strokeWidth="1.2" />
                      <line x1="87" y1="110" x2="175" y2="155" stroke="#0284C7" strokeWidth="1.2" />
                      <line x1="175" y1="110" x2="87" y2="155" stroke="#0284C7" strokeWidth="1.2" />

                      {/* Suspended Boiler Drum & Furnace Box */}
                      <rect x="195" y="45" width="72" height="92" fill="#0284C7" fillOpacity="0.12" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 2" />
                      <circle cx="231" cy="38" r="7" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.75" />

                      {/* Elevation Dimension Callouts */}
                      <line x1="335" y1="20" x2="335" y2="195" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="342" y="30" fill="#E2E8F0" fontSize="9" fontFamily="monospace">EL +68.5m</text>
                      <text x="342" y="112" fill="#94A3B8" fontSize="9" fontFamily="monospace">EL +34.0m</text>
                    </g>
                  )}

                  {activeLayer === 'piping' && (
                    <g>
                      {/* High Pressure Main Steam Header */}
                      <path
                        d="M 45 55 H 190 V 135 H 355"
                        stroke="#38BDF8"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 45 55 H 190 V 135 H 355"
                        stroke="#0F172A"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Secondary Cooling Water Return Line */}
                      <path
                        d="M 45 155 H 135 V 90 H 285 V 165 H 365"
                        stroke="#64748B"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Flanged Joints & High-Pressure Control Valves */}
                      <rect x="105" y="47" width="6" height="16" fill="#F59E0B" />
                      <rect x="182" y="88" width="16" height="6" fill="#F59E0B" />
                      <rect x="265" y="127" width="6" height="16" fill="#F59E0B" />

                      {/* Valve Actuator Symbol */}
                      <polygon points="295,127 315,143 295,143 315,127" fill="#38BDF8" />
                      <line x1="305" y1="135" x2="305" y2="112" stroke="#38BDF8" strokeWidth="2" />
                      <rect x="295" y="104" width="20" height="8" rx="2" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />

                      <text x="52" y="42" fill="#E2E8F0" fontSize="9" fontFamily="monospace">HP STEAM HEADER Ø600mm</text>
                      <text x="150" y="78" fill="#94A3B8" fontSize="9" fontFamily="monospace">CW SUPPLY LINE · NDT 100%</text>
                    </g>
                  )}

                  {activeLayer === 'fgd' && (
                    <g>
                      {/* Flue Gas Ductwork */}
                      <rect x="45" y="75" width="120" height="65" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
                      <rect x="205" y="75" width="135" height="65" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />

                      {/* Guillotine Damper Gate Assembly */}
                      <rect x="165" y="30" width="40" height="135" fill="#0284C7" fillOpacity="0.18" stroke="#38BDF8" strokeWidth="2" />
                      <line x1="185" y1="35" x2="185" y2="155" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="6 3" />

                      {/* Mill Reject Silo & Conveying Pipe */}
                      <polygon points="345,55 385,55 385,135 372,160 358,160 345,135" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                      <text x="56" y="110" fill="#CBD5E1" fontSize="9" fontFamily="monospace">ESP OUTLET DUCT</text>
                      <text x="148" y="22" fill="#38BDF8" fontSize="9" fontFamily="monospace">FGD DAMPER GATE</text>
                      <text x="220" y="110" fill="#CBD5E1" fontSize="9" fontFamily="monospace">ABSORBER INLET</text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Technical Specification Footer inside Card */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-white">{currentSpec.title}</span>
                  <span className="font-mono text-sky-400">{currentSpec.elevation}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{currentSpec.summary}</p>
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                  <span>{currentSpec.spec}</span>
                  <span className="text-slate-300">{currentSpec.standard}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof & Credentials Bar Below Hero Split */}
        <div className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-xs font-medium text-slate-400 mb-1">Audited Annual Turnover (FY 23–24)</div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-white tabular-nums">
              ₹55,05,771
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Consistent YoY growth from ₹54.05L in FY 22–23
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-slate-400 mb-1">Major Thermal Power Installations</div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-white tabular-nums">
              3 Principal Sites
            </div>
            <div className="text-xs text-slate-400 mt-1">
              NTPC TSTPP Ramagundam &amp; SCCL Mancherial
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-slate-400 mb-1">Core Engineering Disciplines</div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-white tabular-nums">
              5 Specialized Scopes
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Boiler Structure · Piping · FGD Dampers · MRH
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-slate-400 mb-1">Statutory &amp; PSU Compliance</div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-white tabular-nums">
              100% Verified
            </div>
            <div className="text-xs text-slate-400 mt-1 font-mono">
              GST · PAN · EPF · ESIC · MSME Registered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
