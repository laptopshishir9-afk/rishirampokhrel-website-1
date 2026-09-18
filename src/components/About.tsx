import React from 'react';
import { overviewData, personalInfo } from '../data/cvData';
import { ShieldCheck, Truck, Warehouse, CheckCircle, Award, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Warehouse,
      title: 'Warehouse Leadership & Floor Coordination',
      desc: '15+ continuous years organizing warehouse space, managing shifts, supervising loading/unloading crews, and maintaining spotless safety & hygiene standards across Doha facilities.'
    },
    {
      icon: ShieldCheck,
      title: 'Perishable Produce & Banana Ripening Specialist',
      desc: 'Deep technical competence in cold room temperature staging, ethylene gas protocols, grading, and freshness preservation for Fruits & Vegetables.'
    },
    {
      icon: Truck,
      title: 'Multi-Stop Qatar Route Navigation & Logistics',
      desc: 'Hands-on familiarity with delivery corridors across Qatar: Doha, Industrial Area, Al Wakra, Al Khor, and on-time drop-offs to Meera hypermarkets and luxury hotels.'
    },
    {
      icon: Award,
      title: 'Rigorous Stock Integrity & Loss Prevention',
      desc: 'Zero-discrepancy approach to physical stock-taking, delivery note validation, dispatch manifests, batch control, and warehouse inventory reporting.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            15+ Years Delivering Excellence in Qatar Supply Chains
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            Rishiram Pokhrel brings over a decade and a half of dedicated operational expertise in warehouse oversight, inventory replenishment, staff supervision, and fleet dispatch across major commercial organizations in Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/60 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Operational Highlights Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Immediate Relocation & Availability</span>
            <h3 className="text-xl sm:text-2xl font-bold">Ready to Elevate Your Warehouse Operations</h3>
            <p className="text-slate-300 text-sm max-w-2xl font-normal">
              Equipped with a valid Qatar Light Driving License (Manual), fluent multi-lingual fluency (Nepali, Hindi, Arabic, English), and transferable sponsorship.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href={`tel:${personalInfo.phone}`}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all whitespace-nowrap"
            >
              Contact Rishiram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
