import React from 'react';
import { experiences } from '../data/cvData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Professional Experience in Qatar
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            A track record of stability, operational leadership, and reliable delivery performance across premier Qatar supply chain employers.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`p-6 sm:p-8 rounded-2xl bg-white border transition-all text-left ${
                exp.isCurrent
                  ? 'border-blue-400/80 shadow-[0_4px_20px_rgba(37,99,235,0.08)] ring-1 ring-blue-500/20'
                  : 'border-slate-200/80 shadow-2xs hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{exp.role}</h3>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-blue-700">
                    <span className="text-slate-800">{exp.company}</span>
                    <span className="flex items-center gap-1 text-slate-500 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Responsibilities</h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlighted tags */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-1">Core Expertise:</span>
                {exp.skillsHighlighted.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
