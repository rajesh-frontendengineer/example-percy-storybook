import React from 'react';
import Table from './Table';

export default {
  title: 'Table',
  component: Table,
};

const columns = [
  { label: 'Plan Name', key: 'plan' },
  { label: 'Monthly Premium', key: 'premium' },
  { label: 'Deductible', key: 'deductible' },
  { label: 'Out-of-Pocket Max', key: 'oopmax' },
  { label: 'Coverage Type', key: 'coverage' },
];

const rows = [
  { plan: 'Basic Care', premium: '$220', deductible: '$2,000', oopmax: '$6,500', coverage: 'Individual' },
  { plan: 'Family Secure', premium: '$480', deductible: '$3,500', oopmax: '$13,000', coverage: 'Family' },
  { plan: 'Premium Plus', premium: '$350', deductible: '$1,000', oopmax: '$4,000', coverage: 'Individual' },
  { plan: 'Essential Health', premium: '$275', deductible: '$1,500', oopmax: '$5,500', coverage: 'Individual' },
  { plan: 'Comprehensive', premium: '$520', deductible: '$2,500', oopmax: '$10,000', coverage: 'Family' },
];

export const Basic = () => <Table columns={columns} rows={rows} />; 