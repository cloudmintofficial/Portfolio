import type { FAQItem } from './types';

export const faqs: FAQItem[] = [
  {
    id: '01',
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope. A focused marketing site takes 2–4 weeks. A full product — design system, web app, and backend — typically runs 6–12 weeks. We break every project into clear milestones so you always know where things stand.',
    category: 'Process',
    featured: true,
  },
  {
    id: '02',
    question: 'How does your pricing work?',
    answer:
      'We don\'t publish fixed rates because scope varies widely. After a short discovery conversation, we share a transparent proposal with phases, deliverables, and costs. No hidden fees. You\'ll know exactly what you\'re getting before signing anything.',
    category: 'Pricing',
    featured: true,
  },
  {
    id: '03',
    question: 'What tech stack do you work with?',
    answer:
      'Our primary stack is Next.js, React, TypeScript, and Tailwind CSS on the frontend — backed by Node.js, PostgreSQL, and Supabase. For AI projects we use Python with LLM APIs (OpenAI, Anthropic). We choose the right tool for each problem, not the trendy one.',
    category: 'Tech',
    featured: true,
  },
  {
    id: '04',
    question: 'Do you work with early-stage startups?',
    answer:
      'Yes — and we enjoy it. We\'ve helped founders go from napkin sketch to live product. We\'re used to working with limited budgets and high ambiguity, and we know how to move fast without cutting corners that matter.',
    category: 'General',
    featured: true,
  },
  {
    id: '05',
    question: 'Can you handle both design and development?',
    answer:
      'That\'s exactly our model. Cloud Mint has designers and engineers working together from day one — no handoff friction, no translation errors. Your product is designed to be built, not just to look good in a Figma file.',
    category: 'Process',
    featured: false,
  },
  {
    id: '06',
    question: 'Do you offer post-launch support?',
    answer:
      'Yes. We offer monthly retainers for ongoing maintenance, feature development, performance monitoring, and updates. Many clients stay with us long-term as their product evolves.',
    category: 'Pricing',
    featured: false,
  },
  {
    id: '07',
    question: 'What information do you need to get started?',
    answer:
      'A brief on your goals, target audience, any existing brand assets, your timeline, and a rough sense of budget. The more context you can share upfront, the sharper our proposal will be. We\'ll guide you through the rest.',
    category: 'Process',
    featured: false,
  },
  {
    id: '08',
    question: 'Do you work with clients outside India?',
    answer:
      'We do. We\'ve worked with clients across India, the US, and the UK. Our workflow is async-friendly — clear milestones, regular written updates, and video calls scheduled around your timezone.',
    category: 'General',
    featured: false,
  },
  {
    id: '09',
    question: 'Do you build mobile apps?',
    answer:
      'Our core focus is web — both marketing sites and full web applications. We build mobile-first web experiences that work beautifully on any device. For native iOS/Android apps, we can advise and connect you with the right specialists.',
    category: 'Tech',
    featured: false,
  },
  {
    id: '10',
    question: 'How do you handle revisions and feedback?',
    answer:
      'Each phase includes a structured feedback round. We use Figma comments for design reviews and GitHub discussions for code. We\'re not precious about changes — we want the output to be right, not just done.',
    category: 'Process',
    featured: false,
  },
];

export const featuredFaqs = faqs.filter((f) => f.featured);
