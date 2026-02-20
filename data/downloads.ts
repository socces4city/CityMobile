export type DownloadAsset = {
  title: string;
  file: string;
  category: 'Investment' | 'Masterplan' | 'ESG' | 'Governance';
};

export const downloadAssets: DownloadAsset[] = [
  { title: 'Investor Prospectus', file: '/downloads/citi-x-investor-prospectus.txt', category: 'Investment' },
  { title: 'Masterplan Brief', file: '/downloads/citi-x-masterplan-brief.txt', category: 'Masterplan' },
  { title: 'ESG Scorecard', file: '/downloads/citi-x-esg-scorecard.txt', category: 'ESG' },
  { title: 'Governance Framework', file: '/downloads/citi-x-governance-framework.txt', category: 'Governance' }
];
