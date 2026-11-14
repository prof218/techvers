/* ============================================================
   Techoverxe — Interactive ROLE roadmaps (roadmap.sh-style)
   Slugs matching existing MDX roadmaps upgrade them to the
   interactive view; the rest are interactive-only and appear
   via the merged roadmaps listing.
   ============================================================ */

import type { InteractiveRoadmap } from "@/lib/roadmaps";

const fullstack: InteractiveRoadmap = {
  slug: "fullstack-developer",
  title: "Full Stack Developer Roadmap",
  description:
    "Become a full stack developer — frontend, backend, databases, and deployment, with the glue skills that tie them together.",
  level: "intermediate",
  estimatedTime: "10–12 months",
  category: "Full Stack",
  milestones: [
    {
      id: "fs-frontend",
      title: "Frontend",
      topics: [
        { id: "fs-html-css", title: "HTML & CSS", summary: "Structure and style, responsive by default." },
        { id: "fs-js", title: "JavaScript", summary: "The language of the web.", resources: [{ label: "JavaScript Roadmap", url: "/roadmaps/javascript" }] },
        { id: "fs-react", title: "A Framework (React)", summary: "Build interactive UIs.", resources: [{ label: "React Roadmap", url: "/roadmaps/react" }] },
      ],
    },
    {
      id: "fs-backend",
      title: "Backend",
      topics: [
        { id: "fs-server", title: "A Server Language", summary: "Node.js, Python, or Go.", resources: [{ label: "Node.js Roadmap", url: "/roadmaps/nodejs" }] },
        { id: "fs-apis", title: "APIs", summary: "REST and/or GraphQL." },
        { id: "fs-auth", title: "Authentication", summary: "Secure sessions and tokens." },
      ],
    },
    {
      id: "fs-data",
      title: "Databases",
      topics: [
        { id: "fs-sql", title: "SQL & Relational DBs", summary: "Model and query your data.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
        { id: "fs-nosql", title: "NoSQL", summary: "When documents fit better.", optional: true },
        { id: "fs-orm", title: "ORMs", summary: "Bridge code and database." },
      ],
    },
    {
      id: "fs-glue",
      title: "The Glue",
      topics: [
        { id: "fs-git", title: "Git & Collaboration", summary: "Version control and teamwork." },
        { id: "fs-testing", title: "Testing", summary: "Confidence across the stack." },
        { id: "fs-deploy", title: "Deployment & DevOps", summary: "Ship and operate your app.", resources: [{ label: "Docker Roadmap", url: "/roadmaps/docker" }] },
      ],
    },
  ],
};

const dataScientist: InteractiveRoadmap = {
  slug: "data-scientist",
  title: "Data Scientist Roadmap",
  description:
    "Become a data scientist — statistics, Python, data wrangling, machine learning, and communicating insight.",
  level: "advanced",
  estimatedTime: "10–12 months",
  category: "Data Science",
  milestones: [
    {
      id: "ds-foundations",
      title: "Foundations",
      topics: [
        { id: "ds-python", title: "Python", summary: "The primary tool for data science.", resources: [{ label: "Python Roadmap", url: "/roadmaps/python" }] },
        { id: "ds-stats", title: "Statistics & Probability", summary: "Distributions, hypothesis testing, inference." },
        { id: "ds-math", title: "Linear Algebra & Calculus", summary: "The math behind models." },
      ],
    },
    {
      id: "ds-data",
      title: "Working with Data",
      topics: [
        { id: "ds-pandas", title: "pandas & NumPy", summary: "Clean, transform, and analyze data." },
        { id: "ds-sql", title: "SQL", summary: "Get data out of databases.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
        { id: "ds-viz", title: "Visualization", summary: "matplotlib, seaborn, and telling stories." },
      ],
    },
    {
      id: "ds-ml",
      title: "Machine Learning",
      topics: [
        { id: "ds-sklearn", title: "scikit-learn", summary: "Classical ML models and pipelines." },
        { id: "ds-eval", title: "Model Evaluation", summary: "Metrics, validation, and avoiding leakage.", resources: [{ label: "What is AI model evaluation?", url: "/blog/what-is-ai-model-evaluation" }] },
        { id: "ds-dl", title: "Deep Learning", summary: "Neural networks for harder problems.", optional: true },
      ],
    },
    {
      id: "ds-pro",
      title: "Professional Skills",
      topics: [
        { id: "ds-experiments", title: "Experimentation & A/B Testing", summary: "Measure impact rigorously." },
        { id: "ds-communication", title: "Communicating Insight", summary: "Turn analysis into decisions." },
        { id: "ds-mlops", title: "MLOps Basics", summary: "Deploy and monitor models.", optional: true },
      ],
    },
  ],
};

const dataAnalyst: InteractiveRoadmap = {
  slug: "data-analyst",
  title: "Data Analyst Roadmap",
  description:
    "Become a data analyst — Excel, SQL, visualization, and the analytical thinking to turn raw data into business decisions.",
  level: "beginner",
  estimatedTime: "5–7 months",
  category: "Data",
  milestones: [
    {
      id: "da-foundations",
      title: "Foundations",
      topics: [
        { id: "da-excel", title: "Spreadsheets (Excel/Sheets)", summary: "Formulas, pivot tables, and lookups." },
        { id: "da-stats", title: "Statistics Basics", summary: "Averages, distributions, and correlation vs causation." },
        { id: "da-thinking", title: "Analytical Thinking", summary: "Ask the right questions of data." },
      ],
    },
    {
      id: "da-sql",
      title: "SQL",
      topics: [
        { id: "da-queries", title: "Querying Data", summary: "SELECT, JOIN, GROUP BY.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
        { id: "da-aggregation", title: "Aggregation & CTEs", summary: "Summarize and compose queries." },
      ],
    },
    {
      id: "da-viz",
      title: "Visualization & BI",
      topics: [
        { id: "da-tableau", title: "BI Tools (Tableau/Power BI)", summary: "Build dashboards stakeholders love." },
        { id: "da-dashboards", title: "Dashboard Design", summary: "Clarity, not clutter." },
        { id: "da-storytelling", title: "Data Storytelling", summary: "Drive decisions with narrative." },
      ],
    },
    {
      id: "da-advanced",
      title: "Level Up",
      topics: [
        { id: "da-python", title: "Python for Analysis", summary: "pandas for bigger, repeatable work.", resources: [{ label: "Python Roadmap", url: "/roadmaps/python" }], optional: true },
        { id: "da-ab", title: "A/B Testing", summary: "Measure the impact of changes." },
      ],
    },
  ],
};

const cloudEngineer: InteractiveRoadmap = {
  slug: "cloud-engineer",
  title: "Cloud Engineer Roadmap",
  description:
    "Design, deploy, and operate systems in the cloud — core services, networking, infrastructure as code, and security.",
  level: "intermediate",
  estimatedTime: "8–10 months",
  category: "Cloud",
  milestones: [
    {
      id: "ce-foundations",
      title: "Foundations",
      topics: [
        { id: "ce-linux", title: "Linux & Networking", summary: "The base every cloud engineer needs." },
        { id: "ce-provider", title: "A Cloud Provider", summary: "Go deep on AWS, Azure, or GCP.", resources: [{ label: "Cloud guides", url: "/technologies/cloud" }] },
        { id: "ce-cli", title: "Cloud CLI & SDK", summary: "Automate instead of clicking." },
      ],
    },
    {
      id: "ce-core",
      title: "Core Services",
      topics: [
        { id: "ce-compute", title: "Compute", summary: "VMs, containers, and serverless functions." },
        { id: "ce-storage", title: "Storage & Databases", summary: "Object storage and managed databases." },
        { id: "ce-networking", title: "Cloud Networking", summary: "VPCs, subnets, load balancers, DNS." },
      ],
    },
    {
      id: "ce-iac",
      title: "Automation",
      topics: [
        { id: "ce-terraform", title: "Infrastructure as Code", summary: "Terraform to version your infra." },
        { id: "ce-cicd", title: "CI/CD", summary: "Automated, repeatable deployments.", resources: [{ label: "DevOps Roadmap", url: "/roadmaps/devops-engineer" }] },
        { id: "ce-containers", title: "Containers", summary: "Docker and Kubernetes in the cloud.", resources: [{ label: "Kubernetes Roadmap", url: "/roadmaps/kubernetes" }] },
      ],
    },
    {
      id: "ce-ops",
      title: "Security & Operations",
      topics: [
        { id: "ce-iam", title: "IAM & Security", summary: "Least-privilege access and secrets." },
        { id: "ce-monitoring", title: "Monitoring & Cost", summary: "Observability and keeping bills sane." },
        { id: "ce-ha", title: "High Availability", summary: "Design for failure.", optional: true },
      ],
    },
  ],
};

const systemDesign: InteractiveRoadmap = {
  slug: "system-design",
  title: "System Design Roadmap",
  description:
    "Design large-scale systems — fundamentals, scaling, data storage, and the trade-offs that come up in senior interviews and real architecture.",
  level: "advanced",
  estimatedTime: "4–6 months",
  category: "Architecture",
  milestones: [
    {
      id: "sd-fundamentals",
      title: "Fundamentals",
      topics: [
        { id: "sd-networking", title: "Networking Basics", summary: "DNS, TCP/IP, HTTP, and TLS.", resources: [{ label: "System design interviews", url: "/interviews/system-design" }] },
        { id: "sd-latency", title: "Latency & Throughput", summary: "The numbers every engineer should know." },
        { id: "sd-cap", title: "CAP Theorem", summary: "Consistency, availability, partition tolerance." },
      ],
    },
    {
      id: "sd-scaling",
      title: "Scaling",
      topics: [
        { id: "sd-loadbalancing", title: "Load Balancing", summary: "Distribute traffic across servers." },
        { id: "sd-caching", title: "Caching", summary: "Where and what to cache (Redis, CDNs)." },
        { id: "sd-horizontal", title: "Horizontal vs Vertical", summary: "Scaling strategies and trade-offs." },
      ],
    },
    {
      id: "sd-data",
      title: "Data at Scale",
      topics: [
        { id: "sd-sharding", title: "Sharding & Replication", summary: "Partition and copy data safely." },
        { id: "sd-sql-nosql", title: "SQL vs NoSQL", summary: "Choose storage for the workload." },
        { id: "sd-queues", title: "Message Queues", summary: "Decouple with async processing." },
      ],
    },
    {
      id: "sd-patterns",
      title: "Patterns & Practice",
      topics: [
        { id: "sd-microservices", title: "Microservices", summary: "When to split, and the costs." },
        { id: "sd-ratelimiting", title: "Rate Limiting & Idempotency", summary: "Protect and harden your services." },
        { id: "sd-casestudies", title: "Design Case Studies", summary: "Design a URL shortener, feed, chat, etc." },
      ],
    },
  ],
};

const cyberSecurity: InteractiveRoadmap = {
  slug: "cyber-security",
  title: "Cyber Security Roadmap",
  description:
    "Enter cybersecurity — networking and OS foundations, security principles, common attacks and defenses, and specialization paths.",
  level: "intermediate",
  estimatedTime: "8–12 months",
  category: "Cybersecurity",
  milestones: [
    {
      id: "cy-foundations",
      title: "Foundations",
      topics: [
        { id: "cy-networking", title: "Networking", summary: "TCP/IP, DNS, HTTP, and how data moves.", resources: [{ label: "Cybersecurity guides", url: "/technologies/cybersecurity" }] },
        { id: "cy-os", title: "Operating Systems", summary: "Linux and Windows internals." },
        { id: "cy-cli", title: "Command Line & Scripting", summary: "Automate recon and analysis." },
      ],
    },
    {
      id: "cy-principles",
      title: "Security Principles",
      topics: [
        { id: "cy-cia", title: "CIA Triad", summary: "Confidentiality, integrity, availability." },
        { id: "cy-crypto", title: "Cryptography Basics", summary: "Hashing, encryption, and TLS." },
        { id: "cy-iam", title: "Identity & Access", summary: "Authentication, authorization, least privilege." },
      ],
    },
    {
      id: "cy-attacks",
      title: "Attacks & Defenses",
      topics: [
        { id: "cy-owasp", title: "Web Vulnerabilities (OWASP)", summary: "XSS, SQLi, CSRF, and how to prevent them." },
        { id: "cy-network-sec", title: "Network Security", summary: "Firewalls, IDS/IPS, and segmentation." },
        { id: "cy-malware", title: "Malware & Phishing", summary: "Recognize and defend against common threats." },
      ],
    },
    {
      id: "cy-specialize",
      title: "Specialize",
      topics: [
        { id: "cy-pentest", title: "Penetration Testing", summary: "Authorized offensive security.", optional: true },
        { id: "cy-blueteam", title: "Blue Team / SOC", summary: "Detection, monitoring, incident response.", optional: true },
        { id: "cy-cloud-sec", title: "Cloud Security", summary: "Secure modern cloud workloads.", optional: true },
      ],
    },
  ],
};

const qaEngineer: InteractiveRoadmap = {
  slug: "qa-engineer",
  title: "QA Engineer Roadmap",
  description:
    "Become a QA / test automation engineer — testing fundamentals, manual testing, automation frameworks, and CI integration.",
  level: "beginner",
  estimatedTime: "5–7 months",
  category: "QA",
  milestones: [
    {
      id: "qa-foundations",
      title: "Foundations",
      topics: [
        { id: "qa-principles", title: "Testing Principles", summary: "Why we test and the testing pyramid." },
        { id: "qa-types", title: "Types of Testing", summary: "Unit, integration, E2E, regression." },
        { id: "qa-cases", title: "Writing Test Cases", summary: "Clear, reproducible, high-coverage cases." },
      ],
    },
    {
      id: "qa-manual",
      title: "Manual Testing",
      topics: [
        { id: "qa-exploratory", title: "Exploratory Testing", summary: "Find what scripts miss." },
        { id: "qa-bug", title: "Bug Reporting", summary: "Reports developers can act on." },
        { id: "qa-api", title: "API Testing (Postman)", summary: "Test endpoints directly." },
      ],
    },
    {
      id: "qa-automation",
      title: "Automation",
      topics: [
        { id: "qa-lang", title: "A Programming Language", summary: "JavaScript or Python for automation.", resources: [{ label: "JavaScript Roadmap", url: "/roadmaps/javascript" }] },
        { id: "qa-selenium", title: "UI Automation (Playwright/Cypress)", summary: "Automate browser tests." },
        { id: "qa-frameworks", title: "Test Frameworks", summary: "Structure and run suites." },
      ],
    },
    {
      id: "qa-pro",
      title: "Professional",
      topics: [
        { id: "qa-ci", title: "CI Integration", summary: "Run tests on every commit." },
        { id: "qa-performance", title: "Performance Testing", summary: "Load and stress testing.", optional: true },
      ],
    },
  ],
};

const android: InteractiveRoadmap = {
  slug: "android-developer",
  title: "Android Developer Roadmap",
  description:
    "Build Android apps — Kotlin, the Android SDK, Jetpack Compose, architecture, and publishing to the Play Store.",
  level: "intermediate",
  estimatedTime: "7–9 months",
  category: "Mobile",
  milestones: [
    {
      id: "an-foundations",
      title: "Foundations",
      topics: [
        { id: "an-kotlin", title: "Kotlin", summary: "The modern language for Android." },
        { id: "an-studio", title: "Android Studio & SDK", summary: "The tools and project structure.", resources: [{ label: "Mobile guides", url: "/technologies/mobile" }] },
        { id: "an-lifecycle", title: "Activities & Lifecycle", summary: "How Android apps run." },
      ],
    },
    {
      id: "an-ui",
      title: "Building UI",
      topics: [
        { id: "an-compose", title: "Jetpack Compose", summary: "Modern declarative UI." },
        { id: "an-navigation", title: "Navigation", summary: "Move between screens." },
        { id: "an-state", title: "State Management", summary: "ViewModel and reactive state." },
      ],
    },
    {
      id: "an-data",
      title: "Data & Networking",
      topics: [
        { id: "an-networking", title: "Networking (Retrofit)", summary: "Talk to APIs." },
        { id: "an-storage", title: "Local Storage (Room)", summary: "Persist data on device." },
        { id: "an-coroutines", title: "Coroutines", summary: "Async work the Kotlin way." },
      ],
    },
    {
      id: "an-ship",
      title: "Architecture & Ship",
      topics: [
        { id: "an-mvvm", title: "MVVM & Clean Architecture", summary: "Maintainable app structure." },
        { id: "an-testing", title: "Testing", summary: "Unit and UI tests." },
        { id: "an-publish", title: "Publishing", summary: "Release to the Play Store." },
      ],
    },
  ],
};

const blockchain: InteractiveRoadmap = {
  slug: "blockchain-developer",
  title: "Blockchain Developer Roadmap",
  description:
    "Build on blockchain — how blockchains work, smart contracts with Solidity, dApps, and security.",
  level: "advanced",
  estimatedTime: "6–9 months",
  category: "Blockchain",
  milestones: [
    {
      id: "bc-foundations",
      title: "Foundations",
      topics: [
        { id: "bc-how", title: "How Blockchains Work", summary: "Blocks, consensus, and decentralization." },
        { id: "bc-crypto", title: "Cryptography", summary: "Hashing, keys, and signatures." },
        { id: "bc-wallets", title: "Wallets & Transactions", summary: "Keys, addresses, and gas." },
      ],
    },
    {
      id: "bc-contracts",
      title: "Smart Contracts",
      topics: [
        { id: "bc-solidity", title: "Solidity", summary: "The language of Ethereum contracts." },
        { id: "bc-evm", title: "The EVM", summary: "How contracts actually execute." },
        { id: "bc-standards", title: "Token Standards", summary: "ERC-20, ERC-721, and NFTs." },
      ],
    },
    {
      id: "bc-dapps",
      title: "dApps",
      topics: [
        { id: "bc-tools", title: "Dev Tools (Hardhat/Foundry)", summary: "Compile, test, and deploy contracts." },
        { id: "bc-web3", title: "Web3 Libraries", summary: "Connect frontends to the chain (ethers/viem)." },
        { id: "bc-frontend", title: "dApp Frontend", summary: "Build the user-facing app.", resources: [{ label: "React Roadmap", url: "/roadmaps/react" }] },
      ],
    },
    {
      id: "bc-security",
      title: "Security",
      topics: [
        { id: "bc-vulns", title: "Common Vulnerabilities", summary: "Reentrancy, overflow, and more." },
        { id: "bc-audits", title: "Testing & Audits", summary: "Contracts are hard to patch — test hard.", optional: true },
      ],
    },
  ],
};

const uxDesign: InteractiveRoadmap = {
  slug: "ux-design",
  title: "UX Design Roadmap",
  description:
    "Design products people love — UX fundamentals, research, interaction and visual design, and prototyping.",
  level: "beginner",
  estimatedTime: "5–7 months",
  category: "Design",
  milestones: [
    {
      id: "ux-foundations",
      title: "Foundations",
      topics: [
        { id: "ux-what", title: "What is UX", summary: "UX vs UI, and the design process.", resources: [{ label: "Design guides", url: "/technologies/design" }] },
        { id: "ux-principles", title: "Design Principles", summary: "Hierarchy, contrast, consistency, feedback." },
        { id: "ux-psychology", title: "Human Psychology", summary: "How people perceive and decide." },
      ],
    },
    {
      id: "ux-research",
      title: "Research",
      topics: [
        { id: "ux-interviews", title: "User Research", summary: "Interviews, surveys, and personas." },
        { id: "ux-journeys", title: "User Journeys", summary: "Map flows and find friction." },
        { id: "ux-usability", title: "Usability Testing", summary: "Watch real users; fix what breaks." },
      ],
    },
    {
      id: "ux-design",
      title: "Design",
      topics: [
        { id: "ux-ia", title: "Information Architecture", summary: "Organize content intuitively." },
        { id: "ux-wireframes", title: "Wireframing", summary: "Low-fidelity structure first." },
        { id: "ux-visual", title: "Visual & Interaction Design", summary: "Color, type, spacing, and motion." },
        { id: "ux-systems", title: "Design Systems", summary: "Reusable, consistent components." },
      ],
    },
    {
      id: "ux-tools",
      title: "Tools & Practice",
      topics: [
        { id: "ux-figma", title: "Figma", summary: "The industry-standard design tool." },
        { id: "ux-prototyping", title: "Prototyping", summary: "Make designs feel real." },
        { id: "ux-portfolio", title: "Build a Portfolio", summary: "Case studies that tell the story." },
      ],
    },
  ],
};

const gameDev: InteractiveRoadmap = {
  slug: "game-developer",
  title: "Game Developer Roadmap",
  description:
    "Build games — programming foundations, an engine, game and graphics concepts, and shipping your first title.",
  level: "intermediate",
  estimatedTime: "8–12 months",
  category: "Game Dev",
  milestones: [
    {
      id: "gd-foundations",
      title: "Foundations",
      topics: [
        { id: "gd-programming", title: "Programming", summary: "C#, C++, or GDScript depending on engine." },
        { id: "gd-math", title: "Game Math", summary: "Vectors, transforms, and trigonometry." },
        { id: "gd-loop", title: "The Game Loop", summary: "Update, render, and timing." },
      ],
    },
    {
      id: "gd-engine",
      title: "An Engine",
      topics: [
        { id: "gd-choose", title: "Choose an Engine", summary: "Unity, Unreal, or Godot." },
        { id: "gd-scenes", title: "Scenes & Entities", summary: "Structure a game world." },
        { id: "gd-physics", title: "Physics & Collisions", summary: "Movement and interaction." },
      ],
    },
    {
      id: "gd-concepts",
      title: "Game Concepts",
      topics: [
        { id: "gd-input", title: "Input & Controls", summary: "Responsive player control." },
        { id: "gd-ai", title: "Game AI", summary: "State machines and behavior." },
        { id: "gd-audio", title: "Audio & UI", summary: "Sound, menus, and HUDs." },
        { id: "gd-graphics", title: "Graphics & Shaders", summary: "Make it look good.", optional: true },
      ],
    },
    {
      id: "gd-ship",
      title: "Ship It",
      topics: [
        { id: "gd-optimization", title: "Optimization", summary: "Hit a smooth frame rate." },
        { id: "gd-polish", title: "Polish & Juice", summary: "The feel that makes games fun." },
        { id: "gd-publish", title: "Publishing", summary: "Release on Steam, itch.io, or mobile." },
      ],
    },
  ],
};

const ios: InteractiveRoadmap = {
  slug: "ios-developer",
  title: "iOS Developer Roadmap",
  description: "Build iOS apps with Swift and SwiftUI — the language, UI, data, and shipping to the App Store.",
  level: "intermediate",
  estimatedTime: "7–9 months",
  category: "Mobile",
  milestones: [
    { id: "ios-foundations", title: "Foundations", topics: [
      { id: "ios-swift", title: "Swift", summary: "The modern language for Apple platforms." },
      { id: "ios-xcode", title: "Xcode", summary: "The IDE and project structure.", resources: [{ label: "Mobile guides", url: "/technologies/mobile" }] },
      { id: "ios-uikit", title: "App Lifecycle", summary: "How iOS apps run." },
    ]},
    { id: "ios-ui", title: "Building UI", topics: [
      { id: "ios-swiftui", title: "SwiftUI", summary: "Declarative UI for Apple platforms." },
      { id: "ios-navigation", title: "Navigation", summary: "Move between screens." },
      { id: "ios-state", title: "State Management", summary: "@State, @Observable, and data flow." },
    ]},
    { id: "ios-data", title: "Data & Networking", topics: [
      { id: "ios-networking", title: "Networking (URLSession)", summary: "Talk to APIs." },
      { id: "ios-storage", title: "Persistence (SwiftData)", summary: "Store data locally." },
      { id: "ios-concurrency", title: "Async/Await", summary: "Modern Swift concurrency." },
    ]},
    { id: "ios-ship", title: "Ship It", topics: [
      { id: "ios-architecture", title: "Architecture (MVVM)", summary: "Maintainable app structure." },
      { id: "ios-testing", title: "Testing", summary: "XCTest and UI tests." },
      { id: "ios-appstore", title: "App Store", summary: "Publish and update your app." },
    ]},
  ],
};

const flutter: InteractiveRoadmap = {
  slug: "flutter",
  title: "Flutter Roadmap",
  description: "Build cross-platform apps with Flutter and Dart — one codebase for iOS, Android, web, and desktop.",
  level: "intermediate",
  estimatedTime: "5–7 months",
  category: "Mobile",
  milestones: [
    { id: "fl-foundations", title: "Foundations", topics: [
      { id: "fl-dart", title: "Dart", summary: "The language behind Flutter.", resources: [{ label: "Mobile guides", url: "/technologies/mobile" }] },
      { id: "fl-widgets", title: "Widgets", summary: "Everything is a widget." },
      { id: "fl-layout", title: "Layout", summary: "Rows, columns, and constraints." },
    ]},
    { id: "fl-ui", title: "Building UI", topics: [
      { id: "fl-navigation", title: "Navigation & Routing", summary: "Move between screens." },
      { id: "fl-state", title: "State Management", summary: "setState, Provider, or Riverpod." },
      { id: "fl-theming", title: "Theming", summary: "Material and Cupertino design." },
    ]},
    { id: "fl-data", title: "Data & Ship", topics: [
      { id: "fl-http", title: "Networking", summary: "Call REST APIs." },
      { id: "fl-storage", title: "Local Storage", summary: "Persist data on device." },
      { id: "fl-publish", title: "Publishing", summary: "Ship to both app stores." },
    ]},
  ],
};

const softwareArchitect: InteractiveRoadmap = {
  slug: "software-architect",
  title: "Software Architect Roadmap",
  description: "Grow into a software architect — deep technical breadth, system design, patterns, and the soft skills to lead.",
  level: "advanced",
  estimatedTime: "ongoing",
  category: "Architecture",
  milestones: [
    { id: "sa-foundations", title: "Strong Foundations", topics: [
      { id: "sa-depth", title: "Deep Technical Breadth", summary: "Know multiple stacks and their trade-offs." },
      { id: "sa-patterns", title: "Design Patterns", summary: "The vocabulary of good design." },
      { id: "sa-principles", title: "SOLID & Clean Code", summary: "Maintainable, testable systems." },
    ]},
    { id: "sa-systems", title: "Systems", topics: [
      { id: "sa-sysdesign", title: "System Design", summary: "Scale, reliability, and trade-offs.", resources: [{ label: "System Design Roadmap", url: "/roadmaps/system-design" }] },
      { id: "sa-architectures", title: "Architecture Styles", summary: "Monolith, microservices, event-driven." },
      { id: "sa-data", title: "Data Architecture", summary: "Storage, consistency, and pipelines." },
    ]},
    { id: "sa-practice", title: "Practice", topics: [
      { id: "sa-tradeoffs", title: "Evaluating Trade-offs", summary: "There are no right answers, only trade-offs." },
      { id: "sa-docs", title: "Documentation & ADRs", summary: "Record decisions and why." },
      { id: "sa-leadership", title: "Communication & Leadership", summary: "Influence without authority." },
    ]},
  ],
};

const mlops: InteractiveRoadmap = {
  slug: "mlops",
  title: "MLOps Roadmap",
  description: "Operationalize machine learning — pipelines, deployment, monitoring, and the engineering that keeps models useful.",
  level: "advanced",
  estimatedTime: "4–6 months",
  category: "AI",
  milestones: [
    { id: "mlops-foundations", title: "Foundations", topics: [
      { id: "mlops-ml", title: "ML Fundamentals", summary: "Understand what you're operationalizing.", resources: [{ label: "AI Engineer Roadmap", url: "/roadmaps/ai-engineer" }] },
      { id: "mlops-devops", title: "DevOps Basics", summary: "CI/CD, containers, and IaC.", resources: [{ label: "DevOps Roadmap", url: "/roadmaps/devops-engineer" }] },
      { id: "mlops-python", title: "Python Engineering", summary: "Production-grade Python." },
    ]},
    { id: "mlops-pipeline", title: "ML Pipelines", topics: [
      { id: "mlops-data", title: "Data & Feature Pipelines", summary: "Reliable, versioned data." },
      { id: "mlops-tracking", title: "Experiment Tracking", summary: "MLflow, Weights & Biases." },
      { id: "mlops-registry", title: "Model Registry", summary: "Version and promote models." },
    ]},
    { id: "mlops-serve", title: "Serve & Monitor", topics: [
      { id: "mlops-deploy", title: "Model Deployment", summary: "APIs, batch, and streaming." },
      { id: "mlops-monitor", title: "Monitoring & Drift", summary: "Catch degradation early." },
      { id: "mlops-eval", title: "Continuous Evaluation", summary: "Keep quality high over time.", resources: [{ label: "What is AI model evaluation?", url: "/blog/what-is-ai-model-evaluation" }] },
    ]},
  ],
};

const productManager: InteractiveRoadmap = {
  slug: "product-manager",
  title: "Product Manager Roadmap",
  description: "Become a product manager — discovery, strategy, execution, and the skills to ship products people want.",
  level: "intermediate",
  estimatedTime: "ongoing",
  category: "Product",
  milestones: [
    { id: "pm-foundations", title: "Foundations", topics: [
      { id: "pm-role", title: "The PM Role", summary: "What product managers actually do." },
      { id: "pm-users", title: "User Research", summary: "Understand real problems." },
      { id: "pm-metrics", title: "Metrics & Data", summary: "Measure what matters." },
    ]},
    { id: "pm-strategy", title: "Strategy", topics: [
      { id: "pm-vision", title: "Vision & Strategy", summary: "Where are we going and why." },
      { id: "pm-prioritization", title: "Prioritization", summary: "Say no to good ideas for great ones." },
      { id: "pm-roadmap", title: "Roadmapping", summary: "Plan and communicate the path." },
    ]},
    { id: "pm-execution", title: "Execution", topics: [
      { id: "pm-specs", title: "Writing Specs", summary: "Clear requirements teams can build." },
      { id: "pm-agile", title: "Agile Delivery", summary: "Ship iteratively with engineering." },
      { id: "pm-launch", title: "Launch & Iterate", summary: "Ship, measure, improve." },
      { id: "pm-stakeholders", title: "Stakeholder Management", summary: "Align everyone.", optional: true },
    ]},
  ],
};

const technicalWriter: InteractiveRoadmap = {
  slug: "technical-writer",
  title: "Technical Writer Roadmap",
  description: "Become a technical writer — clear writing, documentation types, tooling, and working with engineers.",
  level: "beginner",
  estimatedTime: "4–6 months",
  category: "Writing",
  milestones: [
    { id: "tw-foundations", title: "Foundations", topics: [
      { id: "tw-writing", title: "Clear Writing", summary: "Concise, structured, audience-first." },
      { id: "tw-audience", title: "Know Your Audience", summary: "Write for the reader, not yourself." },
      { id: "tw-tech", title: "Technical Fluency", summary: "Understand what you document." },
    ]},
    { id: "tw-docs", title: "Documentation Types", topics: [
      { id: "tw-tutorials", title: "Tutorials & Guides", summary: "Teach step by step." },
      { id: "tw-reference", title: "API Reference", summary: "Accurate, complete references." },
      { id: "tw-concepts", title: "Conceptual Docs", summary: "Explain the why." },
    ]},
    { id: "tw-tooling", title: "Tooling & Process", topics: [
      { id: "tw-markdown", title: "Markdown & Docs-as-Code", summary: "Write docs like software." },
      { id: "tw-git", title: "Git for Writers", summary: "Version and review docs.", resources: [{ label: "Git & GitHub Roadmap", url: "/roadmaps/git-github" }] },
      { id: "tw-collab", title: "Working with Engineers", summary: "Source accurate information.", optional: true },
    ]},
  ],
};

export const roleRoadmaps: InteractiveRoadmap[] = [
  fullstack,
  dataScientist,
  dataAnalyst,
  cloudEngineer,
  systemDesign,
  cyberSecurity,
  qaEngineer,
  android,
  blockchain,
  uxDesign,
  gameDev,
  ios,
  flutter,
  softwareArchitect,
  mlops,
  productManager,
  technicalWriter,
];
