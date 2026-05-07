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
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Snowflake", "NoSQL"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "FastAPI", "Spring Boot", "REST APIs", "Microservices", "Docker", "Linux", "Redis", "Maven"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React.js", "React Native", "Vite", "Tailwind CSS", "HTML5", "Expo", "Web APIs"],
  },
  {
    category: "Data & Analytics",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "GeoPandas", "Scikit-learn", "PyTorch", "Jupyter", "NLTK", "Spark"],
  },
  {
    category: "AI & ML",
    items: ["OpenAI API", "Llama 3", "MediaPipe", "Computer Vision", "Speech APIs", "PyTorch", "Scikit-learn"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub Actions", "Vercel", "AWS (S3, EC2)", "Postman", "VS Code", "Selenium", "Cypress"],
  },
  {
    category: "Specialized",
    items: ["Asyncio", "Threading", "SSE", "Bloom Filters", "Concurrency", "OOP Design"],
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
    type: "System",
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
    featured: true,
    type: "Data",
  },
  {
  id: 5,
  title: "AI News Streamer",
  subtitle: "Real-Time News Aggregation & Sentiment Analysis",
  description:
    "Built a live news aggregation platform that polls RSS feeds, analyzes sentiment using NLP, and streams updates to users in real-time. Features automatic deduplication, sentiment scoring, and a responsive feed interface powered by Server-Sent Events.",
  problem: "News consumption is fragmented across sources, and tracking sentiment trends manually is time-consuming. I wanted a unified, real-time view with automatic sentiment analysis.",
  impact: "Continuously monitors multiple RSS feeds with intelligent deduplication. Delivers instant sentiment scores and summaries, enabling users to track breaking news and sentiment shifts as they happen.",
  tech: ["Python", "FastAPI", "NLTK", "SSE", "JavaScript", "Asyncio"],
  github: "https://github.com/Neel654/AI_News_Streamer",
  featured: true,
  type: "Data",
},
{
  id: 6,
  title: "TMUber Ride-Hailing Simulation",
  subtitle: "CLI-Based Transportation Platform",
  description:
    "Developed a comprehensive ride-hailing system simulation with driver-user matching, city grid navigation, and service request management. Features include fare calculation, zone-based pricing, wallet systems, and distance computation using Manhattan geometry across a 9×9 city block grid.",
  problem: "Understanding how ride-hailing platforms manage real-time driver assignment, pricing logic, and geographic routing in a constrained urban environment.",
  impact: "Built a complete terminal-based system with 20+ custom exception handlers for edge cases, OOP design patterns for extensibility, and robust address validation supporting both rides and deliveries across multiple city zones.",
  tech: ["Java", "OOP Design", "CLI", "Exception Handling", "Data Structures"],
  github: "https://github.com/Neel654/TmUber",
  featured: true,
  type: "Backend",
},
{
  id: 7,
  title: "JPMorgan Chase MIDAS Integration",
  subtitle: "Advanced Software Engineering Virtual Experience",
  description:
    "Completed JPMorgan's Advanced Software Engineering Forage program, building a microservices architecture for the MIDAS platform. Integrated external services, implemented REST APIs, and orchestrated multi-service communication using Spring Boot and Java.",
  problem: "Enterprise systems require robust service integration, error handling, and scalable architecture patterns to ensure reliable data flow across distributed components.",
  impact: "Successfully integrated 5+ external services into the MIDAS core platform, implementing production-grade exception handling, API contracts, and service orchestration following JPMorgan's engineering standards.",
  tech: ["Java", "Spring Boot", "REST APIs", "Microservices", "Maven"],
  github: "https://github.com/Neel654/Forage-Midas_654",
  featured: true,
  type: "Backend",
},
{
  id: 8,
  title: "SafeSense",
  subtitle: "Universal Biomechanics & Safety Platform",
  description:
    "Built a multi-modal AI safety application running entirely in-browser using computer vision and motion sensors. Features three modes: GYM (real-time form correction with rep counting and symmetry analysis), DRIVE (fatigue detection via facial tracking), and LIFE (fall detection using accelerometer data with emergency response simulation).",
  problem: "Expensive wearables create barriers to safety tech. I wanted to leverage sensors already in phones and laptops to provide real-time health and safety monitoring without privacy risks or costly hardware.",
  impact: "Delivered a privacy-first, client-side solution processing video and motion data locally via WebAssembly. Implemented 3-phase fall detection algorithm, voice coaching for workouts, and driver alertness monitoring—all accessible via any modern browser.",
  tech: ["JavaScript", "MediaPipe", "Computer Vision", "Web APIs", "HTML5"],
  github: "https://github.com/Neel654/SafeSense",
  featured: true,
  type: "Full-Stack",
},
{
  id: 9,
  title: "Personal Portfolio Website",
  subtitle: "Modern React Portfolio with Tailwind CSS",
  description:
    "Designed and developed a responsive personal portfolio website using React and Vite. Features custom components for project showcases, interactive UI elements, and optimized build configuration for deployment on Vercel. Implements modern frontend best practices with component-based architecture and utility-first CSS.",
  problem: "Needed a professional online presence to showcase technical projects, skills, and experience in an engaging, performant way that reflects attention to detail and modern web development standards.",
  impact: "Created a fast, accessible portfolio site with smooth animations and responsive design. Deployed with CI/CD pipeline for instant updates, serving as a central hub for recruiters and collaborators to explore my work.",
  tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Vercel"],
  github: "https://github.com/Neel654/neel-portfolio",
  featured: true,
  type: "Full-Stack",
},
{
  id: 10,
  title: "AI MUSE",
  subtitle: "Voice-Powered Conversational AI Companion",
  description:
    "Built a full-stack voice assistant with real-time speech recognition, contextual conversation memory, and web-augmented responses. Features desktop Python backend with Llama 3 integration and a cross-platform React Native mobile app. The system uses speech-to-text transcription, intelligent web search triggers, and text-to-speech synthesis to create natural, flowing conversations.",
  problem: "Most AI assistants feel transactional and robotic. I wanted to build a genuinely conversational companion that remembers context, asks follow-up questions, and seamlessly blends personal chat with web knowledge.",
  impact: "Deployed a multi-platform AI assistant supporting voice interactions with persistent conversation history, SerpAPI web search integration for real-time information, and custom prompt engineering to maintain engaging, friend-like dialogue. Mobile app built with Expo enables on-the-go access.",
  tech: ["Python", "Llama 3", "FastAPI", "React Native", "Expo", "Speech APIs"],
  github: "https://github.com/Neel654/AI_MUSE",
  featured: true,
  type: "Full-Stack",
}
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
