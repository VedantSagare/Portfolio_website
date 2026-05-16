export const portfolioData = {
  about: {
    name: 'Vedant Sagare',
    title: 'Software Developer',
    summary: 'Backend-focused Software Developer with experience in building scalable and high-performance systems using Java and Spring Boot. Proficient in designing RESTful APIs and microservices architectures, with strong expertise in database optimization, caching, and distributed system fundamentals.',
    email: 'vedantsagare2002@gmail.com',
    phone: '+91-9356626084',
    location: 'Hyderabad, India',
    stats: [
      { label: 'Experience', value: '1+ Years' },
      { label: 'Company', value: 'NPCI' },
      { label: 'Education', value: 'COEP Pune' },
      { label: 'Focus', value: 'Backend Systems' },
    ],
  },
  skills: [
    { category: 'Languages', icon: '💻', items: ['Java', 'Python', 'C++', 'JavaScript'] },
    { category: 'Frontend', icon: '🎨', items: ['React', 'Tailwind CSS'] },
    { category: 'Backend & Frameworks', icon: '⚙️', items: ['Spring Boot', 'RESTful APIs', 'Microservices Architecture'] },
    { category: 'Databases & Caching', icon: '🗄️', items: ['PostgreSQL', 'MySQL', 'Redis', 'SQLite'] },
    { category: 'Messaging & Streaming', icon: '📡', items: ['Apache Kafka'] },
    { category: 'DevOps & Tools', icon: '🔧', items: ['Git', 'GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Docker', 'Linux'] },
  ],
  experiences: [
    {
      company: 'National Payments Corporation of India (NPCI)',
      role: 'Software Developer',
      duration: 'Sep 2024 – Present',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      highlights: [
        'Designed and developed scalable RESTful APIs using Spring Boot for onboarding bank members.',
        'Implemented backend services aligned with microservices architecture, handling high-volume financial data.',
        'Led 10+ Change Requests introducing automated validation logic, reducing manual errors by 30%.',
        'Optimized PostgreSQL and MariaDB queries, achieving sub-second response times.',
        'Resolved Checkmarx and SonarQube vulnerabilities, preventing SQL injection and XSS attacks.',
        'Achieved 80% unit test coverage using JUnit and Mockito.',
        'Worked in an Agile/Scrum environment with cross-functional teams.',
      ],
    },
    {
      company: 'Samsung SDS',
      role: 'Research Intern',
      duration: 'Jan 2023 – Jun 2023',
      location: 'Remote',
      type: 'Internship',
      highlights: [
        'Developed responsive UI components from Figma designs, optimizing React state management.',
        'Collaborated on building a web portal for Android device mirroring and user interaction workflows.',
      ],
    },
  ],
  projects: [
    {
      title: 'Crowdfunding – Blockchain-Based Fund Raising System',
      description: 'A decentralized fundraising platform using Ethereum blockchain and smart contracts.',
      duration: 'May 2023 – Jul 2023',
      technologies: ['Ethereum', 'Solidity', 'Smart Contracts', 'React'],
      highlights: [
        'Built a decentralized fundraising platform using Ethereum blockchain and smart contracts.',
        'Implemented voting-based fund approval system ensuring transparency and security.',
      ],
    },
    {
      title: 'Image Resolution Enhancement – Deep Learning',
      description: 'Enhanced low-resolution images using SRCNN deep learning model.',
      duration: 'Dec 2022 – Apr 2023',
      technologies: ['Python', 'Keras', 'Deep Learning', 'SRCNN'],
      highlights: [
        'Implemented SRCNN model to enhance low-resolution images using deep learning techniques.',
        'Evaluated model using PSNR, MSE, and SSIM metrics to measure image quality improvement.',
      ],
    },
  ],
  achievements: [
    { title: 'Ninja Award – NPCI Coding Playground', description: 'Won Ninja Award at NPCI Coding Playground Challenge (April 2025).', icon: '🏆' },
    { title: 'Certificate of Merit – IIIT Hyderabad', description: 'Received Certificate of Merit from IIIT Hyderabad for Deep Tech Bootcamp (TalentSprint, 2024-25).', icon: '📜' },
  ],
  education: {
    institution: 'College Of Engineering Pune (COEP)',
    degree: 'Bachelor of Technology, Electronics and TeleCommunication Engineering',
    duration: 'Nov 2020 – May 2024',
    cpi: '7.89/10',
  },
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vedant-sagare-9b4249227/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/VedantSagare', icon: 'github' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Sagre0503/', icon: 'leetcode' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/sagarevedant', icon: 'gfg' },
    { name: 'Email', url: 'mailto:vedantsagare2002@gmail.com', icon: 'email' },
  ],
};
