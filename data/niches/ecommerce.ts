import { NicheData } from '@/types/niche';

export const ecommerce: NicheData = {
  slug: 'ecommerce',
  name: 'Ecommerce',
  icon: '🛒',
  color: '#F59E0B',
  headline: 'Recover Abandoned Carts and Turn One-Time Buyers Into Repeat Customers',
  subheadline:
    'AI-driven workflows that rescue lost revenue, automate post-purchase engagement, and build a repeat-purchase engine — so every visitor is worth more.',
  painPoints: [
    '70% of shopping carts are abandoned and most stores have zero recovery system beyond a single generic email',
    'Less than 20% of first-time buyers ever come back for a second purchase because there\'s no post-purchase nurture in place',
    'Only 5-10% of happy customers leave reviews because nobody asks them at the right moment with the right message',
    'Email and SMS campaigns are one-size-fits-all blasts instead of behavior-triggered, personalized sequences that actually convert',
  ],
  workflow: [
    {
      step: '01',
      label: 'Customer Browses — Product views and engagement signals tracked in real time',
    },
    {
      step: '02',
      label: 'Cart Abandoned — AI triggers personalized recovery sequence within minutes',
    },
    {
      step: '03',
      label: 'Purchase Recovered — Smart incentives and urgency convert abandoned carts into orders',
    },
    {
      step: '04',
      label: 'Repeat Revenue — Post-purchase flows drive reviews, referrals, and reorders',
    },
  ],
  deliverables: [
    'Multi-step abandoned cart recovery system (Email + SMS + WhatsApp)',
    'Post-purchase engagement & review collection sequences',
    'Behavior-triggered product recommendation engine',
    'Win-back campaigns for lapsed customers',
    'VIP customer segmentation & loyalty automation',
    'Automated shipping & delivery update notifications',
    'Referral program automation with tracked rewards',
    'Revenue recovery & retention analytics dashboard',
  ],
  beforeAfter: {
    before: [
      '70% of carts abandoned with only a single recovery email sent',
      'First-time buyers vanish — no system to bring them back',
      'Reviews trickle in passively with no active collection strategy',
      'Generic email blasts with low open rates and conversions',
      'No idea which customers are most valuable or at risk of churning',
    ],
    after: [
      'Multi-step recovery sequences recapture 15-25% of abandoned carts',
      'Automated post-purchase flows drive 2nd and 3rd purchases within 60 days',
      'Review requests sent at the perfect moment yield 3-5x more reviews',
      'Behavior-triggered messages with 40%+ open rates and 8%+ click rates',
      'AI segments customers by lifetime value and predicts churn before it happens',
    ],
  },
  faq: [
    {
      question: 'Which ecommerce platforms do you support?',
      answer:
        'Our automations work with Shopify, WooCommerce, BigCommerce, and Magento. We also integrate with popular tools like Klaviyo, Omnisend, Postscript, and Gorgias to enhance your existing stack.',
    },
    {
      question: 'How is this different from Klaviyo or Mailchimp?',
      answer:
        'We don\'t replace your email platform — we supercharge it. We design, build, and optimize the actual automation workflows, segmentation logic, and message sequences. You get a complete revenue-recovery system, not just a tool to send emails.',
    },
    {
      question: 'Will aggressive cart recovery annoy my customers?',
      answer:
        'No. Our sequences are designed with smart timing, frequency caps, and escalating value — not spam. Customers receive helpful, relevant messages at the right moments. We A/B test everything to find the sweet spot between persistence and respect.',
    },
    {
      question: 'What kind of revenue increase can I expect?',
      answer:
        'Most ecommerce brands recover an additional 15-25% of abandoned cart revenue and see a 20-40% increase in repeat purchase rates within the first 90 days. Results vary by traffic volume and product type, but the ROI is typically 10-30x.',
    },
    {
      question: 'Can this work for subscription-based ecommerce?',
      answer:
        'Absolutely. We build specialized workflows for subscription brands including trial-to-paid conversion, churn prevention, subscription pause recovery, and upgrade/cross-sell sequences tailored to recurring revenue models.',
    },
  ],
  pricing: {
    starter: {
      price: '$19',
      features: [
        '1 cart recovery email sequence',
        'Post-purchase thank-you template',
        'Review request email script',
        'Basic segmentation guide',
        'Email support',
        'Onboarding video',
      ],
    },
    pro: {
      price: '$149',
      features: [
        'Full abandoned cart recovery system (Email + SMS + WhatsApp)',
        'Post-purchase engagement & review collection flows',
        'Win-back campaigns for lapsed customers',
        'Customer segmentation & VIP automation',
        'Product recommendation sequences',
        'Priority support',
        'Monthly optimization & A/B testing',
      ],
    },
    enterprise: {
      features: [
        'Everything in Pro',
        'Custom workflow design for your catalog',
        'Multi-store & international support',
        'Advanced analytics & revenue attribution',
        'Dedicated onboarding call',
        'Direct Slack/WhatsApp support',
      ],
    },
  },
};
