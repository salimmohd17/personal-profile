export const projects = [
  {
    id: '01',
    title: 'Openlands Digital Platform',
    category: 'Digital Platform',
    filterCat: 'Web Apps',
    desc: 'A modern digital platform concept focused on land, environmental and community-related opportunities through a structured web interface.',
    longDesc: 'Developed a user-focused land management and spatial discovery web portal. Features clean spatial data visualization, community partnership tools, and structured information presentation.',
    stack: ['React', 'JavaScript', 'Responsive UI', 'CSS Grid'],
    status: 'Live Project',
    statusType: 'live',
    link: 'https://openland-links-ltd.netlify.app/',
    highlights: ['Structured Information Architecture', 'Community Resource Hub', 'Responsive Web Design']
  },
  {
    id: '02',
    title: 'ALGS Architectural Design',
    category: 'Architecture & Construction',
    filterCat: 'Web Apps',
    desc: 'A corporate website presenting architectural design, construction services, project portfolios, and company credibility.',
    longDesc: 'Designed and developed a high-performance web presentation for ALGS Architecture & Construction. Features modular project galleries, interactive service descriptions, and modern mobile-first styling.',
    stack: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    status: 'Live Project',
    statusType: 'live',
    link: 'https://algs-architectural-design.netlify.app/',
    highlights: ['Corporate Portfolio Showcase', 'Optimized SEO & Performance', 'Mobile-Friendly Experience']
  },
  {
    id: '03',
    title: 'Wahapahapa Digital Platform',
    category: 'Environmental Technology',
    filterCat: 'Environmental',
    desc: 'A digital management platform supporting waste-management operations, M&E data collection, documentation, and reporting.',
    longDesc: 'A flagship technology system built for Wahapahapa Waste Management (Kwale County). Logs plastic recovery metrics, coordinates community volunteer drives, manages role-based access (Admin, Executive, Finance, Operations), and generates operational impact reports.',
    stack: ['React', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    status: 'Live Project',
    statusType: 'live',
    link: 'https://wahapahapa-waste-management.netlify.app/',
    highlights: ['Operational M&E Logging', 'Role-Based User Management', 'Environmental Data Analytics']
  },
  {
    id: '04',
    title: 'Personal Trading Workstation',
    category: 'Trading Technology',
    filterCat: 'In Development',
    desc: 'A personal trading technology platform exploring financial market data, technical indicator workflows, risk management, and automation.',
    longDesc: 'Engineered a financial technology workstation prototype integrating real-time market data feeds, position sizing calculators, technical indicator visualizations, and workflow automation.',
    stack: ['JavaScript', 'Web APIs', 'Trading Tools', 'Chart Engine'],
    status: 'In Development',
    statusType: 'dev',
    link: '#',
    highlights: ['Live Market Data API', 'Risk & Position Management', 'Automated Indicator Tools']
  },
  {
    id: '05',
    title: 'Full-Stack E-Commerce Engine',
    category: 'Web Application',
    filterCat: 'Web Apps',
    desc: 'A complete full-stack e-commerce platform built around practical online shopping workflows, inventory, orders, and admin controls.',
    longDesc: 'Developing a full-stack shopping platform with product catalog management, session cart processing, customer order workflows, payment integration hooks, and an admin management dashboard.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    status: 'Currently Building',
    statusType: 'building',
    link: '#',
    highlights: ['Relational Database Pipeline', 'Inventory & Admin Controls', 'Checkout & Order Management']
  }
];

export const skillCategories = [
  {
    title: 'Frontend Development',
    categoryKey: 'frontend',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Responsive UI']
  },
  {
    title: 'Backend Systems',
    categoryKey: 'backend',
    items: ['PHP', 'Node.js', 'Express.js', 'RESTful APIs', 'Server Architecture']
  },
  {
    title: 'Databases & Data',
    categoryKey: 'database',
    items: ['MySQL', 'SQL Optimization', 'MongoDB', 'Data Modeling']
  },
  {
    title: 'Programming Languages',
    categoryKey: 'code',
    items: ['Java', 'JavaScript', 'C', 'C++']
  },
  {
    title: 'Software & Dev Tools',
    categoryKey: 'tools',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Android Studio', 'JavaFX']
  },
  {
    title: 'Emerging & IoT Tech',
    categoryKey: 'emerging',
    items: ['IoT (ESP32, MQTT)', 'Information Security', 'Software Testing', 'M&E Systems', 'AI/ML Fundamentals']
  }
];

export const stats = [
  { label: 'Live Projects', value: '3 Active' },
  { label: 'Education', value: 'B.Sc. IT (MMUST)' },
  { label: 'Experience', value: 'M&E & Tech' },
  { label: 'Location', value: 'Kenya 🇰🇪' }
];

export const experienceData = {
  organization: 'Wahapahapa Waste Management',
  role: 'Monitoring & Evaluation / Technology Contributor',
  period: '2023 – Present',
  location: 'Kwale County',
  description: 'Community-based organization in Kwale County focused on waste management, environmental conservation, and community action.',
  responsibilities: [
    'Support monitoring and evaluation (M&E) of operational activities and community environmental programs.',
    'Collect, organize, and document operational, plastic waste, and cleanup data.',
    'Lead digital documentation, information management, and CBO reporting.',
    'Participate in plastic recovery, sorting, weighing, and recycling initiatives.',
    'Organize community cleanups, tree planting, and environmental sensitization.'
  ]
};

export const educationData = {
  institution: 'Masinde Muliro University of Science and Technology (MMUST)',
  degree: 'Bachelor of Science in Information Technology',
  status: 'Currently Pursuing',
  topics: [
    'Software Engineering',
    'Web Programming',
    'Database Systems',
    'Information Security',
    'Computer Networks',
    'Systems Development',
    'Emerging Technologies'
  ]
};
