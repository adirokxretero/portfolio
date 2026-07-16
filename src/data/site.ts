export const site = {
  title: 'Adithya M — Portfolio',
  description:
    'Adithya M — UI/UX Designer & Creative Developer based in Bangalore. Final year ISE student at RNSIT building at the intersection of AI and design.',
  url: 'https://adithya-m.in',
  name: 'Adithya Muralitharan',
  shortName: 'Adithya M',
  email: 'adithyamuralitharan@gmail.com',
  location: 'Bangalore, Karnataka, India',
  themeColor: '#0c0b09',
};

export const socials = {
  linkedin: 'https://www.linkedin.com/in/adithya-m23',
  github: 'https://github.com/adirokxretero',
  whatsapp: 'https://wa.me/9113232003?text=Hi%20Adithya!',
};

export const navItems = [
  { num: '01', label: 'Home', href: '#hero' },
  { num: '02', label: 'About', href: '#about' },
  { num: '03', label: 'Work', href: '#work' },
  { num: '04', label: 'Skills', href: '#skills' },
  { num: '05', label: 'Education', href: '#education' },
  { num: '06', label: 'More', href: '#more' },
  { num: '07', label: 'Contact', href: '#contact' },
];

export const hero = {
  status: 'PED Intern · Vertex Power Solutions',
  firstName: 'ADITHYA',
  surnamePlain: 'MURALI',
  surnameAccent: 'THARAN',
  roles: [
    'UI/UX Designer',
    'Creative Developer',
    'AI Enthusiast',
    'Final Year ISE Engineer',
    'Problem Solver',
  ],
  location: 'Bangalore, Karnataka',
  coords: '12.97° N, 77.59° E',
  stats: [
    { count: 10, label: 'Skills Mastered' },
    { count: 2, label: 'AI Projects Built' },
    { count: 2026, label: 'Graduating Year' },
  ],
};

export const tickerItems = [
  'UI/UX Design',
  'AI & LLM Exploration',
  'Web App Development',
  'Open to Opportunities',
  'RNS Institute of Technology',
  'Bangalore, India',
];

export const about = {
  chips: [
    'UI/UX Design',
    'AI & LLM',
    'Web Development',
    'Product Testing',
    'Critical Thinking',
    'Content Development',
  ],
  quickInfo: [
    { key: 'Status', value: 'Final Year Student' },
    { key: 'College', value: 'RNSIT, Bangalore' },
    { key: 'Degree', value: 'B.E. — ISE' },
    { key: 'Batch', value: '2022 – 2026' },
    { key: 'Location', value: 'Bangalore, KA' },
  ],
  currentRole: [
    { key: 'Position', value: 'Intern' },
    { key: 'Division', value: 'Product Engineering Division' },
    { key: 'Company', value: 'Vertex Power Solutions' },
    { key: 'Since', value: '20 Jan 2026' },
  ],
};

export interface Project {
  index: string;
  name: string;
  tagline: string;
  meta: string[];
  description: string;
  detail: string;
  stack: string[];
  image: string;
  imageAlt: string;
  github: string;
  live?: string;
  notLive?: boolean;
  team?: string;
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'DISHCOVERY',
    tagline: 'AI-Powered Recipe & Diet Planner',
    meta: ['AI / Full Stack', 'Aug – Nov 2025'],
    description:
      'Personalized meal planning with allergen filters and nutritional insights, powered by Cohere AI.',
    detail:
      'Built secure auth, BMI computation and goal-setting logic. Cohere generates personalised meal plans with diet and allergen filters.',
    stack: ['Python', 'Cohere API', 'Firebase', 'BMI Engine', 'Allergen Filters'],
    image: '/assets/dishcovery-preview.png',
    imageAlt: 'Dishcovery — AI-Powered Recipe & Diet Planner',
    github: 'https://github.com/AakankshSK/DishCovery',
    notLive: true,
    team: 'Team project · 4 members',
  },
  {
    index: '02',
    name: 'RESUMEFORGE',
    tagline: 'Professional Resume Builder',
    meta: ['AI / React', '2026'],
    description:
      'Resume builder with live preview, 3 templates, photo upload and one-click PDF export.',
    detail:
      'Live preview as you type, three professional templates, auto-save via localStorage, Cohere AI content suggestions and PDF export.',
    stack: ['React 19', 'Vite 7', 'Tailwind CSS', 'Cohere AI', 'html2pdf.js', 'Vercel'],
    image: '/assets/resumeforge-preview.png',
    imageAlt: 'ResumeForge — Professional Resume Builder',
    github: 'https://github.com/adirokxretero/resume-builder',
    live: 'https://resume-builder-pi-ashy-71.vercel.app',
  },
];

export const skillGroups = [
  {
    title: 'Design & UI',
    skills: [
      { name: 'UI / UX Design', level: 90 },
      { name: 'Figma', level: 85 },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'Web App Development', level: 72 },
      { name: 'Firebase & Backend', level: 55 },
    ],
  },
  {
    title: 'AI & Tools',
    skills: [{ name: 'AI & LLM Exploration', level: 70 }],
  },
  {
    title: 'Core Skills',
    skills: [
      { name: 'Critical Thinking', level: 85 },
      { name: 'Product Testing', level: 70 },
      { name: 'Content Development', level: 68 },
    ],
  },
];

export const education = [
  {
    period: '2022 – Present',
    title: 'RNS Institute of Technology',
    subtitle: 'B.E. in Information Science and Engineering',
    badge: 'Currently Enrolled',
  },
  {
    period: '17 Mar 2025',
    title: 'Learn Generative AI',
    subtitle: 'EduBridge Learning Pvt. Ltd.',
    badge: 'Certified',
  },
  {
    period: '24 Mar 2025',
    title: 'Intro to Networking & Cloud Computing',
    subtitle: 'Microsoft via Coursera',
    badge: 'Certified',
  },
];

export const hobbies = [
  {
    title: 'Driving',
    text: 'Love hitting the open road and exploring new places. Long drives help me reset, think clearly, and stay inspired.',
  },
  {
    title: 'Discovering Places',
    text: 'Always curious about new spots — local cafes, hidden routes, or new cities. Exploring keeps my creativity fresh.',
  },
  {
    title: 'Experimenting with AI',
    text: 'Playing around with LLMs, new tools and AI products just out of curiosity. Not for work — purely for the fun of it.',
  },
  {
    title: 'UI Exploration',
    text: "Browsing Dribbble, studying interfaces, and sketching ideas for apps I'll maybe never build — but it sharpens the eye.",
  },
  {
    title: 'Building Things',
    text: "There's something satisfying about taking an idea from zero to something that actually works, no matter how small.",
  },
  {
    title: 'Learning Constantly',
    text: "Whether it's a new framework, a design principle, or just a random YouTube rabbit hole — always learning something new.",
  },
];

export const contactInfo = [
  { key: 'Email', value: site.email, href: `mailto:${site.email}` },
  { key: 'WhatsApp', value: 'Start a chat', href: socials.whatsapp },
  { key: 'Location', value: 'Bangalore, Karnataka, India' },
  { key: 'College', value: 'RNSIT — B.E. ISE · 2022–2026' },
  { key: 'Open To', value: 'Internships, Projects & Collabs' },
];
