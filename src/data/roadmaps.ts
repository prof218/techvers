/* ============================================================
   Techoverxe — Interactive roadmap data (roadmap.sh-style)
   ------------------------------------------------------------
   Flagship roadmaps authored as node graphs. Slugs match the
   existing Velite roadmaps, so these upgrade /roadmaps/[slug]
   to the interactive view. Resources favor internal guides and
   canonical, stable documentation links.
   ============================================================ */

import type { InteractiveRoadmap } from "@/lib/roadmaps";
import { skillRoadmaps } from "./roadmaps-skills";
import { roleRoadmaps } from "./roadmaps-roles";

const aiEngineer: InteractiveRoadmap = {
  slug: "ai-engineer",
  title: "AI Engineer Roadmap",
  description:
    "An interactive path to becoming an AI engineer — from Python and math foundations through deep learning, LLMs, evaluation, and deployment.",
  level: "advanced",
  estimatedTime: "10–12 months",
  category: "AI",
  milestones: [
    {
      id: "foundations",
      title: "Programming & Math Foundations",
      summary: "The non-negotiable base every AI engineer needs.",
      topics: [
        { id: "foundations-python", title: "Python", summary: "The primary language of AI. Master functions, classes, and the standard library.", resources: [{ label: "python.org tutorial", url: "https://docs.python.org/3/tutorial/" }] },
        { id: "foundations-numpy", title: "NumPy & pandas", summary: "Work fluently with arrays and tabular data — the daily tools of data work.", resources: [{"label":"NumPy Quickstart Tutorial","url":"https://numpy.org/doc/stable/user/quickstart.html"},{"label":"pandas 10-Minute Guide","url":"https://pandas.pydata.org/docs/user_guide/10min.html"}]  },
        { id: "foundations-math", title: "Linear Algebra & Probability", summary: "Vectors, matrices, distributions, and the intuition behind gradients.", resources: [{"label":"3Blue1Brown Essence of Linear Algebra","url":"https://www.3blue1brown.com/topics/linear-algebra"},{"label":"Khan Academy Multivariable Calculus","url":"https://www.khanacademy.org/math/multivariable-calculus"}]  },
        { id: "foundations-git", title: "Git & the Command Line", summary: "Version control and a comfortable terminal are table stakes.", resources: [{ label: "Git docs", url: "https://git-scm.com/doc" }] },
      ],
    },
    {
      id: "classic-ml",
      title: "Classical Machine Learning",
      summary: "The fundamentals that still power most production systems.",
      topics: [
        { id: "ml-fundamentals", title: "ML Fundamentals", summary: "Regression, classification, and clustering — and when to use each.", resources: [{"label":"Google Machine Learning Crash Course","url":"https://developers.google.com/machine-learning/crash-course"}]  },
        { id: "ml-sklearn", title: "scikit-learn", summary: "Build, compare, and tune classical models.", resources: [{"label":"scikit-learn User Guide & Tutorials","url":"https://scikit-learn.org/stable/user_guide.html"}]  },
        { id: "ml-evaluation", title: "Model Evaluation", summary: "Train/val/test splits, leakage, and metrics like precision, recall, F1, ROC-AUC.", resources: [{ label: "What is AI model evaluation?", url: "/blog/what-is-ai-model-evaluation" }] },
        { id: "ml-features", title: "Feature Engineering", summary: "Turn raw data into signal models can learn from.", resources: [{"label":"scikit-learn Preprocessing & Feature Extraction","url":"https://scikit-learn.org/stable/modules/preprocessing.html"}] , optional: true },
      ],
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      summary: "Neural networks — the engine of modern AI.",
      topics: [
        { id: "dl-nn", title: "Neural Network Basics", summary: "Layers, activations, loss functions, and backpropagation.", resources: [{"label":"Neural Networks and Deep Learning by Michael Nielsen","url":"http://neuralnetworksanddeeplearning.com/"}]  },
        { id: "dl-pytorch", title: "PyTorch", summary: "The framework to build and train deep models.", resources: [{ label: "PyTorch", url: "https://pytorch.org/" }] },
        { id: "dl-cnn", title: "CNNs", summary: "Convolutional networks for images and vision.", resources: [{"label":"CS231n Convolutional Neural Networks for Visual Recognition","url":"https://cs231n.github.io/convolutional-networks/"}]  },
        { id: "dl-seq", title: "RNNs & Transformers", summary: "Sequence models, leading into the transformer architecture.", resources: [{"label":"The Illustrated Transformer by Jay Alammar","url":"https://jalammar.github.io/illustrated-transformer/"}]  },
      ],
    },
    {
      id: "llms",
      title: "Large Language Models",
      summary: "The modern AI stack most jobs touch in 2026.",
      topics: [
        { id: "llm-transformers", title: "Transformers & Attention", summary: "How modern LLMs actually work under the hood.", resources: [{"label":"Hugging Face NLP Course — Transformers","url":"https://huggingface.co/learn/nlp-course/"}]  },
        { id: "llm-prompting", title: "Prompt Engineering", summary: "Get reliable results from models; understand context windows.", resources: [{"label":"Prompt Engineering Roadmap","url":"/roadmaps/prompt-engineering"},{"label":"DAIR.AI Prompt Engineering Guide","url":"https://www.promptingguide.ai/"}]  },
        { id: "llm-rag", title: "Retrieval-Augmented Generation", summary: "Ground models in your own data for accurate answers.", resources: [{"label":"LangChain RAG Documentation","url":"https://python.langchain.com/docs/tutorials/rag/"},{"label":"OpenAI Embeddings & Vector Search","url":"https://platform.openai.com/docs/guides/embeddings"}]  },
        { id: "llm-agents", title: "AI Agents & Tool Use", summary: "Models that plan and call tools/APIs to get work done.", resources: [{ label: "AI technology guides", url: "/technologies/ai" }] },
      ],
    },
    {
      id: "eval-data",
      title: "Evaluation & Data",
      summary: "The skill that separates professionals from hobbyists.",
      topics: [
        { id: "eval-human", title: "Human Evaluation & Rubrics", summary: "Judge model quality with clear, consistent rubrics.", resources: [{ label: "Get paid to evaluate AI", url: "/ai-training-jobs" }] },
        { id: "eval-datasets", title: "Datasets & Annotation", summary: "Build, clean, and label the data that trains models.", resources: [{ label: "Data annotation career guide", url: "/blog/data-annotation-career-guide" }] },
        { id: "eval-judge", title: "LLM-as-a-Judge", summary: "Use models to grade models — with human validation.", resources: [{"label":"LMSYS Chatbot Arena Leaderboard","url":"https://chat.lmsys.org/"},{"label":"What is AI model evaluation?","url":"/blog/what-is-ai-model-evaluation"}] , optional: true },
      ],
    },
    {
      id: "deploy",
      title: "Deploy & Grow",
      summary: "Ship it, measure it, and prove it.",
      topics: [
        { id: "deploy-serving", title: "Serving Models (APIs)", summary: "Put a model behind an API people can call.", resources: [{"label":"vLLM High-Throughput Serving Engine","url":"https://docs.vllm.ai/"},{"label":"FastAPI Documentation","url":"/technologies/backend/fastapi"}]  },
        { id: "deploy-monitoring", title: "Monitoring & Iteration", summary: "Watch models in production and improve them deliberately.", resources: [{"label":"Arize AI ML Observability Guide","url":"https://arize.com/ml-observability/"}]  },
        { id: "deploy-portfolio", title: "Build a Portfolio", summary: "Three deployed, evaluated projects beat ten notebooks.", resources: [{ label: "Portfolio that gets hired", url: "/blog/ai-ml-portfolio-that-gets-hired" }] },
      ],
    },
  ],
};

const frontend: InteractiveRoadmap = {
  slug: "frontend-developer",
  title: "Frontend Developer Roadmap",
  description:
    "An interactive path to becoming a frontend developer — from web fundamentals through JavaScript, a framework, styling, and production-ready skills.",
  level: "beginner",
  estimatedTime: "6–9 months",
  category: "Frontend",
  milestones: [
    {
      id: "web-basics",
      title: "Internet & Web Basics",
      topics: [
        { id: "web-how", title: "How the Web Works", summary: "DNS, HTTP, browsers, and the request/response cycle.", resources: [{ label: "MDN: How the web works", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" }] },
        { id: "web-html", title: "HTML", summary: "Semantic markup — the skeleton of every page.", resources: [{ label: "MDN HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }] },
        { id: "web-css", title: "CSS", summary: "Layout (flexbox, grid), the box model, and responsive design.", resources: [{"label":"MDN Learn CSS","url":"https://developer.mozilla.org/en-US/docs/Learn/CSS"},{"label":"CSS-Tricks Flexbox & Grid Guides","url":"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}]  },
        { id: "web-a11y", title: "Accessibility Basics", summary: "Build for everyone — semantic HTML, alt text, keyboard nav.", resources: [{"label":"W3C Web Accessibility Initiative (WAI)","url":"https://www.w3.org/WAI/fundamentals/accessibility-intro/"},{"label":"A11y Project Checklist","url":"https://www.a11yproject.com/checklist/"}]  },
      ],
    },
    {
      id: "javascript",
      title: "JavaScript",
      topics: [
        { id: "js-fundamentals", title: "JS Fundamentals", summary: "Variables, functions, arrays, objects, and control flow.", resources: [{ label: "MDN JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }] },
        { id: "js-dom", title: "The DOM", summary: "Read and manipulate the page with JavaScript.", resources: [{"label":"MDN Introduction to the DOM","url":"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"}]  },
        { id: "js-es6", title: "Modern JS (ES6+)", summary: "Modules, destructuring, arrow functions, and more.", resources: [{"label":"JavaScript Roadmap","url":"/roadmaps/javascript"},{"label":"JavaScript.info Modern JavaScript Tutorial","url":"https://javascript.info/"}]  },
        { id: "js-async", title: "Async & Promises", summary: "fetch, async/await, and handling asynchronous code.", resources: [{"label":"MDN Asynchronous JavaScript","url":"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous"}]  },
      ],
    },
    {
      id: "tooling",
      title: "Tooling",
      topics: [
        { id: "tool-git", title: "Git & GitHub", summary: "Version control and collaboration.", resources: [{ label: "Git docs", url: "https://git-scm.com/doc" }] },
        { id: "tool-npm", title: "npm & Package Managers", summary: "Install and manage dependencies.", resources: [{"label":"npm CLI Documentation","url":"https://docs.npmjs.com/"}]  },
        { id: "tool-build", title: "Build Tools (Vite)", summary: "Bundle and serve modern apps fast.", resources: [{"label":"Vite Getting Started","url":"https://vitejs.dev/guide/"}]  },
        { id: "tool-devtools", title: "Browser DevTools", summary: "Debug, inspect, and profile in the browser.", resources: [{"label":"Chrome DevTools Documentation","url":"https://developer.chrome.com/docs/devtools"}] , optional: true },
      ],
    },
    {
      id: "framework",
      title: "A Framework",
      summary: "Pick one and go deep — React is the most in-demand.",
      topics: [
        { id: "fw-react", title: "React", summary: "Components, props, and JSX.", resources: [{ label: "react.dev", url: "https://react.dev/" }] },
        { id: "fw-state", title: "State & Hooks", summary: "useState, useEffect, and managing component state.", resources: [{"label":"React Roadmap","url":"/roadmaps/react"},{"label":"react.dev Managing State","url":"https://react.dev/learn/managing-state"}]  },
        { id: "fw-routing", title: "Routing", summary: "Multi-page navigation in single-page apps.", resources: [{"label":"Next.js App Router Guide","url":"/technologies/frontend/nextjs"}]  },
        { id: "fw-data", title: "Data Fetching", summary: "Load and cache remote data cleanly.", resources: [{"label":"TanStack Query (React Query)","url":"https://tanstack.com/query/latest"}]  },
      ],
    },
    {
      id: "styling",
      title: "Styling & UI",
      topics: [
        { id: "style-tailwind", title: "CSS Frameworks (Tailwind)", summary: "Build UIs fast with utility-first CSS.", resources: [{"label":"Tailwind CSS Documentation","url":"https://tailwindcss.com/docs"},{"label":"Tailwind UI Guide","url":"/technologies/frontend/tailwind-css"}]  },
        { id: "style-responsive", title: "Responsive Design", summary: "Looks great on every screen size.", resources: [{"label":"web.dev Responsive Web Design Basics","url":"https://web.dev/learn/design"}]  },
        { id: "style-systems", title: "Design Systems", summary: "Reusable, consistent components.", resources: [{ label: "Design guides", url: "/technologies/design" }] },
        { id: "style-anim", title: "Animations", summary: "Motion that enhances, not distracts.", resources: [{"label":"Motion for React","url":"https://motion.dev/"}] , optional: true },
      ],
    },
    {
      id: "production",
      title: "Production-Ready",
      topics: [
        { id: "prod-ts", title: "TypeScript", summary: "Type safety that catches bugs before users do.", resources: [{ label: "TypeScript docs", url: "https://www.typescriptlang.org/docs/" }] },
        { id: "prod-testing", title: "Testing", summary: "Unit and component tests you can trust.", resources: [{"label":"Vitest Guide","url":"https://vitest.dev/guide/"},{"label":"Testing Library Documentation","url":"https://testing-library.com/"}]  },
        { id: "prod-perf", title: "Performance & SEO", summary: "Fast loads, good Core Web Vitals, and discoverability.", resources: [{"label":"Google Core Web Vitals","url":"https://web.dev/explore/fast"}]  },
        { id: "prod-deploy", title: "Deploy", summary: "Ship to the web (Vercel, Netlify, and friends).", resources: [{"label":"Vercel Deployment Guide","url":"/technologies/cloud/vercel"}]  },
      ],
    },
  ],
};

const backend: InteractiveRoadmap = {
  slug: "backend-developer",
  title: "Backend Developer Roadmap",
  description:
    "An interactive path to becoming a backend developer — languages, databases, APIs, architecture, security, and deployment.",
  level: "intermediate",
  estimatedTime: "8–10 months",
  category: "Backend",
  milestones: [
    {
      id: "be-foundations",
      title: "Foundations",
      topics: [
        { id: "be-language", title: "A Language", summary: "Node.js, Python, or Go — pick one and get fluent.", resources: [{ label: "Node.js docs", url: "https://nodejs.org/en/docs" }] },
        { id: "be-git", title: "Git & CLI", summary: "Version control and a comfortable terminal.", resources: [{"label":"Git & GitHub Roadmap","url":"/roadmaps/git-github"},{"label":"Pro Git Book (Free)","url":"https://git-scm.com/book/en/v2"}]  },
        { id: "be-ds", title: "Data Structures", summary: "Arrays, maps, trees — and knowing when to use them.", resources: [{"label":"Computer Science Roadmap","url":"/roadmaps/computer-science"},{"label":"GeeksforGeeks Data Structures","url":"https://www.geeksforgeeks.org/data-structures/"}]  },
        { id: "be-http", title: "HTTP & REST", summary: "Methods, status codes, and how the web talks.", resources: [{"label":"API Design Roadmap","url":"/roadmaps/api-design"},{"label":"MDN HTTP Documentation","url":"https://developer.mozilla.org/en-US/docs/Web/HTTP"}]  },
      ],
    },
    {
      id: "be-databases",
      title: "Databases",
      topics: [
        { id: "db-sql", title: "Relational (PostgreSQL)", summary: "The default choice for most apps.", resources: [{ label: "PostgreSQL docs", url: "https://www.postgresql.org/docs/" }] },
        { id: "db-queries", title: "SQL", summary: "Joins, indexes, and writing efficient queries.", resources: [{"label":"SQL & Databases Roadmap","url":"/roadmaps/sql"},{"label":"PostgreSQL Official Tutorial","url":"https://www.postgresqltutorial.com/"}]  },
        { id: "db-nosql", title: "NoSQL (MongoDB)", summary: "Document stores and when they fit better.", resources: [{"label":"MongoDB University & Manual","url":"https://www.mongodb.com/docs/manual/"},{"label":"MongoDB Technology Guide","url":"/technologies/databases/mongodb"}] , optional: true },
        { id: "db-orm", title: "ORMs", summary: "Map your code to the database safely.", resources: [{"label":"Prisma ORM Documentation","url":"https://www.prisma.io/docs"}]  },
      ],
    },
    {
      id: "be-apis",
      title: "APIs",
      topics: [
        { id: "api-rest", title: "REST Design", summary: "Clean, predictable, well-versioned endpoints.", resources: [{"label":"API Design Roadmap","url":"/roadmaps/api-design"},{"label":"RESTful API Guidelines","url":"https://restfulapi.net/"}]  },
        { id: "api-auth", title: "Authentication", summary: "Sessions, JWT, and OAuth done right.", resources: [{"label":"OAuth 2.0 Simplified","url":"https://www.oauth.com/"},{"label":"JWT.io Introduction","url":"https://jwt.io/introduction"}]  },
        { id: "api-validation", title: "Validation & Errors", summary: "Never trust input; fail clearly.", resources: [{"label":"Zod Schema Validation","url":"https://zod.dev/"},{"label":"RFC 7807 Problem Details for APIs","url":"https://datatracker.ietf.org/doc/html/rfc7807"}]  },
        { id: "api-graphql", title: "GraphQL", summary: "A flexible alternative to REST.", resources: [{"label":"GraphQL Roadmap","url":"/roadmaps/graphql"},{"label":"GraphQL Official Learn Guide","url":"https://graphql.org/learn/"}] , optional: true },
      ],
    },
    {
      id: "be-architecture",
      title: "Architecture",
      topics: [
        { id: "arch-cache", title: "Caching (Redis)", summary: "Make reads fast and reduce load.", resources: [{"label":"Redis Documentation","url":"https://redis.io/docs/"},{"label":"Redis Technology Guide","url":"/technologies/databases/redis"}]  },
        { id: "arch-queues", title: "Message Queues", summary: "Decouple services and handle work asynchronously.", resources: [{"label":"RabbitMQ Tutorials","url":"https://www.rabbitmq.com/tutorials"},{"label":"Apache Kafka Quickstart","url":"https://kafka.apache.org/quickstart"}]  },
        { id: "arch-sysdesign", title: "System Design Basics", summary: "Scale, reliability, and trade-offs.", resources: [{ label: "System design interviews", url: "/interviews/system-design" }] },
        { id: "arch-microservices", title: "Microservices", summary: "Split big systems — when it's worth it.", resources: [{"label":"System Design Roadmap","url":"/roadmaps/system-design"},{"label":"Martin Fowler on Microservices","url":"https://martinfowler.com/articles/microservices.html"}] , optional: true },
      ],
    },
    {
      id: "be-security",
      title: "Security & Testing",
      topics: [
        { id: "sec-owasp", title: "Web Security (OWASP)", summary: "Prevent the common, costly vulnerabilities.", resources: [{"label":"Cyber Security Roadmap","url":"/roadmaps/cyber-security"},{"label":"OWASP Top 10 Web Application Security Risks","url":"https://owasp.org/www-project-top-ten/"}]  },
        { id: "sec-testing", title: "Testing", summary: "Unit, integration, and end-to-end confidence.", resources: [{"label":"Martin Fowler Practical Test Pyramid","url":"https://martinfowler.com/articles/practical-test-pyramid.html"}]  },
        { id: "sec-logging", title: "Logging & Monitoring", summary: "Know what your system is doing in production.", resources: [{"label":"OpenTelemetry Observability Documentation","url":"https://opentelemetry.io/docs/"}]  },
      ],
    },
    {
      id: "be-deploy",
      title: "DevOps & Deploy",
      topics: [
        { id: "be-docker", title: "Docker", summary: "Package your app to run anywhere.", resources: [{ label: "Docker docs", url: "https://docs.docker.com/" }] },
        { id: "be-cicd", title: "CI/CD", summary: "Automate tests and deployments.", resources: [{"label":"GitHub Actions Documentation","url":"https://docs.github.com/en/actions"}]  },
        { id: "be-cloud", title: "Cloud Basics", summary: "Deploy and run on AWS, GCP, or Azure.", resources: [{"label":"AWS Roadmap","url":"/roadmaps/aws"},{"label":"AWS Getting Started","url":"https://aws.amazon.com/getting-started/"}]  },
        { id: "be-scaling", title: "Scaling", summary: "Handle growth without falling over.", resources: [{"label":"System Design Roadmap","url":"/roadmaps/system-design"},{"label":"High Scalability Architecture Patterns","url":"http://highscalability.com/"}]  },
      ],
    },
  ],
};

const devops: InteractiveRoadmap = {
  slug: "devops-engineer",
  title: "DevOps Engineer Roadmap",
  description:
    "An interactive path to becoming a DevOps engineer — Linux, containers, orchestration, CI/CD, cloud, and observability.",
  level: "intermediate",
  estimatedTime: "8–10 months",
  category: "DevOps",
  milestones: [
    {
      id: "do-foundations",
      title: "Foundations",
      topics: [
        { id: "do-linux", title: "Linux", summary: "The operating system everything runs on.", resources: [{"label":"Linux Roadmap","url":"/roadmaps/linux"},{"label":"Linux Journey Interactive Learning","url":"https://linuxjourney.com/"}]  },
        { id: "do-networking", title: "Networking", summary: "DNS, TCP/IP, HTTP, load balancing, and firewalls.", resources: [{"label":"Cloudflare Network Layer Fundamentals","url":"https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/"}]  },
        { id: "do-scripting", title: "Scripting", summary: "Bash and Python to automate the boring stuff.", resources: [{"label":"Python Roadmap","url":"/roadmaps/python"},{"label":"Bash Guide for Beginners","url":"https://tldp.org/LDP/Bash-Beginners-Guide/html/"}]  },
        { id: "do-git", title: "Git", summary: "Version control for code and configuration.", resources: [{"label":"Git & GitHub Roadmap","url":"/roadmaps/git-github"},{"label":"Git Official Documentation","url":"https://git-scm.com/doc"}]  },
      ],
    },
    {
      id: "do-containers",
      title: "Containers",
      topics: [
        { id: "do-docker", title: "Docker", summary: "Package apps into portable containers.", resources: [{ label: "Docker docs", url: "https://docs.docker.com/" }] },
        { id: "do-registry", title: "Container Registries", summary: "Store and distribute images.", resources: [{"label":"Docker Hub Documentation","url":"https://docs.docker.com/docker-hub/"}]  },
        { id: "do-compose", title: "Docker Compose", summary: "Run multi-container apps locally.", resources: [{"label":"Docker Compose Specification","url":"https://docs.docker.com/compose/"}]  },
      ],
    },
    {
      id: "do-orchestration",
      title: "Orchestration",
      topics: [
        { id: "do-k8s", title: "Kubernetes", summary: "Run containers at scale, self-healing.", resources: [{ label: "Kubernetes docs", url: "https://kubernetes.io/docs/home/" }] },
        { id: "do-helm", title: "Helm", summary: "Package and template Kubernetes apps.", resources: [{"label":"Helm Documentation & Charts Guide","url":"https://helm.sh/docs/"}]  },
        { id: "do-mesh", title: "Service Mesh", summary: "Traffic, security, and observability between services.", resources: [{"label":"Istio Service Mesh Documentation","url":"https://istio.io/latest/docs/"}] , optional: true },
      ],
    },
    {
      id: "do-cicd",
      title: "CI/CD & Automation",
      topics: [
        { id: "do-pipelines", title: "Pipelines (GitHub Actions)", summary: "Automate build, test, and deploy.", resources: [{"label":"GitHub Actions Quickstart & Syntax","url":"https://docs.github.com/en/actions/quickstart"}]  },
        { id: "do-iac", title: "Infrastructure as Code (Terraform)", summary: "Version and reproduce your infrastructure.", resources: [{"label":"Terraform Roadmap","url":"/roadmaps/terraform"},{"label":"HashiCorp Terraform Tutorials","url":"https://developer.hashicorp.com/terraform/tutorials"}]  },
        { id: "do-config", title: "Config Management (Ansible)", summary: "Consistent server configuration at scale.", resources: [{"label":"Ansible Getting Started Guide","url":"https://docs.ansible.com/ansible/latest/getting_started/index.html"}] , optional: true },
      ],
    },
    {
      id: "do-cloud",
      title: "Cloud",
      topics: [
        { id: "do-provider", title: "A Cloud Provider", summary: "Go deep on AWS, Azure, or GCP.", resources: [{ label: "Cloud guides", url: "/technologies/cloud" }] },
        { id: "do-cloudnet", title: "Cloud Networking", summary: "VPCs, subnets, security groups, and DNS.", resources: [{"label":"AWS VPC User Guide","url":"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"}]  },
        { id: "do-managed", title: "Managed Services", summary: "Databases, queues, and functions you don't run yourself.", resources: [{"label":"Cloud Engineer Roadmap","url":"/roadmaps/cloud-engineer"},{"label":"AWS Managed Database (RDS) Overview","url":"https://aws.amazon.com/rds/"}]  },
      ],
    },
    {
      id: "do-observability",
      title: "Observability & Reliability",
      topics: [
        { id: "do-monitoring", title: "Monitoring (Prometheus/Grafana)", summary: "Metrics and dashboards for your systems.", resources: [{"label":"Prometheus Monitoring Documentation","url":"https://prometheus.io/docs/introduction/overview/"},{"label":"Grafana Dashboards & Tutorials","url":"https://grafana.com/tutorials/"}]  },
        { id: "do-logging", title: "Logging", summary: "Centralized, searchable logs.", resources: [{"label":"Elasticsearch & Fluentd Logging Guide","url":"https://www.elastic.co/guide/index.html"}]  },
        { id: "do-sre", title: "SRE & Incident Response", summary: "SLOs, on-call, and learning from failures.", resources: [{"label":"Google Site Reliability Engineering Books (Free)","url":"https://sre.google/books/"}]  },
        { id: "do-security", title: "DevSecOps", summary: "Bake security into the pipeline.", resources: [{"label":"Cyber Security Roadmap","url":"/roadmaps/cyber-security"},{"label":"DevSecOps Fundamentals (Snyk)","url":"https://snyk.io/learn/devsecops/"}] , optional: true },
      ],
    },
  ],
};

export const interactiveRoadmaps: InteractiveRoadmap[] = [
  aiEngineer,
  frontend,
  backend,
  devops,
  ...roleRoadmaps,
  ...skillRoadmaps,
];

export function getInteractiveRoadmap(slug: string): InteractiveRoadmap | undefined {
  return interactiveRoadmaps.find((r) => r.slug === slug);
}

export const interactiveRoadmapSlugs = new Set(interactiveRoadmaps.map((r) => r.slug));
