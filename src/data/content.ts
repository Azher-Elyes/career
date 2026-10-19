import type {
  NavItem,
  Testimonial,
  Stat,
  SocialLink,
  Milestone,
} from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  name: 'Mohamed Elyes Azher',
  category: 'Management · Quality · Operations · Engineering',
  headline: {
    line1: 'Leadership First.',
    line2: 'Engineering as Leverage.',
  },
  statement:
    'I bring together operational coordination, industrial quality and international supplier representation with a strong foundation in electrical electronic engineering and Software engineering enabling me to align stakeholders, navigate complex challenges and turn technical understanding into effective action.',
  currentRole: {
    title: 'Resident Engineer | Company Representative',
    meta: '· Tianma Microelectronics',
    detail: 'Automotive Display Technology',
  },
  primaryCta: 'Explore My Experience',
  secondaryCta: 'Download CV',
  bottom: {
    scroll: 'Scroll',
    index: '01 / 10',
  },
};

export const ABOUT_ME = {
  label: 'Beyond the job title',
  headline: 'An Engineer by Foundation.',
  subheadline: 'A Leader by Mindset.',
  intro: [
    'I am a management-oriented engineering professional with a strong focus on quality, operations, and industrial performance. My background combines Electrical & Electronics Engineering with ongoing Software Engineering studies, allowing me to bridge industrial systems and digital technologies.',
    'Currently, as a Resident Engineer representing HannStar at Visteon, I operate at the intersection of management, quality, and engineering. I coordinate stakeholders, manage customer requirements, and drive critical technical issues toward resolution while aligning customer and supplier teams.',
    'My engineering foundation allows me to understand complex technical challenges, while my industrial experience has developed my ability to coordinate people, manage priorities, and turn technical problems into actionable solutions.',
  ],
};

export const PHILOSOPHY = {
  label: 'My Philosophy',
  headline: ['Leadership First.', 'Engineering as Leverage.'],
  body: [
    'Technical knowledge is not the destination.',
    "It is the foundation for better decisions, stronger coordination and effective leadership.",
  ],
  signature: 'Mohamed Elyes Azher',
};

export const WHAT_I_BRING = {
  label: 'What I Bring',
  cards: [
    {
      title: 'Leadership',
      description:
        'Aligning people, stakeholders, and priorities toward shared objectives.',
      icon: 'Users',
    },
    {
      title: 'Quality',
      description:
        'Structured problem solving, continuous improvement, and risk management.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Operations',
      description:
        'Turning plans into execution through efficient coordination and sustainability.',
      icon: 'Cog',
    },
    {
      title: 'Technical Depth',
      description:
        'Understanding complex systems to make informed and effective decisions.',
      icon: 'CircuitBoard',
    },
    {
      title: 'Customer & Supplier',
      description:
        'Building strong relationships and aligning expectations and capabilities.',
      icon: 'Handshake',
    },
    {
      title: 'Digital Transformation',
      description:
        'Using technology, data, and AI to improve how teams and organizations operate.',
      icon: 'Cloud',
    },
  ],
};

export const JOURNEY = {
  label: 'My Journey',
  headline: ['From Education', 'to Impact'],
  intro: 'A journey shaped by curiosity, discipline, and continuous growth from engineering fundamentals to real-world responsibility, from technical foundations to leadership in action. Each step has expanded my perspective, strengthened my capabilities, and brought me closer to the professional I am building a leader who uses engineering as leverage to create impact.',
  breadcrumb: ['Learning', 'Building', 'Leading'],
  closing: {
    label: 'Different Steps  →  Same Goal',
    headline: 'Building a Stronger Tomorrow.',
  },

  pillars: [
    {
      icon: 'IconSchoolFilled',
      title: 'Education',
      description: 'Build the foundation',
    },
    {
      icon: 'IconSettingsFilled',
      title: 'Experience',
      description: 'Turn knowledge into value',
    },
    {
      icon: 'IconUserStar',
      title: 'Leadership',
      description: 'Drive greater impact',
    },
  ],

  milestones: [
    {
      id: '01',
      side: 'left',
      type: 'education',
      typeLabel: "Bachelor's Degree",
      icon: 'IconSchoolFilled',
      date: '2021 – 2024',
      title: "Bachelor's Degree",
      subtitle: 'ISET Nabeul',
      subtitleUrl: 'https://isetn.rnu.tn/',
      detail: 'Electrical & Electronics Engineering',
      description:
        'My engineering foundation began here, building a solid understanding of electrical systems, electronics, automation, and industrial technologies. Through academic projects and practical experience, I developed a structured approach to analysis, problem-solving, and technical decision-making skills that would later become the foundation for my work across display technology.',
      image: 'iset-nabeul.jpg',
    },
    {
      id: '02',
      side: 'right',
      type: 'project',
      typeLabel: 'Graduation Project',
      icon: 'IconCodeCircle2Filled',
      date: 'Jan – Jun 2024',
      title: 'Graduation Project',
      subtitle: 'ISET Nabeul & ETELEC ',
      subtitleLinks: [
        { label: 'ISET Nabeul', url: 'https://isetn.rnu.tn/' },
        { label: 'ETELEC ', url: 'https://www.etelec.com.tn/' },
      ],
      detail: 'Intelligent Autonomous Robot',
      description:
        'Developed an intelligent autonomous robotic system combining 6-DOF robotic arm manipulation, autonomous navigation, and real-time decision-making using ROS 2. Designed supporting desktop and mobile applications for real-time monitoring, teleoperation, and task execution, creating an integrated system that connected robotics, software, perception, and autonomous control.',
      image: 'ros2-robot.jpg',
    },
    {
      id: '03',
      side: 'left',
      type: 'education',
      typeLabel: "Engineering Degree (In Progress)",
      icon: 'IconSchoolFilled',
      date: 'Sep 2024 – Present',
      title: "Engineering Degree",
      subtitle: 'ITEAM University',
      subtitleUrl: 'https://iteam-univ.tn/',
      detail: 'Software engineering',
      description:
        'Expanding my technical foundation into software engineering, system architecture, AI, and digital solutions.The program strengthens my capabilities in full-stack development, system integration, automation, cloud technologies, and intelligent systems, broadening my ability to connect software with real-world engineering and industrial challenges.',
      image: 'iteam.jpg',
      current: true,
    },
    {
      id: '04',
      side: 'right',
      type: 'work',
      typeLabel: 'Work Experience',
      icon: 'IconBriefcaseFilled',
      date: 'Sep 2024 – Feb 2025',
      title: 'Electrical Engineer',
      subtitle: 'ETELEC',
      subtitleUrl: 'https://www.etelec.com.tn/',
      detail: 'Electrical engineer',
      description:
        'Managed projects across the full electrical project lifecycle, from AutoCAD design and technical preparation to cost estimation, site supervision, and execution quality. Handled material and labor estimation, cost control, progress reporting, work valuation, and payment statements, ensuring projects were properly completed and delivered.',
      image: 'etelec.jpg',
    },
    {
      id: '05',
      side: 'left',
      type: 'work',
      typeLabel: 'Work Experience',
      icon: 'IconBriefcaseFilled',
      date: 'Feb 2025 – JUN 2026',
      title: '4-CE | Supplier Representative at Visteon Tunisia',
      subtitle: 'HannStar Display corporation',
      subtitleUrl: 'https://www.hannstar.com/',
      detail: 'Resident Engineer',
      description:'Act as the technical and operational interface between supplier and customer, supporting product quality, production stability, and customer requirements for TFT/LCD display systems. Lead customer quality issues through containment, 8D, root cause analysis, and corrective actions, while coordinating supplier, customer, and production teams. Support new product introduction and industrial ramp-up through specification reviews, production readiness, display validation, and cross-functional technical coordination.',
      image: 'visteon.jpg',
    },
    
        {
      id: '06',
      side: 'right',
      type: 'work',
      typeLabel: 'Work Experience',
      icon: 'IconBriefcaseFilled',
      date: 'July 2026 – Present',
      title: 'Resident Engineer',
      subtitle: 'Tianma Microelectronics',
      subtitleUrl: 'https://www.tianma.eu/',
      detail: 'Resident engineer',
      description:
        'Support customer quality and operational activities for LCD display systems, managing customer complaints, technical investigations, and rejected material. Coordinate sorting, containment, and disposition activities, working with supplier and customer teams to resolve issues and maintain production continuity.',
      image: 'etelec.jpg',
      current: true,
    },
  ],
};

export const CORE_EXPERTISE = {
  // ═══ SECTION HEADER (LAYER 01 — MANAGEMENT) ═══
  label: 'Core Expertise',
  number: '05',
  countLabel: '10 Capabilities',
  headline: 'Leadership through structured responsibility.',
  intro:
    'Management capability grounded in technical depth — the layer where engineering becomes leadership.',
  heroImage: 'management-hero.jpg',
  keywords: ['Coordinate', 'Align', 'Deliver'],

  // ═══ MANAGEMENT CAPABILITIES ═══
  management: {
capabilities: [
  {
    title: 'International Representation',
    description:
      'Representing technical interests in international customer and supplier environments, building trust and maintaining alignment across organizations.',
    icon: 'Globe',
  },
  {
    title: 'Stakeholder & Relationship Management',
    description:
      'Aligning customers, suppliers, engineering teams, and operational stakeholders around priorities, expectations, and critical decisions.',
    icon: 'Users',
  },
  {
    title: 'Quality Management',
    description:
      'Driving issues from identification through containment, root cause analysis, and closure, with a focus on performance and customer satisfaction.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Operations & Execution',
    description:
      'Coordinating people, priorities, resources, and activities to maintain operational continuity and ensure effective, day-to-day execution.',
    icon: 'Cog',
  },
  {
    title: 'Project & Execution Management',
    description:
      'Turning requirements into structured actions, coordinated execution, and successful delivery across technical and operational environments.',
    icon: 'Target',
  },
  {
    title: 'Problem Solving & Decision Support',
    description:
      'Analyzing complex situations, structuring information, and providing technical insight to support effective, informed business decisions.',
    icon: 'Lightbulb',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Identifying opportunities to improve processes, quality, and efficiency through structured initiatives and operational optimization.',
    icon: 'TrendingUp',
  },
  {
    title: 'Display Technology',
    description:
      'Technical understanding of TFT/LCD display systems, validation, and hardware/software interactions supporting engineering and quality decisions.',
    icon: 'Monitor',
  },
],
},

  // ═══ LAYER 02 — TECHNICAL ═══
  technical: {
    layerLabel: 'Layer 02 · Technical Leverage',
    label: 'Technical Leverage',
    number: '06',
    countLabel: '6 Domains',
    headline: 'Technical depth.',
    subheadline: 'Management perspective.',
    intro:
      'Engineering knowledge spans six interconnected disciplines, providing the technical foundation that enables better decisions, stronger systems and greater impact.',
    heroImage: 'technical-hero.jpg',
    keywords: ['Analyze', 'Design', 'Implement', 'Optimize'],
    closing: 'The leverage behind the leadership.',

    domains: [
{
  id: 'software',
  number: '01',
  title: 'Software Engineering',
  intro:
    'Building scalable, reliable and efficient software solutions — from system architecture to deployment and maintenance.',
  capabilities: [
    'Software Architecture',
    'Application Development',
    'Frontend Development',
    'Backend Development',
    'API Development & Integration',
    'Database Design & Management',
    'System Integration',
    'Testing & Quality Assurance',
    'Debugging & Troubleshooting',
    'DevOps & CI/CD',
    'Deployment & Release ',
    'Software Optimization',
  ],
  tools: [
    { name: 'Python', icon: 'Code' },
    { name: 'JavaScript', icon: 'Braces' },
    { name: 'TypeScript', icon: 'FileCode' },
    { name: 'Java', icon: 'Coffee' },
    { name: 'PHP', icon: 'FileCode' },
    { name: 'Angular', icon: 'Atom' },
    { name: 'React', icon: 'Atom' },
    { name: 'Node.js', icon: 'Hexagon' },
    { name: 'SQL/NOSQL', icon: 'Database' },
    { name: 'Git', icon: 'GitBranch' },
    { name: 'Docker', icon: 'Box' },
    { name: 'REST API', icon: 'Network' },
  ],
},
{
  id: 'ai',
  number: '02',
  title: 'AI & Data Science',
  intro:
    'Applying artificial intelligence and data-driven methods to solve real problems and support better decisions.',
  capabilities: [
    'Machine Learning',
    'Deep Learning',
    'Data Analysis & Exploration',
    'Data Preprocessing',
    'Feature Engineering',
    'Predictive Modeling',
    'Computer Vision',
    'Natural Language Processing',
    'Generative AI',
    'Model Evaluation & Optimization',
    'Data Visualization',
    'AI Model Integration',
  ],
  tools: [
    { name: 'Python', icon: 'Code' },
    { name: 'TensorFlow', icon: 'Network' },
    { name: 'PyTorch', icon: 'Flame' },
    { name: 'Scikit-learn', icon: 'Cpu' },
    { name: 'Pandas', icon: 'Table' },
    { name: 'NumPy', icon: 'Calculator' },
    { name: 'OpenCV', icon: 'Eye' },
    { name: 'Hugging Face', icon: 'Bot' },
    { name: 'Jupyter Notebook', icon: 'Notebook' },
    { name: 'Matplotlib', icon: 'BarChart' },
    { name: 'Seaborn', icon: 'Activity' },
    { name: 'Power BI', icon: 'ChartColumn' },
  ],
},
{
  id: 'embedded',
  number: '03',
  title: 'Embedded Systems',
  intro:
    'Developing firmware and embedded software for real-time, resource-constrained systems.',
  capabilities: [
    'Embedded Development',
    'Firmware Development',
    'IoT Systems Development',
    'Linux Applications',
    'Microcontroller Programming',
    'HW–SW Integration',
    'Automotive Display Systems',
    'Sensor Integration & Data Acquisition',
    'Communication Protocols',
    'Automotive Networks & ECU',
    'Real-Time Operating (RTOS)',
    'Debugging & Validation',
  ],
  tools: [
    { name: 'C / C++', icon: 'Code' },
    { name: 'Python', icon: 'FileCode' },
    { name: 'QML / Qt', icon: 'Layout' },
    { name: 'Linux/Powershell', icon: 'Terminal' },
    { name: 'STM32 / ESP32', icon: 'Cpu' },
    { name: 'FreeRTOS', icon: 'Settings' },
    { name: 'MQTT / HTTP ', icon: 'Radio' },
    { name: 'LVDS / GMSL', icon: 'Cable' },
    { name: 'I²C / SPI / UART', icon: 'Network' },
    { name: 'CAN / CAN FD', icon: 'Bus' },
    { name: 'MATLAB / Simulink', icon: 'Calculator' },
    { name: 'CANalyzer/CANoe', icon: 'Activity' },
  ],
},
{
  id: 'hardware',
  number: '04',
  title: 'Hardware Engineering',
  intro:
    'Designing, analyzing and validating electronic hardware from concept to prototype.',
  capabilities: [
    'Analog Electronics',
    'Digital Electronics',
    'Power Electronics',
    'Microelectronics & Semiconductor',
    'Electronic Circuit Design',
    'Microprocessor&CPU',
    'PCB Development',
    'Circuit Design',
    'Component Analysis',
    'TFT/LCD Display',
    'Signal Integrity & High-Speed Interfaces',
    'Testing & Failure Analysis',
  ],
  tools: [
    { name: 'Altium Designer', icon: 'Layout' },
    { name: 'LTspice', icon: 'Activity' },
    { name: 'Oscilloscope', icon: 'Activity' },
    { name: 'Digital Multimeter', icon: 'Ruler' },
    { name: 'Logic Analyzer', icon: 'BarChart' },
    { name: 'Spectrum Analyzer', icon: 'Radar' },
    { name: 'Bench Power Supply', icon: 'Zap' },
    { name: 'Electronic Load', icon: 'Server' },
    { name: 'JTAG / SWD Debug ', icon: 'Cable' },
    { name: 'Signal Testing', icon: 'Monitor' },
    { name: 'Optical Measurement', icon: 'Eye' },
    { name: 'AOI / SPI Inspection', icon: 'Search' },
  ],
},
      {
        id: 'electrical',
        number: '05',
        title: 'Electrical & Network Eng.',
        intro:
          'Designing electrical systems and network infrastructure with attention to safety, reliability and performance.',
        capabilities: [
          'Electrical System Design',
          'Electrical Installation',
          'Power Distribution & Protection Systems',
          'Lighting Design',
          'Building Automation',
          'Industrial Electrical Systems',
          'Network Infrastructure',
          'Network Design',
          'Routing & Switching',
          'Network Troubleshooting',
          'Server Administration',
          'S.P. System Design',
          
        ],
        tools: [
          { name: 'AutoCAD', icon: 'Ruler' },
          { name: 'AutoCAD Electrical', icon: 'FileCode' },
          { name: 'DIALux evo', icon: 'Lightbulb' },
          { name: 'ETAP', icon: 'Zap' },
          { name: 'EPLAN Electric P8', icon: 'Layout' },
          { name: 'Schneider EcoStruxure', icon: 'Cpu' },
          { name: 'Cisco Packet Tracer', icon: 'Network' },
          { name: 'Cisco IOS', icon: 'Terminal' },
          { name: 'Wireshark', icon: 'Eye' },
          { name: 'Windows Server', icon: 'Server' },
          { name: 'Linux Server', icon: 'Terminal' },
          { name: 'VMware vSphere', icon: 'Box' },
        ],
      },
    ],
  },
};

export const IMPACT = {

label: 'Impact',
headline: 'Driving Results Through Leadership and Execution.',
intro:
  'From international supplier representation to industrial project delivery, I coordinate people, technical activities, and operational priorities to resolve challenges, ensure execution, and deliver results.',
tagline: [
  'Clear Direction.',
  'Structured Execution.',
  'Measurable Results.',
],

cards: [
  {
    title: 'Renault 3.5" Display',
    context: [
      { name: 'HannStar', url: 'https://www.hannstar.com/' },
      { name: 'Visteon Tunisia', url: 'https://www.visteon.com/' }
    ],
    image: 'renault-3-5.jpg',
    challenge:
      'HannStar 3.5-inch TFT-LCD display for high-volume Renault automotive production. Recurring customer complaints and escalated defects disrupted operations, requiring urgent containment and close customer–supplier coordination.',
    leadership:
      'Coordinating stakeholders to resolve quality issues and ensure production continuity.',
  },
  {
    title: 'Renault 5" Display',
    context: [
      { name: 'HannStar', url: 'https://www.hannstar.com/' },
      { name: 'Visteon Tunisia', url: 'https://www.visteon.com/' }
    ],
    image: 'renault-5.jpg',
    challenge:
      'HannStar 5-inch TFT-LCD display for high-volume Renault automotive production. Recurring customer quality complaints required structured investigations, standard 8D problem-solving, and strict corrective-action follow-up.',
    leadership:
      'Applying structured problem-solving to drive complaint resolution and corrective actions.',
  },
  {
    title: 'Renault 10.1" Display',
    context: [
      { name: 'HannStar', url: 'https://www.hannstar.com/' },
      { name: 'Visteon Tunisia', url: 'https://www.visteon.com/' }
    ],
    image: 'renault-10-1.jpg',
    challenge:
      'HannStar 10.1-inch TFT-LCD display for high-volume Renault automotive production. Recurring quality issues, software updates, and processor design changes required technical coordination and design validation follow-up.',
    leadership:
      'Aligning engineering and quality teams on software changes and technical validation.',
  },
  {
    title: 'Stellantis 10.25" Display',
    context: [
      { name: 'Tianma', url: 'https://www.tianma.eu/' },
      { name: 'Visteon Tunisia', url: 'https://www.visteon.com/' }
    ],
    image: 'stellantis-10-25.jpg',
    challenge:
      'Tianma 10.25-inch TFT-LCD display for high-volume Stellantis automotive production. A customer quality crisis involving escalated defects required urgent sorting, technical analysis, and customer–supplier coordination.',
    leadership:
      'Leading urgent crisis coordination between customer and supplier teams to stabilize production.',
  },
  {
    title: 'Stellantis 7" Display',
    context: [
      { name: 'Tianma', url: 'https://www.tianma.eu/' },
      { name: 'Visteon Tunisia', url: 'https://www.visteon.com/' }
    ],
    image: 'tianma-7.jpg',
    challenge:
      'Tianma 7-inch TFT-LCD display for high-volume automotive production. Recurring customer quality issues required technical investigation, complaint follow-up, and customer–supplier coordination to support resolution.',
    leadership:
      'Coordinating technical investigation and complaint resolution across customer and supplier teams.',
  },
  {
    title: 'Sorting Operations',
    context: [
      { name: '4-CE', url: '#' },
      { name: 'Visteon Tunisia', url: 'https://www.visteon.com/' }
    ],
    image: 'sorting-operations.jpg',
    challenge:
      'Customer sorting operations requiring direct site supervision, control-method verification, customer communication, and sorting activity coordination to maintain operational control and meet requirements.',
    leadership:
      'Coordinating site sorting operations, verifying control methods, and maintaining customer alignment.',
  },
  {
    title: 'MISFAT Plant Electrical',
    context: [
      { name: 'ETELEC', url: '#' },
      { name: 'MISFAT', url: '#' }
    ],
    image: 'misfat-project.jpg',
    challenge:
      'Electrical project delivery for the MISFAT industrial plant, covering the complete lifecycle from electrical design to final delivery with on-site coordination with the customer and other contractors to ensure execution.',
    leadership:
      'Coordinating electrical project delivery across the full lifecycle and aligning with multiple contractors.',
  },
  {
    title: 'Smart Military Building',
    context: [
      { name: 'ETELEC', url: '#' },
      { name: 'Air force', url: '#' }
    ],
    image: 'smart-military-building.jpg',
    challenge:
      'Electrical project delivery for a smart military facility, covering the full lifecycle from electrical design to commissioning. Required coordination with other contractors, building automation integration, and security compliance.',
    leadership:
      'Coordinating electrical delivery across contractors and disciplines to ensure integration and security.',
  },
],

  approach: {
    label: 'My Approach',
    headline: '',
    intro:
      '',
    quote:
      'From analysis to action, a structured approach to turn complex situations into clear decisions and sustainable results.',
stages: [
  {
    number: '01',
    title: 'Understand',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Align',
    icon: 'Users',
  },
  {
    number: '03',
    title: 'Execute',
    icon: 'Cog',
  },
  {
    number: '04',
    title: 'Improve',
    icon: 'TrendingUp',
  },
],  
  },
};
// Testimonials — placeholders only. Do NOT invent fake testimonials.
export const TESTIMONIALS: Testimonial[] = [];

// Stats — hidden until real values are provided.
export const STATS: Stat[] = [];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Dribbble', href: '#' },
];
export const SITE = {
  name: 'Mohamed Elyes Azher',
  tagline: 'Leadership First. Engineering as Leverage.',
  email: 'azherelyes@gmail.com',
  location: 'Tunis · Tunisia',
  availability: 'Open to management opportunities',
  description: 'Management · Quality · Operations · Engineering',
};
