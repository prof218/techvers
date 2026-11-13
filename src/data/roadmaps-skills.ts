/* ============================================================
   TechVerse — Interactive SKILL roadmaps (roadmap.sh-style)
   Original node content; resources favor internal guides and
   canonical documentation. See src/lib/roadmaps.ts for the model.
   ============================================================ */

import type { InteractiveRoadmap } from "@/lib/roadmaps";

const javascript: InteractiveRoadmap = {
  slug: "javascript",
  title: "JavaScript Roadmap",
  description:
    "Master JavaScript from fundamentals to advanced topics — syntax, the DOM, async programming, modern ES features, and the browser runtime.",
  level: "beginner",
  estimatedTime: "3–5 months",
  category: "Frontend",
  milestones: [
    {
      id: "js-basics",
      title: "Fundamentals",
      topics: [
        { id: "js-syntax", title: "Syntax & Variables", summary: "let/const, data types, operators, and expressions.", resources: [{ label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }] },
        { id: "js-control", title: "Control Flow", summary: "if/else, loops, switch, and truthiness." },
        { id: "js-functions", title: "Functions", summary: "Declarations, expressions, arrow functions, and scope." },
        { id: "js-data", title: "Arrays & Objects", summary: "The core data structures and their methods." },
      ],
    },
    {
      id: "js-dom",
      title: "The Browser & DOM",
      topics: [
        { id: "js-dom-select", title: "Selecting Elements", summary: "querySelector and traversing the DOM." },
        { id: "js-dom-events", title: "Events", summary: "Listeners, the event object, bubbling, and delegation." },
        { id: "js-dom-manip", title: "Manipulating the DOM", summary: "Create, update, and remove elements dynamically." },
        { id: "js-storage", title: "Web Storage", summary: "localStorage, sessionStorage, and cookies." },
      ],
    },
    {
      id: "js-advanced",
      title: "Core Concepts",
      topics: [
        { id: "js-this", title: "this & Closures", summary: "The two concepts that trip everyone up — understand them well." },
        { id: "js-proto", title: "Prototypes & Classes", summary: "How inheritance really works in JS." },
        { id: "js-hof", title: "Higher-Order Functions", summary: "map, filter, reduce, and functional patterns." },
        { id: "js-errors", title: "Error Handling", summary: "try/catch, throwing, and failing gracefully." },
      ],
    },
    {
      id: "js-async",
      title: "Asynchronous JS",
      topics: [
        { id: "js-callbacks", title: "Callbacks & the Event Loop", summary: "How JS handles non-blocking code." },
        { id: "js-promises", title: "Promises", summary: "then/catch and composing async operations." },
        { id: "js-await", title: "async / await", summary: "Write asynchronous code that reads synchronously." },
        { id: "js-fetch", title: "Fetch & APIs", summary: "Talk to servers and handle JSON." },
      ],
    },
    {
      id: "js-modern",
      title: "Modern JavaScript",
      topics: [
        { id: "js-es6", title: "ES6+ Features", summary: "Destructuring, spread/rest, template literals, optional chaining." },
        { id: "js-modules", title: "Modules", summary: "import/export and organizing code." },
        { id: "js-ts", title: "TypeScript (next step)", summary: "Add type safety once you're fluent in JS.", resources: [{ label: "TypeScript Roadmap", url: "/roadmaps/typescript" }], optional: true },
        { id: "js-tooling", title: "Tooling", summary: "npm, bundlers, and linters.", optional: true },
      ],
    },
  ],
};

const typescript: InteractiveRoadmap = {
  slug: "typescript",
  title: "TypeScript Roadmap",
  description:
    "Add robust type safety to JavaScript — types, interfaces, generics, and the patterns that make large codebases maintainable.",
  level: "intermediate",
  estimatedTime: "2–3 months",
  category: "Frontend",
  milestones: [
    {
      id: "ts-basics",
      title: "Getting Started",
      topics: [
        { id: "ts-why", title: "Why TypeScript", summary: "Catch bugs before runtime; better tooling.", resources: [{ label: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" }] },
        { id: "ts-setup", title: "Setup & tsconfig", summary: "The compiler and its key options." },
        { id: "ts-types", title: "Basic Types", summary: "string, number, boolean, arrays, any, unknown." },
      ],
    },
    {
      id: "ts-core",
      title: "Core Types",
      topics: [
        { id: "ts-interfaces", title: "Interfaces & Type Aliases", summary: "Shape your data with confidence." },
        { id: "ts-unions", title: "Unions & Literals", summary: "Model values that can be one of several things." },
        { id: "ts-narrowing", title: "Narrowing", summary: "Type guards and control-flow analysis." },
        { id: "ts-functions", title: "Typing Functions", summary: "Parameters, returns, and overloads." },
      ],
    },
    {
      id: "ts-advanced",
      title: "Advanced Types",
      topics: [
        { id: "ts-generics", title: "Generics", summary: "Reusable, type-safe building blocks." },
        { id: "ts-utility", title: "Utility Types", summary: "Partial, Pick, Omit, Record, and friends." },
        { id: "ts-mapped", title: "Mapped & Conditional Types", summary: "Transform types programmatically.", optional: true },
      ],
    },
    {
      id: "ts-practice",
      title: "In Practice",
      topics: [
        { id: "ts-react", title: "TypeScript + React", summary: "Typing props, state, and hooks." },
        { id: "ts-node", title: "TypeScript + Node", summary: "Typed backends and APIs." },
        { id: "ts-config", title: "Strictness & DX", summary: "Strict mode, ESLint, and good defaults." },
      ],
    },
  ],
};

const python: InteractiveRoadmap = {
  slug: "python",
  title: "Python Roadmap",
  description:
    "Learn Python from scratch — syntax, data structures, OOP, and the ecosystem that makes it the language of automation, data, and AI.",
  level: "beginner",
  estimatedTime: "3–5 months",
  category: "Backend",
  milestones: [
    {
      id: "py-basics",
      title: "Fundamentals",
      topics: [
        { id: "py-syntax", title: "Syntax & Variables", summary: "Indentation, types, and operators.", resources: [{ label: "python.org tutorial", url: "https://docs.python.org/3/tutorial/" }] },
        { id: "py-control", title: "Control Flow", summary: "if/elif/else, for, while, comprehensions." },
        { id: "py-functions", title: "Functions", summary: "Arguments, defaults, *args/**kwargs, lambdas." },
        { id: "py-data", title: "Data Structures", summary: "Lists, tuples, dicts, sets — and when to use each." },
      ],
    },
    {
      id: "py-intermediate",
      title: "Intermediate",
      topics: [
        { id: "py-oop", title: "OOP", summary: "Classes, inheritance, dunder methods." },
        { id: "py-modules", title: "Modules & Packages", summary: "Organize code; use pip and virtual environments." },
        { id: "py-errors", title: "Error Handling", summary: "Exceptions and context managers." },
        { id: "py-files", title: "Files & I/O", summary: "Read/write files, work with JSON and CSV." },
      ],
    },
    {
      id: "py-advanced",
      title: "Pythonic & Advanced",
      topics: [
        { id: "py-iterators", title: "Iterators & Generators", summary: "Lazy, memory-efficient data flows." },
        { id: "py-decorators", title: "Decorators", summary: "Wrap and extend functions cleanly." },
        { id: "py-typing", title: "Type Hints", summary: "Static typing for safer code.", optional: true },
      ],
    },
    {
      id: "py-apply",
      title: "Apply It",
      topics: [
        { id: "py-web", title: "Web (Django/FastAPI)", summary: "Build APIs and web apps." },
        { id: "py-data", title: "Data (pandas/NumPy)", summary: "Analyze data at scale.", resources: [{ label: "Data Scientist Roadmap", url: "/roadmaps/data-scientist" }] },
        { id: "py-ai", title: "AI/ML", summary: "The gateway to machine learning.", resources: [{ label: "AI Engineer Roadmap", url: "/roadmaps/ai-engineer" }] },
        { id: "py-automation", title: "Automation & Scripting", summary: "Automate the boring stuff." },
      ],
    },
  ],
};

const react: InteractiveRoadmap = {
  slug: "react",
  title: "React Roadmap",
  description:
    "Build modern user interfaces with React — components, hooks, state management, routing, and production patterns.",
  level: "intermediate",
  estimatedTime: "3–4 months",
  category: "Frontend",
  milestones: [
    {
      id: "react-basics",
      title: "Fundamentals",
      topics: [
        { id: "react-jsx", title: "JSX & Components", summary: "The building blocks of a React UI.", resources: [{ label: "react.dev", url: "https://react.dev/learn" }] },
        { id: "react-props", title: "Props", summary: "Pass data down the component tree." },
        { id: "react-state", title: "State (useState)", summary: "Local, reactive component data." },
        { id: "react-events", title: "Handling Events", summary: "Respond to user interaction." },
      ],
    },
    {
      id: "react-hooks",
      title: "Hooks",
      topics: [
        { id: "react-effect", title: "useEffect", summary: "Side effects and lifecycle (use sparingly)." },
        { id: "react-context", title: "useContext", summary: "Share state without prop drilling." },
        { id: "react-ref", title: "useRef & useMemo", summary: "Refs and performance optimization." },
        { id: "react-custom", title: "Custom Hooks", summary: "Extract and reuse stateful logic." },
      ],
    },
    {
      id: "react-ecosystem",
      title: "Ecosystem",
      topics: [
        { id: "react-router", title: "Routing", summary: "Client-side navigation (React Router / Next.js)." },
        { id: "react-data", title: "Data Fetching", summary: "TanStack Query or framework loaders." },
        { id: "react-state-mgmt", title: "State Management", summary: "Zustand, Redux, or context — pick what fits.", optional: true },
        { id: "react-forms", title: "Forms", summary: "Controlled inputs and validation." },
      ],
    },
    {
      id: "react-production",
      title: "Production",
      topics: [
        { id: "react-next", title: "Next.js", summary: "SSR, routing, and the full-stack React framework." },
        { id: "react-perf", title: "Performance", summary: "Memoization, code splitting, lazy loading." },
        { id: "react-testing", title: "Testing", summary: "React Testing Library and component tests." },
      ],
    },
  ],
};

const nodejs: InteractiveRoadmap = {
  slug: "nodejs",
  title: "Node.js Roadmap",
  description:
    "Build fast, scalable backends with Node.js — the runtime, async model, Express, databases, and production essentials.",
  level: "intermediate",
  estimatedTime: "3–4 months",
  category: "Backend",
  milestones: [
    {
      id: "node-basics",
      title: "Fundamentals",
      topics: [
        { id: "node-runtime", title: "The Node Runtime", summary: "Event loop, modules, and npm.", resources: [{ label: "Node.js docs", url: "https://nodejs.org/en/docs" }] },
        { id: "node-async", title: "Async Programming", summary: "Callbacks, promises, async/await in Node." },
        { id: "node-fs", title: "Core Modules", summary: "fs, path, http, events, streams." },
        { id: "node-npm", title: "npm & Packages", summary: "Dependencies, scripts, and semver." },
      ],
    },
    {
      id: "node-web",
      title: "Web & APIs",
      topics: [
        { id: "node-express", title: "Express / Fastify", summary: "Build HTTP servers and REST APIs." },
        { id: "node-middleware", title: "Middleware", summary: "Request processing, auth, and error handling." },
        { id: "node-rest", title: "REST API Design", summary: "Clean, versioned, predictable endpoints." },
        { id: "node-validation", title: "Validation", summary: "Validate input with Zod or similar." },
      ],
    },
    {
      id: "node-data",
      title: "Data & Auth",
      topics: [
        { id: "node-db", title: "Databases", summary: "Connect to PostgreSQL/MongoDB; use an ORM.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
        { id: "node-auth", title: "Authentication", summary: "Sessions, JWT, and OAuth." },
        { id: "node-cache", title: "Caching (Redis)", summary: "Speed up reads and sessions.", optional: true },
      ],
    },
    {
      id: "node-production",
      title: "Production",
      topics: [
        { id: "node-testing", title: "Testing", summary: "Unit and integration tests." },
        { id: "node-logging", title: "Logging & Errors", summary: "Observability in production." },
        { id: "node-deploy", title: "Deployment", summary: "Docker, environment config, and scaling.", resources: [{ label: "Docker Roadmap", url: "/roadmaps/docker" }] },
      ],
    },
  ],
};

const sql: InteractiveRoadmap = {
  slug: "sql",
  title: "SQL & Databases Roadmap",
  description:
    "Learn to design, query, and optimize relational databases — from SELECT basics to indexing, transactions, and schema design.",
  level: "beginner",
  estimatedTime: "2–3 months",
  category: "Databases",
  milestones: [
    {
      id: "sql-basics",
      title: "Querying Basics",
      topics: [
        { id: "sql-select", title: "SELECT & WHERE", summary: "Retrieve and filter rows.", resources: [{ label: "PostgreSQL docs", url: "https://www.postgresql.org/docs/" }] },
        { id: "sql-sort", title: "ORDER BY & LIMIT", summary: "Sort and paginate results." },
        { id: "sql-agg", title: "Aggregations", summary: "COUNT, SUM, AVG, GROUP BY, HAVING." },
        { id: "sql-funcs", title: "Functions & Expressions", summary: "String, date, and conditional logic." },
      ],
    },
    {
      id: "sql-relations",
      title: "Working with Relations",
      topics: [
        { id: "sql-joins", title: "Joins", summary: "INNER, LEFT, RIGHT, and when to use each." },
        { id: "sql-subqueries", title: "Subqueries & CTEs", summary: "Compose complex queries cleanly." },
        { id: "sql-write", title: "INSERT / UPDATE / DELETE", summary: "Modify data safely." },
      ],
    },
    {
      id: "sql-design",
      title: "Schema Design",
      topics: [
        { id: "sql-datatypes", title: "Data Types & Constraints", summary: "Pick the right types; enforce integrity." },
        { id: "sql-normalization", title: "Normalization", summary: "Reduce redundancy; model relationships." },
        { id: "sql-keys", title: "Primary & Foreign Keys", summary: "Relate tables correctly." },
      ],
    },
    {
      id: "sql-performance",
      title: "Performance & Reliability",
      topics: [
        { id: "sql-indexes", title: "Indexes", summary: "Make queries fast — and know the trade-offs." },
        { id: "sql-transactions", title: "Transactions", summary: "ACID, commits, and rollbacks." },
        { id: "sql-explain", title: "Query Optimization", summary: "Read EXPLAIN and fix slow queries.", optional: true },
      ],
    },
  ],
};

const docker: InteractiveRoadmap = {
  slug: "docker",
  title: "Docker Roadmap",
  description:
    "Containerize applications with Docker — images, containers, Dockerfiles, volumes, networking, and Compose.",
  level: "intermediate",
  estimatedTime: "1–2 months",
  category: "DevOps",
  milestones: [
    {
      id: "docker-basics",
      title: "Fundamentals",
      topics: [
        { id: "docker-what", title: "Containers vs VMs", summary: "What Docker is and why it matters.", resources: [{ label: "Docker docs", url: "https://docs.docker.com/get-started/" }] },
        { id: "docker-images", title: "Images & Containers", summary: "Pull, run, stop, and inspect." },
        { id: "docker-cli", title: "The Docker CLI", summary: "The commands you'll use daily." },
      ],
    },
    {
      id: "docker-build",
      title: "Building Images",
      topics: [
        { id: "docker-dockerfile", title: "Dockerfile", summary: "Define reproducible images step by step." },
        { id: "docker-layers", title: "Layers & Caching", summary: "Build fast, small images." },
        { id: "docker-multistage", title: "Multi-stage Builds", summary: "Lean production images.", optional: true },
      ],
    },
    {
      id: "docker-run",
      title: "Running in Practice",
      topics: [
        { id: "docker-volumes", title: "Volumes", summary: "Persist data outside containers." },
        { id: "docker-network", title: "Networking", summary: "Connect containers together." },
        { id: "docker-compose", title: "Docker Compose", summary: "Define and run multi-container apps." },
        { id: "docker-registry", title: "Registries", summary: "Push and pull images (Docker Hub, GHCR)." },
      ],
    },
    {
      id: "docker-next",
      title: "Next Steps",
      topics: [
        { id: "docker-security", title: "Image Security", summary: "Scan images; minimize attack surface.", optional: true },
        { id: "docker-k8s", title: "Kubernetes", summary: "Orchestrate containers at scale.", resources: [{ label: "Kubernetes Roadmap", url: "/roadmaps/kubernetes" }] },
      ],
    },
  ],
};

const kubernetes: InteractiveRoadmap = {
  slug: "kubernetes",
  title: "Kubernetes Roadmap",
  description:
    "Orchestrate containers at scale with Kubernetes — pods, deployments, services, config, and production operations.",
  level: "advanced",
  estimatedTime: "2–4 months",
  category: "DevOps",
  milestones: [
    {
      id: "k8s-basics",
      title: "Core Concepts",
      topics: [
        { id: "k8s-what", title: "Why Kubernetes", summary: "The problems orchestration solves.", resources: [{ label: "Kubernetes docs", url: "https://kubernetes.io/docs/home/" }] },
        { id: "k8s-cluster", title: "Cluster Architecture", summary: "Control plane, nodes, and the API server." },
        { id: "k8s-kubectl", title: "kubectl", summary: "The command-line interface to your cluster." },
      ],
    },
    {
      id: "k8s-workloads",
      title: "Workloads",
      topics: [
        { id: "k8s-pods", title: "Pods", summary: "The smallest deployable unit." },
        { id: "k8s-deployments", title: "Deployments & ReplicaSets", summary: "Declarative, self-healing workloads." },
        { id: "k8s-services", title: "Services & Ingress", summary: "Expose and route traffic to pods." },
        { id: "k8s-config", title: "ConfigMaps & Secrets", summary: "Externalize configuration." },
      ],
    },
    {
      id: "k8s-storage",
      title: "Storage & Scaling",
      topics: [
        { id: "k8s-volumes", title: "Volumes & Persistent Storage", summary: "Stateful data in a stateless world." },
        { id: "k8s-scaling", title: "Autoscaling", summary: "HPA and scaling workloads to demand." },
        { id: "k8s-helm", title: "Helm", summary: "Package and template Kubernetes apps." },
      ],
    },
    {
      id: "k8s-ops",
      title: "Operations",
      topics: [
        { id: "k8s-monitoring", title: "Monitoring & Logging", summary: "Prometheus, Grafana, and centralized logs." },
        { id: "k8s-rbac", title: "RBAC & Security", summary: "Least-privilege access control.", optional: true },
        { id: "k8s-gitops", title: "GitOps", summary: "Declarative delivery with Argo CD / Flux.", optional: true },
      ],
    },
  ],
};

const vue: InteractiveRoadmap = {
  slug: "vue",
  title: "Vue.js Roadmap",
  description: "Build reactive UIs with Vue — the composition API, components, routing, and state management.",
  level: "intermediate",
  estimatedTime: "2–4 months",
  category: "Frontend",
  milestones: [
    { id: "vue-basics", title: "Fundamentals", topics: [
      { id: "vue-template", title: "Template Syntax", summary: "Directives, interpolation, and bindings.", resources: [{ label: "Vue docs", url: "https://vuejs.org/guide/introduction.html" }] },
      { id: "vue-reactivity", title: "Reactivity", summary: "ref, reactive, and computed." },
      { id: "vue-components", title: "Components", summary: "Props, events, and slots." },
    ]},
    { id: "vue-composition", title: "Composition API", topics: [
      { id: "vue-setup", title: "setup & Composables", summary: "Reusable logic the modern way." },
      { id: "vue-lifecycle", title: "Lifecycle Hooks", summary: "onMounted and friends." },
      { id: "vue-watch", title: "Watchers", summary: "React to changing data." },
    ]},
    { id: "vue-ecosystem", title: "Ecosystem", topics: [
      { id: "vue-router", title: "Vue Router", summary: "Client-side navigation." },
      { id: "vue-pinia", title: "Pinia", summary: "The official state store." },
      { id: "vue-nuxt", title: "Nuxt", summary: "The full-stack Vue framework.", optional: true },
    ]},
  ],
};

const angular: InteractiveRoadmap = {
  slug: "angular",
  title: "Angular Roadmap",
  description: "Build enterprise-grade apps with Angular — components, services, RxJS, and the CLI.",
  level: "advanced",
  estimatedTime: "3–5 months",
  category: "Frontend",
  milestones: [
    { id: "ng-basics", title: "Fundamentals", topics: [
      { id: "ng-components", title: "Components & Templates", summary: "The building blocks.", resources: [{ label: "Angular docs", url: "https://angular.dev/" }] },
      { id: "ng-binding", title: "Data Binding", summary: "Interpolation, property, and event binding." },
      { id: "ng-directives", title: "Directives & Pipes", summary: "Extend templates." },
    ]},
    { id: "ng-core", title: "Core Concepts", topics: [
      { id: "ng-services", title: "Services & DI", summary: "Dependency injection done right." },
      { id: "ng-rxjs", title: "RxJS & Observables", summary: "Reactive programming in Angular." },
      { id: "ng-forms", title: "Forms", summary: "Template-driven and reactive forms." },
    ]},
    { id: "ng-advanced", title: "Building Apps", topics: [
      { id: "ng-router", title: "Routing", summary: "Navigation and guards." },
      { id: "ng-http", title: "HTTP & State", summary: "Talk to APIs; manage state with signals/NgRx." },
      { id: "ng-testing", title: "Testing", summary: "Unit and E2E.", optional: true },
    ]},
  ],
};

const go: InteractiveRoadmap = {
  slug: "go",
  title: "Go Roadmap",
  description: "Learn Go (Golang) — simple syntax, concurrency, and building fast, reliable backend services.",
  level: "intermediate",
  estimatedTime: "2–4 months",
  category: "Backend",
  milestones: [
    { id: "go-basics", title: "Fundamentals", topics: [
      { id: "go-syntax", title: "Syntax & Types", summary: "Variables, functions, structs.", resources: [{ label: "Go docs", url: "https://go.dev/doc/" }] },
      { id: "go-pointers", title: "Pointers & Interfaces", summary: "Go's take on abstraction." },
      { id: "go-errors", title: "Error Handling", summary: "Explicit errors, no exceptions." },
    ]},
    { id: "go-concurrency", title: "Concurrency", topics: [
      { id: "go-goroutines", title: "Goroutines", summary: "Lightweight concurrency." },
      { id: "go-channels", title: "Channels", summary: "Communicate between goroutines." },
      { id: "go-sync", title: "sync & Context", summary: "Coordinate and cancel work." },
    ]},
    { id: "go-web", title: "Building Services", topics: [
      { id: "go-http", title: "HTTP Servers", summary: "net/http and routers." },
      { id: "go-db", title: "Databases", summary: "database/sql and migrations.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
      { id: "go-testing", title: "Testing", summary: "The built-in testing package." },
    ]},
  ],
};

const rust: InteractiveRoadmap = {
  slug: "rust",
  title: "Rust Roadmap",
  description: "Learn Rust — memory safety without a garbage collector, ownership, and systems-level performance.",
  level: "advanced",
  estimatedTime: "3–6 months",
  category: "Backend",
  milestones: [
    { id: "rust-basics", title: "Fundamentals", topics: [
      { id: "rust-syntax", title: "Syntax & Types", summary: "Variables, functions, control flow.", resources: [{ label: "The Rust Book", url: "https://doc.rust-lang.org/book/" }] },
      { id: "rust-ownership", title: "Ownership & Borrowing", summary: "Rust's defining concept." },
      { id: "rust-lifetimes", title: "Lifetimes", summary: "How references stay valid." },
    ]},
    { id: "rust-core", title: "Core Concepts", topics: [
      { id: "rust-enums", title: "Enums & Pattern Matching", summary: "Expressive, exhaustive control flow." },
      { id: "rust-traits", title: "Traits & Generics", summary: "Rust's abstraction tools." },
      { id: "rust-error", title: "Error Handling", summary: "Result, Option, and ?." },
    ]},
    { id: "rust-apply", title: "Apply It", topics: [
      { id: "rust-cargo", title: "Cargo & Crates", summary: "Build tooling and packages." },
      { id: "rust-async", title: "Async Rust", summary: "tokio and concurrent code.", optional: true },
      { id: "rust-web", title: "Web (Axum)", summary: "Build fast web services." },
    ]},
  ],
};

const java: InteractiveRoadmap = {
  slug: "java",
  title: "Java Roadmap",
  description: "Learn Java — OOP fundamentals, the standard library, and building robust backend applications with Spring.",
  level: "intermediate",
  estimatedTime: "4–6 months",
  category: "Backend",
  milestones: [
    { id: "java-basics", title: "Fundamentals", topics: [
      { id: "java-syntax", title: "Syntax & Types", summary: "Variables, control flow, methods." },
      { id: "java-oop", title: "OOP", summary: "Classes, inheritance, interfaces, polymorphism." },
      { id: "java-collections", title: "Collections", summary: "List, Map, Set, and streams." },
    ]},
    { id: "java-core", title: "Core Java", topics: [
      { id: "java-generics", title: "Generics", summary: "Type-safe reusable code." },
      { id: "java-exceptions", title: "Exceptions", summary: "Checked vs unchecked." },
      { id: "java-concurrency", title: "Concurrency", summary: "Threads and executors.", optional: true },
    ]},
    { id: "java-spring", title: "Spring", topics: [
      { id: "java-spring-boot", title: "Spring Boot", summary: "Build production APIs fast." },
      { id: "java-jpa", title: "Spring Data JPA", summary: "Persistence made simple.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
      { id: "java-testing", title: "Testing", summary: "JUnit and integration tests." },
    ]},
  ],
};

const graphql: InteractiveRoadmap = {
  slug: "graphql",
  title: "GraphQL Roadmap",
  description: "Learn GraphQL — a flexible query language for APIs, schemas, resolvers, and client integration.",
  level: "intermediate",
  estimatedTime: "1–2 months",
  category: "Backend",
  milestones: [
    { id: "gql-basics", title: "Fundamentals", topics: [
      { id: "gql-why", title: "Why GraphQL", summary: "Over- and under-fetching, solved.", resources: [{ label: "graphql.org", url: "https://graphql.org/learn/" }] },
      { id: "gql-schema", title: "Schema & Types", summary: "Define your API's shape." },
      { id: "gql-queries", title: "Queries & Mutations", summary: "Read and write data." },
    ]},
    { id: "gql-server", title: "Building a Server", topics: [
      { id: "gql-resolvers", title: "Resolvers", summary: "Fetch the data for each field." },
      { id: "gql-nplus1", title: "N+1 & DataLoader", summary: "Batch and cache efficiently." },
      { id: "gql-auth", title: "Auth & Errors", summary: "Secure and robust APIs." },
    ]},
    { id: "gql-client", title: "On the Client", topics: [
      { id: "gql-apollo", title: "Apollo / urql", summary: "Query from the frontend." },
      { id: "gql-subscriptions", title: "Subscriptions", summary: "Real-time data.", optional: true },
    ]},
  ],
};

const gitGithub: InteractiveRoadmap = {
  slug: "git-github",
  title: "Git & GitHub Roadmap",
  description: "Master version control with Git and collaboration on GitHub — the non-negotiable skill for every developer.",
  level: "beginner",
  estimatedTime: "2–4 weeks",
  category: "DevOps",
  milestones: [
    { id: "git-basics", title: "Git Basics", topics: [
      { id: "git-init", title: "Repos & Commits", summary: "init, add, commit, status.", resources: [{ label: "Git docs", url: "https://git-scm.com/doc" }] },
      { id: "git-branches", title: "Branches", summary: "branch, checkout, switch, merge." },
      { id: "git-remote", title: "Remotes", summary: "clone, push, pull, fetch." },
    ]},
    { id: "git-collab", title: "Collaboration", topics: [
      { id: "git-pr", title: "Pull Requests", summary: "Propose and review changes." },
      { id: "git-conflicts", title: "Merge Conflicts", summary: "Resolve them without fear." },
      { id: "git-rebase", title: "Rebase & History", summary: "Keep history clean.", optional: true },
    ]},
    { id: "git-github", title: "GitHub", topics: [
      { id: "git-actions", title: "GitHub Actions", summary: "Automate CI/CD." },
      { id: "git-flow", title: "Workflows", summary: "GitHub Flow and team conventions." },
    ]},
  ],
};

const linux: InteractiveRoadmap = {
  slug: "linux",
  title: "Linux Roadmap",
  description: "Get comfortable on the Linux command line — the OS that powers servers, containers, and the cloud.",
  level: "beginner",
  estimatedTime: "1–3 months",
  category: "DevOps",
  milestones: [
    { id: "linux-basics", title: "The Basics", topics: [
      { id: "linux-fs", title: "Filesystem & Navigation", summary: "cd, ls, pwd, and the directory tree." },
      { id: "linux-files", title: "Files & Permissions", summary: "chmod, chown, and ownership." },
      { id: "linux-text", title: "Text Processing", summary: "grep, sed, awk, pipes." },
    ]},
    { id: "linux-system", title: "System", topics: [
      { id: "linux-processes", title: "Processes", summary: "ps, top, kill, and jobs." },
      { id: "linux-packages", title: "Package Management", summary: "apt, yum, and installing software." },
      { id: "linux-services", title: "Services (systemd)", summary: "Manage background services." },
    ]},
    { id: "linux-advanced", title: "Going Further", topics: [
      { id: "linux-bash", title: "Bash Scripting", summary: "Automate repetitive tasks." },
      { id: "linux-networking", title: "Networking", summary: "ssh, curl, and network tools." },
    ]},
  ],
};

const aws: InteractiveRoadmap = {
  slug: "aws",
  title: "AWS Roadmap",
  description: "Learn Amazon Web Services — core compute, storage, networking, and the services that run modern apps.",
  level: "intermediate",
  estimatedTime: "3–5 months",
  category: "Cloud",
  milestones: [
    { id: "aws-basics", title: "Foundations", topics: [
      { id: "aws-iam", title: "IAM", summary: "Users, roles, and permissions.", resources: [{ label: "AWS docs", url: "https://docs.aws.amazon.com/" }] },
      { id: "aws-regions", title: "Regions & AZs", summary: "How AWS is laid out globally." },
      { id: "aws-cli", title: "CLI & Console", summary: "Two ways to work." },
    ]},
    { id: "aws-core", title: "Core Services", topics: [
      { id: "aws-ec2", title: "EC2 & Lambda", summary: "Virtual machines and serverless." },
      { id: "aws-s3", title: "S3", summary: "Object storage for everything." },
      { id: "aws-rds", title: "RDS & DynamoDB", summary: "Managed SQL and NoSQL." },
      { id: "aws-vpc", title: "VPC & Networking", summary: "Private networks in the cloud." },
    ]},
    { id: "aws-ops", title: "Operations", topics: [
      { id: "aws-cloudwatch", title: "Monitoring", summary: "CloudWatch metrics and logs." },
      { id: "aws-iac", title: "Infrastructure as Code", summary: "CloudFormation or Terraform." },
      { id: "aws-cost", title: "Cost Management", summary: "Keep the bill under control.", optional: true },
    ]},
  ],
};

const promptEngineering: InteractiveRoadmap = {
  slug: "prompt-engineering",
  title: "Prompt Engineering Roadmap",
  description: "Get reliable, high-quality results from LLMs — prompting techniques, patterns, and building prompt-powered apps.",
  level: "beginner",
  estimatedTime: "1–2 months",
  category: "AI",
  milestones: [
    { id: "pe-basics", title: "Fundamentals", topics: [
      { id: "pe-how", title: "How LLMs Work", summary: "Tokens, context windows, and limits.", resources: [{ label: "AI technology guides", url: "/technologies/ai" }] },
      { id: "pe-anatomy", title: "Anatomy of a Prompt", summary: "Instruction, context, examples, format." },
      { id: "pe-clarity", title: "Clarity & Specificity", summary: "Say exactly what you want." },
    ]},
    { id: "pe-techniques", title: "Techniques", topics: [
      { id: "pe-fewshot", title: "Few-shot Prompting", summary: "Teach by example." },
      { id: "pe-cot", title: "Chain-of-Thought", summary: "Make the model reason step by step." },
      { id: "pe-roles", title: "Roles & System Prompts", summary: "Set behavior and guardrails." },
    ]},
    { id: "pe-apply", title: "Building With Prompts", topics: [
      { id: "pe-rag", title: "RAG", summary: "Ground prompts in real data.", resources: [{ label: "AI Engineer Roadmap", url: "/roadmaps/ai-engineer" }] },
      { id: "pe-eval", title: "Evaluating Outputs", summary: "Measure prompt quality.", resources: [{ label: "What is AI model evaluation?", url: "/blog/what-is-ai-model-evaluation" }] },
      { id: "pe-safety", title: "Safety & Jailbreaks", summary: "Robust, safe prompting.", optional: true },
    ]},
  ],
};

const cpp: InteractiveRoadmap = {
  slug: "cpp",
  title: "C++ Roadmap",
  description: "Learn C++ — memory, pointers, OOP, the STL, and modern C++ for systems, games, and high-performance code.",
  level: "advanced",
  estimatedTime: "4–6 months",
  category: "Backend",
  milestones: [
    { id: "cpp-basics", title: "Fundamentals", topics: [
      { id: "cpp-syntax", title: "Syntax & Types", summary: "Variables, control flow, functions.", resources: [{ label: "cppreference", url: "https://en.cppreference.com/w/" }] },
      { id: "cpp-pointers", title: "Pointers & Memory", summary: "The heart of C++ — and its sharp edges." },
      { id: "cpp-refs", title: "References & Const", summary: "Pass efficiently and safely." },
    ]},
    { id: "cpp-oop", title: "OOP & RAII", topics: [
      { id: "cpp-classes", title: "Classes & Objects", summary: "Encapsulation and constructors." },
      { id: "cpp-raii", title: "RAII & Smart Pointers", summary: "Automatic, safe resource management." },
      { id: "cpp-inheritance", title: "Inheritance & Polymorphism", summary: "Virtual functions and interfaces." },
    ]},
    { id: "cpp-modern", title: "The STL & Modern C++", topics: [
      { id: "cpp-stl", title: "STL Containers & Algorithms", summary: "vector, map, and the algorithm library." },
      { id: "cpp-templates", title: "Templates", summary: "Generic, zero-cost abstractions." },
      { id: "cpp-modern-feat", title: "Modern Features (C++17/20)", summary: "auto, lambdas, move semantics.", optional: true },
    ]},
  ],
};

const php: InteractiveRoadmap = {
  slug: "php",
  title: "PHP Roadmap",
  description: "Learn PHP for the web — syntax, OOP, Composer, and building apps with modern frameworks like Laravel.",
  level: "beginner",
  estimatedTime: "3–5 months",
  category: "Backend",
  milestones: [
    { id: "php-basics", title: "Fundamentals", topics: [
      { id: "php-syntax", title: "Syntax & Types", summary: "Variables, arrays, control flow.", resources: [{ label: "PHP docs", url: "https://www.php.net/docs.php" }] },
      { id: "php-functions", title: "Functions", summary: "Define and reuse logic." },
      { id: "php-forms", title: "Forms & Requests", summary: "Handle user input safely." },
    ]},
    { id: "php-oop", title: "OOP & Tooling", topics: [
      { id: "php-classes", title: "OOP", summary: "Classes, interfaces, traits." },
      { id: "php-composer", title: "Composer", summary: "Dependency management." },
      { id: "php-pdo", title: "Databases (PDO)", summary: "Query databases securely.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
    ]},
    { id: "php-frameworks", title: "Frameworks", topics: [
      { id: "php-laravel", title: "Laravel", summary: "The most popular PHP framework." },
      { id: "php-mvc", title: "MVC & Routing", summary: "Structure a real application." },
      { id: "php-api", title: "Building APIs", summary: "Serve JSON to clients." },
    ]},
  ],
};

const springBoot: InteractiveRoadmap = {
  slug: "spring-boot",
  title: "Spring Boot Roadmap",
  description: "Build production Java backends with Spring Boot — dependency injection, REST APIs, data access, and security.",
  level: "intermediate",
  estimatedTime: "3–5 months",
  category: "Backend",
  milestones: [
    { id: "sb-basics", title: "Foundations", topics: [
      { id: "sb-java", title: "Java", summary: "Spring runs on Java.", resources: [{ label: "Java Roadmap", url: "/roadmaps/java" }] },
      { id: "sb-di", title: "Dependency Injection", summary: "The core of Spring." },
      { id: "sb-boot", title: "Spring Boot Basics", summary: "Auto-configuration and starters." },
    ]},
    { id: "sb-web", title: "Web & Data", topics: [
      { id: "sb-rest", title: "REST Controllers", summary: "Build HTTP APIs." },
      { id: "sb-jpa", title: "Spring Data JPA", summary: "Persist data with repositories." },
      { id: "sb-validation", title: "Validation & Errors", summary: "Robust request handling." },
    ]},
    { id: "sb-production", title: "Production", topics: [
      { id: "sb-security", title: "Spring Security", summary: "Authentication and authorization." },
      { id: "sb-testing", title: "Testing", summary: "Unit and integration tests." },
      { id: "sb-actuator", title: "Observability", summary: "Actuator, metrics, and health.", optional: true },
    ]},
  ],
};

const reactNative: InteractiveRoadmap = {
  slug: "react-native",
  title: "React Native Roadmap",
  description: "Build native mobile apps with React Native — one React codebase for iOS and Android.",
  level: "intermediate",
  estimatedTime: "4–6 months",
  category: "Mobile",
  milestones: [
    { id: "rn-foundations", title: "Foundations", topics: [
      { id: "rn-react", title: "React", summary: "React Native is React.", resources: [{ label: "React Roadmap", url: "/roadmaps/react" }] },
      { id: "rn-components", title: "Core Components", summary: "View, Text, Image, ScrollView." },
      { id: "rn-styling", title: "Styling", summary: "Flexbox and StyleSheet." },
    ]},
    { id: "rn-building", title: "Building Apps", topics: [
      { id: "rn-navigation", title: "Navigation", summary: "React Navigation between screens." },
      { id: "rn-state", title: "State & Data", summary: "Hooks, context, and data fetching." },
      { id: "rn-native", title: "Native APIs", summary: "Camera, storage, and device features." },
    ]},
    { id: "rn-ship", title: "Ship It", topics: [
      { id: "rn-expo", title: "Expo", summary: "The fastest way to build and ship." },
      { id: "rn-perf", title: "Performance", summary: "Smooth lists and animations.", optional: true },
      { id: "rn-publish", title: "Publishing", summary: "Release to both app stores." },
    ]},
  ],
};

const terraform: InteractiveRoadmap = {
  slug: "terraform",
  title: "Terraform Roadmap",
  description: "Manage infrastructure as code with Terraform — providers, state, modules, and safe, repeatable deployments.",
  level: "intermediate",
  estimatedTime: "1–2 months",
  category: "DevOps",
  milestones: [
    { id: "tf-basics", title: "Fundamentals", topics: [
      { id: "tf-why", title: "Why IaC", summary: "Version and reproduce infrastructure.", resources: [{ label: "Terraform docs", url: "https://developer.hashicorp.com/terraform/docs" }] },
      { id: "tf-hcl", title: "HCL & Resources", summary: "Declare infrastructure." },
      { id: "tf-providers", title: "Providers", summary: "AWS, Azure, GCP, and more." },
    ]},
    { id: "tf-core", title: "Core Workflow", topics: [
      { id: "tf-plan", title: "plan & apply", summary: "Preview and deploy changes." },
      { id: "tf-state", title: "State Management", summary: "Remote state and locking." },
      { id: "tf-variables", title: "Variables & Outputs", summary: "Parameterize your config." },
    ]},
    { id: "tf-scale", title: "At Scale", topics: [
      { id: "tf-modules", title: "Modules", summary: "Reusable infrastructure components." },
      { id: "tf-workspaces", title: "Workspaces & Environments", summary: "Dev, staging, prod." },
      { id: "tf-cicd", title: "CI/CD", summary: "Automate infra changes.", optional: true },
    ]},
  ],
};

const designSystem: InteractiveRoadmap = {
  slug: "design-system",
  title: "Design System Roadmap",
  description: "Build and maintain a design system — tokens, components, documentation, and governance that scale design.",
  level: "intermediate",
  estimatedTime: "ongoing",
  category: "Design",
  milestones: [
    { id: "dsys-foundations", title: "Foundations", topics: [
      { id: "dsys-tokens", title: "Design Tokens", summary: "Color, type, spacing as a single source of truth.", resources: [{ label: "Design guides", url: "/technologies/design" }] },
      { id: "dsys-principles", title: "Principles", summary: "Consistency, accessibility, scalability." },
      { id: "dsys-foundations-type", title: "Typography & Color", summary: "The visual language." },
    ]},
    { id: "dsys-components", title: "Components", topics: [
      { id: "dsys-anatomy", title: "Component Anatomy", summary: "States, variants, and props." },
      { id: "dsys-library", title: "Component Library", summary: "Build it in code (React, etc.)." },
      { id: "dsys-a11y", title: "Accessibility", summary: "Usable by everyone." },
    ]},
    { id: "dsys-scale", title: "Scaling", topics: [
      { id: "dsys-docs", title: "Documentation", summary: "Make it easy to adopt." },
      { id: "dsys-versioning", title: "Versioning & Releases", summary: "Ship changes safely." },
      { id: "dsys-governance", title: "Governance", summary: "Keep it healthy over time.", optional: true },
    ]},
  ],
};

const apiDesign: InteractiveRoadmap = {
  slug: "api-design",
  title: "API Design Roadmap",
  description: "Design clean, reliable APIs — REST principles, versioning, auth, errors, and documentation developers love.",
  level: "intermediate",
  estimatedTime: "1–2 months",
  category: "Backend",
  milestones: [
    { id: "api-foundations", title: "Foundations", topics: [
      { id: "api-http", title: "HTTP Fundamentals", summary: "Methods, status codes, headers." },
      { id: "api-rest", title: "REST Principles", summary: "Resources, statelessness, and naming." },
      { id: "api-formats", title: "Request/Response Design", summary: "Clean, consistent JSON." },
    ]},
    { id: "api-robust", title: "Robustness", topics: [
      { id: "api-versioning", title: "Versioning", summary: "Evolve without breaking clients." },
      { id: "api-errors", title: "Error Handling", summary: "Clear, actionable error responses." },
      { id: "api-pagination", title: "Pagination & Filtering", summary: "Handle large collections." },
    ]},
    { id: "api-secure", title: "Secure & Document", topics: [
      { id: "api-auth", title: "Authentication", summary: "API keys, OAuth, and JWT." },
      { id: "api-rate", title: "Rate Limiting", summary: "Protect your API." },
      { id: "api-docs", title: "Documentation (OpenAPI)", summary: "Make it a joy to integrate.", resources: [{ label: "GraphQL Roadmap", url: "/roadmaps/graphql" }] },
    ]},
  ],
};

const computerScience: InteractiveRoadmap = {
  slug: "computer-science",
  title: "Computer Science Roadmap",
  description: "The CS fundamentals every strong engineer knows — data structures, algorithms, systems, and theory.",
  level: "intermediate",
  estimatedTime: "ongoing",
  category: "Architecture",
  milestones: [
    { id: "cs-dsa", title: "Data Structures & Algorithms", topics: [
      { id: "cs-structures", title: "Core Data Structures", summary: "Arrays, lists, trees, graphs, hash tables." },
      { id: "cs-algorithms", title: "Algorithms", summary: "Sorting, searching, recursion, DP." },
      { id: "cs-complexity", title: "Big-O Complexity", summary: "Reason about time and space." },
    ]},
    { id: "cs-systems", title: "Systems", topics: [
      { id: "cs-os", title: "Operating Systems", summary: "Processes, memory, concurrency." },
      { id: "cs-networks", title: "Computer Networks", summary: "How the internet works." },
      { id: "cs-db", title: "Databases", summary: "Storage, indexing, transactions.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
    ]},
    { id: "cs-theory", title: "Theory & Practice", topics: [
      { id: "cs-paradigms", title: "Programming Paradigms", summary: "OOP, functional, and more." },
      { id: "cs-compilers", title: "How Code Runs", summary: "Compilation, interpretation, memory.", optional: true },
      { id: "cs-practice", title: "Practice (LeetCode)", summary: "Sharpen problem-solving." },
    ]},
  ],
};

export const skillRoadmaps: InteractiveRoadmap[] = [
  javascript,
  typescript,
  python,
  react,
  nodejs,
  sql,
  docker,
  kubernetes,
  vue,
  angular,
  go,
  rust,
  java,
  graphql,
  gitGithub,
  linux,
  aws,
  promptEngineering,
  cpp,
  php,
  springBoot,
  reactNative,
  terraform,
  designSystem,
  apiDesign,
  computerScience,
];
