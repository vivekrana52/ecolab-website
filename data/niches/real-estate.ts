import { NicheData } from '@/types/niche';

export const realEstate: NicheData = {
  slug: 'real-estate',
  name: 'Real Estate',
  icon: '🏠',
  color: '#2563EB',
  headline: 'Never Lose Another Property Lead to Slow Follow-Ups',
  subheadline:
    'Automated AI systems that capture, qualify, and follow up with every lead — so you close more deals without hiring more agents.',
  painPoints: [
    'Leads from Zillow, Realtor.com, and Facebook ads go cold within hours because no one follows up fast enough',
    'Agents spend 60% of their day on admin tasks instead of showing properties and closing deals',
    'No system to automatically qualify buyers vs. tire-kickers, wasting time on unqualified leads',
    'Missed calls and texts after hours mean lost opportunities — buyers move to the next agent',
  ],
  workflow: [
    {
      step: '01',
      label: 'Lead Captured — From your website, Zillow, Facebook, or Google Ads',
    },
    {
      step: '02',
      label: 'AI Qualifies — Budget, timeline, location preferences auto-assessed',
    },
    {
      step: '03',
      label: 'Instant Follow-Up — Personalized WhatsApp/Email/SMS within 60 seconds',
    },
    {
      step: '04',
      label: 'Appointment Booked — Qualified leads auto-scheduled for showings',
    },
  ],
  deliverables: [
    'Complete lead capture & qualification automation system',
    'AI-powered follow-up sequences (WhatsApp, Email, SMS)',
    'Automated appointment scheduling workflow',
    'CRM pipeline setup with lead scoring',
    'Property listing inquiry auto-responder',
    'Post-showing follow-up sequences',
    'Referral request automation',
    'Monthly performance dashboard template',
  ],
  beforeAfter: {
    before: [
      'Leads sit for hours before anyone responds',
      'Manually tracking leads in spreadsheets',
      'Missing follow-ups on nights and weekends',
      'No idea which leads are actually qualified',
      'Agents buried in admin instead of selling',
    ],
    after: [
      'Every lead gets a response in under 60 seconds',
      'Automated CRM pipeline with lead scoring',
      '24/7 AI follow-up — never miss a hot lead',
      'AI pre-qualifies every lead before you talk to them',
      'Agents focus on showings and closings only',
    ],
  },
  faq: [
    {
      question: 'Will this work with my existing CRM?',
      answer:
        'Yes. Our systems integrate with all major real estate CRMs including Follow Up Boss, KVCore, Sierra Interactive, and HubSpot. We build the automation layer on top of your existing tools.',
    },
    {
      question: 'How quickly can I get this set up?',
      answer:
        'Most real estate automation systems are fully deployed within 48-72 hours. You get a complete onboarding video walkthrough and our team handles the technical setup.',
    },
    {
      question: 'Does this replace my agents or ISAs?',
      answer:
        'No — it supercharges them. The AI handles the repetitive follow-up work so your agents can focus on what they do best: building relationships and closing deals.',
    },
    {
      question: 'What if a lead needs a human touch?',
      answer:
        'The system is designed to hand off to a human at the right moment. When a lead is qualified and ready to talk, it instantly notifies your team and books the appointment.',
    },
    {
      question: 'Can I customize the messages it sends?',
      answer:
        'Absolutely. Every message template is fully customizable. You control the tone, branding, and content. We provide proven templates as starting points.',
    },
  ],
  pricing: {
    starter: {
      price: '$19',
      features: [
        '1 lead capture workflow',
        'AI follow-up email templates',
        'WhatsApp reply scripts',
        'Basic CRM setup guide',
        'Email support',
        'Onboarding video',
      ],
    },
    pro: {
      price: '$149',
      features: [
        'Full lead-to-close automation system',
        'Multi-channel follow-up (WhatsApp + Email + SMS)',
        'CRM pipeline with lead scoring',
        'Appointment scheduling automation',
        'Post-showing follow-up sequences',
        'Priority support',
        'Monthly updates & optimization',
      ],
    },
    enterprise: {
      features: [
        'Everything in Pro',
        'Custom workflow design',
        'Team/brokerage multi-agent setup',
        'White-label option',
        'Dedicated onboarding call',
        'Direct Slack/WhatsApp support',
      ],
    },
  },
};
