import React from 'react';
import { languages } from '../data/cvData';
import { Languages as LanguagesIcon, Check } from 'lucide-react';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <LanguagesIcon className="w-3.5 h-3.5" />
            <span>Multilingual Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Languages for Diverse Workplace Coordination
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Facilitating clear instructions, team unity, and customer service across multi-cultural warehousing environments in Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-all text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-black text-blue-700">{lang.name}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  {lang.script}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-800 mb-4">{lang.description}</p>
              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                {lang.contexts.map((ctx, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{ctx}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
