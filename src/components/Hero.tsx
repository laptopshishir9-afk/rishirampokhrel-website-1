import React from 'react';
import { personalInfo, overviewData } from '../data/cvData';
import { HeroPhoto } from './HeroPhoto';
import { Phone, Mail, MapPin, FileDown, MessageCircle, Award } from 'lucide-react';

interface HeroProps {
  onPrintCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrintCV }) => {
  return (
    <section id="overview" className="pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Section: Availability Pill, Oval Photo with Moving Blue Gradient, and 3D Animated Text */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Immediate Deployment in Qatar</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700">Transferable NOC</span>
          </div>

          {/* Oval Photo at the Top with Moving Blue Gradient */}
          <div className="w-full flex justify-center py-2">
            <HeroPhoto />
          </div>

          {/* 3D Animated Headline & Typography */}
          <div className="perspective-1000 space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] select-none">
              <span className="animate-3d-title">
                <span className="inline-block transform hover:-rotate-2 transition-transform duration-300">
                  Rishiram
                </span>{' '}
                <span className="text-blue-700 text-3d-shadow inline-block transform hover:rotate-2 transition-transform duration-300">
                  Pokhrel
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-2xl font-extrabold uppercase tracking-wide text-slate-700 text-3d-subtle">
              Warehouse Supervisor & Logistics Specialist
            </p>
          </div>

          {/* Concise Bio */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            {overviewData.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              id="hero-print-cv-btn"
              onClick={onPrintCV}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4" />
              <span>View & Print Official CV</span>
            </button>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              id="hero-call-btn"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Contact & Credentials Chips */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-sm transition-all text-left group hover:-translate-y-0.5"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Direct Call</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">{personalInfo.phoneDisplay}</span>
              </div>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-sm transition-all text-left group hover:-translate-y-0.5"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">{personalInfo.email}</span>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-left hover:-translate-y-0.5 transition-transform">
              <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-left hover:-translate-y-0.5 transition-transform">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Qatar License</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Light Manual Driving</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {overviewData.stats.map((stat, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-left hover:border-blue-300 hover:shadow-sm transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black text-blue-700 text-3d-shadow">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{stat.unit}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mt-1">{stat.label}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-normal">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
