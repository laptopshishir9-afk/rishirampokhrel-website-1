import React from 'react';
import { useProfilePhoto } from '../utils/photoState';
import { PHOTO_DATA_URI } from '../assets/images/photoDataUri';
import { ShieldCheck, Award } from 'lucide-react';

export const HeroPhoto: React.FC = () => {
  const { photoUrl } = useProfilePhoto();

  return (
    <div className="relative flex flex-col items-center justify-center my-2 sm:my-4">
      {/* Ambient glowing blue light background behind oval */}
      <div className="absolute -inset-4 sm:-inset-8 rounded-[50%] bg-gradient-to-tr from-blue-600/35 via-sky-400/25 to-indigo-600/30 blur-2xl sm:blur-3xl -z-10 animate-pulse pointer-events-none" />

      {/* Main Oval Frame with Moving Blue Gradient */}
      <div className="relative group perspective-1000 animate-float-gentle">
        {/* Animated Moving Conic Blue Gradient Border Container */}
        <div className="relative p-[5px] sm:p-[6px] rounded-[50%] overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.35)] transition-transform duration-500 hover:scale-[1.03]">
          
          {/* Primary clockwise rotating blue gradient */}
          <div
            className="absolute -inset-[100%] animate-spin-slow opacity-100 pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, #38bdf8 0%, #2563eb 20%, #1d4ed8 40%, #60a5fa 60%, #0284c7 80%, #38bdf8 100%)',
            }}
          />

          {/* Secondary counter-clockwise shimmering gradient for fluid multi-tonal movement */}
          <div
            className="absolute -inset-[100%] animate-spin-reverse-slow opacity-70 mix-blend-screen pointer-events-none"
            style={{
              background: 'conic-gradient(from 180deg, transparent 0%, #93c5fd 25%, transparent 50%, #38bdf8 75%, transparent 100%)',
            }}
          />

          {/* Inner Oval Image Frame */}
          <div className="relative w-52 sm:w-60 md:w-68 h-68 sm:h-80 md:h-88 rounded-[50%] overflow-hidden bg-slate-100 border-[3px] border-white/90 shadow-2xl">
            <img
              src={photoUrl || PHOTO_DATA_URI}
              alt="Rishiram Pokhrel - Warehouse Supervisor"
              className="w-full h-full object-cover object-[center_14%] transition-transform duration-700 group-hover:scale-105"
              loading="eager"
              onError={(e) => {
                if (e.currentTarget.src !== PHOTO_DATA_URI) {
                  e.currentTarget.src = PHOTO_DATA_URI;
                }
              }}
            />

            {/* Subtle bottom gradient for contrast */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Verified status seal inside bottom of the oval */}
            <div className="absolute bottom-3 inset-x-0 flex items-center justify-center pointer-events-none">
              <div className="bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-blue-400/40 shadow-lg flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-blue-100">
                  Verified Qatar Professional
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating badge Left: Qatar Driving License */}
        <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.12)] flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-xs border border-blue-200">
            QA
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Qatar License</span>
            <span className="text-xs font-bold text-slate-900 whitespace-nowrap">Light Manual Driving</span>
          </div>
        </div>

        {/* Floating badge Right: 15+ Years Logistics Experience */}
        <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 bg-gradient-to-r from-blue-700 to-blue-600 text-white px-3.5 py-2 rounded-xl shadow-[0_10px_25px_rgba(37,99,235,0.35)] flex items-center gap-2.5 z-20 border border-blue-400/30 hover:scale-105 transition-transform">
          <span className="text-base sm:text-lg font-black text-amber-300">15+</span>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] uppercase tracking-wider text-blue-100 font-semibold">Years Experience</span>
            <span className="text-xs font-bold whitespace-nowrap">Qatar Logistics</span>
          </div>
        </div>
      </div>
    </div>
  );
};
