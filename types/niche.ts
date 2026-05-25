export interface NicheWorkflowStep {
  step: string;
  label: string;
}

export interface NichePricingTier {
  price?: string;
  features: string[];
}

export interface NichePricing {
  starter: NichePricingTier;
  pro: NichePricingTier;
  enterprise: NichePricingTier;
}

export interface NicheBeforeAfter {
  before: string[];
  after: string[];
}

export interface NicheFAQ {
  question: string;
  answer: string;
}

export interface NicheData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  painPoints: string[];
  workflow: NicheWorkflowStep[];
  deliverables: string[];
  beforeAfter: NicheBeforeAfter;
  faq: NicheFAQ[];
  pricing: NichePricing;
  icon: string; // emoji or icon identifier
  color: string; // accent color for the niche
}
