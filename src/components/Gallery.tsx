import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { companyData } from '../data';

type ProjectItem = (typeof companyData.gallery)[number];

function ProjectSchematic({ type, title }: { type: string; title: string }) {
  return (
    <div className="w-full aspect-4/3 bg-slate-900 border-b border-slate-200 flex items-center justify-center p-5 relative overflow-hidden">
      <svg
        viewBox="0 0 360 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="img"
        aria-label={title}
      >
        <defs>
          <pattern id={`grid-${type}`} width="18" height="18" patternUnits="userSpaceOnUse">
            <path d="M 18 0 L 0 0 0 18" fill="none" stroke="#1E293B" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="360" height="240" fill={`url(#grid-${type})`} />

        {/* Frame border */}
        <rect x="12" y="12" width="336" height="216" stroke="#334155" strokeWidth="1" />

        {type === 'boiler' && (
          <g>
            <rect x="65" y="32" width="14" height="172" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="173" y="32" width="14" height="172" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="281" y="32" width="14" height="172" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="55" y="24" width="250" height="10" fill="#0284C7" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="79" y1="80" x2="281" y2="80" stroke="#94A3B8" strokeWidth="2" />
            <line x1="79" y1="135" x2="281" y2="135" stroke="#94A3B8" strokeWidth="2" />
            <line x1="79" y1="34" x2="173" y2="80" stroke="#0284C7" strokeWidth="1.25" />
            <line x1="173" y1="34" x2="79" y2="80" stroke="#0284C7" strokeWidth="1.25" />
            <line x1="187" y1="80" x2="281" y2="135" stroke="#0284C7" strokeWidth="1.25" />
            <line x1="281" y1="80" x2="187" y2="135" stroke="#0284C7" strokeWidth="1.25" />
            <line x1="35" y1="204" x2="325" y2="204" stroke="#64748B" strokeWidth="1.5" />
            <text x="24" y="220" fill="#94A3B8" fontSize="9" fontFamily="monospace">
              DWG-01 · BOILER STRUCTURAL TRUSS &amp; COLUMNS
            </text>
          </g>
        )}

        {type === 'welding' && (
          <g>
            {/* Pipe Bevel Butt Joint Cross-Section */}
            <rect x="45" y="78" width="115" height="64" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
            <rect x="200" y="78" width="115" height="64" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
            {/* V-Groove Weld Bead */}
            <polygon points="160,78 200,78 186,142 174,142" fill="#0284C7" fillOpacity="0.35" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="180" cy="78" r="18" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* Ultrasonic / NDT Wave Scan Lines */}
            <path d="M120 50 L180 95 L240 50" stroke="#38BDF8" strokeWidth="1.25" strokeDasharray="4 2" />
            <text x="142" y="42" fill="#38BDF8" fontSize="9" fontFamily="monospace">
              100% RT / UT INSPECTED
            </text>
            <text x="24" y="220" fill="#94A3B8" fontSize="9" fontFamily="monospace">
              DWG-02 · HIGH-PRESSURE TIG / SMAW WELD JOINT
            </text>
          </g>
        )}

        {type === 'piping' && (
          <g>
            <path
              d="M 40 65 H 165 V 150 H 320"
              stroke="#38BDF8"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 40 65 H 165 V 150 H 320"
              stroke="#0F172A"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 40 165 H 110 V 105 H 250 V 60 H 320"
              stroke="#64748B"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Flanges */}
            <rect x="95" y="55" width="6" height="20" fill="#F59E0B" />
            <rect x="155" y="102" width="20" height="6" fill="#F59E0B" />
            <rect x="240" y="140" width="6" height="20" fill="#F59E0B" />
            <text x="24" y="220" fill="#94A3B8" fontSize="9" fontFamily="monospace">
              DWG-03 · POWER CYCLE &amp; CW PIPING SPOOL LAYOUT
            </text>
          </g>
        )}

        {type === 'fgd' && (
          <g>
            <rect x="36" y="80" width="110" height="75" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
            <rect x="214" y="80" width="110" height="75" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
            <rect x="146" y="28" width="68" height="155" fill="#0284C7" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="2" />
            <line x1="180" y1="34" x2="180" y2="175" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="6 3" />
            <text x="52" y="122" fill="#CBD5E1" fontSize="9" fontFamily="monospace">
              FLUE GAS IN
            </text>
            <text x="232" y="122" fill="#CBD5E1" fontSize="9" fontFamily="monospace">
              TO ABSORBER
            </text>
            <text x="24" y="220" fill="#94A3B8" fontSize="9" fontFamily="monospace">
              DWG-04 · FGD GUILLOTINE DAMPER GATE ASSEMBLY
            </text>
          </g>
        )}

        {type === 'mrh' && (
          <g>
            {/* Bowl Mill Hopper */}
            <polygon points="48,60 112,60 96,125 64,125" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
            <rect x="68" y="125" width="24" height="28" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Dense Phase Conveying Pipe */}
            <path d="M 92 142 H 215 V 52 H 265" stroke="#38BDF8" strokeWidth="4" fill="none" />
            {/* Terminal Reject Silo */}
            <polygon points="250,45 312,45 312,135 292,172 270,172 250,135" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.75" />
            <text x="259" y="98" fill="#E2E8F0" fontSize="9" fontFamily="monospace">
              MRH SILO
            </text>
            <text x="24" y="220" fill="#94A3B8" fontSize="9" fontFamily="monospace">
              DWG-05 · MILL REJECT HANDLING CONVEYING CIRCUIT
            </text>
          </g>
        )}

        {type === 'safety' && (
          <g>
            {/* Heavy Crane Boom & Load Rigging Triangle */}
            <line x1="45" y1="190" x2="170" y2="35" stroke="#38BDF8" strokeWidth="4" />
            <line x1="55" y1="190" x2="180" y2="35" stroke="#0284C7" strokeWidth="2" />
            <line x1="175" y1="35" x2="255" y2="95" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Hook & Spreader Beam */}
            <line x1="255" y1="35" x2="255" y2="95" stroke="#F59E0B" strokeWidth="2" />
            <rect x="205" y="95" width="100" height="8" fill="#F59E0B" />
            <line x1="215" y1="103" x2="215" y2="140" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="295" y1="103" x2="295" y2="140" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 2" />
            <rect x="200" y="140" width="110" height="36" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="215" y="162" fill="#E2E8F0" fontSize="9" fontFamily="monospace">
              CERTIFIED LIFT
            </text>
            <text x="24" y="220" fill="#94A3B8" fontSize="9" fontFamily="monospace">
              DWG-06 · HEAVY RIGGING &amp; EHS LIFTING PROTOCOL
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Disciplines');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All Disciplines', 'Structural & Boiler', 'Industrial Piping', 'FGD & Mill Systems'];

  const filteredProjects =
    selectedCategory === 'All Disciplines'
      ? companyData.gallery
      : companyData.gallery.filter((item) => item.category === selectedCategory);

  const handleInquireProject = (projectTitle: string) => {
    setActiveProject(null);
    window.dispatchEvent(new CustomEvent('select-inquiry-subject', { detail: projectTitle }));
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Interactive Segmented Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
              <span className="text-sky-700 font-semibold">Technical Execution Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Site Work Packages</span>
            </div>
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Representative Engineering &amp; Site Packages
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/75 rounded-lg self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveProject(item)}
              className="group bg-white rounded-lg border border-slate-200 hover:border-slate-300 overflow-hidden flex flex-col justify-between transition-colors cursor-pointer"
            >
              <div>
                <ProjectSchematic type={item.diagramType} title={item.title} />

                <div className="p-6">
                  {/* Quiet Unboxed Metadata */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 mb-2.5">
                    <span className="font-medium text-sky-700">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.site}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.summary}</p>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-slate-500 truncate">{item.specs}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:text-sky-700 whitespace-nowrap shrink-0">
                  Spec Sheet
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Technical Brief Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="bg-white border border-slate-200 rounded-lg max-w-xl w-full overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="text-xs font-mono text-sky-400">
                  TECHNICAL EXECUTION BRIEF · PKG-0{activeProject.id}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close modal"
                  className="text-slate-400 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <ProjectSchematic type={activeProject.diagramType} title={activeProject.title} />

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-sky-700">{activeProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Reference Site: {activeProject.site}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900">{activeProject.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{activeProject.summary}</p>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-mono text-slate-700">
                  {activeProject.specs}
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInquireProject(activeProject.title)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-700 rounded-md transition-colors"
                  >
                    Request Quote for Similar Scope
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
