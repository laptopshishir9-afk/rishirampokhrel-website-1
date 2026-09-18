import { PersonalInfo, OverviewData, Experience, Skill, Language, Education } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Rishiram Pokhrel',
  title: 'Warehouse Supervisor',
  phone: '+974 33046181',
  phoneDisplay: '+974 3304 6181',
  email: 'rishyram.2022@gmail.com',
  location: 'Abu Hamour, Doha, Qatar',
  whatsappUrl: 'https://wa.me/97433046181',
  drivingLicense: 'Qatar Light Driving License (Manual)'
};

export const overviewData: OverviewData = {
  summary: 'Warehouse professional with 15+ years of experience in operations, inventory control, and distribution. Skilled in handling Fruits & Vegetables, Non-Food, FMCG, DPH, and LHH items. Experienced in delivery driving, including market deliveries and staff transport. Organized, reliable, and effective in team and route management. Holds a valid Qatar Light Driving License (Manual).',
  stats: [
    {
      value: '15+',
      unit: 'Years',
      label: 'Experience',
      description: 'Continuous leadership & hands-on logistics operations in Qatar'
    },
    {
      value: '100%',
      unit: 'Operational',
      label: 'Warehouse Operations',
      description: 'Receiving, staging, inventory control, banana ripening & dispatch'
    },
    {
      value: 'High Accuracy',
      unit: 'Control',
      label: 'Inventory & Stock Control',
      description: 'Rigorous stock monitoring, audit readiness & quality assurance'
    },
    {
      value: 'Doha & Across',
      unit: 'Qatar',
      label: 'Qatar Logistics Experience',
      description: 'Deep familiarity with Qatar supply chains, retail & local distribution routes'
    }
  ]
};

export const experiences: Experience[] = [
  {
    id: 'souq-al-baladi',
    role: 'Warehouse Supervisor',
    company: 'Souq Al Baladi',
    location: 'Qatar',
    period: '2024 – Present',
    isCurrent: true,
    responsibilities: [
      'Manage warehouse operations, inventory, and staff.',
      'Ensure timely order fulfillment and compliance with safety standards.',
      'Coordinate with logistics and procurement for smooth supply chain flow.',
      'Implement process improvements to boost efficiency and accuracy.'
    ],
    skillsHighlighted: ['Supervision', 'Inventory Management', 'Safety Compliance', 'Process Optimization']
  },
  {
    id: 'al-read-fresh-food',
    role: 'Warehouse Supervisor / Warehouse Receiver / Dispatch & Banana Ripening / Forklift Operator',
    company: 'Al Read Fresh Food Company',
    location: 'Qatar',
    period: '2014 – 2022',
    responsibilities: [
      'Supervised warehouse operations, including receiving, dispatch, and inventory control.',
      'Managed banana ripening process to meet quality and market standards.',
      'Operated forklifts and other equipment to ensure safe handling of goods.',
      'Coordinated logistics and staff to maintain smooth supply chain operations.',
      'Ensured compliance with safety, hygiene, and company procedures.'
    ],
    skillsHighlighted: ['Banana Ripening Control', 'Forklift Operations', 'Receiving & Dispatch', 'Cold Chain & Fresh Food Hygiene']
  },
  {
    id: 'al-rawasi-fresh-food',
    role: 'Delivery Driver – Fruits & Vegetables',
    company: 'Al Rawasi Fresh Food Company',
    location: 'Qatar',
    period: '2022 – 2024',
    responsibilities: [
      'Handled customer orders, prepared items, and ensured timely deliveries to hotels, catering services, and Meera outlets.',
      'Built strong customer relationships by taking accurate orders and providing reliable service.',
      'Managed delivery schedules and maintained product quality during transportation.',
      'Supported sales activities by promoting company products and assisting clients with inquiries.',
      'Coordinated with catering and hospitality teams to meet bulk order requirements.',
      'Delivered fruits and vegetables to Al Meera outlets and customers.',
      'Good understanding of local delivery routes in Qatar.',
      'Ensured timely and safe delivery of goods.'
    ],
    skillsHighlighted: ['Qatar Delivery Routes', 'Fruits & Vegetables Care', 'Client Order Accuracy', 'Hotel & Retail Fulfillment']
  },
  {
    id: 'abu-khalifa',
    role: 'Merchandiser',
    company: 'Abu Khalifa Company',
    location: 'Qatar',
    period: '2009 – 2012',
    responsibilities: [
      'Arranged and displayed products to attract customers.',
      'Monitored stock and ensured timely replenishment.',
      'Analyzed sales to improve product performance.',
      'Assisted with promotions and pricing.',
      'Coordinated with suppliers and sales team.',
      'Maintained store cleanliness and proper labeling.'
    ],
    skillsHighlighted: ['Stock Replenishment', 'Merchandising & Display', 'Sales Monitoring', 'Store Organization']
  }
];

export const skills: Skill[] = [
  {
    id: 'sk-1',
    name: 'Warehouse Management & Supervision',
    category: 'management',
    icon: 'Boxes',
    highlight: 'Staff oversight, floor coordination, shift planning & daily task delegation'
  },
  {
    id: 'sk-2',
    name: 'Inventory Control & Stock Accuracy',
    category: 'operations',
    icon: 'ClipboardCheck',
    highlight: 'Stock counting, audit readiness, discrepancy reconciliation & replenishment'
  },
  {
    id: 'sk-3',
    name: 'Fruits & Vegetables Handling',
    category: 'operations',
    icon: 'Apple',
    highlight: 'Cold storage preservation, quality grading, fresh food handling & ripening'
  },
  {
    id: 'sk-4',
    name: 'FMCG, Non-Food, DPH & LHH Items',
    category: 'operations',
    icon: 'Package',
    highlight: 'Category-specific storage, handling, packaging & cross-category dispatch'
  },
  {
    id: 'sk-5',
    name: 'Receiving, Dispatch & Documentation',
    category: 'operations',
    icon: 'FileText',
    highlight: 'Inbound inspection, delivery note verification, dispatch manifests & reporting'
  },
  {
    id: 'sk-6',
    name: 'Computer Basic Knowledge',
    category: 'technical',
    icon: 'Laptop',
    highlight: 'Warehouse data entry, basic inventory recording & communication tools'
  },
  {
    id: 'sk-7',
    name: 'Safe and Punctual Driving for Staff & Goods',
    category: 'logistics',
    icon: 'Truck',
    highlight: 'Adherence to Qatar traffic safety standards, punctuality & careful transit'
  },
  {
    id: 'sk-8',
    name: 'Local Route Understanding (Qatar)',
    category: 'logistics',
    icon: 'Navigation',
    highlight: 'Extensive knowledge of Doha, Al Rayyan, Al Wakrah, and commercial corridors'
  },
  {
    id: 'sk-9',
    name: 'Forklift Operation',
    category: 'technical',
    icon: 'Hammer',
    highlight: 'Safe pallet movement, high-rack stacking, loading & unloading trucks'
  },
  {
    id: 'sk-10',
    name: 'Responsible & Self-Motivated',
    category: 'management',
    icon: 'Award',
    highlight: 'High integrity, proactive problem solver & independent execution'
  },
  {
    id: 'sk-11',
    name: 'Time Management & Work Planning',
    category: 'management',
    icon: 'Clock',
    highlight: 'Prioritization of urgent orders, dispatch timetables & team pacing'
  },
  {
    id: 'sk-12',
    name: 'Customer-Focused Service with Quality & Safety',
    category: 'management',
    icon: 'ShieldCheck',
    highlight: 'Professional client interaction, food hygiene standards & zero-defect goal'
  },
  {
    id: 'sk-13',
    name: 'Staff Bus Driving Experience',
    category: 'logistics',
    icon: 'Bus',
    highlight: 'Safe passenger transport, scheduled morning & evening employee shuttles'
  },
  {
    id: 'sk-14',
    name: 'Delivery Driving',
    category: 'logistics',
    icon: 'Car',
    highlight: 'Retail outlet drop-offs, Meera deliveries, hotel & catering bulk distribution'
  }
];

export const languages: Language[] = [
  {
    name: 'Nepali',
    script: 'नेपाली',
    description: 'Native language',
    contexts: ['Native communication', 'Bilingual team coordination']
  },
  {
    name: 'Hindi',
    script: 'हिन्दी',
    description: 'Fluent verbal & operational communication',
    contexts: ['Multi-national crew supervision', 'On-site logistics coordination']
  },
  {
    name: 'Arabic',
    script: 'العربية',
    description: 'Spoken working proficiency in Gulf operational environments',
    contexts: ['Market & client interactions in Qatar', 'Local vendor coordination']
  },
  {
    name: 'English',
    script: 'English',
    description: 'Professional workplace communication',
    contexts: ['Warehouse documentation', 'Order fulfillment & management reporting']
  }
];

export const education: Education = {
  degree: 'Second Higher Education',
  institution: 'Kalika MA. BI.',
  location: 'Malarani-4, Khana, Arghakhanchi, Nepal'
};
