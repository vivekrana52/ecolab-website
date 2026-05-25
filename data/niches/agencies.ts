import { NicheData } from '@/types/niche';

export const agencies: NicheData = {
  slug: 'agencies',
  name: 'Agencies',
  icon: '🚀',
  color: '#8B5CF6',
  headline: 'Stop the Feast-or-Famine Cycle and Build a Predictable Client Pipeline',
  subheadline:
    'AI-powered systems that attract, qualify, and close new clients on autopilot — while automating proposals, onboarding, and upsells so you scale without burning out.',
  painPoints: [
    'Revenue swings wildly month to month because client acquisition depends entirely on referrals and the founder\'s personal network',
    'Writing custom proposals takes 3-5 hours each and over half of them go nowhere — draining senior talent on unpaid work',
    'Clients churn silently after 6 months because there\'s no proactive reporting or value reinforcement system in place',
    'Existing clients are sitting on untapped revenue but there\'s no systematic upsell or cross-sell process to capture it',
  ],
  workflow: [
    {
      step: '01',
      label: 'Prospect Inquires — Via your website, LinkedIn, referral, or ad campaign',
    },
    {
      step: '02',
      label: 'AI Qualifies — Budget, scope, timeline, and fit scored automatically',
    },
    {
      step: '03',
      label: 'Proposal Sent — Auto-generated proposal tailored to their needs within hours',
    },
    {
      step: '04',
      label: 'Client Onboarded — Automated welcome sequence, kickoff scheduling, and asset collection',
    },
  ],
  deliverables: [
    'Inbound lead capture & qualification automation system',
    'AI-assisted proposal generation workflow',
    'Automated client onboarding & kickoff sequences',
    'Monthly client reporting templates & delivery automation',
    'Upsell & cross-sell trigger campaigns',
    'Client satisfaction check-ins & churn prevention alerts',
    'Testimonial & case study request automation',
    'Pipeline & revenue forecasting dashboard',
  ],
  beforeAfter: {
    before: [
      'Revenue depends on referrals — no predictable lead flow',
      'Proposals take hours to write and most never close',
      'New clients wait days for onboarding and first deliverables',
      'Clients leave quietly — no early warning system for churn',
      'Existing clients never hear about additional services you offer',
    ],
    after: [
      'Automated lead gen fills your pipeline with qualified prospects monthly',
      'AI-assisted proposals go out same-day with 2x higher close rates',
      'New clients are onboarded instantly with automated welcome flows',
      'Proactive check-ins and reporting keep clients engaged and retained',
      'Automated upsell sequences increase average client value by 30%+',
    ],
  },
  faq: [
    {
      question: 'Will this work for my type of agency?',
      answer:
        'Yes. We\'ve built automation systems for digital marketing agencies, creative studios, SEO firms, web development shops, PR agencies, and consulting firms. The workflows are customized to your specific service model and sales cycle.',
    },
    {
      question: 'How does the proposal automation work?',
      answer:
        'When a lead is qualified, the system pulls their answers from the intake form and auto-generates a tailored proposal using your templates, pricing tiers, and service packages. You review and send — cutting proposal time from hours to minutes.',
    },
    {
      question: 'Can this integrate with my project management tools?',
      answer:
        'Absolutely. We integrate with Asana, Monday.com, ClickUp, Notion, Trello, and most PM tools. When a client is signed, tasks, timelines, and team assignments can be auto-created in your project management system.',
    },
    {
      question: 'How do you prevent client churn?',
      answer:
        'The system monitors engagement signals — email opens, meeting attendance, feedback responses, and billing patterns. When a client shows disengagement signs, it triggers proactive outreach from your account team before the client decides to leave.',
    },
    {
      question: 'What if I already have a CRM?',
      answer:
        'Great — we build on top of it. We work with HubSpot, Pipedrive, Close, Salesforce, and others. The automation layer enhances your CRM with intelligent workflows, not replaces it.',
    },
  ],
  pricing: {
    starter: {
      price: '$19',
      features: [
        '1 lead qualification workflow',
        'Proposal email templates',
        'Client onboarding checklist',
        'Basic follow-up sequence',
        'Email support',
        'Onboarding video',
      ],
    },
    pro: {
      price: '$149',
      features: [
        'Full lead-to-client automation system',
        'AI-assisted proposal generation workflow',
        'Multi-channel follow-up (Email + LinkedIn + WhatsApp)',
        'Client onboarding automation',
        'Upsell & cross-sell trigger campaigns',
        'Priority support',
        'Monthly optimization & updates',
      ],
    },
    enterprise: {
      features: [
        'Everything in Pro',
        'Custom workflow design for your agency model',
        'Multi-team & multi-service line support',
        'White-label client reporting',
        'Dedicated onboarding call',
        'Direct Slack/WhatsApp support',
      ],
    },
  },
};
