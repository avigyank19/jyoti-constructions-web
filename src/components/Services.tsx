import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { companyData } from '../data';

export function Services() {
  const handleSelectService = (serviceTitle: string) => {
    window.dispatchEvent(new CustomEvent('select-inquiry-subject', { detail: serviceTitle }));
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
              <span className="text-sky-700 font-semibold">Core Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>Thermal Power &amp; Heavy Industrial Contracting</span>
            </div>
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Specialized Mechanical &amp; Structural Execution Scopes
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            From high-elevation boiler steel erection to high-pressure power cycle piping and FGD retrofits, every
            package is executed to strict PSU and EPC tolerances.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {companyData.services.map((service, index) => {
            // Dynamic asymmetric column spans: Row 1 has 7 + 5, Row 2 has 4 + 4 + 4
            const colSpanClass =
              index === 0
                ? 'lg:col-span-7 bg-slate-900 text-white border-slate-800'
                : index === 1
                ? 'lg:col-span-5 bg-slate-50 text-slate-900 border-slate-200'
                : 'lg:col-span-4 bg-white text-slate-900 border-slate-200';

            const isPrimaryCard = index === 0;

            return (
              <div
                key={service.id}
                className={`rounded-lg border p-7 sm:p-8 flex flex-col justify-between transition-colors ${colSpanClass}`}
              >
                <div>
                  {/* Quiet unboxed metadata line */}
                  <div
                    className={`flex items-center justify-between gap-4 text-xs mb-5 pb-4 border-b ${
                      isPrimaryCard ? 'border-slate-800 text-slate-400' : 'border-slate-200/80 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono font-semibold ${
                          isPrimaryCard ? 'text-sky-400' : 'text-sky-700'
                        }`}
                      >
                        {service.code}.
                      </span>
                      <span>{service.category}</span>
                    </div>
                    <span className="font-mono text-[11px]">QA/QC VERIFIED</span>
                  </div>

                  {/* Editorial Numbered Heading */}
                  <h3
                    className={`font-display text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
                      isPrimaryCard ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {service.code}. {service.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-6 ${
                      isPrimaryCard ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Unboxed Deliverables Metadata with Typographic Separators */}
                  <div
                    className={`pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isPrimaryCard ? 'border-slate-800' : 'border-slate-100'
                    }`}
                  >
                    <div
                      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs ${
                        isPrimaryCard ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {service.deliverables.map((item, idx) => (
                        <React.Fragment key={item}>
                          <span>{item}</span>
                          {idx < service.deliverables.length - 1 && (
                            <span aria-hidden="true" className="text-slate-400">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectService(service.title)}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                        isPrimaryCard
                          ? 'text-sky-400 hover:text-sky-300'
                          : 'text-sky-700 hover:text-slate-900'
                      }`}
                    >
                      Inquire Scope
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
