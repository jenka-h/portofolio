import carbonlinkImg from '../assets/carbonlink.jpg';
import skillscoutImg from '../assets/skillscout.png';

export const profile = {
  displayName: 'Jennifer Khang',
  role: 'Informatics Engineering student',
  resumeUrl: 'https://drive.google.com/file/d/12L3YfQ0wnL_hv8RueV5EB_HMwvFHPMYK/view?usp=drive_link',
  education: {
    institution: 'ITB',
    degree: 'B.E. in Informatics Engineering, STEI-K',
    period: '2024 — Present',
    gpa: '4.00 / 4.00',
  },
  skillGroups: [
    { name: 'Programming languages', skills: ['C', 'C++', 'Java', 'Python', 'Go', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Rust', 'Prolog', 'Haskell'] },
    { name: 'Frameworks & libraries', skills: ['Next.js', 'React', 'Node.js', 'Express', 'FastAPI', 'Tailwind CSS', 'shadcn/ui', 'JavaFX'] },
    { name: 'Databases & ORM', skills: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'Prisma'] },
    { name: 'Infrastructure & tools', skills: ['Docker', 'Git', 'GitHub', 'Linux', 'Vercel', 'Postman', 'Vite', 'Kubernetes', 'Figma'] },
    { name: 'Machine learning & data', skills: ['Keras', 'TensorFlow', 'Hugging Face', 'PyTorch', 'Pandas'] },
    { name: 'Game development', skills: ['Unity', 'Godot'] },
  ],
  email: 'jenniferkhang07@gmail.com',
  phone: '+62 822-8704-3831',
  location: 'Bandung, Indonesia',
  github: 'https://github.com/jenka-h',
  linkedin: 'https://www.linkedin.com/in/jennifer-khang',

};

export const navigation = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'work', number: '02', label: 'Projects' },
  { id: 'experience', number: '03', label: 'Experience' },
  { id: 'achievements', number: '04', label: 'Awards' },
  { id: 'papers', number: '05', label: 'Papers' },
  { id: 'contact', number: '06', label: 'Contact' },
];

export const projects = [
  {
    title: 'CarbonLink',
    category: 'Hackfest 2026 · 2nd Place',
    description:
      'An MRV platform for Indonesian smallholder agroforestry, combining land registration, carbon estimates, and aerial-image tree detection.',
    stack: ['React', 'FastAPI', 'PyTorch', 'Computer Vision'],
    image: carbonlinkImg,
    github: '',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7454591300672094209/',
  },
  {
    title: 'SkillScout Nusantara',
    category: 'AI Job Matching · Bilingual NLP',
    description:
      'A bilingual job-matching platform that extracts skills from CVs, recommends relevant roles, and highlights skill gaps.',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    image: skillscoutImg,
    github: 'https://github.com/CC26-PSU215/skillscout-nusantara',
    url: '',
  },
];

export const achievements = [
  {
    title: 'Bronze Award - 2026 Global Startup Design Thinking Hackathon Day',
    date: 'Oct 2026',
    description: 'Awarded at Chung Ang University, South Korea.',
    url: 'https://stei.itb.ac.id/en/tujuh-mahasiswa-stei-itb-ikuti-global-startup-design-thinking-hackathon-day-di-korea-selatan/',
  },
  {
    title: '2nd Place — Hackfest 2026',
    date: 'Apr 2026',
    description: 'Awarded at Hackfest, Universitas Ciputra, for CarbonLink.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7454591300672094209/',
  },
  {
    title: 'Building Advanced Deep Learning Projects',
    date: 'Jun 2026',
    description: 'Dicoding certification.',
    url: 'https://www.dicoding.com/certificates/72ZDJ37JLZYW',
  },
  {
    title: 'Fundamental Deep Learning',
    date: 'May 2026',
    description: 'Dicoding certification.',
    url: 'https://www.dicoding.com/certificates/6RPN776GRX2M',
  },
];

export const experiences = [
  {
    role: 'Operating Systems Laboratory Assistant',
    period: 'Aug 2026 — Present',
    organization: 'ITB Parallel & Distributed Systems Laboratory',
    description: 'Co-developed course project specifications and mentored 8 student teams through system design, debugging, and implementation.',
  },
  {
    role: 'UI/UX Staff',
    period: 'May 2026 — Present',
    organization: 'Arkavidia',
    description: 'Designed two core website pages and end-to-end user flows in Figma, working with four developers to refine reusable components.',
  },
  {
    role: 'Vice Leader, Tech Insight Division',
    period: 'May 2026 — Present',
    organization: 'HMIF ITB',
    description: 'Co-lead a 16-person content and design team, publish software engineering insights, and present practical AI workflows.',
  },
  {
    role: 'IT Division Staff',
    period: 'Jun 2026 — Sep 2026',
    organization: 'HMIF SPARTA 2026',
    description: 'Developed a mentorship application with Qwik City and TypeScript, including responsive UI and full CRUD features.',
  },
  {
    role: 'Project Manager',
    period: 'Sep 2025 — Present',
    organization: 'Inkubator IT',
    description: 'Delivered two end-to-end client software projects and co-organized a project management workshop with industry speakers.',
  },
  {
    role: 'Vice Manager, IT Agency Division',
    period: 'Sep 2025 — Jul 2026',
    organization: 'Techno Entrepreneur Club ITB',
    description: 'Led 13 members to launch the club website and ran portfolio-building workshops completed by 20+ members.',
  },
  {
    role: 'Laboratory Assistant',
    period: 'Oct 2025 — Dec 2025',
    organization: 'Comlabs-USDI ITB',
    description: 'Supported 100+ students in practical sessions on algorithms and Python, and reviewed code submissions.',
  },
];

export const researchPapers = [
  {
    title: 'An Algorithmic Approach to Tile Placement in the Pipe Work Board Game',
    date: 'Dec 2025',
    topics: 'Backtracking · Constraint pruning · Graph connectivity',
    url: 'https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2025-2026/Makalah2026/13524110_Jennifer%20Khang_Makalah%20Stima.pdf',
  },
  {
    title: 'A Linear Algebra Perspective on Voice Assistant Pipelines Using Singular Value Decomposition',
    date: 'Dec 2025',
    topics: 'SVD · Speech recognition · Feature extraction',
    url: 'https://informatika.stei.itb.ac.id/~rinaldi.munir/AljabarGeometri/2025-2026/Makalah/Makalah-IF2023-Algeo-2025%20(112).pdf',
  },
  {
    title: 'Chromationary: Finding a Simple Graph-Based Approach to Generate Personalized Color Palettes',
    date: 'Jun 2025',
    topics: 'Graph theory · Discrete mathematics · Color generation',
    url: 'https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2024-2025-2/Makalah2025/Makalah-Matdis-2025-IF-ITB%20(111).pdf',
  },
];
