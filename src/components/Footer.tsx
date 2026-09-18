import React from 'react';
import { personalInfo } from '../data/cvData';
import { useProfilePhoto } from '../utils/photoState';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { photoUrl } = useProfilePhoto();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800 text-left">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl p-[2px] bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 flex items-center justify-center shrink-0 border border-blue-400/50 shadow-md overflow-hidden">
                <img
                  src={photoUrl}
                  alt="Rishiram Pokhrel"
                  className="w-full h-full object-cover object-[center_16%] rounded-[10px]"
                  loading="eager"
                />
              </div>
              <span className="text-white font-black text-lg tracking-tight">
                Rishiram <span className="text-sky-400 text-3d-shadow">Pokhrel</span>
              </span>
            </div>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              {personalInfo.title} • Doha, Qatar
            </p>
            <p className="text-sm text-slate-400 max-w-md font-normal leading-relaxed">
              15+ years of verified logistics supervision, banana ripening expertise, inventory integrity, and safe distribution across Qatar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Sections</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Work Experience</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Warehouse Skills</a></li>
              <li><a href="#languages" className="hover:text-blue-400 transition-colors">Languages</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors">Education & License</a></li>
            </ul>
          </div>

          {/* Quick Contacts */}
          <div className="md:col-span-3 space-y-3 text-sm text-slate-300">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Direct Contact</h4>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.phoneDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="truncate">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p id="footer-copyright" className="text-slate-400">
            © 2026 Rishiram Pokhrel. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Doha, Qatar</span>
            <span className="text-slate-600">•</span>
            <button
              type="button"
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
