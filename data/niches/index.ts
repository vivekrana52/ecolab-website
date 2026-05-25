import { NicheData } from '@/types/niche';
import { realEstate } from './real-estate';
import { gyms } from './gyms';
import { ecommerce } from './ecommerce';
import { agencies } from './agencies';
import { coaches } from './coaches';

export const allNiches: NicheData[] = [
  realEstate,
  gyms,
  ecommerce,
  agencies,
  coaches,
];

export const getNicheBySlug = (slug: string): NicheData | undefined => {
  return allNiches.find((niche) => niche.slug === slug);
};

export { realEstate, gyms, ecommerce, agencies, coaches };
