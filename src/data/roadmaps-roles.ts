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
        { id: "fs-html-css", title: "HTML & CSS", summary: "Structure and style, responsive by default.", resources: [{"label":"MDN HTML & CSS Guides","url":"https://developer.mozilla.org/en-US/docs/Learn"}]  },
        { id: "fs-js", title: "JavaScript", summary: "The language of the web.", resources: [{ label: "JavaScript Roadmap", url: "/roadmaps/javascript" }] },
        { id: "fs-react", title: "A Framework (React)", summary: "Build interactive UIs.", resources: [{ label: "React Roadmap", url: "/roadmaps/react" }] },
      ],
    },
    {
      id: "fs-backend",
      title: "Backend",
      topics: [
        { id: "fs-server", title: "A Server Language", summary: "Node.js, Python, or Go.", resources: [{ label: "Node.js Roadmap", url: "/roadmaps/nodejs" }] },
        { id: "fs-apis", title: "APIs", summary: "REST and/or GraphQL.", resources: [{"label":"API Design Roadmap","url":"/roadmaps/api-design"},{"label":"RESTful API Tutorial","url":"https://restfulapi.net/"}]  },
        { id: "fs-auth", title: "Authentication", summary: "Secure sessions and tokens.", resources: [{"label":"Auth0 Introduction to IAM & Authentication","url":"https://auth0.com/intro-to-iam"},{"label":"JWT.io Introduction","url":"https://jwt.io/introduction"}]  },
      ],
    },
    {
      id: "fs-data",
      title: "Databases",
      topics: [
        { id: "fs-sql", title: "SQL & Relational DBs", summary: "Model and query your data.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
        { id: "fs-nosql", title: "NoSQL", summary: "When documents fit better.", resources: [{"label":"MongoDB University","url":"https://www.mongodb.com/docs/manual/"},{"label":"MongoDB Technology Guide","url":"/technologies/databases/mongodb"}] , optional: true },
        { id: "fs-orm", title: "ORMs", summary: "Bridge code and database.", resources: [{"label":"Prisma ORM Documentation","url":"https://www.prisma.io/docs"}]  },
      ],
    },
    {
      id: "fs-glue",
      title: "The Glue",
      topics: [
        { id: "fs-git", title: "Git & Collaboration", summary: "Version control and teamwork.", resources: [{"label":"Git & GitHub Roadmap","url":"/roadmaps/git-github"},{"label":"Git Official Documentation","url":"https://git-scm.com/doc"}]  },
        { id: "fs-testing", title: "Testing", summary: "Confidence across the stack.", resources: [{"label":"Vitest Testing Guide","url":"https://vitest.dev/guide/"},{"label":"Playwright End-to-End Testing","url":"https://playwright.dev/"}]  },
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
        { id: "ds-stats", title: "Statistics & Probability", summary: "Distributions, hypothesis testing, inference.", resources: [{"label":"Khan Academy Statistics & Probability","url":"https://www.khanacademy.org/math/statistics-probability"}]  },
        { id: "ds-math", title: "Linear Algebra & Calculus", summary: "The math behind models.", resources: [{"label":"3Blue1Brown Essence of Linear Algebra","url":"https://www.3blue1brown.com/topics/linear-algebra"}]  },
      ],
    },
    {
      id: "ds-data",
      title: "Working with Data",
      topics: [
        { id: "ds-pandas", title: "pandas & NumPy", summary: "Clean, transform, and analyze data.", resources: [{"label":"pandas Documentation","url":"https://pandas.pydata.org/docs/"},{"label":"NumPy Documentation","url":"https://numpy.org/doc/stable/"}]  },
        { id: "ds-sql", title: "SQL", summary: "Get data out of databases.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
        { id: "ds-viz", title: "Visualization", summary: "matplotlib, seaborn, and telling stories.", resources: [{"label":"matplotlib Tutorials","url":"https://matplotlib.org/stable/tutorials/index.html"},{"label":"Seaborn User Guide","url":"https://seaborn.pydata.org/tutorial.html"}]  },
      ],
    },
    {
      id: "ds-ml",
      title: "Machine Learning",
      topics: [
        { id: "ds-sklearn", title: "scikit-learn", summary: "Classical ML models and pipelines.", resources: [{"label":"scikit-learn User Guide","url":"https://scikit-learn.org/stable/user_guide.html"}]  },
        { id: "ds-eval", title: "Model Evaluation", summary: "Metrics, validation, and avoiding leakage.", resources: [{ label: "What is AI model evaluation?", url: "/blog/what-is-ai-model-evaluation" }] },
        { id: "ds-dl", title: "Deep Learning", summary: "Neural networks for harder problems.", resources: [{"label":"Deep Learning Specialization (deeplearning.ai)","url":"https://www.deeplearning.ai/"}] , optional: true },
      ],
    },
    {
      id: "ds-pro",
      title: "Professional Skills",
      topics: [
        { id: "ds-experiments", title: "Experimentation & A/B Testing", summary: "Measure impact rigorously.", resources: [{"label":"Experimentation & A/B Testing Guide (Harvard/Optimizely)","url":"https://www.optimizely.com/optimization-glossary/ab-testing/"}]  },
        { id: "ds-communication", title: "Communicating Insight", summary: "Turn analysis into decisions.", resources: [{"label":"Storytelling with Data (Cole Nussbaumer)","url":"https://www.storytellingwithdata.com/"}]  },
        { id: "ds-mlops", title: "MLOps Basics", summary: "Deploy and monitor models.", resources: [{"label":"MLOps Roadmap","url":"/roadmaps/mlops"},{"label":"MLflow Documentation","url":"https://mlflow.org/docs/latest/index.html"}] , optional: true },
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
        { id: "da-excel", title: "Spreadsheets (Excel/Sheets)", summary: "Formulas, pivot tables, and lookups.", resources: [{"label":"Microsoft Excel Video Training","url":"https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb"}]  },
        { id: "da-stats", title: "Statistics Basics", summary: "Averages, distributions, and correlation vs causation.", resources: [{"label":"Khan Academy Basic Statistics","url":"https://www.khanacademy.org/math/statistics-probability"}]  },
        { id: "da-thinking", title: "Analytical Thinking", summary: "Ask the right questions of data.", resources: [{"label":"Harvard Business Review — Keep Up with Your Quants","url":"https://hbr.org/2013/07/keep-up-with-your-quants"}]  },
      ],
    },
    {
      id: "da-sql",
      title: "SQL",
      topics: [
        { id: "da-queries", title: "Querying Data", summary: "SELECT, JOIN, GROUP BY.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
        { id: "da-aggregation", title: "Aggregation & CTEs", summary: "Summarize and compose queries.", resources: [{"label":"PostgreSQL Tutorial — Window Functions & CTEs","url":"https://www.postgresqltutorial.com/postgresql-window-function/"}]  },
      ],
    },
    {
      id: "da-viz",
      title: "Visualization & BI",
      topics: [
        { id: "da-tableau", title: "BI Tools (Tableau/Power BI)", summary: "Build dashboards stakeholders love.", resources: [{"label":"Tableau Free Training Videos","url":"https://www.tableau.com/learn/training"},{"label":"Microsoft Power BI Guided Learning","url":"https://learn.microsoft.com/en-us/power-bi/guided-learning/"}]  },
        { id: "da-dashboards", title: "Dashboard Design", summary: "Clarity, not clutter.", resources: [{"label":"Stephen Few — Dashboard Design Principles","url":"http://www.perceptualedge.com/"}]  },
        { id: "da-storytelling", title: "Data Storytelling", summary: "Drive decisions with narrative.", resources: [{"label":"Storytelling with Data Blog & Book","url":"https://www.storytellingwithdata.com/blog"}]  },
      ],
    },
    {
      id: "da-advanced",
      title: "Level Up",
      topics: [
        { id: "da-python", title: "Python for Analysis", summary: "pandas for bigger, repeatable work.", resources: [{ label: "Python Roadmap", url: "/roadmaps/python" }], optional: true },
        { id: "da-ab", title: "A/B Testing", summary: "Measure the impact of changes.", resources: [{"label":"A/B Testing Guide by Evan Miller","url":"https://www.evanmiller.org/ab-testing/"}]  },
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
        { id: "ce-linux", title: "Linux & Networking", summary: "The base every cloud engineer needs.", resources: [{"label":"Linux Roadmap","url":"/roadmaps/linux"},{"label":"Linux Journey Fundamentals","url":"https://linuxjourney.com/"}]  },
        { id: "ce-provider", title: "A Cloud Provider", summary: "Go deep on AWS, Azure, or GCP.", resources: [{ label: "Cloud guides", url: "/technologies/cloud" }] },
        { id: "ce-cli", title: "Cloud CLI & SDK", summary: "Automate instead of clicking.", resources: [{"label":"AWS CLI User Guide","url":"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html"}]  },
      ],
    },
    {
      id: "ce-core",
      title: "Core Services",
      topics: [
        { id: "ce-compute", title: "Compute", summary: "VMs, containers, and serverless functions.", resources: [{"label":"AWS Compute (EC2, ECS, Lambda) Overview","url":"https://aws.amazon.com/products/compute/"}]  },
        { id: "ce-storage", title: "Storage & Databases", summary: "Object storage and managed databases.", resources: [{"label":"AWS S3 Documentation","url":"https://docs.aws.amazon.com/s3/"}]  },
        { id: "ce-networking", title: "Cloud Networking", summary: "VPCs, subnets, load balancers, DNS.", resources: [{"label":"AWS VPC Networking Guide","url":"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"}]  },
      ],
    },
    {
      id: "ce-iac",
      title: "Automation",
      topics: [
        { id: "ce-terraform", title: "Infrastructure as Code", summary: "Terraform to version your infra.", resources: [{"label":"Terraform Roadmap","url":"/roadmaps/terraform"},{"label":"HashiCorp Terraform Tutorials","url":"https://developer.hashicorp.com/terraform/tutorials"}]  },
        { id: "ce-cicd", title: "CI/CD", summary: "Automated, repeatable deployments.", resources: [{ label: "DevOps Roadmap", url: "/roadmaps/devops-engineer" }] },
        { id: "ce-containers", title: "Containers", summary: "Docker and Kubernetes in the cloud.", resources: [{ label: "Kubernetes Roadmap", url: "/roadmaps/kubernetes" }] },
      ],
    },
    {
      id: "ce-ops",
      title: "Security & Operations",
      topics: [
        { id: "ce-iam", title: "IAM & Security", summary: "Least-privilege access and secrets.", resources: [{"label":"AWS IAM Security Best Practices","url":"https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"}]  },
        { id: "ce-monitoring", title: "Monitoring & Cost", summary: "Observability and keeping bills sane.", resources: [{"label":"Amazon CloudWatch User Guide","url":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"}]  },
        { id: "ce-ha", title: "High Availability", summary: "Design for failure.", resources: [{"label":"AWS Well-Architected Framework — Reliability Pillar","url":"https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"}] , optional: true },
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
        { id: "sd-latency", title: "Latency & Throughput", summary: "The numbers every engineer should know.", resources: [{"label":"Latency Numbers Every Programmer Should Know","url":"https://gist.github.com/jboner/2841832"}]  },
        { id: "sd-cap", title: "CAP Theorem", summary: "Consistency, availability, partition tolerance.", resources: [{"label":"Martin Kleppmann — Please Stop Calling Databases CP or AP","url":"https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html"}]  },
      ],
    },
    {
      id: "sd-scaling",
      title: "Scaling",
      topics: [
        { id: "sd-loadbalancing", title: "Load Balancing", summary: "Distribute traffic across servers.", resources: [{"label":"NGINX What is Load Balancing?","url":"https://www.nginx.com/resources/glossary/load-balancing/"}]  },
        { id: "sd-caching", title: "Caching", summary: "Where and what to cache (Redis, CDNs).", resources: [{"label":"Redis Caching Best Practices","url":"https://redis.io/docs/manual/client-side-caching/"},{"label":"Redis Technology Guide","url":"/technologies/databases/redis"}]  },
        { id: "sd-horizontal", title: "Horizontal vs Vertical", summary: "Scaling strategies and trade-offs.", resources: [{"label":"High Scalability Scaling Principles","url":"http://highscalability.com/"}]  },
      ],
    },
    {
      id: "sd-data",
      title: "Data at Scale",
      topics: [
        { id: "sd-sharding", title: "Sharding & Replication", summary: "Partition and copy data safely.", resources: [{"label":"Understanding Database Sharding (DigitalOcean)","url":"https://www.digitalocean.com/community/tutorials/understanding-database-sharding"}]  },
        { id: "sd-sql-nosql", title: "SQL vs NoSQL", summary: "Choose storage for the workload.", resources: [{"label":"SQL & Databases Roadmap","url":"/roadmaps/sql"},{"label":"Martin Fowler Polyglot Persistence","url":"https://martinfowler.com/bliki/PolyglotPersistence.html"}]  },
        { id: "sd-queues", title: "Message Queues", summary: "Decouple with async processing.", resources: [{"label":"RabbitMQ / Kafka Messaging Patterns","url":"https://www.enterpriseintegrationpatterns.com/"}]  },
      ],
    },
    {
      id: "sd-patterns",
      title: "Patterns & Practice",
      topics: [
        { id: "sd-microservices", title: "Microservices", summary: "When to split, and the costs.", resources: [{"label":"Martin Fowler Microservices Guide","url":"https://martinfowler.com/articles/microservices.html"}]  },
        { id: "sd-ratelimiting", title: "Rate Limiting & Idempotency", summary: "Protect and harden your services.", resources: [{"label":"Cloudflare Rate Limiting Architecture","url":"https://www.cloudflare.com/learning/bots/what-is-rate-limiting/"}]  },
        { id: "sd-casestudies", title: "Design Case Studies", summary: "Design a URL shortener, feed, chat, etc.", resources: [{"label":"ByteByteGo System Design Case Studies","url":"https://bytebytego.com/"},{"label":"The System Design Primer (GitHub)","url":"https://github.com/donnemartin/system-design-primer"}]  },
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
        { id: "cy-os", title: "Operating Systems", summary: "Linux and Windows internals.", resources: [{"label":"Operating Systems Three Easy Pieces (OSTEP)","url":"https://pages.cs.wisc.edu/~remzi/OSTEP/"}]  },
        { id: "cy-cli", title: "Command Line & Scripting", summary: "Automate recon and analysis.", resources: [{"label":"Linux Roadmap","url":"/roadmaps/linux"},{"label":"OverTheWire Bandit Wargame (Linux Security)","url":"https://overthewire.org/wargames/bandit/"}]  },
      ],
    },
    {
      id: "cy-principles",
      title: "Security Principles",
      topics: [
        { id: "cy-cia", title: "CIA Triad", summary: "Confidentiality, integrity, availability.", resources: [{"label":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework"}]  },
        { id: "cy-crypto", title: "Cryptography Basics", summary: "Hashing, encryption, and TLS.", resources: [{"label":"Practical Cryptography for Developers","url":"https://cryptobook.nakov.com/"}]  },
        { id: "cy-iam", title: "Identity & Access", summary: "Authentication, authorization, least privilege.", resources: [{"label":"NIST Special Publication 800-63 Digital Identity Guidelines","url":"https://pages.nist.gov/800-63-3/"}]  },
      ],
    },
    {
      id: "cy-attacks",
      title: "Attacks & Defenses",
      topics: [
        { id: "cy-owasp", title: "Web Vulnerabilities (OWASP)", summary: "XSS, SQLi, CSRF, and how to prevent them.", resources: [{"label":"OWASP Top Ten Web Vulnerabilities","url":"https://owasp.org/www-project-top-ten/"},{"label":"PortSwigger Web Security Academy","url":"https://portswigger.net/web-security"}]  },
        { id: "cy-network-sec", title: "Network Security", summary: "Firewalls, IDS/IPS, and segmentation.", resources: [{"label":"Wireshark Network Analysis Tutorial","url":"https://www.wireshark.org/docs/"}]  },
        { id: "cy-malware", title: "Malware & Phishing", summary: "Recognize and defend against common threats.", resources: [{"label":"CISA Cybersecurity Shields Up Guidance","url":"https://www.cisa.gov/shields-up"}]  },
      ],
    },
    {
      id: "cy-specialize",
      title: "Specialize",
      topics: [
        { id: "cy-pentest", title: "Penetration Testing", summary: "Authorized offensive security.", resources: [{"label":"Penetration Testing Guide","url":"/technologies/cybersecurity/penetration-testing"},{"label":"TryHackMe Penetration Testing Path","url":"https://tryhackme.com/"}] , optional: true },
        { id: "cy-blueteam", title: "Blue Team / SOC", summary: "Detection, monitoring, incident response.", resources: [{"label":"MITRE ATT&CK Framework","url":"https://attack.mitre.org/"}] , optional: true },
        { id: "cy-cloud-sec", title: "Cloud Security", summary: "Secure modern cloud workloads.", resources: [{"label":"Zero Trust Architecture Guide","url":"/technologies/cybersecurity/zero-trust"},{"label":"Cloud Security Alliance (CSA) Guidance","url":"https://cloudsecurityalliance.org/"}] , optional: true },
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
        { id: "qa-principles", title: "Testing Principles", summary: "Why we test and the testing pyramid.", resources: [{"label":"Martin Fowler The Practical Test Pyramid","url":"https://martinfowler.com/articles/practical-test-pyramid.html"}]  },
        { id: "qa-types", title: "Types of Testing", summary: "Unit, integration, E2E, regression.", resources: [{"label":"Atlassian The Different Types of Software Testing","url":"https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing"}]  },
        { id: "qa-cases", title: "Writing Test Cases", summary: "Clear, reproducible, high-coverage cases.", resources: [{"label":"Ministry of Testing How to Write Test Cases","url":"https://www.ministryoftesting.com/"}]  },
      ],
    },
    {
      id: "qa-manual",
      title: "Manual Testing",
      topics: [
        { id: "qa-exploratory", title: "Exploratory Testing", summary: "Find what scripts miss.", resources: [{"label":"James Bach Exploratory Testing Explained","url":"https://www.satisfice.com/exploratory-testing"}]  },
        { id: "qa-bug", title: "Bug Reporting", summary: "Reports developers can act on.", resources: [{"label":"Software Testing Help How to Write a Good Bug Report","url":"https://www.softwaretestinghelp.com/how-to-write-good-bug-report/"}]  },
        { id: "qa-api", title: "API Testing (Postman)", summary: "Test endpoints directly.", resources: [{"label":"Postman API Testing Learning Center","url":"https://learning.postman.com/docs/writing-scripts/test-scripts/"}]  },
      ],
    },
    {
      id: "qa-automation",
      title: "Automation",
      topics: [
        { id: "qa-lang", title: "A Programming Language", summary: "JavaScript or Python for automation.", resources: [{ label: "JavaScript Roadmap", url: "/roadmaps/javascript" }] },
        { id: "qa-selenium", title: "UI Automation (Playwright/Cypress)", summary: "Automate browser tests.", resources: [{"label":"Playwright Testing Documentation","url":"https://playwright.dev/"},{"label":"Cypress Documentation","url":"https://docs.cypress.io/"}]  },
        { id: "qa-frameworks", title: "Test Frameworks", summary: "Structure and run suites.", resources: [{"label":"Vitest Guide","url":"https://vitest.dev/guide/"},{"label":"pytest Documentation","url":"https://docs.pytest.org/"}]  },
      ],
    },
    {
      id: "qa-pro",
      title: "Professional",
      topics: [
        { id: "qa-ci", title: "CI Integration", summary: "Run tests on every commit.", resources: [{"label":"GitHub Actions CI Testing Guide","url":"https://docs.github.com/en/actions/automating-builds-and-tests"}]  },
        { id: "qa-performance", title: "Performance Testing", summary: "Load and stress testing.", resources: [{"label":"k6 Open Source Load Testing Documentation","url":"https://k6.io/docs/"}] , optional: true },
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
        { id: "an-kotlin", title: "Kotlin", summary: "The modern language for Android.", resources: [{"label":"Kotlin Official Documentation & Koans","url":"https://kotlinlang.org/docs/home.html"}]  },
        { id: "an-studio", title: "Android Studio & SDK", summary: "The tools and project structure.", resources: [{ label: "Mobile guides", url: "/technologies/mobile" }] },
        { id: "an-lifecycle", title: "Activities & Lifecycle", summary: "How Android apps run.", resources: [{"label":"Android Activity Lifecycle Guide","url":"https://developer.android.com/guide/components/activities/activity-lifecycle"}]  },
      ],
    },
    {
      id: "an-ui",
      title: "Building UI",
      topics: [
        { id: "an-compose", title: "Jetpack Compose", summary: "Modern declarative UI.", resources: [{"label":"Jetpack Compose Tutorial","url":"https://developer.android.com/jetpack/compose/tutorial"}]  },
        { id: "an-navigation", title: "Navigation", summary: "Move between screens.", resources: [{"label":"Jetpack Compose Navigation Guide","url":"https://developer.android.com/guide/navigation/navigation-getting-started"}]  },
        { id: "an-state", title: "State Management", summary: "ViewModel and reactive state.", resources: [{"label":"State in Jetpack Compose","url":"https://developer.android.com/jetpack/compose/state"}]  },
      ],
    },
    {
      id: "an-data",
      title: "Data & Networking",
      topics: [
        { id: "an-networking", title: "Networking (Retrofit)", summary: "Talk to APIs.", resources: [{"label":"Square Retrofit HTTP Client","url":"https://square.github.io/retrofit/"}]  },
        { id: "an-storage", title: "Local Storage (Room)", summary: "Persist data on device.", resources: [{"label":"Android Room Persistence Library","url":"https://developer.android.com/training/data-storage/room"}]  },
        { id: "an-coroutines", title: "Coroutines", summary: "Async work the Kotlin way.", resources: [{"label":"Kotlin Coroutines & Flow on Android","url":"https://developer.android.com/kotlin/coroutines"}]  },
      ],
    },
    {
      id: "an-ship",
      title: "Architecture & Ship",
      topics: [
        { id: "an-mvvm", title: "MVVM & Clean Architecture", summary: "Maintainable app structure.", resources: [{"label":"Guide to Android App Architecture","url":"https://developer.android.com/topic/architecture"}]  },
        { id: "an-testing", title: "Testing", summary: "Unit and UI tests.", resources: [{"label":"Test Apps on Android","url":"https://developer.android.com/training/testing"}]  },
        { id: "an-publish", title: "Publishing", summary: "Release to the Play Store.", resources: [{"label":"Google Play Console Publishing Guide","url":"https://developer.android.com/distribute"}]  },
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
        { id: "bc-how", title: "How Blockchains Work", summary: "Blocks, consensus, and decentralization.", resources: [{"label":"Bitcoin Whitepaper by Satoshi Nakamoto","url":"https://bitcoin.org/bitcoin.pdf"},{"label":"Ethereum.org How Blockchain Works","url":"https://ethereum.org/en/developers/docs/intro-to-ethereum/"}]  },
        { id: "bc-crypto", title: "Cryptography", summary: "Hashing, keys, and signatures.", resources: [{"label":"Practical Cryptography for Developers","url":"https://cryptobook.nakov.com/"}]  },
        { id: "bc-wallets", title: "Wallets & Transactions", summary: "Keys, addresses, and gas.", resources: [{"label":"Ethereum.org Wallets & Accounts","url":"https://ethereum.org/en/developers/docs/accounts/"}]  },
      ],
    },
    {
      id: "bc-contracts",
      title: "Smart Contracts",
      topics: [
        { id: "bc-solidity", title: "Solidity", summary: "The language of Ethereum contracts.", resources: [{"label":"Solidity Documentation","url":"https://docs.soliditylang.org/"}]  },
        { id: "bc-evm", title: "The EVM", summary: "How contracts actually execute.", resources: [{"label":"Ethereum EVM Illustrated Guide","url":"https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf"}]  },
        { id: "bc-standards", title: "Token Standards", summary: "ERC-20, ERC-721, and NFTs.", resources: [{"label":"OpenZeppelin Contracts — ERC20 & ERC721","url":"https://docs.openzeppelin.com/contracts/5.x/erc20"}]  },
      ],
    },
    {
      id: "bc-dapps",
      title: "dApps",
      topics: [
        { id: "bc-tools", title: "Dev Tools (Hardhat/Foundry)", summary: "Compile, test, and deploy contracts.", resources: [{"label":"Foundry Ethereum Development Toolkit","url":"https://book.getfoundry.sh/"},{"label":"Hardhat Documentation","url":"https://hardhat.org/docs"}]  },
        { id: "bc-web3", title: "Web3 Libraries", summary: "Connect frontends to the chain (ethers/viem).", resources: [{"label":"viem / ethers.js Web3 Library","url":"https://viem.sh/"}]  },
        { id: "bc-frontend", title: "dApp Frontend", summary: "Build the user-facing app.", resources: [{ label: "React Roadmap", url: "/roadmaps/react" }] },
      ],
    },
    {
      id: "bc-security",
      title: "Security",
      topics: [
        { id: "bc-vulns", title: "Common Vulnerabilities", summary: "Reentrancy, overflow, and more.", resources: [{"label":"OpenZeppelin Smart Contract Security Best Practices","url":"https://docs.openzeppelin.com/learn/"}]  },
        { id: "bc-audits", title: "Testing & Audits", summary: "Contracts are hard to patch — test hard.", resources: [{"label":"OpenZeppelin Security Audits & Best Practices","url":"https://docs.openzeppelin.com/learn/"}] , optional: true },
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
        { id: "ux-principles", title: "Design Principles", summary: "Hierarchy, contrast, consistency, feedback.", resources: [{"label":"Nielsen Norman Group 10 Usability Heuristics","url":"https://www.nngroup.com/articles/ten-usability-heuristics/"}]  },
        { id: "ux-psychology", title: "Human Psychology", summary: "How people perceive and decide.", resources: [{"label":"Laws of UX (Jon Yablonski)","url":"https://lawsofux.com/"}]  },
      ],
    },
    {
      id: "ux-research",
      title: "Research",
      topics: [
        { id: "ux-interviews", title: "User Research", summary: "Interviews, surveys, and personas.", resources: [{"label":"NN/g User Interviews Guide","url":"https://www.nngroup.com/articles/user-interviews/"}]  },
        { id: "ux-journeys", title: "User Journeys", summary: "Map flows and find friction.", resources: [{"label":"NN/g Customer Journey Mapping","url":"https://www.nngroup.com/articles/journey-mapping-101/"}]  },
        { id: "ux-usability", title: "Usability Testing", summary: "Watch real users; fix what breaks.", resources: [{"label":"Steve Krug Don't Make Me Think Usability Guide","url":"https://sensible.com/dont-make-me-think/"}]  },
      ],
    },
    {
      id: "ux-design",
      title: "Design",
      topics: [
        { id: "ux-ia", title: "Information Architecture", summary: "Organize content intuitively.", resources: [{"label":"Information Architecture Institute Basics","url":"https://www.iainstitute.org/"}]  },
        { id: "ux-wireframes", title: "Wireframing", summary: "Low-fidelity structure first.", resources: [{"label":"Balsamiq Wireframing Academy","url":"https://balsamiq.com/learn/"}]  },
        { id: "ux-visual", title: "Visual & Interaction Design", summary: "Color, type, spacing, and motion.", resources: [{"label":"Refactoring UI by Adam Wathan & Steve Schoger","url":"https://www.refactoringui.com/"}]  },
        { id: "ux-systems", title: "Design Systems", summary: "Reusable, consistent components.", resources: [{"label":"Design System Roadmap","url":"/roadmaps/design-system"},{"label":"Brad Frost Atomic Design","url":"https://atomicdesign.bradfrost.com/"}]  },
      ],
    },
    {
      id: "ux-tools",
      title: "Tools & Practice",
      topics: [
        { id: "ux-figma", title: "Figma", summary: "The industry-standard design tool.", resources: [{"label":"Figma Learn Tutorials","url":"https://help.figma.com/hc/en-us/categories/360002051613-Learn-design"},{"label":"Figma Technology Guide","url":"/technologies/design/figma"}]  },
        { id: "ux-prototyping", title: "Prototyping", summary: "Make designs feel real.", resources: [{"label":"Figma Interactive Prototyping Guide","url":"https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma"}]  },
        { id: "ux-portfolio", title: "Build a Portfolio", summary: "Case studies that tell the story.", resources: [{"label":"Bestfolios Top UX Portfolios & Case Studies","url":"https://www.bestfolios.com/"}]  },
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
        { id: "gd-programming", title: "Programming", summary: "C#, C++, or GDScript depending on engine.", resources: [{"label":"C++ Roadmap","url":"/roadmaps/cpp"},{"label":"C# Documentation (Microsoft Learn)","url":"https://learn.microsoft.com/en-us/dotnet/csharp/"}]  },
        { id: "gd-math", title: "Game Math", summary: "Vectors, transforms, and trigonometry.", resources: [{"label":"Freya Holmér — Math for Game Developers (YouTube)","url":"https://www.youtube.com/@acegikmo"}]  },
        { id: "gd-loop", title: "The Game Loop", summary: "Update, render, and timing.", resources: [{"label":"Game Programming Patterns — Game Loop","url":"https://gameprogrammingpatterns.com/game-loop.html"}]  },
      ],
    },
    {
      id: "gd-engine",
      title: "An Engine",
      topics: [
        { id: "gd-choose", title: "Choose an Engine", summary: "Unity, Unreal, or Godot.", resources: [{"label":"Godot Engine Official Documentation","url":"https://docs.godotengine.org/"},{"label":"Unity Learn Courses","url":"https://learn.unity.com/"}]  },
        { id: "gd-scenes", title: "Scenes & Entities", summary: "Structure a game world.", resources: [{"label":"Unity GameObjects & Scenes Guide","url":"https://docs.unity3d.com/Manual/CreatingScenes.html"}]  },
        { id: "gd-physics", title: "Physics & Collisions", summary: "Movement and interaction.", resources: [{"label":"Physics for Game Developers (O'Reilly)","url":"https://docs.unity3d.com/Manual/PhysicsSection.html"}]  },
      ],
    },
    {
      id: "gd-concepts",
      title: "Game Concepts",
      topics: [
        { id: "gd-input", title: "Input & Controls", summary: "Responsive player control.", resources: [{"label":"Unity New Input System Documentation","url":"https://docs.unity3d.com/Packages/com.unity.inputsystem@latest"}]  },
        { id: "gd-ai", title: "Game AI", summary: "State machines and behavior.", resources: [{"label":"Game AI Pro — Collected Wisdom of Game AI Professionals","url":"http://www.gameaipro.com/"}]  },
        { id: "gd-audio", title: "Audio & UI", summary: "Sound, menus, and HUDs.", resources: [{"label":"FMOD Studio Interactive Audio Tutorials","url":"https://www.fmod.com/resources/documentation"}]  },
        { id: "gd-graphics", title: "Graphics & Shaders", summary: "Make it look good.", resources: [{"label":"LearnOpenGL — Graphics Programming","url":"https://learnopengl.com/"},{"label":"The Book of Shaders","url":"https://thebookofshaders.com/"}] , optional: true },
      ],
    },
    {
      id: "gd-ship",
      title: "Ship It",
      topics: [
        { id: "gd-optimization", title: "Optimization", summary: "Hit a smooth frame rate.", resources: [{"label":"Unity Performance Optimization Checklist","url":"https://unity.com/how-to/optimize-your-mobile-game-performance"}]  },
        { id: "gd-polish", title: "Polish & Juice", summary: "The feel that makes games fun.", resources: [{"label":"Juice It or Lose It by Martin Jonasson & Petri Purho","url":"https://www.youtube.com/watch?v=Fy0aCDmgnxg"}]  },
        { id: "gd-publish", title: "Publishing", summary: "Release on Steam, itch.io, or mobile.", resources: [{"label":"Steamworks Documentation & Best Practices","url":"https://partner.steamgames.com/doc/home"}]  },
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
      { id: "ios-swift", title: "Swift", summary: "The modern language for Apple platforms.", resources: [{"label":"The Swift Programming Language Book (Apple)","url":"https://docs.swift.org/swift-book/"}]  },
      { id: "ios-xcode", title: "Xcode", summary: "The IDE and project structure.", resources: [{ label: "Mobile guides", url: "/technologies/mobile" }] },
      { id: "ios-uikit", title: "App Lifecycle", summary: "How iOS apps run.", resources: [{"label":"Apple Developer — Managing Your App's Life Cycle","url":"https://developer.apple.com/documentation/uikit/app_and_environment/managing_your_app_s_life_cycle"}]  },
    ]},
    { id: "ios-ui", title: "Building UI", topics: [
      { id: "ios-swiftui", title: "SwiftUI", summary: "Declarative UI for Apple platforms.", resources: [{"label":"Apple SwiftUI Tutorials","url":"https://developer.apple.com/tutorials/swiftui"}]  },
      { id: "ios-navigation", title: "Navigation", summary: "Move between screens.", resources: [{"label":"Apple Developer NavigationStack Documentation","url":"https://developer.apple.com/documentation/swiftui/navigationstack"}]  },
      { id: "ios-state", title: "State Management", summary: "@State, @Observable, and data flow.", resources: [{"label":"Apple Developer Managing Model Data in Your App (@Observable)","url":"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app"}]  },
    ]},
    { id: "ios-data", title: "Data & Networking", topics: [
      { id: "ios-networking", title: "Networking (URLSession)", summary: "Talk to APIs.", resources: [{"label":"Apple Developer Fetching Website Data into Memory (URLSession)","url":"https://developer.apple.com/documentation/foundation/url_loading_system/fetching_website_data_into_memory"}]  },
      { id: "ios-storage", title: "Persistence (SwiftData)", summary: "Store data locally.", resources: [{"label":"Apple Developer SwiftData Documentation","url":"https://developer.apple.com/documentation/swiftdata"}]  },
      { id: "ios-concurrency", title: "Async/Await", summary: "Modern Swift concurrency.", resources: [{"label":"Swift Concurrency Guide (async/await, Tasks, Actors)","url":"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/"}]  },
    ]},
    { id: "ios-ship", title: "Ship It", topics: [
      { id: "ios-architecture", title: "Architecture (MVVM)", summary: "Maintainable app structure.", resources: [{"label":"Stanford CS193p — Developing Apps for iOS","url":"https://cs193p.sites.stanford.edu/"}]  },
      { id: "ios-testing", title: "Testing", summary: "XCTest and UI tests.", resources: [{"label":"Apple Developer Testing Your Apps in Xcode","url":"https://developer.apple.com/documentation/xcode/testing-your-apps-in-xcode"}]  },
      { id: "ios-appstore", title: "App Store", summary: "Publish and update your app.", resources: [{"label":"App Store Connect Help & Submission Guidelines","url":"https://developer.apple.com/app-store/review/guidelines/"}]  },
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
      { id: "fl-widgets", title: "Widgets", summary: "Everything is a widget.", resources: [{"label":"Flutter Official Widget Catalog","url":"https://docs.flutter.dev/ui/widgets"},{"label":"Flutter Technology Guide","url":"/technologies/mobile/flutter"}]  },
      { id: "fl-layout", title: "Layout", summary: "Rows, columns, and constraints.", resources: [{"label":"Flutter Layout Cheat Sheet & Tutorial","url":"https://docs.flutter.dev/ui/layout"}]  },
    ]},
    { id: "fl-ui", title: "Building UI", topics: [
      { id: "fl-navigation", title: "Navigation & Routing", summary: "Move between screens.", resources: [{"label":"GoRouter for Flutter Declarative Routing","url":"https://pub.dev/packages/go_router"}]  },
      { id: "fl-state", title: "State Management", summary: "setState, Provider, or Riverpod.", resources: [{"label":"Flutter State Management (Riverpod / Bloc)","url":"https://docs.flutter.dev/data-and-backend/state-mgmt/options"}]  },
      { id: "fl-theming", title: "Theming", summary: "Material and Cupertino design.", resources: [{"label":"Material Design 3 for Flutter","url":"https://docs.flutter.dev/ui/design/material"}]  },
    ]},
    { id: "fl-data", title: "Data & Ship", topics: [
      { id: "fl-http", title: "Networking", summary: "Call REST APIs.", resources: [{"label":"Fetch Data from the Internet in Flutter","url":"https://docs.flutter.dev/cookbook/networking/fetch-data"}]  },
      { id: "fl-storage", title: "Local Storage", summary: "Persist data on device.", resources: [{"label":"Store Key-Value Data on Disk (shared_preferences)","url":"https://docs.flutter.dev/cookbook/persistence/key-value"}]  },
      { id: "fl-publish", title: "Publishing", summary: "Ship to both app stores.", resources: [{"label":"Build and Release an Android & iOS App (Flutter Docs)","url":"https://docs.flutter.dev/deployment/android"}]  },
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
      { id: "sa-depth", title: "Deep Technical Breadth", summary: "Know multiple stacks and their trade-offs.", resources: [{"label":"System Design Roadmap","url":"/roadmaps/system-design"},{"label":"Martin Fowler Architecture Guide","url":"https://martinfowler.com/architecture/"}]  },
      { id: "sa-patterns", title: "Design Patterns", summary: "The vocabulary of good design.", resources: [{"label":"Refactoring.Guru Design Patterns Reference","url":"https://refactoring.guru/design-patterns"}]  },
      { id: "sa-principles", title: "SOLID & Clean Code", summary: "Maintainable, testable systems.", resources: [{"label":"SOLID Principles for Software Architecture","url":"https://en.wikipedia.org/wiki/SOLID"}]  },
    ]},
    { id: "sa-systems", title: "Systems", topics: [
      { id: "sa-sysdesign", title: "System Design", summary: "Scale, reliability, and trade-offs.", resources: [{ label: "System Design Roadmap", url: "/roadmaps/system-design" }] },
      { id: "sa-architectures", title: "Architecture Styles", summary: "Monolith, microservices, event-driven.", resources: [{"label":"Mark Richards Software Architecture Patterns (O'Reilly)","url":"https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/"}]  },
      { id: "sa-data", title: "Data Architecture", summary: "Storage, consistency, and pipelines.", resources: [{"label":"Designing Data-Intensive Applications (Martin Kleppmann)","url":"https://dataintensive.net/"}]  },
    ]},
    { id: "sa-practice", title: "Practice", topics: [
      { id: "sa-tradeoffs", title: "Evaluating Trade-offs", summary: "There are no right answers, only trade-offs.", resources: [{"label":"Software Architecture: The Hard Parts (Ford, Richards, Sadalage)","url":"https://fundamentalsofsoftwarearchitecture.com/"}]  },
      { id: "sa-docs", title: "Documentation & ADRs", summary: "Record decisions and why.", resources: [{"label":"Architecture Decision Records (ADRs) GitHub Guide","url":"https://adr.github.io/"}]  },
      { id: "sa-leadership", title: "Communication & Leadership", summary: "Influence without authority.", resources: [{"label":"Staff Engineer: Leadership Beyond the Management Track","url":"https://staffeng.com/"}]  },
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
      { id: "mlops-python", title: "Python Engineering", summary: "Production-grade Python.", resources: [{"label":"Python Roadmap","url":"/roadmaps/python"},{"label":"Hypermodern Python Guide by Claudio Jolowicz","url":"https://cjolowicz.github.io/posts/hypermodern-python-01-setup/"}]  },
    ]},
    { id: "mlops-pipeline", title: "ML Pipelines", topics: [
      { id: "mlops-data", title: "Data & Feature Pipelines", summary: "Reliable, versioned data.", resources: [{"label":"Data Version Control (DVC) Documentation","url":"https://dvc.org/doc"},{"label":"Feast Feature Store for Machine Learning","url":"https://docs.feast.dev/"}]  },
      { id: "mlops-tracking", title: "Experiment Tracking", summary: "MLflow, Weights & Biases.", resources: [{"label":"MLflow Tracking Documentation","url":"https://mlflow.org/docs/latest/tracking.html"},{"label":"Weights & Biases Quickstart","url":"https://docs.wandb.ai/quickstart"}]  },
      { id: "mlops-registry", title: "Model Registry", summary: "Version and promote models.", resources: [{"label":"MLflow Model Registry Guide","url":"https://mlflow.org/docs/latest/model-registry.html"}]  },
    ]},
    { id: "mlops-serve", title: "Serve & Monitor", topics: [
      { id: "mlops-deploy", title: "Model Deployment", summary: "APIs, batch, and streaming.", resources: [{"label":"BentoML Machine Learning Serving Platform","url":"https://docs.bentoml.com/"},{"label":"Triton Inference Server Documentation","url":"https://developer.nvidia.com/triton-inference-server"}]  },
      { id: "mlops-monitor", title: "Monitoring & Drift", summary: "Catch degradation early.", resources: [{"label":"Evidently AI Open-Source ML Monitoring & Drift Detection","url":"https://docs.evidentlyai.com/"}]  },
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
      { id: "pm-role", title: "The PM Role", summary: "What product managers actually do.", resources: [{"label":"Silicon Valley Product Group (SVPG) — Inspired by Marty Cagan","url":"https://www.svpg.com/articles/"}]  },
      { id: "pm-users", title: "User Research", summary: "Understand real problems.", resources: [{"label":"The Mom Test by Rob Fitzpatrick (Free Summary)","url":"https://www.momtestbook.com/"}]  },
      { id: "pm-metrics", title: "Metrics & Data", summary: "Measure what matters.", resources: [{"label":"Amplitude Product Analytics Playbook","url":"https://amplitude.com/playbook"}]  },
    ]},
    { id: "pm-strategy", title: "Strategy", topics: [
      { id: "pm-vision", title: "Vision & Strategy", summary: "Where are we going and why.", resources: [{"label":"Gibson Biddle (former Netflix VP Product) Strategy Frameworks","url":"https://gibsonbiddle.medium.com/"}]  },
      { id: "pm-prioritization", title: "Prioritization", summary: "Say no to good ideas for great ones.", resources: [{"label":"Intercom Guide to Product Management & Prioritization","url":"https://www.intercom.com/books/product-management"}]  },
      { id: "pm-roadmap", title: "Roadmapping", summary: "Plan and communicate the path.", resources: [{"label":"Product Roadmaps Relaunched (O'Reilly)","url":"https://www.oreilly.com/library/view/product-roadmaps-relaunched/9781491971710/"}]  },
    ]},
    { id: "pm-execution", title: "Execution", topics: [
      { id: "pm-specs", title: "Writing Specs", summary: "Clear requirements teams can build.", resources: [{"label":"Atlassian Product Requirements Document (PRD) Template","url":"https://www.atlassian.com/agile/product-management/requirements"}]  },
      { id: "pm-agile", title: "Agile Delivery", summary: "Ship iteratively with engineering.", resources: [{"label":"The Scrum Guide (Ken Schwaber & Jeff Sutherland)","url":"https://scrumguides.org/"}]  },
      { id: "pm-launch", title: "Launch & Iterate", summary: "Ship, measure, improve.", resources: [{"label":"First Round Review — Product Launch Checklist","url":"https://review.firstround.com/"}]  },
      { id: "pm-stakeholders", title: "Stakeholder Management", summary: "Align everyone.", resources: [{"label":"Reforge Product Leadership Frameworks","url":"https://www.reforge.com/blog"}] , optional: true },
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
      { id: "tw-writing", title: "Clear Writing", summary: "Concise, structured, audience-first.", resources: [{"label":"Google Technical Writing Courses (Free)","url":"https://developers.google.com/tech-writing"}]  },
      { id: "tw-audience", title: "Know Your Audience", summary: "Write for the reader, not yourself.", resources: [{"label":"Write the Docs Documentation Guide","url":"https://www.writethedocs.org/guide/"}]  },
      { id: "tw-tech", title: "Technical Fluency", summary: "Understand what you document.", resources: [{"label":"MDN Web Technology for Developers Reference","url":"https://developer.mozilla.org/en-US/docs/Web"}]  },
    ]},
    { id: "tw-docs", title: "Documentation Types", topics: [
      { id: "tw-tutorials", title: "Tutorials & Guides", summary: "Teach step by step.", resources: [{"label":"Diátaxis Documentation Framework (Tutorials, How-Tos, Reference, Explanation)","url":"https://diataxis.fr/"}]  },
      { id: "tw-reference", title: "API Reference", summary: "Accurate, complete references.", resources: [{"label":"OpenAPI Specification (OAS 3.1)","url":"https://swagger.io/specification/"}]  },
      { id: "tw-concepts", title: "Conceptual Docs", summary: "Explain the why.", resources: [{"label":"Microsoft Writing Style Guide","url":"https://learn.microsoft.com/en-us/style-guide/welcome/"}]  },
    ]},
    { id: "tw-tooling", title: "Tooling & Process", topics: [
      { id: "tw-markdown", title: "Markdown & Docs-as-Code", summary: "Write docs like software.", resources: [{"label":"Docs like Code by Anne Gentle","url":"https://www.docslikecode.com/"},{"label":"Markdown Guide Official Tutorials","url":"https://www.markdownguide.org/"}]  },
      { id: "tw-git", title: "Git for Writers", summary: "Version and review docs.", resources: [{ label: "Git & GitHub Roadmap", url: "/roadmaps/git-github" }] },
      { id: "tw-collab", title: "Working with Engineers", summary: "Source accurate information.", resources: [{"label":"GitLab Technical Writing Guidelines","url":"https://docs.gitlab.com/ee/development/documentation/"}] , optional: true },
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
