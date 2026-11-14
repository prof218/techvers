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
        { id: "foundations-numpy", title: "NumPy & pandas", summary: "Work fluently with arrays and tabular data — the daily tools of data work." },
        { id: "foundations-math", title: "Linear Algebra & Probability", summary: "Vectors, matrices, distributions, and the intuition behind gradients." },
        { id: "foundations-git", title: "Git & the Command Line", summary: "Version control and a comfortable terminal are table stakes.", resources: [{ label: "Git docs", url: "https://git-scm.com/doc" }] },
      ],
    },
    {
      id: "classic-ml",
      title: "Classical Machine Learning",
      summary: "The fundamentals that still power most production systems.",
      topics: [
        { id: "ml-fundamentals", title: "ML Fundamentals", summary: "Regression, classification, and clustering — and when to use each." },
        { id: "ml-sklearn", title: "scikit-learn", summary: "Build, compare, and tune classical models." },
        { id: "ml-evaluation", title: "Model Evaluation", summary: "Train/val/test splits, leakage, and metrics like precision, recall, F1, ROC-AUC.", resources: [{ label: "What is AI model evaluation?", url: "/blog/what-is-ai-model-evaluation" }] },
        { id: "ml-features", title: "Feature Engineering", summary: "Turn raw data into signal models can learn from.", optional: true },
      ],
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      summary: "Neural networks — the engine of modern AI.",
      topics: [
        { id: "dl-nn", title: "Neural Network Basics", summary: "Layers, activations, loss functions, and backpropagation." },
        { id: "dl-pytorch", title: "PyTorch", summary: "The framework to build and train deep models.", resources: [{ label: "PyTorch", url: "https://pytorch.org/" }] },
        { id: "dl-cnn", title: "CNNs", summary: "Convolutional networks for images and vision." },
        { id: "dl-seq", title: "RNNs & Transformers", summary: "Sequence models, leading into the transformer architecture." },
      ],
    },
    {
      id: "llms",
      title: "Large Language Models",
      summary: "The modern AI stack most jobs touch in 2026.",
      topics: [
        { id: "llm-transformers", title: "Transformers & Attention", summary: "How modern LLMs actually work under the hood." },
        { id: "llm-prompting", title: "Prompt Engineering", summary: "Get reliable results from models; understand context windows." },
        { id: "llm-rag", title: "Retrieval-Augmented Generation", summary: "Ground models in your own data for accurate answers." },
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
        { id: "eval-judge", title: "LLM-as-a-Judge", summary: "Use models to grade models — with human validation.", optional: true },
      ],
    },
    {
      id: "deploy",
      title: "Deploy & Grow",
      summary: "Ship it, measure it, and prove it.",
      topics: [
        { id: "deploy-serving", title: "Serving Models (APIs)", summary: "Put a model behind an API people can call." },
        { id: "deploy-monitoring", title: "Monitoring & Iteration", summary: "Watch models in production and improve them deliberately." },
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
        { id: "web-css", title: "CSS", summary: "Layout (flexbox, grid), the box model, and responsive design." },
        { id: "web-a11y", title: "Accessibility Basics", summary: "Build for everyone — semantic HTML, alt text, keyboard nav." },
      ],
    },
    {
      id: "javascript",
      title: "JavaScript",
      topics: [
        { id: "js-fundamentals", title: "JS Fundamentals", summary: "Variables, functions, arrays, objects, and control flow.", resources: [{ label: "MDN JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }] },
        { id: "js-dom", title: "The DOM", summary: "Read and manipulate the page with JavaScript." },
        { id: "js-es6", title: "Modern JS (ES6+)", summary: "Modules, destructuring, arrow functions, and more." },
        { id: "js-async", title: "Async & Promises", summary: "fetch, async/await, and handling asynchronous code." },
      ],
    },
    {
      id: "tooling",
      title: "Tooling",
      topics: [
        { id: "tool-git", title: "Git & GitHub", summary: "Version control and collaboration.", resources: [{ label: "Git docs", url: "https://git-scm.com/doc" }] },
        { id: "tool-npm", title: "npm & Package Managers", summary: "Install and manage dependencies." },
        { id: "tool-build", title: "Build Tools (Vite)", summary: "Bundle and serve modern apps fast." },
        { id: "tool-devtools", title: "Browser DevTools", summary: "Debug, inspect, and profile in the browser.", optional: true },
      ],
    },
    {
      id: "framework",
      title: "A Framework",
      summary: "Pick one and go deep — React is the most in-demand.",
      topics: [
        { id: "fw-react", title: "React", summary: "Components, props, and JSX.", resources: [{ label: "react.dev", url: "https://react.dev/" }] },
        { id: "fw-state", title: "State & Hooks", summary: "useState, useEffect, and managing component state." },
        { id: "fw-routing", title: "Routing", summary: "Multi-page navigation in single-page apps." },
        { id: "fw-data", title: "Data Fetching", summary: "Load and cache remote data cleanly." },
      ],
    },
    {
      id: "styling",
      title: "Styling & UI",
      topics: [
        { id: "style-tailwind", title: "CSS Frameworks (Tailwind)", summary: "Build UIs fast with utility-first CSS." },
        { id: "style-responsive", title: "Responsive Design", summary: "Looks great on every screen size." },
        { id: "style-systems", title: "Design Systems", summary: "Reusable, consistent components.", resources: [{ label: "Design guides", url: "/technologies/design" }] },
        { id: "style-anim", title: "Animations", summary: "Motion that enhances, not distracts.", optional: true },
      ],
    },
    {
      id: "production",
      title: "Production-Ready",
      topics: [
        { id: "prod-ts", title: "TypeScript", summary: "Type safety that catches bugs before users do.", resources: [{ label: "TypeScript docs", url: "https://www.typescriptlang.org/docs/" }] },
        { id: "prod-testing", title: "Testing", summary: "Unit and component tests you can trust." },
        { id: "prod-perf", title: "Performance & SEO", summary: "Fast loads, good Core Web Vitals, and discoverability." },
        { id: "prod-deploy", title: "Deploy", summary: "Ship to the web (Vercel, Netlify, and friends)." },
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
        { id: "be-git", title: "Git & CLI", summary: "Version control and a comfortable terminal." },
        { id: "be-ds", title: "Data Structures", summary: "Arrays, maps, trees — and knowing when to use them." },
        { id: "be-http", title: "HTTP & REST", summary: "Methods, status codes, and how the web talks." },
      ],
    },
    {
      id: "be-databases",
      title: "Databases",
      topics: [
        { id: "db-sql", title: "Relational (PostgreSQL)", summary: "The default choice for most apps.", resources: [{ label: "PostgreSQL docs", url: "https://www.postgresql.org/docs/" }] },
        { id: "db-queries", title: "SQL", summary: "Joins, indexes, and writing efficient queries." },
        { id: "db-nosql", title: "NoSQL (MongoDB)", summary: "Document stores and when they fit better.", optional: true },
        { id: "db-orm", title: "ORMs", summary: "Map your code to the database safely." },
      ],
    },
    {
      id: "be-apis",
      title: "APIs",
      topics: [
        { id: "api-rest", title: "REST Design", summary: "Clean, predictable, well-versioned endpoints." },
        { id: "api-auth", title: "Authentication", summary: "Sessions, JWT, and OAuth done right." },
        { id: "api-validation", title: "Validation & Errors", summary: "Never trust input; fail clearly." },
        { id: "api-graphql", title: "GraphQL", summary: "A flexible alternative to REST.", optional: true },
      ],
    },
    {
      id: "be-architecture",
      title: "Architecture",
      topics: [
        { id: "arch-cache", title: "Caching (Redis)", summary: "Make reads fast and reduce load." },
        { id: "arch-queues", title: "Message Queues", summary: "Decouple services and handle work asynchronously." },
        { id: "arch-sysdesign", title: "System Design Basics", summary: "Scale, reliability, and trade-offs.", resources: [{ label: "System design interviews", url: "/interviews/system-design" }] },
        { id: "arch-microservices", title: "Microservices", summary: "Split big systems — when it's worth it.", optional: true },
      ],
    },
    {
      id: "be-security",
      title: "Security & Testing",
      topics: [
        { id: "sec-owasp", title: "Web Security (OWASP)", summary: "Prevent the common, costly vulnerabilities." },
        { id: "sec-testing", title: "Testing", summary: "Unit, integration, and end-to-end confidence." },
        { id: "sec-logging", title: "Logging & Monitoring", summary: "Know what your system is doing in production." },
      ],
    },
    {
      id: "be-deploy",
      title: "DevOps & Deploy",
      topics: [
        { id: "be-docker", title: "Docker", summary: "Package your app to run anywhere.", resources: [{ label: "Docker docs", url: "https://docs.docker.com/" }] },
        { id: "be-cicd", title: "CI/CD", summary: "Automate tests and deployments." },
        { id: "be-cloud", title: "Cloud Basics", summary: "Deploy and run on AWS, GCP, or Azure." },
        { id: "be-scaling", title: "Scaling", summary: "Handle growth without falling over." },
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
        { id: "do-linux", title: "Linux", summary: "The operating system everything runs on." },
        { id: "do-networking", title: "Networking", summary: "DNS, TCP/IP, HTTP, load balancing, and firewalls." },
        { id: "do-scripting", title: "Scripting", summary: "Bash and Python to automate the boring stuff." },
        { id: "do-git", title: "Git", summary: "Version control for code and configuration." },
      ],
    },
    {
      id: "do-containers",
      title: "Containers",
      topics: [
        { id: "do-docker", title: "Docker", summary: "Package apps into portable containers.", resources: [{ label: "Docker docs", url: "https://docs.docker.com/" }] },
        { id: "do-registry", title: "Container Registries", summary: "Store and distribute images." },
        { id: "do-compose", title: "Docker Compose", summary: "Run multi-container apps locally." },
      ],
    },
    {
      id: "do-orchestration",
      title: "Orchestration",
      topics: [
        { id: "do-k8s", title: "Kubernetes", summary: "Run containers at scale, self-healing.", resources: [{ label: "Kubernetes docs", url: "https://kubernetes.io/docs/home/" }] },
        { id: "do-helm", title: "Helm", summary: "Package and template Kubernetes apps." },
        { id: "do-mesh", title: "Service Mesh", summary: "Traffic, security, and observability between services.", optional: true },
      ],
    },
    {
      id: "do-cicd",
      title: "CI/CD & Automation",
      topics: [
        { id: "do-pipelines", title: "Pipelines (GitHub Actions)", summary: "Automate build, test, and deploy." },
        { id: "do-iac", title: "Infrastructure as Code (Terraform)", summary: "Version and reproduce your infrastructure." },
        { id: "do-config", title: "Config Management (Ansible)", summary: "Consistent server configuration at scale.", optional: true },
      ],
    },
    {
      id: "do-cloud",
      title: "Cloud",
      topics: [
        { id: "do-provider", title: "A Cloud Provider", summary: "Go deep on AWS, Azure, or GCP.", resources: [{ label: "Cloud guides", url: "/technologies/cloud" }] },
        { id: "do-cloudnet", title: "Cloud Networking", summary: "VPCs, subnets, security groups, and DNS." },
        { id: "do-managed", title: "Managed Services", summary: "Databases, queues, and functions you don't run yourself." },
      ],
    },
    {
      id: "do-observability",
      title: "Observability & Reliability",
      topics: [
        { id: "do-monitoring", title: "Monitoring (Prometheus/Grafana)", summary: "Metrics and dashboards for your systems." },
        { id: "do-logging", title: "Logging", summary: "Centralized, searchable logs." },
        { id: "do-sre", title: "SRE & Incident Response", summary: "SLOs, on-call, and learning from failures." },
        { id: "do-security", title: "DevSecOps", summary: "Bake security into the pipeline.", optional: true },
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
