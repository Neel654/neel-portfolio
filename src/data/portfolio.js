export const personal = {
  name: "Neel Prajapati",
  title: "Software Engineer",
  tagline: "Backend Systems · Data Engineering · Automation",
  bio: "Computer Science student at Toronto Metropolitan University focused on building scalable systems and data-driven solutions. Interested in backend engineering, distributed systems, and data. Currently seeking SWE / Backend / Data internships.",
  email: "nprajapati@torontomu.ca",
  github: "https://github.com/Neel654",
  linkedin: "https://www.linkedin.com/in/neel-prajapati-3337b9289/?skipRedirect=true",
  location: "Toronto, Ontario, Canada",
  available: true,
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "C/C++", "C#", "JavaScript", "TypeScript", "SQL", "Bash", "HTML/CSS", "Go", "Scala", "YAML"],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL","MySQL","SQLite","MongoDB","Redis","Snowflake","NoSQL"],
  },
  {
    category: "Backend & Systems",
    items: ["React.js", "Node.js", "FastAPI", "Selenium", "Cypress", "OpenAI API", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Linux"],
  },
  {
    category: "Data & Analytics",
    items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "PyTorch", "Jupyter", "SQLite", "Spark"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub Actions", "Vercel", "AWS (S3, EC2)", "Postman", "VS Code"],
  },
];

export const projects = [
  {
    id: 1,
    title: "wrapkv-java",
    subtitle: "LSM-Tree Key-Value Store",
    description:
      "Built a production-grade embedded key-value store in Java from scratch — no external DB libraries. Implements a full LSM-tree pipeline: write-ahead log for crash recovery, in-memory memtable, SST file compaction, and Bloom filters for O(1) negative lookups. Handles concurrent reads/writes with thread-safe design.",
    problem: "Most developers treat databases as black boxes. I wanted to understand exactly how key-value stores like LevelDB and RocksDB work under the hood.",
    impact: "Achieves sub-millisecond read latency on warm data. Bloom filters reduce unnecessary disk I/O by ~80% on negative queries.",
    tech: ["Java", "LSM-Tree", "WAL", "SST Files", "Bloom Filters", "Concurrency"],
    github: "https://github.com/neel/wrapkv-java",
    featured: true,
    type: "Systems",
  },
  {
    id: 2,
    title: "Task Reminder System",
    subtitle: "Concurrent Notification Engine",
    description:
      "A Python-based personal task automation system with precise, thread-safe scheduling. Uses Python threading with daemon threads, a priority queue for task ordering, and platform-native desktop notifications. Supports recurring tasks, snooze logic, and persistent storage via SQLite.",
    problem: "Calendar apps are overkill for developer workflows. I needed lightweight, scriptable reminders that live in the terminal.",
    impact: "Handles 100+ concurrent task timers with <5ms scheduling drift. Cut my missed deadlines to zero.",
    tech: ["Python", "Threading", "SQLite", "Plyer", "Priority Queue", "Daemon Threads"],
    github: "https://github.com/neel/task-reminder",
    featured: true,
    type: "Automation",
  },
  {
    id: 3,
    title: "Toronto Housing Analysis",
    subtitle: "Real Estate Market Intelligence",
    description:
      "End-to-end data analysis pipeline on Toronto's housing market using MLS and census open data. Cleaned 50k+ records, engineered features around neighbourhood walkability, transit proximity, and school ratings. Built visualizations revealing price anomalies and undervalued postal codes.",
    problem: "Toronto housing data is messy, fragmented, and rarely analyzed at the neighbourhood level.",
    impact: "Identified 3 statistically undervalued neighbourhoods with >15% predicted appreciation. Analysis shared as a public notebook.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "GeoPandas"],
    github: "https://github.com/neel/toronto-housing",
    featured: true,
    type: "Data",
  },
  {
    id: 4,
    title: "Startup Performance Dashboard",
    subtitle: "Funding & Growth Analytics",
    description:
      "Analyzed Crunchbase startup funding data to surface patterns in early-stage company survival. Built an interactive dashboard tracking funding velocity, sector momentum, and founder background correlations with outcome.",
    problem: "Startup success factors are often discussed anecdotally. I wanted data-driven answers.",
    impact: "Processed 20k+ startup records. Found that B2B SaaS startups with technical founders had 2.3× higher Series A conversion rates in the dataset.",
    tech: ["Python", "Pandas", "Plotly", "SQLite", "Jupyter"],
    github: "https://github.com/neel/startup-analytics",
    featured: false,
    type: "Data",
  },
];

export const experience = [
  {
  id: 1,
  role: "Software & IT Systems Intern",
  org: "Quality Cheese Inc.",
  period: "Sep 2025 – Present",
  description: "Developed Python automation services integrated with SQL and Azure/M365 APIs to support production workflows. Improved reporting pipelines, system reliability, and operational decision-making through monitoring and iterative enhancements.",
  tags: ["Python", "SQL", "Azure", "Automation", "APIs"],
  type: "experience",
  },
  {
  id: 2,
  role: "Hackathon — AI/Full-Stack Engineer",
  org: "TELUS — AI at the Edge of Innovation",
  period: "Feb 2026",
  description: "Built SafeSense, a browser-based AI safety platform using MediaPipe and device sensors for real-time gym form correction, driver fatigue detection, and fall detection. Implemented client-side ML with zero data offloading, integrating webcam, motion sensors, and voice feedback for a privacy-first, real-time experience.",
  tags: ["JavaScript", "MediaPipe", "Computer Vision", "Web APIs", "AI"],
  type: "hackathon",
},
  {
  id: 3,
  role: "Hackathon — AI Systems Designer",
  org: "University of Toronto — Invisible AI Hackathon",
  period: "Feb 2025",
  description: "Designed TTCare, an AI-driven predictive maintenance system for public transit using anomaly detection and optimization agents. Proposed a multi-layer architecture combining IoT data, failure prediction, and automated scheduling to reduce delays and improve system reliability.",
  tags: ["AI", "System Design", "Predictive Modeling", "IoT", "Optimization"],
  type: "hackathon",
},
  {
  id: 4,
  role: "Software Automation & Data Intern",
  org: "Meghal Road Equipment",
  period: "Sep 2022 – Aug 2023",
  description: "Built SQL and Python-based data pipelines to process and analyze operational KPIs. Improved data accuracy and reduced manual reporting by designing modular, validated pipeline components and applying SDLC practices.",
  tags: ["Python", "SQL", "Data Pipelines", "AWS", "SDLC"],
  type: "experience",
  },
];

export const achievements = [
  {
    title: "Cybersecurity Program",
    issuer: "Mastercard (Forage)",
    year: "2026",
    description: "Identified phishing threats and designed security awareness training for business teams",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    year: "2025",
    description: "Built Tableau dashboards and analyzed data to generate business insights",
  },
  {
    title: "Quantitative Research Experience",
    issuer: "J.P. Morgan (Forage)",
    year: "2025",
    description: "Applied predictive modeling to estimate default risk using Python and financial data",
  },
];

export const learning = [
  "Exploring Azure data ecosystem using Data Factory, Databricks, Delta Lake, and Unity Catalog while learning cloud architecture, pipelines, and secure data handling",
"Developing system design skills by applying scalability, reliability, and event-driven patterns through backend projects and real-world implementations",
"Consistently practicing data structures and algorithms to strengthen problem-solving skills and prepare for technical interviews and coding challenges",
"Building experience with backend systems, APIs, and automation workflows to create efficient, maintainable, and scalable applications"
];
