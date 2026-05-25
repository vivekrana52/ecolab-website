import { NicheData } from '@/types/niche';

export const coaches: NicheData = {
  slug: 'coaches',
  name: 'Coaches & Consultants',
  icon: '🎯',
  color: '#EC4899',
  headline: 'Fill Your Calendar With Qualified Discovery Calls — Without Chasing Leads',
  subheadline:
    'AI-driven automation that attracts ideal clients, books discovery calls, and onboards new clients seamlessly — so you spend your time coaching, not selling.',
  painPoints: [
    'Lead flow is inconsistent — some weeks your calendar is packed, other weeks it\'s completely empty with no pipeline visibility',
    'Scheduling discovery calls takes endless back-and-forth emails and DMs, and 30-40% of booked calls are no-shows',
    'Client onboarding is a manual mess of welcome emails, questionnaires, contracts, and payment links sent one at a time',
    'Happy clients never leave testimonials or referrals because there\'s no system asking them at the right time',
  ],
  workflow: [
    {
      step: '01',
      label: 'Lead Finds You — Through your content, ads, referrals, or lead magnet funnel',
    },
    {
      step: '02',
      label: 'AI Qualifies — Goals, budget, and readiness assessed through smart intake forms',
    },
    {
      step: '03',
      label: 'Discovery Call Booked — Automated scheduling with confirmation & reminder sequences',
    },
    {
      step: '04',
      label: 'Client Onboarded — Welcome sequence, contracts, payments, and kickoff all automated',
    },
  ],
  deliverables: [
    'Lead magnet delivery & nurture sequence automation',
    'AI-powered discovery call booking & no-show prevention system',
    'Smart intake forms with lead qualification scoring',
    'Automated client onboarding workflow (contracts, payments, welcome)',
    'Post-session follow-up & accountability check-in sequences',
    'Testimonial & case study collection automation',
    'Program completion & renewal/upsell campaigns',
    'Client pipeline & revenue tracking dashboard',
  ],
  beforeAfter: {
    before: [
      'Feast-or-famine lead flow with zero predictability',
      'Hours wasted on scheduling back-and-forth every week',
      '30-40% discovery call no-show rate with no reminder system',
      'Manual onboarding takes days of scattered emails and links',
      'Testimonials are rare because you never remember to ask',
    ],
    after: [
      'Consistent pipeline of qualified leads from your content and ads',
      'One-click booking with automated calendar sync and confirmations',
      'Reminder sequences cut no-show rates to under 10%',
      'New clients are fully onboarded within 24 hours — zero manual work',
      'Automated requests at peak satisfaction yield 5x more testimonials',
    ],
  },
  faq: [
    {
      question: 'I\'m not tech-savvy — will I be able to use this?',
      answer:
        'Absolutely. We handle the entire technical setup for you. You\'ll get a simple walkthrough video and everything runs in the background. If you can send a text message, you can manage this system.',
    },
    {
      question: 'Does this work for group programs and courses too?',
      answer:
        'Yes. Whether you run 1:1 coaching, group programs, masterminds, or online courses, the system adapts to your model. We build enrollment sequences, cohort-based onboarding, and program-specific follow-up flows.',
    },
    {
      question: 'What tools does this integrate with?',
      answer:
        'We integrate with Calendly, Cal.com, Acuity, Zoom, Google Calendar, Stripe, PayPal, and most coaching platforms. The system connects your existing tools into one seamless workflow.',
    },
    {
      question: 'How do you reduce discovery call no-shows?',
      answer:
        'The system sends a strategic sequence of confirmations and reminders — including a same-day reminder with a personal touch. It also pre-qualifies leads so only serious prospects book calls, which naturally reduces no-shows by filtering out tire-kickers.',
    },
    {
      question: 'Can I use this alongside my existing funnel?',
      answer:
        'Yes — we build on top of what\'s already working. If you have a lead magnet, webinar funnel, or social media strategy driving leads, we add the automation layer that captures, qualifies, and converts those leads instead of letting them slip through the cracks.',
    },
  ],
  pricing: {
    starter: {
      price: '$19',
      features: [
        '1 discovery call booking workflow',
        'Lead magnet delivery email sequence',
        'No-show reminder templates',
        'Basic intake form template',
        'Email support',
        'Onboarding video',
      ],
    },
    pro: {
      price: '$149',
      features: [
        'Full lead-to-client automation system',
        'Multi-channel follow-up (Email + WhatsApp + SMS)',
        'Discovery call booking with no-show prevention',
        'Complete client onboarding automation',
        'Testimonial & referral collection sequences',
        'Priority support',
        'Monthly optimization & updates',
      ],
    },
    enterprise: {
      features: [
        'Everything in Pro',
        'Custom workflow design for your coaching model',
        'Group program & course enrollment automation',
        'Multi-coach or team setup',
        'Dedicated onboarding call',
        'Direct Slack/WhatsApp support',
      ],
    },
  },
};
