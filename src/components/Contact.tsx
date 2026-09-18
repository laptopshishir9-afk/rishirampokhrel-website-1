import React, { useState } from 'react';
import { personalInfo } from '../data/cvData';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Warehouse Supervisory Inquiry'
    )}&body=${encodeURIComponent(
      `Hello Rishiram,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact Rishiram Pokhrel
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            For warehouse supervisory roles, supply chain opportunities, or immediate inquiries in Doha, Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-400 transition-all flex items-start gap-4 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Phone & WhatsApp</span>
                <p className="text-lg font-bold text-slate-900 mt-0.5">{personalInfo.phoneDisplay}</p>
                <span className="text-xs text-blue-600 font-medium mt-1 inline-block">Available 24/7 for interviews</span>
              </div>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-400 transition-all flex items-start gap-4 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 truncate">{personalInfo.email}</p>
                <span className="text-xs text-blue-600 font-medium mt-1 inline-block">Direct inbox delivery</span>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Physical Residence</span>
                <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{personalInfo.location}</p>
                <span className="text-xs text-slate-500 mt-1 block font-normal">Able to commute across Doha, Al Rayyan & Industrial Area</span>
              </div>
            </div>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm flex items-center justify-center gap-3 font-bold text-sm transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl text-left">
            <div className="flex items-center gap-2 mb-2">
              <Send className="w-5 h-5 text-sky-400" />
              <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Fill out the form below to immediately open your mail client with a formatted message to Rishiram Pokhrel.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Full Name / Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al Meera Logistics / HR Manager"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Warehouse Supervisor Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the opportunity, facility location, and schedule..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Email Inquiry</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Email client opened! You can send the prepared message directly to Rishiram.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
