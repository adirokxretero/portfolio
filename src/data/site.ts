export const site = {
  title: 'Adithya M — Portfolio',
  description:
    'Adithya M — UI/UX designer & vibe coder based in Bangalore. Designing with AI, exploring UX, and shipping ideas fast. Open to work.',
  url: 'https://adithya-m.in',
  name: 'Adithya Muralitharan',
  shortName: 'Adithya M',
  email: 'adithyamuralitharan@gmail.com',
  location: 'Bangalore, Karnataka, India',
  themeColor: '#050505',
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
  status: 'B.E. ISE Graduate · Open to Work',
  firstName: 'ADITHYA',
  surnamePlain: '',
  surnameAccent: 'MURALITHARAN',
  roles: [
    'UI/UX Designer',
    'Vibe Coder',
    'AI Design Explorer',
    'UX Thinker',
    'B.E. ISE Graduate',
  ],
  location: 'Bangalore, Karnataka',
  coords: '12.97° N, 77.59° E',
  stats: [
    { count: 10, label: 'Skills Mastered' },
    { count: 2, label: 'AI Projects Built' },
    { count: 2026, label: 'Class Of' },
  ],
};

export const tickerItems = [
  'UI/UX Design',
  'UX Research',
  'Designing with AI',
  'Vibe Coding',
  'Open to Work',
  'Bangalore, India',
];

export const about = {
  chips: [
    'UI/UX Design',
    'UX Research',
    'Designing with AI',
    'Vibe Coding',
    'Product Thinking',
    'Content & Craft',
  ],
  quickInfo: [
    { key: 'Status', value: 'Open to Work', live: true },
    { key: 'Degree', value: 'B.E. — ISE' },
    { key: 'College', value: 'RNSIT, Bangalore' },
    { key: 'Batch', value: '2022 – 2026' },
    { key: 'Location', value: 'Bangalore, KA' },
  ],
  experience: [
    { key: 'Role', value: 'PED Intern' },
    { key: 'Division', value: 'Product Engineering Division' },
    { key: 'Company', value: 'Vertex Power Solutions' },
    { key: 'Period', value: 'Jan – Jun 2026' },
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
    image: '/assets/dishcovery-preview.jpg',
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
    image: '/assets/resumeforge-preview.jpg',
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
    period: '2022 – 2026',
    title: 'RNS Institute of Technology',
    subtitle: 'B.E. in Information Science and Engineering',
    badge: 'Graduated · Class of 2026',
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
    title: 'Vibe Coding',
    text: "I'm not a hardcoder — I build by feel. I use AI as a creative partner, ship ideas fast, and care more about how something looks and feels than writing every line from scratch.",
  },
  {
    title: 'Designing with AI',
    text: 'Love exploring new AI tools for design — generating layouts, iterating on concepts, and turning half-baked ideas into something visual before the coffee goes cold.',
  },
  {
    title: 'UX Research',
    text: "Good design starts with people. I enjoy digging into why users do what they do — flows, friction, and those tiny moments that make an interface feel right.",
  },
  {
    title: 'UI Exploration',
    text: 'Scrolling Dribbble, saving references, sketching weird layouts for apps that may never ship. Sharpens the eye and keeps the taste sharp.',
  },
  {
    title: 'Shipping Ideas',
    text: "There's nothing better than taking a random idea from my notes app to a working prototype. Small builds, fast loops, real feedback.",
  },
  {
    title: 'Driving',
    text: 'Long drives clear my head. New routes, new cities, no laptop — just space to think about the next thing I want to build.',
  },
  {
    title: 'Gaming',
    text: 'From fast shooters to story-driven games — playtime is where I unwind and quietly steal UX ideas from games that just feel good.',
  },
  {
    title: 'Music',
    text: 'Always something playing while I design, vibe-code, or zone out. The right playlist makes the whole session hit different.',
  },
];

export const contactInfo = [
  { key: 'Email', value: site.email, href: `mailto:${site.email}` },
  { key: 'WhatsApp', value: 'Start a chat', href: socials.whatsapp },
  { key: 'Location', value: 'Bangalore, Karnataka, India' },
  { key: 'Degree', value: 'B.E. ISE · RNSIT · Class of 2026' },
  { key: 'Open To', value: 'Full-time Roles, Projects & Collabs' },
];
