export const EMAIL = 'sowmyapinninti724@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/sowmyapinninti'
const ORIGINAL_SITE = 'https://sowmyapinninti.github.io/Sowmya-Portfolio'

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export type ProjectVisual = 'rapido' | 'dashboard' | 'insurance' | 'ai'

export const PROJECTS: {
  domain: string
  category: string
  title: string
  description: string
  visual: ProjectVisual
  href?: string
}[] = [
  {
    domain: 'Mobility / SaaS',
    category: 'Product strategy • SaaS',
    title: 'Rapido Pro',
    description:
      'A premium SaaS product concept exploring how Rapido could create an additional recurring revenue stream while improving convenience and business intelligence for Captains and Drivers.',
    visual: 'rapido',
    href: `${ORIGINAL_SITE}/rapido.html`,
  },
  {
    domain: 'Data / Product',
    category: 'Data • Product insights',
    title: 'Customer Feedback Dashboard',
    description:
      'A product insight dashboard designed to organise customer feedback and identify recurring themes that can support product decisions.',
    visual: 'dashboard',
    href: `${ORIGINAL_SITE}/CloudfarePrototype.html`,
  },
  {
    domain: 'Fintech / Digital',
    category: 'Fintech • Digital product',
    title: 'Digital Insurance Product',
    description:
      'Product thinking applied to digital insurance services, customer journeys and technology-enabled experiences.',
    visual: 'insurance',
  },
  {
    domain: 'AI / Product',
    category: 'Product management • AI',
    title: 'AI in SaaS Product Management',
    description:
      'Exploring how artificial intelligence can support backlog prioritisation, customer feedback analysis and roadmap planning.',
    visual: 'ai',
  },
]

export const EXPERIENCE = [
  {
    period: '2023 — 2024',
    role: 'Full Stack Developer',
    org: 'TCS',
    description:
      'Worked on digital insurance services using Java, Spring Boot, SQL, JavaScript and web technologies. Contributed to customer-facing features, APIs and business requirements.',
  },
  {
    period: '2025 — Present',
    role: 'MBA — Business Administration',
    org: 'University of Chester',
    description:
      'Developing knowledge across strategy, business intelligence, marketing analytics, financial decision-making and organisational behaviour.',
  },
  {
    period: 'Present',
    role: 'Product Management Focus',
    org: 'Product • Data • Technology',
    description:
      'Building product-focused projects and developing practical experience across product discovery, customer insights, prioritisation and digital product strategy.',
  },
]

export const SKILLS = [
  {
    title: 'Product Management',
    description: 'Product discovery, requirements, prioritisation, roadmaps and stakeholder collaboration.',
  },
  {
    title: 'Data & Analytics',
    description: 'Customer insights, feedback analysis, business intelligence and data-informed decision-making.',
  },
  {
    title: 'Technology',
    description: 'Java, Spring Boot, SQL, JavaScript, HTML, CSS and API-based systems.',
  },
  {
    title: 'Product Thinking',
    description:
      'Customer problems, experimentation, prioritisation and translating ideas into practical solutions.',
  },
]
