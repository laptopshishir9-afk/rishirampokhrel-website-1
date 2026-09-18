import React from 'react';
import { personalInfo, overviewData, experiences, skills, languages, education } from '../data/cvData';
import { useProfilePhoto } from '../utils/photoState';
import { PHOTO_DATA_URI } from '../assets/images/photoDataUri';
import { Printer, X, Phone, Mail, MapPin, Award } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { photoUrl } = useProfilePhoto();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:rounded-none">
        {/* Modal Top Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base sm:text-lg">Rishiram Pokhrel - Curriculum Vitae</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto print:overflow-visible space-y-6 text-left text-slate-900 font-sans">
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{personalInfo.name}</h1>
              <p className="text-lg font-bold text-blue-800 mt-1 uppercase tracking-wide">{personalInfo.title}</p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-600 mt-3">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-700" /> {personalInfo.phoneDisplay}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-700" /> {personalInfo.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-700" /> {personalInfo.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-700" /> {personalInfo.drivingLicense}
                </span>
              </div>
            </div>

            {/* Passport Photo */}
            <div className="shrink-0 w-24 h-32 rounded-lg border-2 border-slate-300 overflow-hidden bg-slate-100 shadow-sm">
              <img
                src={photoUrl || PHOTO_DATA_URI}
                alt="Rishiram Pokhrel"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  if (e.currentTarget.src !== PHOTO_DATA_URI) {
                    e.currentTarget.src = PHOTO_DATA_URI;
                  }
                }}
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {overviewData.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-4">
              Work Experience (Qatar - 15+ Years)
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-left">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-bold text-slate-900">{exp.role}</span>
                    <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <div className="text-xs font-bold text-blue-800 mb-1.5">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pl-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Key Competencies & Operations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-800">
              {skills.map((s) => (
                <div key={s.id} className="p-1.5 rounded bg-slate-50 border border-slate-100">
                  <span className="font-semibold">• {s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Education
              </h2>
              <p className="text-xs font-bold text-slate-800">{education.degree}</p>
              <p className="text-xs text-slate-600">{education.institution}</p>
              <p className="text-xs text-slate-500">{education.location}</p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Driving License & Languages
              </h2>
              <p className="text-xs text-slate-700">
                <span className="font-bold">Driving License:</span> {personalInfo.drivingLicense}
              </p>
              <p className="text-xs text-slate-700 mt-1">
                <span className="font-bold">Languages:</span> Nepali (Native), Hindi (Fluent), Arabic (Spoken), English (Professional)
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer (Hidden on print) */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 print:hidden">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-200 text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
