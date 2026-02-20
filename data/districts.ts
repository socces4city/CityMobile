export type District = {
  slug: string;
  name: string;
  size: string;
  investmentValue: string;
  roi: string;
  overview: string;
  infrastructure: string[];
  keyFacilities: string[];
  features: string[];
  modelRef: string;
};

export const districts: District[] = [
  {
    slug: 'central-cbd',
    name: 'Central CBD',
    size: '1,200 hectares',
    investmentValue: '$780M',
    roi: '20%',
    overview: 'Commercial nucleus for finance, commerce, and institutional headquarters.',
    infrastructure: ['Primary arterial roads', 'District cooling', 'Smart parking'],
    keyFacilities: ['Financial center', 'Convention arena', 'Luxury mixed-use towers'],
    features: ['Transit-oriented design', 'High-density skyline', 'Integrated security network'],
    modelRef: '/models/central-cbd.glb'
  },
  {
    slug: 'technology-city',
    name: 'Technology City',
    size: '1,600 hectares',
    investmentValue: '$420M',
    roi: '22%',
    overview: 'Innovation district designed for data centers, R&D campuses, and startups.',
    infrastructure: ['Fiber ring backbone', 'Smart utility ducts', 'Micro-grid energy'],
    keyFacilities: ['Innovation labs', 'Startup accelerators', 'Data park'],
    features: ['IoT-ready zoning', 'Autonomous mobility testbeds', 'AI operations center'],
    modelRef: '/models/technology-city.glb'
  },
  {
    slug: 'education-city',
    name: 'Education City',
    size: '1,000 hectares',
    investmentValue: '$260M',
    roi: '16%',
    overview: 'Academic and research ecosystem connecting universities and talent pipelines.',
    infrastructure: ['Campus mobility lanes', 'Hybrid learning grid', 'Water recycling loops'],
    keyFacilities: ['University clusters', 'Research hospitals', 'Student housing'],
    features: ['Knowledge economy focus', 'Public realm campuses', 'Innovation scholarships'],
    modelRef: '/models/education-city.glb'
  },
  {
    slug: 'health-city',
    name: 'Health City',
    size: '900 hectares',
    investmentValue: '$310M',
    roi: '18%',
    overview: 'Integrated healthcare district for tertiary care, biotech, and wellness.',
    infrastructure: ['Medical gas backbone', 'Emergency corridors', 'Resilient power systems'],
    keyFacilities: ['Specialist hospitals', 'Biotech park', 'Wellness retreat'],
    features: ['Health-tech ecosystem', 'Medical tourism strategy', 'Patient-centric planning'],
    modelRef: '/models/health-city.glb'
  },
  {
    slug: 'residential-district',
    name: 'Residential District',
    size: '3,200 hectares',
    investmentValue: '$540M',
    roi: '17%',
    overview: 'Mixed-income, walkable neighborhoods powered by green urbanism.',
    infrastructure: ['Last-mile transit', 'Community solar', 'District wastewater treatment'],
    keyFacilities: ['Schools', 'Retail boulevards', 'Community healthcare hubs'],
    features: ['Inclusive housing model', '15-minute city planning', 'Parks-first design'],
    modelRef: '/models/residential.glb'
  },
  {
    slug: 'industrial-logistics-zone',
    name: 'Industrial & Logistics Zone',
    size: '2,100 hectares',
    investmentValue: '$640M',
    roi: '19%',
    overview: 'Trade and supply chain hub linked to regional corridors and export gateways.',
    infrastructure: ['Freight corridors', 'Intermodal yards', 'Utility-heavy plots'],
    keyFacilities: ['Dry port', 'Logistics parks', 'Manufacturing campuses'],
    features: ['Export competitiveness', 'Automated warehousing', 'Lean industrial utilities'],
    modelRef: '/models/industrial-logistics.glb'
  }
];

export const districtMap = Object.fromEntries(districts.map((district) => [district.slug, district]));
