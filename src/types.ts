export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  location: string;
  whatsappUrl: string;
  drivingLicense: string;
}

export interface StatItem {
  value: string;
  unit: string;
  label: string;
  description: string;
}

export interface OverviewData {
  summary: string;
  stats: StatItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  skillsHighlighted: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'management' | 'operations' | 'technical' | 'logistics';
  icon: string;
  highlight: string;
}

export interface Language {
  name: string;
  script: string;
  description: string;
  contexts: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
}
