"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { technologyCategories } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

// Sample technology data per category (will be replaced by Velite content)
const techByCategory: Record<string, Array<{ slug: string; name: string; icon: string; description: string; difficulty: string; tags: string[] }>> = {
  frontend: [
    { slug: "react", name: "React", icon: "⚛️", description: "A JavaScript library for building component-based user interfaces", difficulty: "beginner", tags: ["JavaScript", "UI", "SPA"] },
    { slug: "nextjs", name: "Next.js", icon: "▲", description: "The React framework for production with SSR, SSG, and API routes", difficulty: "intermediate", tags: ["React", "SSR", "Full-Stack"] },
    { slug: "angular", name: "Angular", icon: "🅰️", description: "A TypeScript-based web application framework by Google", difficulty: "intermediate", tags: ["TypeScript", "Enterprise", "SPA"] },
    { slug: "vue", name: "Vue.js", icon: "💚", description: "Progressive framework for building user interfaces", difficulty: "beginner", tags: ["JavaScript", "Reactive", "SPA"] },
    { slug: "svelte", name: "Svelte", icon: "🔥", description: "Cybernetically enhanced web apps with compile-time optimizations", difficulty: "beginner", tags: ["Compiler", "Reactive", "Performance"] },
    { slug: "typescript", name: "TypeScript", icon: "🔷", description: "Typed superset of JavaScript that compiles to plain JavaScript", difficulty: "beginner", tags: ["JavaScript", "Types", "Tooling"] },
    { slug: "tailwind", name: "Tailwind CSS", icon: "🌊", description: "Utility-first CSS framework for rapid UI development", difficulty: "beginner", tags: ["CSS", "Utility", "Design"] },
    { slug: "astro", name: "Astro", icon: "🚀", description: "The web framework for content-driven websites with island architecture", difficulty: "intermediate", tags: ["SSG", "Islands", "Performance"] },
    { slug: "remix", name: "Remix", icon: "💿", description: "Full stack web framework focused on web standards and modern UX", difficulty: "intermediate", tags: ["React", "SSR", "Full-Stack"] },
    { slug: "htmx", name: "HTMX", icon: "📡", description: "High power tools for HTML — access AJAX, WebSockets from HTML", difficulty: "beginner", tags: ["HTML", "AJAX", "Simplicity"] },
  ],
  backend: [
    { slug: "nodejs", name: "Node.js", icon: "💚", description: "JavaScript runtime built on Chrome's V8 engine for server-side development", difficulty: "beginner", tags: ["JavaScript", "Runtime", "Server"] },
    { slug: "nestjs", name: "NestJS", icon: "🐱", description: "Progressive Node.js framework for enterprise-grade applications", difficulty: "intermediate", tags: ["TypeScript", "Enterprise", "Node.js"] },
    { slug: "express", name: "Express.js", icon: "⚡", description: "Fast, minimalist web framework for Node.js", difficulty: "beginner", tags: ["Node.js", "API", "Middleware"] },
    { slug: "spring-boot", name: "Spring Boot", icon: "🍃", description: "Java-based framework for creating microservices and web apps", difficulty: "intermediate", tags: ["Java", "Enterprise", "Microservices"] },
    { slug: "django", name: "Django", icon: "🐍", description: "High-level Python framework for rapid web development", difficulty: "beginner", tags: ["Python", "ORM", "Admin"] },
    { slug: "laravel", name: "Laravel", icon: "🔴", description: "PHP framework with elegant syntax and powerful features", difficulty: "beginner", tags: ["PHP", "MVC", "Eloquent"] },
    { slug: "aspnet", name: "ASP.NET", icon: "🔵", description: "Microsoft's framework for building modern web apps and APIs", difficulty: "intermediate", tags: ["C#", ".NET", "Enterprise"] },
    { slug: "fastapi", name: "FastAPI", icon: "⚡", description: "Modern, high-performance Python web framework for building APIs", difficulty: "beginner", tags: ["Python", "API", "Async"] },
    { slug: "go-fiber", name: "Go Fiber", icon: "🔵", description: "Express-inspired web framework built on Fasthttp for Go", difficulty: "intermediate", tags: ["Go", "Performance", "API"] },
    { slug: "rust-actix", name: "Actix Web", icon: "🦀", description: "Powerful, blazingly fast web framework for Rust", difficulty: "advanced", tags: ["Rust", "Performance", "Safety"] },
  ],
  databases: [
    { slug: "postgresql", name: "PostgreSQL", icon: "🐘", description: "Advanced open-source relational database with powerful features", difficulty: "beginner", tags: ["SQL", "ACID", "Relational"] },
    { slug: "mongodb", name: "MongoDB", icon: "🍃", description: "Document-oriented NoSQL database for flexible data models", difficulty: "beginner", tags: ["NoSQL", "Document", "JSON"] },
    { slug: "mysql", name: "MySQL", icon: "🐬", description: "World's most popular open-source relational database", difficulty: "beginner", tags: ["SQL", "Relational", "Web"] },
    { slug: "redis", name: "Redis", icon: "🔴", description: "In-memory data store used as cache, message broker, and DB", difficulty: "beginner", tags: ["Cache", "In-Memory", "Key-Value"] },
    { slug: "elasticsearch", name: "Elasticsearch", icon: "🔍", description: "Distributed search and analytics engine for all types of data", difficulty: "intermediate", tags: ["Search", "Analytics", "Full-Text"] },
    { slug: "cassandra", name: "Cassandra", icon: "👁️", description: "Distributed NoSQL database for handling large amounts of data", difficulty: "advanced", tags: ["NoSQL", "Distributed", "Wide-Column"] },
    { slug: "dynamodb", name: "DynamoDB", icon: "⚡", description: "AWS managed NoSQL database with single-digit millisecond performance", difficulty: "intermediate", tags: ["AWS", "NoSQL", "Serverless"] },
    { slug: "supabase", name: "Supabase", icon: "⚡", description: "Open source Firebase alternative built on PostgreSQL", difficulty: "beginner", tags: ["PostgreSQL", "Realtime", "Auth"] },
    { slug: "prisma", name: "Prisma", icon: "🔺", description: "Next-generation TypeScript ORM for Node.js and TypeScript", difficulty: "beginner", tags: ["ORM", "TypeScript", "Schema"] },
    { slug: "drizzle", name: "Drizzle ORM", icon: "💧", description: "TypeScript ORM that's lightweight and SQL-like", difficulty: "beginner", tags: ["ORM", "TypeScript", "SQL-like"] },
  ],
  cloud: [
    { slug: "aws", name: "AWS", icon: "☁️", description: "Amazon Web Services — the world's most comprehensive cloud platform", difficulty: "intermediate", tags: ["IaaS", "PaaS", "200+ Services"] },
    { slug: "azure", name: "Azure", icon: "🔵", description: "Microsoft's cloud computing platform for building and managing apps", difficulty: "intermediate", tags: ["Microsoft", "Enterprise", "Hybrid"] },
    { slug: "gcp", name: "GCP", icon: "🔴", description: "Google Cloud Platform with best-in-class AI/ML and data services", difficulty: "intermediate", tags: ["Google", "AI/ML", "BigQuery"] },
    { slug: "cloudflare", name: "Cloudflare", icon: "🟠", description: "Edge computing, CDN, DNS, and security services", difficulty: "beginner", tags: ["CDN", "Edge", "Security"] },
    { slug: "vercel", name: "Vercel", icon: "▲", description: "Frontend cloud platform for deploying Next.js and web applications", difficulty: "beginner", tags: ["Deployment", "Edge", "Next.js"] },
    { slug: "netlify", name: "Netlify", icon: "🟢", description: "Platform for building, deploying, and managing modern web projects", difficulty: "beginner", tags: ["JAMstack", "CI/CD", "Serverless"] },
    { slug: "digitalocean", name: "DigitalOcean", icon: "🔵", description: "Cloud infrastructure for developers with simple pricing", difficulty: "beginner", tags: ["VPS", "Kubernetes", "Simple"] },
    { slug: "fly-io", name: "Fly.io", icon: "🟣", description: "Deploy app servers close to your users worldwide", difficulty: "intermediate", tags: ["Edge", "Containers", "Global"] },
    { slug: "railway", name: "Railway", icon: "🚂", description: "Deploy infrastructure instantly with zero configuration", difficulty: "beginner", tags: ["PaaS", "Simple", "Databases"] },
    { slug: "aws-lambda", name: "AWS Lambda", icon: "⚡", description: "Run code without provisioning or managing servers", difficulty: "intermediate", tags: ["Serverless", "Functions", "Event-Driven"] },
  ],
  devops: [
    { slug: "docker", name: "Docker", icon: "🐳", description: "Platform for building, sharing, and running containerized applications", difficulty: "beginner", tags: ["Containers", "Images", "Compose"] },
    { slug: "kubernetes", name: "Kubernetes", icon: "☸️", description: "Container orchestration system for automating deployment and scaling", difficulty: "advanced", tags: ["Orchestration", "Scaling", "Clusters"] },
    { slug: "terraform", name: "Terraform", icon: "🟣", description: "Infrastructure as Code tool for building and managing cloud resources", difficulty: "intermediate", tags: ["IaC", "HCL", "Multi-Cloud"] },
    { slug: "jenkins", name: "Jenkins", icon: "🤵", description: "Open source automation server for CI/CD pipelines", difficulty: "intermediate", tags: ["CI/CD", "Automation", "Plugins"] },
    { slug: "github-actions", name: "GitHub Actions", icon: "🔄", description: "Automate workflows directly from your GitHub repository", difficulty: "beginner", tags: ["CI/CD", "GitHub", "Workflows"] },
    { slug: "ansible", name: "Ansible", icon: "🔴", description: "Simple IT automation for configuration management and deployment", difficulty: "intermediate", tags: ["Automation", "YAML", "Agentless"] },
    { slug: "prometheus", name: "Prometheus", icon: "🔥", description: "Open-source monitoring and alerting toolkit for cloud-native apps", difficulty: "intermediate", tags: ["Monitoring", "Metrics", "Alerting"] },
    { slug: "grafana", name: "Grafana", icon: "📊", description: "Open source analytics and visualization platform for metrics", difficulty: "beginner", tags: ["Dashboards", "Visualization", "Monitoring"] },
    { slug: "argocd", name: "ArgoCD", icon: "🐙", description: "Declarative GitOps continuous delivery tool for Kubernetes", difficulty: "intermediate", tags: ["GitOps", "K8s", "CD"] },
    { slug: "nginx", name: "Nginx", icon: "🟢", description: "High-performance web server, reverse proxy, and load balancer", difficulty: "intermediate", tags: ["Web Server", "Proxy", "Load Balancer"] },
  ],
  ai: [
    { slug: "llms", name: "Large Language Models", icon: "🧠", description: "Foundation models trained on vast text data for language understanding and generation", difficulty: "advanced", tags: ["NLP", "GPT", "Transformers"] },
    { slug: "ai-agents", name: "AI Agents", icon: "🤖", description: "Autonomous AI systems that can plan, reason, and take actions", difficulty: "advanced", tags: ["Autonomy", "Planning", "Tools"] },
    { slug: "rag", name: "RAG", icon: "📚", description: "Retrieval-Augmented Generation for grounding LLMs with external data", difficulty: "intermediate", tags: ["Retrieval", "Vector DB", "Context"] },
    { slug: "langchain", name: "LangChain", icon: "🔗", description: "Framework for building applications powered by language models", difficulty: "intermediate", tags: ["Framework", "Chains", "Python"] },
    { slug: "openai-api", name: "OpenAI APIs", icon: "🟢", description: "GPT-4, DALL·E, Whisper, and Embeddings APIs for AI applications", difficulty: "intermediate", tags: ["GPT-4", "API", "Embeddings"] },
    { slug: "anthropic-api", name: "Anthropic APIs", icon: "🟠", description: "Claude API for safe, helpful, and honest AI assistance", difficulty: "intermediate", tags: ["Claude", "API", "Safety"] },
    { slug: "ai-coding", name: "AI Coding Assistants", icon: "💻", description: "AI-powered tools that help developers write, review, and debug code", difficulty: "beginner", tags: ["Copilot", "Cursor", "Productivity"] },
    { slug: "huggingface", name: "Hugging Face", icon: "🤗", description: "The AI community hub for models, datasets, and ML tools", difficulty: "intermediate", tags: ["Models", "Datasets", "Transformers"] },
    { slug: "vector-databases", name: "Vector Databases", icon: "🔢", description: "Databases optimized for storing and querying high-dimensional vectors", difficulty: "intermediate", tags: ["Embeddings", "Pinecone", "Weaviate"] },
    { slug: "prompt-engineering", name: "Prompt Engineering", icon: "✍️", description: "Techniques for crafting effective prompts for AI models", difficulty: "beginner", tags: ["Prompts", "Few-Shot", "CoT"] },
  ],
  cybersecurity: [
    { slug: "ethical-hacking", name: "Ethical Hacking", icon: "🎯", description: "Authorized practice of bypassing system security to identify vulnerabilities", difficulty: "intermediate", tags: ["Penetration", "Vulnerability", "Security"] },
    { slug: "penetration-testing", name: "Penetration Testing", icon: "🔓", description: "Simulated cyber attacks to evaluate system security defenses", difficulty: "advanced", tags: ["Testing", "Exploits", "Red Team"] },
    { slug: "security-engineering", name: "Security Engineering", icon: "🏗️", description: "Designing and building systems with security as a primary concern", difficulty: "intermediate", tags: ["Architecture", "Defense", "Hardening"] },
    { slug: "zero-trust", name: "Zero Trust", icon: "🔒", description: "Security model that requires verification from everyone accessing resources", difficulty: "intermediate", tags: ["Architecture", "Identity", "Micro-segmentation"] },
    { slug: "iam", name: "IAM", icon: "🔑", description: "Identity and Access Management for controlling who can access what", difficulty: "intermediate", tags: ["Identity", "RBAC", "SSO"] },
    { slug: "owasp-top-10", name: "OWASP Top 10", icon: "📋", description: "The most critical web application security risks and mitigations", difficulty: "beginner", tags: ["Web Security", "Vulnerabilities", "Best Practices"] },
    { slug: "soc-analysis", name: "SOC Analysis", icon: "👁️", description: "Security Operations Center monitoring and incident response", difficulty: "intermediate", tags: ["SIEM", "Monitoring", "Incident Response"] },
    { slug: "cryptography", name: "Cryptography", icon: "🔐", description: "Securing communications and data through mathematical techniques", difficulty: "advanced", tags: ["Encryption", "Hashing", "PKI"] },
    { slug: "network-security", name: "Network Security", icon: "🌐", description: "Protecting network infrastructure from unauthorized access and threats", difficulty: "intermediate", tags: ["Firewalls", "IDS", "VPN"] },
    { slug: "cloud-security", name: "Cloud Security", icon: "☁️", description: "Securing cloud environments, workloads, and data", difficulty: "intermediate", tags: ["AWS Security", "Compliance", "CSPM"] },
  ],
  data: [
    { slug: "data-science", name: "Data Science", icon: "📊", description: "Extracting insights from structured and unstructured data at scale", difficulty: "intermediate", tags: ["Analysis", "Statistics", "Python"] },
    { slug: "machine-learning", name: "Machine Learning", icon: "🧠", description: "Algorithms that learn from data to make predictions and decisions", difficulty: "intermediate", tags: ["Supervised", "Unsupervised", "Scikit-learn"] },
    { slug: "deep-learning", name: "Deep Learning", icon: "🔬", description: "Neural networks with multiple layers for complex pattern recognition", difficulty: "advanced", tags: ["Neural Networks", "PyTorch", "TensorFlow"] },
    { slug: "mlops", name: "MLOps", icon: "⚙️", description: "Best practices for deploying and maintaining ML models in production", difficulty: "advanced", tags: ["Deployment", "Monitoring", "Pipelines"] },
    { slug: "pandas", name: "Pandas", icon: "🐼", description: "Python library for data manipulation and analysis", difficulty: "beginner", tags: ["Python", "DataFrames", "Analysis"] },
    { slug: "apache-spark", name: "Apache Spark", icon: "⚡", description: "Unified analytics engine for large-scale data processing", difficulty: "advanced", tags: ["Big Data", "Distributed", "ETL"] },
    { slug: "sql-analytics", name: "SQL for Analytics", icon: "📈", description: "Advanced SQL techniques for data analysis and reporting", difficulty: "beginner", tags: ["SQL", "Window Functions", "CTEs"] },
    { slug: "data-visualization", name: "Data Visualization", icon: "📉", description: "Creating visual representations of data to communicate insights", difficulty: "beginner", tags: ["Charts", "D3.js", "Matplotlib"] },
    { slug: "dbt", name: "dbt", icon: "🔧", description: "Analytics engineering tool for transforming data in your warehouse", difficulty: "intermediate", tags: ["ELT", "SQL", "Data Warehouse"] },
    { slug: "airflow", name: "Apache Airflow", icon: "🌬️", description: "Platform to programmatically author, schedule, and monitor workflows", difficulty: "intermediate", tags: ["Orchestration", "DAGs", "ETL"] },
  ],
  mobile: [
    { slug: "flutter", name: "Flutter", icon: "💙", description: "Google's UI toolkit for cross-platform apps from a single codebase", difficulty: "beginner", tags: ["Dart", "Cross-Platform", "Material"] },
    { slug: "react-native", name: "React Native", icon: "⚛️", description: "Build native mobile apps using React and JavaScript", difficulty: "intermediate", tags: ["React", "Native", "Cross-Platform"] },
    { slug: "swift", name: "Swift", icon: "🍎", description: "Apple's programming language for iOS, macOS, and beyond", difficulty: "intermediate", tags: ["iOS", "Apple", "Native"] },
    { slug: "kotlin", name: "Kotlin", icon: "🟣", description: "Modern programming language for Android and multiplatform development", difficulty: "intermediate", tags: ["Android", "JVM", "Multiplatform"] },
    { slug: "swiftui", name: "SwiftUI", icon: "🎨", description: "Apple's declarative framework for building UIs across all platforms", difficulty: "intermediate", tags: ["iOS", "Declarative", "Apple"] },
    { slug: "jetpack-compose", name: "Jetpack Compose", icon: "🟢", description: "Android's modern toolkit for building native UI", difficulty: "intermediate", tags: ["Android", "Kotlin", "Declarative"] },
    { slug: "expo", name: "Expo", icon: "📱", description: "Platform for making universal React Native applications", difficulty: "beginner", tags: ["React Native", "SDK", "OTA Updates"] },
    { slug: "ionic", name: "Ionic", icon: "🔵", description: "Cross-platform mobile development with web technologies", difficulty: "beginner", tags: ["Hybrid", "Web", "Capacitor"] },
    { slug: "pwa", name: "PWA", icon: "🌐", description: "Progressive Web Apps — web apps with native-like capabilities", difficulty: "beginner", tags: ["Web", "Offline", "Install"] },
    { slug: "capacitor", name: "Capacitor", icon: "⚡", description: "Cross-platform native runtime for web apps", difficulty: "intermediate", tags: ["Native Bridge", "Plugins", "Web"] },
  ],
  design: [
    { slug: "figma", name: "Figma", icon: "🎨", description: "Collaborative interface design tool for teams", difficulty: "beginner", tags: ["Design", "Prototype", "Collaboration"] },
    { slug: "ux-design", name: "UX Design", icon: "👤", description: "User experience design principles and methodologies", difficulty: "beginner", tags: ["Research", "Usability", "Personas"] },
    { slug: "ui-design", name: "UI Design", icon: "🖌️", description: "Visual design principles for creating beautiful interfaces", difficulty: "beginner", tags: ["Visual", "Typography", "Color"] },
    { slug: "design-systems", name: "Design Systems", icon: "📐", description: "Systematic approach to building consistent UI components", difficulty: "intermediate", tags: ["Components", "Tokens", "Guidelines"] },
    { slug: "tailwind-ui", name: "Tailwind UI", icon: "🌊", description: "Beautiful, hand-crafted UI components built with Tailwind CSS", difficulty: "beginner", tags: ["Components", "Tailwind", "Templates"] },
    { slug: "framer", name: "Framer", icon: "🔷", description: "Web design tool that bridges design and development", difficulty: "beginner", tags: ["No-Code", "Animation", "Publishing"] },
    { slug: "storybook", name: "Storybook", icon: "📖", description: "UI component development environment and documentation tool", difficulty: "intermediate", tags: ["Components", "Documentation", "Testing"] },
    { slug: "accessibility", name: "Accessibility (a11y)", icon: "♿", description: "Making web content accessible to all users including disabilities", difficulty: "intermediate", tags: ["WCAG", "ARIA", "Screen Readers"] },
    { slug: "motion-design", name: "Motion Design", icon: "✨", description: "Animation and motion principles for digital interfaces", difficulty: "intermediate", tags: ["Animation", "Transitions", "Micro-interactions"] },
    { slug: "responsive-design", name: "Responsive Design", icon: "📱", description: "Designing interfaces that adapt to any screen size", difficulty: "beginner", tags: ["Mobile-First", "Breakpoints", "Fluid"] },
  ],
};

const difficultyColors = { beginner: "#22c55e", intermediate: "#f59e0b", advanced: "#ef4444" };

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categoryInfo = technologyCategories.find((c) => c.slug === category);
  const technologies = techByCategory[category] || [];

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--foreground-muted)]">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div
          className="absolute top-1/3 -right-20 w-72 h-72 rounded-full blur-[100px]"
          style={{ backgroundColor: `${categoryInfo.color}15` }}
        />

        <div className="relative container-wide">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Technologies
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{categoryInfo.icon}</span>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)]">
                  {categoryInfo.name}
                </h1>
                <p className="mt-2 text-lg text-[var(--foreground-muted)]">
                  {categoryInfo.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={`/technologies/${category}/${tech.slug}`}
                  className="group block p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <Badge
                      className="text-[10px] capitalize"
                      style={{
                        backgroundColor: `${difficultyColors[tech.difficulty as keyof typeof difficultyColors]}15`,
                        color: difficultyColors[tech.difficulty as keyof typeof difficultyColors],
                        borderColor: "transparent",
                      }}
                    >
                      {tech.difficulty}
                    </Badge>
                  </div>

                  <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-sm text-[var(--foreground-muted)] mt-1.5 line-clamp-2 leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {tech.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-[var(--background)] text-[10px] text-[var(--foreground-subtle)] border border-[var(--border)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-xs text-[var(--primary)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
