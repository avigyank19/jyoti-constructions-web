import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { companyData } from '../data';

export function StatsAndClients() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 2000);
  };

  const statutoryRecords = [
    { key: 'gst', label: 'GST Identification Number (GSTIN)', value: companyData.statutory.gst },
    { key: 'pan', label: 'Permanent Account Number (PAN)', value: companyData.statutory.pan },
    { key: 'esic', label: 'Employees State Insurance (ESIC)', value: companyData.statutory.esic },
    { key: 'pf', label: 'Provident Fund Registration (EPF)', value: companyData.statutory.pf },
    { key: 'msme', label: 'MSME / Udyam Registration', value: companyData.statutory.msme },
  ];

  return (
    <section id="clients" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Principal Client Engagements */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                <span className="text-sky-700 font-semibold">Track Record &amp; Proof of Impact</span>
                <span aria-hidden="true">·</span>
                <span>PSU &amp; EPC Contracting Partners</span>
              </div>
              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Principal Client Installations
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-md">
              Trusted by leading public sector undertakings and Tier-1 engineering contractors for critical path
              mechanical installations across Telangana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {companyData.clients.map((client, index) => (
              <div
                key={client.name}
                className="bg-slate-50 border border-slate-200 rounded-lg p-7 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Unboxed Metadata Header */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-200/80">
                    <span className="font-mono font-semibold text-sky-700">CLIENT-0{index + 1}</span>
                    <span>{client.location}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {client.name}
                  </h3>

                  <div className="text-xs font-medium text-slate-500 mb-4">{client.sector}</div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="text-[11px] font-mono text-slate-400 mb-1">EXECUTED SCOPE</div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">{client.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Audited Financial Turnover & Statutory Compliance Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Financial Growth Ledger (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-lg border border-slate-800 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                <span className="text-sky-400 font-semibold">Financial Stability</span>
                <span aria-hidden="true">·</span>
                <span>Audited Annual Statements</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                Annual Financial Turnover
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Jyoti Constructions maintains disciplined working capital management and steady year-over-year revenue
                expansion across multi-year industrial contracts.
              </p>

              <div className="space-y-6">
                {companyData.financials.map((fin, idx) => {
                  const widthPercent = idx === 0 ? '96%' : '100%';
                  return (
                    <div key={fin.year} className="bg-slate-950/80 border border-slate-800 rounded-md p-4">
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <div>
                          <span className="text-sm font-semibold text-white">{fin.year}</span>
                          <span className="text-xs text-slate-400 ml-2">({fin.period})</span>
                        </div>
                        <span className="font-mono font-bold text-lg sm:text-xl text-sky-400 tabular-nums">
                          {fin.amount}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-sky-500 rounded-full"
                          style={{ width: widthPercent }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>CURRENCY: INR (₹)</span>
              <span>STATUS: COMPLIANT &amp; AUDITED</span>
            </div>
          </div>

          {/* Statutory Compliance Specification Table (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-lg border border-slate-200 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="text-sky-700 font-semibold">Statutory &amp; Regulatory Credentials</span>
                  <span aria-hidden="true">·</span>
                  <span>Vendor Onboarding Data</span>
                </div>
                <span className="text-xs font-mono text-slate-500">Click code to copy</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Statutory Compliance Registrations
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                All statutory obligations—including GST, EPF, ESIC, Workmen Compensation, and MSME registration—are
                duly fulfilled for risk-free contracting.
              </p>

              <div className="bg-white border border-slate-200 rounded-md divide-y divide-slate-200">
                {statutoryRecords.map((rec) => {
                  const isCopied = copiedKey === rec.key;
                  return (
                    <div
                      key={rec.key}
                      className="px-4 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50/80 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-700">{rec.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-semibold text-slate-900 tabular-nums">
                          {rec.value}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(rec.key, rec.value)}
                          aria-label={`Copy ${rec.label}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded transition-colors cursor-pointer whitespace-nowrap shrink-0"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>Registered Office: Ramagundam, Dist. Peddapalli, Telangana – 505215</span>
              <span className="font-mono text-slate-700">100% Labor Law Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
