import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { companyData } from '../data';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Section Heading & Procurement Context */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
              <span className="text-sky-700 font-semibold">Procurement &amp; Operations FAQ</span>
              <span aria-hidden="true">·</span>
              <span>Vendor Qualification</span>
            </div>

            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Frequently Asked Questions
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Key operational details regarding our mobilization capacity, statutory labor compliances, quality
              assurance standards, and turnkey mechanical execution.
            </p>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs font-mono text-slate-500 mb-1">DIRECT TENDER DESK</div>
              <p className="text-sm text-slate-700 mb-3">
                Need vendor pre-qualification documents, audited balance sheets, or work completion certificates?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-semibold text-sky-700 hover:text-slate-900 transition-colors"
              >
                Request Pre-Qualification Dossier &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Clean Hairline Accordion */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
            {companyData.faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={faq.id} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 text-left cursor-pointer group focus:outline-none"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-semibold text-sky-700">0{index + 1}.</span>
                      <span className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`mt-1 shrink-0 w-6 h-6 rounded flex items-center justify-center text-slate-500 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-sky-700 bg-slate-100' : 'group-hover:text-slate-900'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pl-7 pr-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
