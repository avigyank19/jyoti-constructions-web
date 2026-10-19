import React, { useState, useEffect } from 'react';
import { companyData } from '../data';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Structural Fabrication & Boiler Erection');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleSelectSubject = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSubject(customEvent.detail);
      }
    };
    window.addEventListener('select-inquiry-subject', handleSelectSubject);
    return () => window.removeEventListener('select-inquiry-subject', handleSelectSubject);
  }, []);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      return 'Please enter your full name.';
    }
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid corporate or personal email address.';
    }
    if (phone.trim() && phone.replace(/\D/g, '').length < 10) {
      return 'Please enter a valid 10-digit contact phone number.';
    }
    if (!message.trim() || message.trim().length < 10) {
      return 'Please provide brief project scope or tender requirements (at least 10 characters).';
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setErrorMsg(null);
    setFormStatus('submitting');

    const formattedBody = [
      `Contact Name: ${name}`,
      `Organization: ${organization || 'N/A'}`,
      `Email: ${email}`,
      `Phone: ${phone || 'N/A'}`,
      `Work Package / Scope: ${subject}`,
      '',
      'Project Requirements:',
      message,
    ].join('\n');

    const mailtoLink = `mailto:${companyData.contact.email}?subject=${encodeURIComponent(
      `[Project Inquiry] ${subject} — ${organization || name}`
    )}&body=${encodeURIComponent(formattedBody)}`;

    window.location.href = mailtoLink;

    setFormStatus('success');
  };

  const handleReset = () => {
    setFormStatus('idle');
    setName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrorMsg(null);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
            <span className="text-sky-700 font-semibold">Tenders &amp; Project Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Direct Engineering Desk</span>
          </div>
          <h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            Request a Project Consultation or Quotation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Connect directly with our engineering and contracting office in Ramagundam for tender enquiries, site
            mobilization schedules, and rate estimates.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Direct Office & Procurement Coordinates */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-sky-400 mb-2">HEADQUARTERS &amp; REGISTERED OFFICE</div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-8">
                  {companyData.legalName}
                </h3>

                <div className="space-y-7">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-mono text-slate-400 mb-1">REGISTERED ADDRESS</div>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        H. No. 5-6-137/2/A, Krishna Nagar, FCI Cross Road,
                        <br />
                        Ramagundam, Dist. Peddapalli,
                        <br />
                        Telangana – 505215, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-mono text-slate-400 mb-1">DIRECT TELEPHONE LINES</div>
                      <div className="space-y-1">
                        {companyData.contact.phones.map((ph) => (
                          <div key={ph}>
                            <a
                              href={`tel:${ph.replace(/\s+/g, '')}`}
                              className="font-mono text-sm text-white hover:text-sky-400 transition-colors tabular-nums"
                            >
                              {ph}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-mono text-slate-400 mb-1">OFFICIAL TENDER EMAIL</div>
                      <a
                        href={`mailto:${companyData.contact.email}`}
                        className="font-mono text-sm text-white hover:text-sky-400 transition-colors break-all"
                      >
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800 space-y-1.5 text-xs font-mono text-slate-400">
                <div>PROPRIETOR: {companyData.founder.toUpperCase()}</div>
                <div>GSTIN: {companyData.statutory.gst}</div>
                <div>UDYAM: {companyData.statutory.msme}</div>
              </div>
            </div>

            {/* Right Column: Validated RFQ Inquiry Form */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-start justify-center py-8">
                  <div className="w-12 h-12 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                    Project Inquiry Prepared
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-lg mb-6">
                    Your project inquiry details for <strong className="text-slate-900">{subject}</strong> have been
                    formatted and opened in your email client addressed to{' '}
                    <span className="font-mono text-slate-800">{companyData.contact.email}</span>. You may also call our
                    engineering desk directly at{' '}
                    <span className="font-mono text-slate-800">{companyData.contact.phones[0]}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-800 rounded-md transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      Project Scope &amp; Tender Inquiry Form
                    </h3>
                    <span className="text-xs text-slate-500">All fields marked * are required</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-md flex items-center gap-2.5 text-xs font-medium text-red-800">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/15 outline-none transition-colors bg-white text-slate-900"
                        placeholder="e.g. Rajesh Sharma"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/15 outline-none transition-colors bg-white text-slate-900"
                        placeholder="e.g. BHEL / NTPC / EPC Contractor"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/15 outline-none transition-colors bg-white text-slate-900"
                        placeholder="name@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone / Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/15 outline-none transition-colors bg-white text-slate-900 font-mono"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Engineering Discipline / Work Package *
                    </label>
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/15 outline-none transition-colors bg-white text-slate-900"
                    >
                      <option value="Structural Fabrication & Boiler Erection">
                        01. Structural Fabrication &amp; Boiler Erection
                      </option>
                      <option value="Power Cycle & Cooling Water Piping">
                        02. Power Cycle &amp; Cooling Water Piping
                      </option>
                      <option value="FGD Damper Gates Dismantling & Erection">
                        03. FGD Damper Gates Dismantling &amp; Erection
                      </option>
                      <option value="Mill Reject Handling (MRH) Systems">
                        04. Mill Reject Handling (MRH) Systems
                      </option>
                      <option value="Turnkey Industrial Mechanical Works">
                        05. Turnkey Industrial Mechanical Works
                      </option>
                      <option value="Vendor Pre-Qualification & Tender Enquiry">
                        06. Vendor Pre-Qualification &amp; Tender Enquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project Scope, Site Location &amp; Timeline *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/15 outline-none transition-colors bg-white text-slate-900 resize-none"
                      placeholder="Specify plant location, approximate tonnage/inch-meter scope, and expected mobilization schedule..."
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Direct dispatch to <span className="font-mono text-slate-700">{companyData.contact.email}</span>
                    </span>
                    <button
                      type="submit"
                      disabled={formStatus !== 'idle'}
                      className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-sky-800 text-white font-semibold text-xs py-3 px-6 rounded-md transition-colors disabled:opacity-70 cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
