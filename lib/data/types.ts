// ─── Data Types ───────────────────────────────────────────────────

export type TeamMember = {
  slug: string;
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  longBio: string;
  skills: string[];
  accent: string;
  status: 'ACTIVE';
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  initials: string;
};

export type Project = {
  id: string;
  title: string;
  category: 'Web' | 'AI' | 'Design' | 'Full Stack';
  description: string;
  shortDesc: string;
  tags: string[];
  link?: string;
  featured: boolean;
  year: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  shortDesc: string;
  icon: string;        // Lucide icon component name
  tags: string[];
  featured: boolean;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: 'Process' | 'Pricing' | 'Tech' | 'General';
  featured: boolean;   // shown on homepage teaser (max 4)
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  service?: string;
  budget?: string;
};

export type NavLink = {
  label: string;
  href: string;
  id: string;
};
