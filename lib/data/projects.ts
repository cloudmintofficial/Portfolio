import type { Project } from './types';

export const projects: Project[] = [
  {
    id: '01',
    title: 'NeuralDash',
    category: 'AI',
    shortDesc: 'AI-powered analytics dashboard with real-time insights.',
    description:
      'A real-time analytics dashboard powered by machine learning models. Processes streaming data to surface actionable insights, anomaly detection, and automated reporting — built for scale-ups that need to move fast on data.',
    tags: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'WebSockets'],
    featured: true,
    year: '2026',
  },
  {
    id: '02',
    title: 'Verdant Studio',
    category: 'Design',
    shortDesc: 'Brand identity & design system for a sustainable fashion label.',
    description:
      'Complete brand identity project for an eco-conscious fashion startup. Developed the visual language, design system, and digital presence from zero — including logo, typography, colour palette, packaging guidelines, and website.',
    tags: ['Brand Identity', 'Figma', 'Design Systems', 'Web'],
    featured: true,
    year: '2026',
  },
  {
    id: '03',
    title: 'Orbit SaaS',
    category: 'Full Stack',
    shortDesc: 'Multi-tenant SaaS platform for project management teams.',
    description:
      'A multi-tenant SaaS platform enabling distributed teams to manage projects, track milestones, and collaborate in real time. Features role-based access control, Kanban boards, and Gantt chart views — built on Next.js App Router with Supabase.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind', 'RBAC'],
    featured: true,
    year: '2025',
  },
  {
    id: '04',
    title: 'PulseHealth',
    category: 'Web',
    shortDesc: 'Telemedicine portal connecting patients with specialists.',
    description:
      'A telemedicine portal enabling patients to book appointments, conduct video consultations, and receive prescriptions digitally. HIPAA-compliant architecture with end-to-end encryption and a mobile-first experience.',
    tags: ['React', 'Node.js', 'WebRTC', 'Encryption', 'Mobile-first'],
    featured: false,
    year: '2025',
  },
  {
    id: '05',
    title: 'AgentFlow',
    category: 'AI',
    shortDesc: 'LLM agent orchestration platform for business automation.',
    description:
      'An LLM agent orchestration platform that lets non-technical teams build and deploy AI agents for business automation — from lead qualification to document processing. Visual workflow builder with natural language task definition.',
    tags: ['LLM APIs', 'Python', 'React', 'Automation', 'Node.js'],
    featured: false,
    year: '2026',
  },
  {
    id: '06',
    title: 'Slate Commerce',
    category: 'Full Stack',
    shortDesc: 'Headless e-commerce engine for a D2C furniture brand.',
    description:
      'Headless e-commerce built for a direct-to-consumer furniture brand. Custom product configurator, 3D preview mode, and a streamlined checkout optimised for high-ticket conversion — resulting in a 38% uplift in completed purchases.',
    tags: ['Next.js', 'Shopify', 'Three.js', 'Framer Motion', 'Tailwind'],
    featured: false,
    year: '2025',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
