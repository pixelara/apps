import type { AgeGroup } from '../types';

export const ageGroups: AgeGroup[] = [
  {
    id: 'teens',
    name: 'Teens',
    range: '13-19',
    description: 'Navigating adolescence and building foundations'
  },
  {
    id: 'twenties',
    name: 'Twenties',
    range: '20-29',
    description: 'Building independence and career foundations'
  },
  {
    id: 'thirties',
    name: 'Thirties',
    range: '30-39',
    description: 'Career growth and life planning'
  },
  {
    id: 'forties',
    name: 'Forties',
    range: '40-49',
    description: 'Peak career and family balance'
  },
  {
    id: 'fifties',
    name: 'Fifties',
    range: '50-59',
    description: 'Pre-retirement planning and health focus'
  },
  {
    id: 'sixties-plus',
    name: 'Sixties+',
    range: '60+',
    description: 'Retirement and healthy aging'
  }
];