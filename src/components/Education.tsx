import React from 'react';
import { education, personalInfo } from '../data/cvData';
import { GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Formal qualifications and verified government-issued vehicular credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Formal Education</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">{education.degree}</h3>
            <p className="text-base font-semibold text-slate-800">{education.institution}</p>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 mt-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{education.location}</span>
            </div>
          </div>

          {/* Driving License Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">State of Qatar Official Credential</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">{personalInfo.drivingLicense}</h3>
            <p className="text-base font-semibold text-slate-800">Valid Qatar Ministry of Interior License</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authorized for manual transmission vehicles, delivery vans & staff transport</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clean driving record across 10+ years driving in Doha and regional municipalities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
