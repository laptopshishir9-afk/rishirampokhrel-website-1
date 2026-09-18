import React, { useState } from 'react';
import { personalInfo } from '../data/cvData';
import { useProfilePhoto } from '../utils/photoState';
import { Phone, FileDown, Menu, X, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onPrintCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPrintCV }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { photoUrl } = useProfilePhoto();

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Experience', href: '#experience' },
    { label: 'Core Skills', href: '#skills' },
    { label: 'Languages', href: '#languages' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo brand */}
          <a href="#" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-[2px] bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 flex items-center justify-center shrink-0 border border-blue-400/60 shadow-[0_4px_10px_rgba(37,99,235,0.25)] overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img
                src={photoUrl}
                alt="Rishiram Pokhrel"
                className="w-full h-full object-cover object-[center_16%] rounded-[10px]"
                loading="eager"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                Rishiram <span className="text-blue-700 text-3d-shadow">Pokhrel</span>
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Warehouse Supervisor
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              id="nav-cv-btn"
              onClick={onPrintCV}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100/80 border border-blue-200/70 font-semibold text-xs transition-colors shadow-2xs cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-blue-700" />
              <span>View & Print CV</span>
            </button>
            <a
              href={`tel:${personalInfo.phone}`}
              id="nav-call-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 text-white hover:bg-blue-700 text-xs font-semibold shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{personalInfo.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-2 text-blue-600 bg-blue-50 rounded-lg"
              aria-label="Call Rishiram Pokhrel"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onPrintCV();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-semibold text-sm border border-blue-200"
            >
              <FileDown className="w-4 h-4" />
              <span>View & Print Official CV</span>
            </button>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
