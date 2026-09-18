import React, { useState } from 'react';
import { skills } from '../data/cvData';
import {
  Boxes,
  ClipboardCheck,
  Apple,
  Package,
  FileText,
  Laptop,
  Truck,
  Navigation,
  Hammer,
  Award,
  Clock,
  ShieldCheck,
  Bus,
  Car,
  CheckCircle,
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Boxes,
  ClipboardCheck,
  Apple,
  Package,
  FileText,
  Laptop,
  Truck,
  Navigation,
  Hammer,
  Award,
  Clock,
  ShieldCheck,
  Bus,
  Car
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'management' | 'operations' | 'technical' | 'logistics'>('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Capabilities (14)' },
    { id: 'management', label: 'Supervision & Leadership' },
    { id: 'operations', label: 'Warehouse & Inventory' },
    { id: 'technical', label: 'Technical & Systems' },
    { id: 'logistics', label: 'Transport & Qatar Routes' },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Key Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Skills & Industry Expertise
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Specialized in end-to-end warehouse flows, cold chain preservation, inventory precision, and Qatar distribution operations.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.icon] || CheckCircle;
            return (
              <div
                key={skill.id}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all text-left group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{skill.name}</h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">{skill.highlight}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
