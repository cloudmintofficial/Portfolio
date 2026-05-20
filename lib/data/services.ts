import type { Service } from './types';

export const services: Service[] = [
  {
    id: '01',
    title: 'Web Development',
    shortDesc: 'Fast, scalable sites built on modern stacks.',
    description:
      'We build high-performance web applications using Next.js, React, and modern backend stacks. Every project is optimised for Core Web Vitals, accessibility, and long-term maintainability — not just launch day.',
    icon: 'Code2',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    featured: true,
  },
  {
    id: '02',
    title: 'UI/UX Design',
    shortDesc: 'Interfaces that guide users and convert.',
    description:
      'From wireframes to production-ready design systems, we craft interfaces that feel intuitive and look exceptional. We use Figma to build scalable component libraries that hand off cleanly to engineering.',
    icon: 'Palette',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    featured: true,
  },
  {
    id: '03',
    title: 'AI Integration',
    shortDesc: 'Embed intelligence into your product layer.',
    description:
      'We integrate LLM APIs, build custom agents, and design automation pipelines that make your product smarter without adding complexity for your users. From chatbots to intelligent workflows.',
    icon: 'BrainCircuit',
    tags: ['LLM APIs', 'Agents', 'Automation', 'Python'],
    featured: true,
  },
  {
    id: '04',
    title: 'Brand & Identity',
    shortDesc: 'Visual identity that stands out and scales.',
    description:
      'A brand is more than a logo. We craft complete visual identities — logo, typography, colour systems, motion principles — and document them in brand guidelines that your whole team can use consistently.',
    icon: 'Sparkles',
    tags: ['Logo Design', 'Typography', 'Brand Guidelines', 'Motion'],
    featured: true,
  },
  {
    id: '05',
    title: 'SEO & Performance',
    shortDesc: 'Rank higher. Load faster. Convert better.',
    description:
      'Technical SEO, Core Web Vitals optimisation, and structured data implementation that moves the needle. We audit, fix, and monitor — so your site earns organic traffic while your competitors buy it.',
    icon: 'TrendingUp',
    tags: ['Core Web Vitals', 'Technical SEO', 'Analytics', 'Structured Data'],
    featured: true,
  },
  {
    id: '06',
    title: 'Maintenance & Support',
    shortDesc: 'Your site, always running at its best.',
    description:
      'Ongoing support, dependency updates, security patches, performance monitoring, and feature iterations. We act as your extended engineering team so you can focus on growing your business.',
    icon: 'Shield',
    tags: ['Monitoring', 'Updates', 'Security', 'Performance'],
    featured: true,
  },
];

export const featuredServices = services.filter((s) => s.featured);
