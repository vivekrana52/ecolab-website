import { NicheData } from '@/types/niche';

export const gyms: NicheData = {
  slug: 'gyms',
  name: 'Gyms & Fitness',
  icon: '💪',
  color: '#10B981',
  headline: 'Turn Every Free Trial Into a Paying Member on Autopilot',
  subheadline:
    'AI-powered automation that captures leads, fills trial classes, reduces no-shows, and converts visitors into long-term members — without your front desk lifting a finger.',
  painPoints: [
    'Over 40% of website and Instagram inquiries never get a follow-up because staff are busy on the floor',
    'Free trial no-show rates hit 50%+ because there\'s no automated reminder or confirmation system in place',
    'Members quietly cancel after 3 months because nobody tracks engagement drop-off or reaches out proactively',
    'Front desk staff waste hours every week on manual texts, call-backs, and rescheduling instead of member experience',
  ],
  workflow: [
    {
      step: '01',
      label: 'Lead Signs Up — Via your website, Instagram DM, Google ad, or walk-in form',
    },
    {
      step: '02',
      label: 'AI Qualifies — Fitness goals, schedule availability, and membership interest assessed',
    },
    {
      step: '03',
      label: 'Trial Booked — Automated scheduling with confirmation & reminder sequences',
    },
    {
      step: '04',
      label: 'Membership Converted — Post-trial follow-up drives sign-ups and reduces churn',
    },
  ],
  deliverables: [
    'Multi-channel lead capture system (website, social, ads, walk-in)',
    'Automated trial booking & no-show prevention workflow',
    'AI-powered post-trial membership conversion sequences',
    'Member engagement tracking & churn prevention alerts',
    'Reactivation campaigns for lapsed & frozen members',
    'Automated class booking confirmations & reminders',
    'Referral program automation with reward tracking',
    'Monthly KPI dashboard (leads, trials, conversions, churn)',
  ],
  beforeAfter: {
    before: [
      'Leads from Instagram and Google sit unanswered for hours',
      '50%+ of trial bookings are no-shows with no reminder system',
      'Members ghost after 3 months — no early warning signs tracked',
      'Front desk manually texts, calls, and reschedules all day long',
      'Zero system for getting referrals from happy members',
    ],
    after: [
      'Every inquiry gets a personalized response within 2 minutes',
      'Automated reminders cut no-show rates by 60% or more',
      'AI flags at-risk members before they cancel and triggers outreach',
      'Booking, reminders, and follow-ups run 100% on autopilot',
      'Automated referral requests sent at peak satisfaction moments',
    ],
  },
  faq: [
    {
      question: 'Does this integrate with my gym management software?',
      answer:
        'Yes. We integrate with Mindbody, Glofox, Gymdesk, PushPress, and most other gym management platforms. The automation layer works on top of your existing system — no need to switch tools.',
    },
    {
      question: 'Will this feel robotic to my members?',
      answer:
        'Not at all. Every message is written in your gym\'s voice and tone. Members think they\'re hearing from your team directly. We use natural, conversational language — never generic bot-speak.',
    },
    {
      question: 'How does the churn prevention actually work?',
      answer:
        'The system tracks engagement signals like check-in frequency, class booking patterns, and app usage. When a member\'s activity drops below their normal baseline, it triggers a personalized re-engagement sequence before they cancel.',
    },
    {
      question: 'Can I use this for multiple locations?',
      answer:
        'Absolutely. The Enterprise plan supports multi-location setups with location-specific workflows, separate reporting dashboards, and centralized management for your whole gym network.',
    },
    {
      question: 'What kind of results should I expect?',
      answer:
        'Most gyms see a 30-50% increase in trial-to-member conversion rates and a measurable drop in monthly churn within the first 60 days. The automated follow-up alone typically recovers 20+ leads per month that would have been lost.',
    },
  ],
  pricing: {
    starter: {
      price: '$19',
      features: [
        '1 lead capture workflow',
        'Trial booking email templates',
        'No-show reminder scripts',
        'Basic follow-up sequence',
        'Email support',
        'Onboarding video',
      ],
    },
    pro: {
      price: '$149',
      features: [
        'Full lead-to-member automation system',
        'Multi-channel follow-up (WhatsApp + Email + SMS)',
        'Trial booking with no-show prevention',
        'Churn prediction & re-engagement sequences',
        'Lapsed member reactivation campaigns',
        'Priority support',
        'Monthly optimization & updates',
      ],
    },
    enterprise: {
      features: [
        'Everything in Pro',
        'Custom workflow design for your gym model',
        'Multi-location support & centralized reporting',
        'White-label member communications',
        'Dedicated onboarding call',
        'Direct Slack/WhatsApp support',
      ],
    },
  },
};
