/* ============================================================
   Techoverxe — Interactive SKILL roadmaps (roadmap.sh-style)
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
        { id: "js-control", title: "Control Flow", summary: "if/else, loops, switch, and truthiness.", resources: [{"label":"MDN Control Flow and Error Handling","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"}]  },
        { id: "js-functions", title: "Functions", summary: "Declarations, expressions, arrow functions, and scope.", resources: [{"label":"MDN Functions Guide","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"}]  },
        { id: "js-data", title: "Arrays & Objects", summary: "The core data structures and their methods.", resources: [{"label":"MDN Indexed Collections (Arrays)","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections"},{"label":"MDN Working with Objects","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"}]  },
      ],
    },
    {
      id: "js-dom",
      title: "The Browser & DOM",
      topics: [
        { id: "js-dom-select", title: "Selecting Elements", summary: "querySelector and traversing the DOM.", resources: [{"label":"MDN Locating DOM elements using selectors","url":"https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors"}]  },
        { id: "js-dom-events", title: "Events", summary: "Listeners, the event object, bubbling, and delegation.", resources: [{"label":"MDN Introduction to Events","url":"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"}]  },
        { id: "js-dom-manip", title: "Manipulating the DOM", summary: "Create, update, and remove elements dynamically.", resources: [{"label":"MDN Manipulating Documents","url":"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"}]  },
        { id: "js-storage", title: "Web Storage", summary: "localStorage, sessionStorage, and cookies.", resources: [{"label":"MDN Web Storage API (localStorage / sessionStorage)","url":"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"}]  },
      ],
    },
    {
      id: "js-advanced",
      title: "Core Concepts",
      topics: [
        { id: "js-this", title: "this & Closures", summary: "The two concepts that trip everyone up — understand them well.", resources: [{"label":"MDN this Keyword","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},{"label":"MDN Closures","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"}]  },
        { id: "js-proto", title: "Prototypes & Classes", summary: "How inheritance really works in JS.", resources: [{"label":"MDN Inheritance and the Prototype Chain","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"},{"label":"MDN Classes","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"}]  },
        { id: "js-hof", title: "Higher-Order Functions", summary: "map, filter, reduce, and functional patterns.", resources: [{"label":"Eloquent JavaScript — Higher-Order Functions","url":"https://eloquentjavascript.net/05_higher_order.html"}]  },
        { id: "js-errors", title: "Error Handling", summary: "try/catch, throwing, and failing gracefully.", resources: [{"label":"MDN Error Objects and try...catch","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"}]  },
      ],
    },
    {
      id: "js-async",
      title: "Asynchronous JS",
      topics: [
        { id: "js-callbacks", title: "Callbacks & the Event Loop", summary: "How JS handles non-blocking code.", resources: [{"label":"What the heck is the event loop anyway? (Philip Roberts)","url":"https://www.youtube.com/watch?v=8aGhZQkoFbQ"}]  },
        { id: "js-promises", title: "Promises", summary: "then/catch and composing async operations.", resources: [{"label":"MDN Using Promises","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"}]  },
        { id: "js-await", title: "async / await", summary: "Write asynchronous code that reads synchronously.", resources: [{"label":"MDN async function & await","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"}]  },
        { id: "js-fetch", title: "Fetch & APIs", summary: "Talk to servers and handle JSON.", resources: [{"label":"MDN Using the Fetch API","url":"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}]  },
      ],
    },
    {
      id: "js-modern",
      title: "Modern JavaScript",
      topics: [
        { id: "js-es6", title: "ES6+ Features", summary: "Destructuring, spread/rest, template literals, optional chaining.", resources: [{"label":"JavaScript.info Modern JavaScript Overview","url":"https://javascript.info/"}]  },
        { id: "js-modules", title: "Modules", summary: "import/export and organizing code.", resources: [{"label":"MDN JavaScript Modules","url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"}]  },
        { id: "js-ts", title: "TypeScript (next step)", summary: "Add type safety once you're fluent in JS.", resources: [{ label: "TypeScript Roadmap", url: "/roadmaps/typescript" }], optional: true },
        { id: "js-tooling", title: "Tooling", summary: "npm, bundlers, and linters.", resources: [{"label":"Vite Getting Started","url":"https://vitejs.dev/guide/"}] , optional: true },
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
        { id: "ts-setup", title: "Setup & tsconfig", summary: "The compiler and its key options.", resources: [{"label":"TypeScript TSConfig Reference","url":"https://www.typescriptlang.org/tsconfig"},{"label":"TypeScript Technology Guide","url":"/technologies/frontend/typescript"}]  },
        { id: "ts-types", title: "Basic Types", summary: "string, number, boolean, arrays, any, unknown.", resources: [{"label":"TypeScript Everyday Types","url":"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"}]  },
      ],
    },
    {
      id: "ts-core",
      title: "Core Types",
      topics: [
        { id: "ts-interfaces", title: "Interfaces & Type Aliases", summary: "Shape your data with confidence.", resources: [{"label":"TypeScript Interfaces vs Type Aliases","url":"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces"}]  },
        { id: "ts-unions", title: "Unions & Literals", summary: "Model values that can be one of several things.", resources: [{"label":"TypeScript Union & Literal Types","url":"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types"}]  },
        { id: "ts-narrowing", title: "Narrowing", summary: "Type guards and control-flow analysis.", resources: [{"label":"TypeScript Narrowing Handbook","url":"https://www.typescriptlang.org/docs/handbook/2/narrowing.html"}]  },
        { id: "ts-functions", title: "Typing Functions", summary: "Parameters, returns, and overloads.", resources: [{"label":"TypeScript More on Functions","url":"https://www.typescriptlang.org/docs/handbook/2/functions.html"}]  },
      ],
    },
    {
      id: "ts-advanced",
      title: "Advanced Types",
      topics: [
        { id: "ts-generics", title: "Generics", summary: "Reusable, type-safe building blocks.", resources: [{"label":"TypeScript Generics Handbook","url":"https://www.typescriptlang.org/docs/handbook/2/generics.html"}]  },
        { id: "ts-utility", title: "Utility Types", summary: "Partial, Pick, Omit, Record, and friends.", resources: [{"label":"TypeScript Utility Types Documentation","url":"https://www.typescriptlang.org/docs/handbook/utility-types.html"}]  },
        { id: "ts-mapped", title: "Mapped & Conditional Types", summary: "Transform types programmatically.", resources: [{"label":"TypeScript Mapped Types Reference","url":"https://www.typescriptlang.org/docs/handbook/2/mapped-types.html"}] , optional: true },
      ],
    },
    {
      id: "ts-practice",
      title: "In Practice",
      topics: [
        { id: "ts-react", title: "TypeScript + React", summary: "Typing props, state, and hooks.", resources: [{"label":"React TypeScript Cheatsheet","url":"https://react-typescript-cheatsheet.netlify.app/"}]  },
        { id: "ts-node", title: "TypeScript + Node", summary: "Typed backends and APIs.", resources: [{"label":"Node.js with TypeScript Official Guide","url":"https://nodejs.org/en/learn/getting-started/nodejs-with-typescript"}]  },
        { id: "ts-config", title: "Strictness & DX", summary: "Strict mode, ESLint, and good defaults.", resources: [{"label":"Total TypeScript — tsconfig Cheatsheet (Matt Pocock)","url":"https://www.totaltypescript.com/tsconfig-cheat-sheet"}]  },
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
        { id: "py-control", title: "Control Flow", summary: "if/elif/else, for, while, comprehensions.", resources: [{"label":"Python Tutorial — More Control Flow Tools","url":"https://docs.python.org/3/tutorial/controlflow.html"}]  },
        { id: "py-functions", title: "Functions", summary: "Arguments, defaults, *args/**kwargs, lambdas.", resources: [{"label":"Python Defining Functions","url":"https://docs.python.org/3/tutorial/controlflow.html#defining-functions"}]  },
        { id: "py-data", title: "Data Structures", summary: "Lists, tuples, dicts, sets — and when to use each.", resources: [{"label":"Python Data Structures Tutorial","url":"https://docs.python.org/3/tutorial/datastructures.html"}]  },
      ],
    },
    {
      id: "py-intermediate",
      title: "Intermediate",
      topics: [
        { id: "py-oop", title: "OOP", summary: "Classes, inheritance, dunder methods.", resources: [{"label":"Python Classes and Object-Oriented Programming","url":"https://docs.python.org/3/tutorial/classes.html"}]  },
        { id: "py-modules", title: "Modules & Packages", summary: "Organize code; use pip and virtual environments.", resources: [{"label":"Python Modules Documentation","url":"https://docs.python.org/3/tutorial/modules.html"}]  },
        { id: "py-errors", title: "Error Handling", summary: "Exceptions and context managers.", resources: [{"label":"Python Errors and Exceptions Tutorial","url":"https://docs.python.org/3/tutorial/errors.html"}]  },
        { id: "py-files", title: "Files & I/O", summary: "Read/write files, work with JSON and CSV.", resources: [{"label":"Python Reading and Writing Files","url":"https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files"}]  },
      ],
    },
    {
      id: "py-advanced",
      title: "Pythonic & Advanced",
      topics: [
        { id: "py-iterators", title: "Iterators & Generators", summary: "Lazy, memory-efficient data flows.", resources: [{"label":"Python Iterators and Generators Guide","url":"https://docs.python.org/3/howto/functional.html#iterators"}]  },
        { id: "py-decorators", title: "Decorators", summary: "Wrap and extend functions cleanly.", resources: [{"label":"Real Python Primer on Python Decorators","url":"https://realpython.com/primer-on-python-decorators/"}]  },
        { id: "py-typing", title: "Type Hints", summary: "Static typing for safer code.", resources: [{"label":"Python typing Module Reference","url":"https://docs.python.org/3/library/typing.html"}] , optional: true },
      ],
    },
    {
      id: "py-apply",
      title: "Apply It",
      topics: [
        { id: "py-web", title: "Web (Django/FastAPI)", summary: "Build APIs and web apps.", resources: [{"label":"FastAPI Documentation","url":"/technologies/backend/fastapi"},{"label":"Django Documentation","url":"/technologies/backend/django"}]  },
        { id: "py-data", title: "Data (pandas/NumPy)", summary: "Analyze data at scale.", resources: [{ label: "Data Scientist Roadmap", url: "/roadmaps/data-scientist" }] },
        { id: "py-ai", title: "AI/ML", summary: "The gateway to machine learning.", resources: [{ label: "AI Engineer Roadmap", url: "/roadmaps/ai-engineer" }] },
        { id: "py-automation", title: "Automation & Scripting", summary: "Automate the boring stuff.", resources: [{"label":"Automate the Boring Stuff with Python (Al Sweigart)","url":"https://automatetheboringstuff.com/"}]  },
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
        { id: "react-props", title: "Props", summary: "Pass data down the component tree.", resources: [{"label":"react.dev Passing Props to a Component","url":"https://react.dev/learn/passing-props-to-a-component"}]  },
        { id: "react-state", title: "State (useState)", summary: "Local, reactive component data.", resources: [{"label":"react.dev State: A Component's Memory","url":"https://react.dev/learn/state-a-components-memory"}]  },
        { id: "react-events", title: "Handling Events", summary: "Respond to user interaction.", resources: [{"label":"react.dev Responding to Events","url":"https://react.dev/learn/responding-to-events"}]  },
      ],
    },
    {
      id: "react-hooks",
      title: "Hooks",
      topics: [
        { id: "react-effect", title: "useEffect", summary: "Side effects and lifecycle (use sparingly).", resources: [{"label":"react.dev Synchronizing with Effects","url":"https://react.dev/learn/synchronizing-with-effects"}]  },
        { id: "react-context", title: "useContext", summary: "Share state without prop drilling.", resources: [{"label":"react.dev Passing Data Deeply with Context","url":"https://react.dev/learn/passing-data-deeply-with-context"}]  },
        { id: "react-ref", title: "useRef & useMemo", summary: "Refs and performance optimization.", resources: [{"label":"react.dev Referencing Values with Refs","url":"https://react.dev/learn/referencing-values-with-refs"},{"label":"react.dev useMemo Reference","url":"https://react.dev/reference/react/useMemo"}]  },
        { id: "react-custom", title: "Custom Hooks", summary: "Extract and reuse stateful logic.", resources: [{"label":"react.dev Reusing Logic with Custom Hooks","url":"https://react.dev/learn/reusing-logic-with-custom-hooks"}]  },
      ],
    },
    {
      id: "react-ecosystem",
      title: "Ecosystem",
      topics: [
        { id: "react-router", title: "Routing", summary: "Client-side navigation (React Router / Next.js).", resources: [{"label":"React Router Documentation","url":"https://reactrouter.com/en/main"}]  },
        { id: "react-data", title: "Data Fetching", summary: "TanStack Query or framework loaders.", resources: [{"label":"TanStack Query (React Query) Documentation","url":"https://tanstack.com/query/latest"}]  },
        { id: "react-state-mgmt", title: "State Management", summary: "Zustand, Redux, or context — pick what fits.", resources: [{"label":"Zustand Bear necessities for state management","url":"https://zustand-demo.pmnd.rs/"}] , optional: true },
        { id: "react-forms", title: "Forms", summary: "Controlled inputs and validation.", resources: [{"label":"React Hook Form Documentation","url":"https://react-hook-form.com/"}]  },
      ],
    },
    {
      id: "react-production",
      title: "Production",
      topics: [
        { id: "react-next", title: "Next.js", summary: "SSR, routing, and the full-stack React framework.", resources: [{"label":"Next.js App Router Documentation","url":"/technologies/frontend/nextjs"}]  },
        { id: "react-perf", title: "Performance", summary: "Memoization, code splitting, lazy loading.", resources: [{"label":"react.dev Keeping Components Pure & Performance","url":"https://react.dev/learn/keeping-components-pure"}]  },
        { id: "react-testing", title: "Testing", summary: "React Testing Library and component tests.", resources: [{"label":"React Testing Library Guide","url":"https://testing-library.com/docs/react-testing-library/intro/"}]  },
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
        { id: "node-async", title: "Async Programming", summary: "Callbacks, promises, async/await in Node.", resources: [{"label":"Node.js Asynchronous Flow Control","url":"https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"}]  },
        { id: "node-fs", title: "Core Modules", summary: "fs, path, http, events, streams.", resources: [{"label":"Node.js File System Module Reference","url":"https://nodejs.org/api/fs.html"}]  },
        { id: "node-npm", title: "npm & Packages", summary: "Dependencies, scripts, and semver.", resources: [{"label":"npm CLI Documentation","url":"https://docs.npmjs.com/"}]  },
      ],
    },
    {
      id: "node-web",
      title: "Web & APIs",
      topics: [
        { id: "node-express", title: "Express / Fastify", summary: "Build HTTP servers and REST APIs.", resources: [{"label":"Express.js Getting Started","url":"https://expressjs.com/"},{"label":"Fastify Getting Started","url":"https://fastify.dev/docs/latest/Guides/Getting-Started/"}]  },
        { id: "node-middleware", title: "Middleware", summary: "Request processing, auth, and error handling.", resources: [{"label":"Express.js Using Middleware Guide","url":"https://expressjs.com/en/guide/using-middleware.html"}]  },
        { id: "node-rest", title: "REST API Design", summary: "Clean, versioned, predictable endpoints.", resources: [{"label":"API Design Roadmap","url":"/roadmaps/api-design"},{"label":"RESTful API Best Practices","url":"https://restfulapi.net/"}]  },
        { id: "node-validation", title: "Validation", summary: "Validate input with Zod or similar.", resources: [{"label":"Zod TypeScript-First Schema Validation","url":"https://zod.dev/"}]  },
      ],
    },
    {
      id: "node-data",
      title: "Data & Auth",
      topics: [
        { id: "node-db", title: "Databases", summary: "Connect to PostgreSQL/MongoDB; use an ORM.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
        { id: "node-auth", title: "Authentication", summary: "Sessions, JWT, and OAuth.", resources: [{"label":"Passport.js Authentication Strategies","url":"https://www.passportjs.org/"},{"label":"JWT.io Introduction","url":"https://jwt.io/introduction"}]  },
        { id: "node-cache", title: "Caching (Redis)", summary: "Speed up reads and sessions.", resources: [{"label":"Redis Technology Guide","url":"/technologies/databases/redis"},{"label":"node-redis Client Documentation","url":"https://github.com/redis/node-redis"}] , optional: true },
      ],
    },
    {
      id: "node-production",
      title: "Production",
      topics: [
        { id: "node-testing", title: "Testing", summary: "Unit and integration tests.", resources: [{"label":"Node.js Built-in Test Runner Documentation","url":"https://nodejs.org/api/test.html"},{"label":"Supertest HTTP Assertions","url":"https://github.com/ladjs/supertest"}]  },
        { id: "node-logging", title: "Logging & Errors", summary: "Observability in production.", resources: [{"label":"Pino High-Speed Node.js Logger","url":"https://getpino.io/"}]  },
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
        { id: "sql-sort", title: "ORDER BY & LIMIT", summary: "Sort and paginate results.", resources: [{"label":"PostgreSQL Tutorial — ORDER BY & LIMIT","url":"https://www.postgresqltutorial.com/postgresql-sorting-data/"}]  },
        { id: "sql-agg", title: "Aggregations", summary: "COUNT, SUM, AVG, GROUP BY, HAVING.", resources: [{"label":"PostgreSQL Aggregate Functions","url":"https://www.postgresqltutorial.com/postgresql-aggregate-functions/"}]  },
        { id: "sql-funcs", title: "Functions & Expressions", summary: "String, date, and conditional logic.", resources: [{"label":"PostgreSQL Built-in String and Math Functions","url":"https://www.postgresqltutorial.com/postgresql-string-functions/"}]  },
      ],
    },
    {
      id: "sql-relations",
      title: "Working with Relations",
      topics: [
        { id: "sql-joins", title: "Joins", summary: "INNER, LEFT, RIGHT, and when to use each.", resources: [{"label":"Visual Explanation of SQL Joins","url":"https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/"}]  },
        { id: "sql-subqueries", title: "Subqueries & CTEs", summary: "Compose complex queries cleanly.", resources: [{"label":"PostgreSQL Subqueries & CTEs","url":"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-subquery/"}]  },
        { id: "sql-write", title: "INSERT / UPDATE / DELETE", summary: "Modify data safely.", resources: [{"label":"PostgreSQL INSERT, UPDATE, DELETE Guide","url":"https://www.postgresqltutorial.com/postgresql-modifying-data/"}]  },
      ],
    },
    {
      id: "sql-design",
      title: "Schema Design",
      topics: [
        { id: "sql-datatypes", title: "Data Types & Constraints", summary: "Pick the right types; enforce integrity.", resources: [{"label":"PostgreSQL Data Types Overview","url":"https://www.postgresqltutorial.com/postgresql-data-types/"}]  },
        { id: "sql-normalization", title: "Normalization", summary: "Reduce redundancy; model relationships.", resources: [{"label":"Database Normalization (1NF, 2NF, 3NF, BCNF)","url":"https://www.geeksforgeeks.org/introduction-of-database-normalization/"}]  },
        { id: "sql-keys", title: "Primary & Foreign Keys", summary: "Relate tables correctly.", resources: [{"label":"PostgreSQL Primary Key & Foreign Key Constraints","url":"https://www.postgresqltutorial.com/postgresql-constraints/"}]  },
      ],
    },
    {
      id: "sql-performance",
      title: "Performance & Reliability",
      topics: [
        { id: "sql-indexes", title: "Indexes", summary: "Make queries fast — and know the trade-offs.", resources: [{"label":"Use The Index, Luke! A Guide to Database Performance","url":"https://use-the-index-luke.com/"}]  },
        { id: "sql-transactions", title: "Transactions", summary: "ACID, commits, and rollbacks.", resources: [{"label":"PostgreSQL Transactions and ACID Properties","url":"https://www.postgresqltutorial.com/postgresql-transaction/"}]  },
        { id: "sql-explain", title: "Query Optimization", summary: "Read EXPLAIN and fix slow queries.", resources: [{"label":"PostgreSQL EXPLAIN Explained (Depesz)","url":"https://explain.depesz.com/"}] , optional: true },
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
        { id: "docker-images", title: "Images & Containers", summary: "Pull, run, stop, and inspect.", resources: [{"label":"Docker Images & Containers Overview","url":"https://docs.docker.com/get-started/overview/"}]  },
        { id: "docker-cli", title: "The Docker CLI", summary: "The commands you'll use daily.", resources: [{"label":"Docker CLI Reference Guide","url":"https://docs.docker.com/engine/reference/commandline/cli/"}]  },
      ],
    },
    {
      id: "docker-build",
      title: "Building Images",
      topics: [
        { id: "docker-dockerfile", title: "Dockerfile", summary: "Define reproducible images step by step.", resources: [{"label":"Dockerfile Best Practices (Docker Docs)","url":"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/"}]  },
        { id: "docker-layers", title: "Layers & Caching", summary: "Build fast, small images.", resources: [{"label":"Understanding Docker Layer Caching","url":"https://docs.docker.com/build/cache/"}]  },
        { id: "docker-multistage", title: "Multi-stage Builds", summary: "Lean production images.", resources: [{"label":"Multi-stage Builds in Docker","url":"https://docs.docker.com/build/building/multi-stage/"}] , optional: true },
      ],
    },
    {
      id: "docker-run",
      title: "Running in Practice",
      topics: [
        { id: "docker-volumes", title: "Volumes", summary: "Persist data outside containers.", resources: [{"label":"Docker Manage Data in Containers (Volumes)","url":"https://docs.docker.com/storage/volumes/"}]  },
        { id: "docker-network", title: "Networking", summary: "Connect containers together.", resources: [{"label":"Docker Networking Overview","url":"https://docs.docker.com/network/"}]  },
        { id: "docker-compose", title: "Docker Compose", summary: "Define and run multi-container apps.", resources: [{"label":"Docker Compose Overview & Specification","url":"https://docs.docker.com/compose/"}]  },
        { id: "docker-registry", title: "Registries", summary: "Push and pull images (Docker Hub, GHCR).", resources: [{"label":"Docker Hub & OCI Image Registries","url":"https://docs.docker.com/docker-hub/"}]  },
      ],
    },
    {
      id: "docker-next",
      title: "Next Steps",
      topics: [
        { id: "docker-security", title: "Image Security", summary: "Scan images; minimize attack surface.", resources: [{"label":"Docker Security & Vulnerability Scanning","url":"https://docs.docker.com/scout/"}] , optional: true },
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
        { id: "k8s-cluster", title: "Cluster Architecture", summary: "Control plane, nodes, and the API server.", resources: [{"label":"Kubernetes Components & Architecture","url":"https://kubernetes.io/docs/concepts/overview/components/"}]  },
        { id: "k8s-kubectl", title: "kubectl", summary: "The command-line interface to your cluster.", resources: [{"label":"kubectl Cheat Sheet (Kubernetes Docs)","url":"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"}]  },
      ],
    },
    {
      id: "k8s-workloads",
      title: "Workloads",
      topics: [
        { id: "k8s-pods", title: "Pods", summary: "The smallest deployable unit.", resources: [{"label":"Kubernetes Pods Overview","url":"https://kubernetes.io/docs/concepts/workloads/pods/"}]  },
        { id: "k8s-deployments", title: "Deployments & ReplicaSets", summary: "Declarative, self-healing workloads.", resources: [{"label":"Kubernetes Deployments and Rollouts","url":"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"}]  },
        { id: "k8s-services", title: "Services & Ingress", summary: "Expose and route traffic to pods.", resources: [{"label":"Kubernetes Services & Networking","url":"https://kubernetes.io/docs/concepts/services-networking/service/"},{"label":"Kubernetes Ingress Controllers","url":"https://kubernetes.io/docs/concepts/services-networking/ingress/"}]  },
        { id: "k8s-config", title: "ConfigMaps & Secrets", summary: "Externalize configuration.", resources: [{"label":"Kubernetes ConfigMaps and Secrets","url":"https://kubernetes.io/docs/concepts/configuration/configmap/"}]  },
      ],
    },
    {
      id: "k8s-storage",
      title: "Storage & Scaling",
      topics: [
        { id: "k8s-volumes", title: "Volumes & Persistent Storage", summary: "Stateful data in a stateless world.", resources: [{"label":"Kubernetes Persistent Volumes & PVCs","url":"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"}]  },
        { id: "k8s-scaling", title: "Autoscaling", summary: "HPA and scaling workloads to demand.", resources: [{"label":"Horizontal Pod Autoscaling (HPA) in Kubernetes","url":"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"}]  },
        { id: "k8s-helm", title: "Helm", summary: "Package and template Kubernetes apps.", resources: [{"label":"Helm Package Manager for Kubernetes","url":"https://helm.sh/docs/"}]  },
      ],
    },
    {
      id: "k8s-ops",
      title: "Operations",
      topics: [
        { id: "k8s-monitoring", title: "Monitoring & Logging", summary: "Prometheus, Grafana, and centralized logs.", resources: [{"label":"Prometheus Operator for Kubernetes","url":"https://prometheus-operator.dev/"}]  },
        { id: "k8s-rbac", title: "RBAC & Security", summary: "Least-privilege access control.", resources: [{"label":"Using RBAC Authorization in Kubernetes","url":"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"}] , optional: true },
        { id: "k8s-gitops", title: "GitOps", summary: "Declarative delivery with Argo CD / Flux.", resources: [{"label":"Argo CD GitOps Continuous Delivery for Kubernetes","url":"https://argo-cd.readthedocs.io/"}] , optional: true },
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
      { id: "vue-reactivity", title: "Reactivity", summary: "ref, reactive, and computed.", resources: [{"label":"Vue.js Reactivity Fundamentals","url":"https://vuejs.org/guide/essentials/reactivity-fundamentals.html"}]  },
      { id: "vue-components", title: "Components", summary: "Props, events, and slots.", resources: [{"label":"Vue.js Components Basics","url":"https://vuejs.org/guide/essentials/component-basics.html"}]  },
    ]},
    { id: "vue-composition", title: "Composition API", topics: [
      { id: "vue-setup", title: "setup & Composables", summary: "Reusable logic the modern way.", resources: [{"label":"Vue.js Script Setup & Composables","url":"https://vuejs.org/guide/reusability/composables.html"}]  },
      { id: "vue-lifecycle", title: "Lifecycle Hooks", summary: "onMounted and friends.", resources: [{"label":"Vue.js Lifecycle Diagram & Hooks","url":"https://vuejs.org/guide/essentials/lifecycle.html"}]  },
      { id: "vue-watch", title: "Watchers", summary: "React to changing data.", resources: [{"label":"Vue.js Computed Properties and Watchers","url":"https://vuejs.org/guide/essentials/computed.html"}]  },
    ]},
    { id: "vue-ecosystem", title: "Ecosystem", topics: [
      { id: "vue-router", title: "Vue Router", summary: "Client-side navigation.", resources: [{"label":"Vue Router Official Documentation","url":"https://router.vuejs.org/"}]  },
      { id: "vue-pinia", title: "Pinia", summary: "The official state store.", resources: [{"label":"Pinia State Management for Vue","url":"https://pinia.vuejs.org/"}]  },
      { id: "vue-nuxt", title: "Nuxt", summary: "The full-stack Vue framework.", resources: [{"label":"Nuxt The Intuitive Vue Framework","url":"https://nuxt.com/"}] , optional: true },
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
      { id: "ng-binding", title: "Data Binding", summary: "Interpolation, property, and event binding.", resources: [{"label":"Angular Template Syntax & Data Binding","url":"https://angular.dev/guide/templates"}]  },
      { id: "ng-directives", title: "Directives & Pipes", summary: "Extend templates.", resources: [{"label":"Angular Directives & Pipes Guide","url":"https://angular.dev/guide/directives"}]  },
    ]},
    { id: "ng-core", title: "Core Concepts", topics: [
      { id: "ng-services", title: "Services & DI", summary: "Dependency injection done right.", resources: [{"label":"Angular Dependency Injection in Action","url":"https://angular.dev/guide/di"}]  },
      { id: "ng-rxjs", title: "RxJS & Observables", summary: "Reactive programming in Angular.", resources: [{"label":"RxJS Documentation for Angular","url":"https://rxjs.dev/guide/overview"}]  },
      { id: "ng-forms", title: "Forms", summary: "Template-driven and reactive forms.", resources: [{"label":"Angular Reactive Forms Guide","url":"https://angular.dev/guide/forms/reactive-forms"}]  },
    ]},
    { id: "ng-advanced", title: "Building Apps", topics: [
      { id: "ng-router", title: "Routing", summary: "Navigation and guards.", resources: [{"label":"Angular Router Documentation","url":"https://angular.dev/guide/routing"}]  },
      { id: "ng-http", title: "HTTP & State", summary: "Talk to APIs; manage state with signals/NgRx.", resources: [{"label":"Angular HttpClient Guide","url":"https://angular.dev/guide/http"}]  },
      { id: "ng-testing", title: "Testing", summary: "Unit and E2E.", resources: [{"label":"Testing Angular Applications","url":"https://angular.dev/guide/testing"}] , optional: true },
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
      { id: "go-pointers", title: "Pointers & Interfaces", summary: "Go's take on abstraction.", resources: [{"label":"A Tour of Go — Pointers, Structs, Interfaces","url":"https://go.dev/tour/moretypes/1"}]  },
      { id: "go-errors", title: "Error Handling", summary: "Explicit errors, no exceptions.", resources: [{"label":"Go Blog — Working with Errors in Go 1.13","url":"https://go.dev/blog/go1.13-errors"}]  },
    ]},
    { id: "go-concurrency", title: "Concurrency", topics: [
      { id: "go-goroutines", title: "Goroutines", summary: "Lightweight concurrency.", resources: [{"label":"A Tour of Go — Goroutines","url":"https://go.dev/tour/concurrency/1"}]  },
      { id: "go-channels", title: "Channels", summary: "Communicate between goroutines.", resources: [{"label":"Go by Example: Channels & Buffering","url":"https://gobyexample.com/channels"}]  },
      { id: "go-sync", title: "sync & Context", summary: "Coordinate and cancel work.", resources: [{"label":"Go sync package & Context Package Documentation","url":"https://pkg.go.dev/context"}]  },
    ]},
    { id: "go-web", title: "Building Services", topics: [
      { id: "go-http", title: "HTTP Servers", summary: "net/http and routers.", resources: [{"label":"Writing Web Applications in Go","url":"https://go.dev/doc/articles/wiki/"}]  },
      { id: "go-db", title: "Databases", summary: "database/sql and migrations.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
      { id: "go-testing", title: "Testing", summary: "The built-in testing package.", resources: [{"label":"Go testing package Documentation","url":"https://pkg.go.dev/testing"}]  },
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
      { id: "rust-ownership", title: "Ownership & Borrowing", summary: "Rust's defining concept.", resources: [{"label":"The Rust Programming Language — What is Ownership?","url":"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html"}]  },
      { id: "rust-lifetimes", title: "Lifetimes", summary: "How references stay valid.", resources: [{"label":"The Rust Book — Validating References with Lifetimes","url":"https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"}]  },
    ]},
    { id: "rust-core", title: "Core Concepts", topics: [
      { id: "rust-enums", title: "Enums & Pattern Matching", summary: "Expressive, exhaustive control flow.", resources: [{"label":"The Rust Book — Enums and Pattern Matching","url":"https://doc.rust-lang.org/book/ch06-00-enums.html"}]  },
      { id: "rust-traits", title: "Traits & Generics", summary: "Rust's abstraction tools.", resources: [{"label":"The Rust Book — Traits: Defining Shared Behavior","url":"https://doc.rust-lang.org/book/ch10-02-traits.html"}]  },
      { id: "rust-error", title: "Error Handling", summary: "Result, Option, and ?.", resources: [{"label":"The Rust Book — Error Handling (Result & Option)","url":"https://doc.rust-lang.org/book/ch09-00-error-handling.html"}]  },
    ]},
    { id: "rust-apply", title: "Apply It", topics: [
      { id: "rust-cargo", title: "Cargo & Crates", summary: "Build tooling and packages.", resources: [{"label":"The Cargo Book (Rust Package Manager)","url":"https://doc.rust-lang.org/cargo/"}]  },
      { id: "rust-async", title: "Async Rust", summary: "tokio and concurrent code.", resources: [{"label":"Asynchronous Programming in Rust (Tokio)","url":"https://tokio.rs/tokio/tutorial"}] , optional: true },
      { id: "rust-web", title: "Web (Axum)", summary: "Build fast web services.", resources: [{"label":"Axum Web Framework Documentation","url":"https://docs.rs/axum/latest/axum/"}]  },
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
      { id: "java-syntax", title: "Syntax & Types", summary: "Variables, control flow, methods.", resources: [{"label":"Oracle Java Tutorials — Language Basics","url":"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html"}]  },
      { id: "java-oop", title: "OOP", summary: "Classes, inheritance, interfaces, polymorphism.", resources: [{"label":"Oracle Java Object-Oriented Programming Concepts","url":"https://docs.oracle.com/javase/tutorial/java/concepts/index.html"}]  },
      { id: "java-collections", title: "Collections", summary: "List, Map, Set, and streams.", resources: [{"label":"Oracle Java Collections Framework Overview","url":"https://docs.oracle.com/javase/tutorial/collections/index.html"}]  },
    ]},
    { id: "java-core", title: "Core Java", topics: [
      { id: "java-generics", title: "Generics", summary: "Type-safe reusable code.", resources: [{"label":"Oracle Java Generics Tutorial","url":"https://docs.oracle.com/javase/tutorial/java/generics/index.html"}]  },
      { id: "java-exceptions", title: "Exceptions", summary: "Checked vs unchecked.", resources: [{"label":"Oracle Java Catching and Handling Exceptions","url":"https://docs.oracle.com/javase/tutorial/essential/exceptions/index.html"}]  },
      { id: "java-concurrency", title: "Concurrency", summary: "Threads and executors.", resources: [{"label":"Oracle Java Concurrency Lesson","url":"https://docs.oracle.com/javase/tutorial/essential/concurrency/index.html"}] , optional: true },
    ]},
    { id: "java-spring", title: "Spring", topics: [
      { id: "java-spring-boot", title: "Spring Boot", summary: "Build production APIs fast.", resources: [{"label":"Spring Boot Roadmap","url":"/roadmaps/spring-boot"},{"label":"Spring Boot Getting Started Guide","url":"https://spring.io/guides/gs/spring-boot/"}]  },
      { id: "java-jpa", title: "Spring Data JPA", summary: "Persistence made simple.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
      { id: "java-testing", title: "Testing", summary: "JUnit and integration tests.", resources: [{"label":"JUnit 5 User Guide","url":"https://junit.org/junit5/docs/current/user-guide/"},{"label":"Mockito Framework for Java","url":"https://site.mockito.org/"}]  },
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
      { id: "gql-schema", title: "Schema & Types", summary: "Define your API's shape.", resources: [{"label":"GraphQL Schema and Types (Official)","url":"https://graphql.org/learn/schema/"}]  },
      { id: "gql-queries", title: "Queries & Mutations", summary: "Read and write data.", resources: [{"label":"GraphQL Queries and Mutations","url":"https://graphql.org/learn/queries/"}]  },
    ]},
    { id: "gql-server", title: "Building a Server", topics: [
      { id: "gql-resolvers", title: "Resolvers", summary: "Fetch the data for each field.", resources: [{"label":"GraphQL Execution & Resolvers","url":"https://graphql.org/learn/execution/"}]  },
      { id: "gql-nplus1", title: "N+1 & DataLoader", summary: "Batch and cache efficiently.", resources: [{"label":"DataLoader GitHub & Solving N+1 Problem","url":"https://github.com/graphql/dataloader"}]  },
      { id: "gql-auth", title: "Auth & Errors", summary: "Secure and robust APIs.", resources: [{"label":"GraphQL Authorization & Error Handling Best Practices","url":"https://graphql.org/learn/authorization/"}]  },
    ]},
    { id: "gql-client", title: "On the Client", topics: [
      { id: "gql-apollo", title: "Apollo / urql", summary: "Query from the frontend.", resources: [{"label":"Apollo Client Documentation","url":"https://www.apollographql.com/docs/react/"}]  },
      { id: "gql-subscriptions", title: "Subscriptions", summary: "Real-time data.", resources: [{"label":"GraphQL Subscriptions Tutorial","url":"https://www.apollographql.com/docs/react/data/subscriptions/"}] , optional: true },
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
      { id: "git-branches", title: "Branches", summary: "branch, checkout, switch, merge.", resources: [{"label":"Pro Git — Git Branching","url":"https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"}]  },
      { id: "git-remote", title: "Remotes", summary: "clone, push, pull, fetch.", resources: [{"label":"Pro Git — Working with Remotes","url":"https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes"}]  },
    ]},
    { id: "git-collab", title: "Collaboration", topics: [
      { id: "git-pr", title: "Pull Requests", summary: "Propose and review changes.", resources: [{"label":"GitHub Docs — About Pull Requests","url":"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"}]  },
      { id: "git-conflicts", title: "Merge Conflicts", summary: "Resolve them without fear.", resources: [{"label":"GitHub Docs — Resolving a Merge Conflict","url":"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line"}]  },
      { id: "git-rebase", title: "Rebase & History", summary: "Keep history clean.", resources: [{"label":"Atlassian Git Rebase vs Merge","url":"https://www.atlassian.com/git/tutorials/merging-vs-rebasing"}] , optional: true },
    ]},
    { id: "git-github", title: "GitHub", topics: [
      { id: "git-actions", title: "GitHub Actions", summary: "Automate CI/CD.", resources: [{"label":"GitHub Actions Quickstart","url":"https://docs.github.com/en/actions/quickstart"}]  },
      { id: "git-flow", title: "Workflows", summary: "GitHub Flow and team conventions.", resources: [{"label":"Atlassian Gitflow Workflow Tutorial","url":"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"}]  },
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
      { id: "linux-fs", title: "Filesystem & Navigation", summary: "cd, ls, pwd, and the directory tree.", resources: [{"label":"Linux Filesystem Hierarchy Standard (FHS)","url":"https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html"},{"label":"Linux Journey Filesystem Navigation","url":"https://linuxjourney.com/"}]  },
      { id: "linux-files", title: "Files & Permissions", summary: "chmod, chown, and ownership.", resources: [{"label":"Linux File Permissions (chmod, chown)","url":"https://linuxjourney.com/lesson/file-permissions"}]  },
      { id: "linux-text", title: "Text Processing", summary: "grep, sed, awk, pipes.", resources: [{"label":"Linux Text Processing (grep, sed, awk)","url":"https://linuxjourney.com/lesson/grep"}]  },
    ]},
    { id: "linux-system", title: "System", topics: [
      { id: "linux-processes", title: "Processes", summary: "ps, top, kill, and jobs.", resources: [{"label":"Managing Linux Processes (ps, top, kill, systemctl)","url":"https://linuxjourney.com/lesson/monitor-processes-ps-top"}]  },
      { id: "linux-packages", title: "Package Management", summary: "apt, yum, and installing software.", resources: [{"label":"Linux Package Managers (apt, dnf, pacman)","url":"https://linuxjourney.com/lesson/packages"}]  },
      { id: "linux-services", title: "Services (systemd)", summary: "Manage background services.", resources: [{"label":"systemd Service Management Tutorial","url":"https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units"}]  },
    ]},
    { id: "linux-advanced", title: "Going Further", topics: [
      { id: "linux-bash", title: "Bash Scripting", summary: "Automate repetitive tasks.", resources: [{"label":"Bash Guide for Beginners","url":"https://tldp.org/LDP/Bash-Beginners-Guide/html/"}]  },
      { id: "linux-networking", title: "Networking", summary: "ssh, curl, and network tools.", resources: [{"label":"Linux Network Commands (ip, curl, netstat, ss, dig)","url":"https://linuxjourney.com/lesson/network-basics"}]  },
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
      { id: "aws-regions", title: "Regions & AZs", summary: "How AWS is laid out globally.", resources: [{"label":"AWS Global Infrastructure — Regions & Availability Zones","url":"https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"}]  },
      { id: "aws-cli", title: "CLI & Console", summary: "Two ways to work.", resources: [{"label":"AWS CLI Command Reference","url":"https://docs.aws.amazon.com/cli/latest/reference/"}]  },
    ]},
    { id: "aws-core", title: "Core Services", topics: [
      { id: "aws-ec2", title: "EC2 & Lambda", summary: "Virtual machines and serverless.", resources: [{"label":"Amazon EC2 User Guide","url":"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html"},{"label":"AWS Lambda Developer Guide","url":"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"}]  },
      { id: "aws-s3", title: "S3", summary: "Object storage for everything.", resources: [{"label":"Amazon S3 Documentation","url":"https://docs.aws.amazon.com/s3/"}]  },
      { id: "aws-rds", title: "RDS & DynamoDB", summary: "Managed SQL and NoSQL.", resources: [{"label":"Amazon RDS User Guide","url":"https://docs.aws.amazon.com/rds/"},{"label":"Amazon DynamoDB Developer Guide","url":"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"}]  },
      { id: "aws-vpc", title: "VPC & Networking", summary: "Private networks in the cloud.", resources: [{"label":"Amazon VPC User Guide","url":"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"}]  },
    ]},
    { id: "aws-ops", title: "Operations", topics: [
      { id: "aws-cloudwatch", title: "Monitoring", summary: "CloudWatch metrics and logs.", resources: [{"label":"Amazon CloudWatch Documentation","url":"https://docs.aws.amazon.com/cloudwatch/"}]  },
      { id: "aws-iac", title: "Infrastructure as Code", summary: "CloudFormation or Terraform.", resources: [{"label":"Terraform Roadmap","url":"/roadmaps/terraform"},{"label":"AWS CloudFormation Documentation","url":"https://docs.aws.amazon.com/cloudformation/"}]  },
      { id: "aws-cost", title: "Cost Management", summary: "Keep the bill under control.", resources: [{"label":"AWS Cost Explorer & Budgets Guide","url":"https://aws.amazon.com/aws-cost-management/"}] , optional: true },
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
      { id: "pe-anatomy", title: "Anatomy of a Prompt", summary: "Instruction, context, examples, format.", resources: [{"label":"OpenAI Prompt Engineering Best Practices","url":"https://platform.openai.com/docs/guides/prompt-engineering"}]  },
      { id: "pe-clarity", title: "Clarity & Specificity", summary: "Say exactly what you want.", resources: [{"label":"DAIR.AI Prompt Engineering Guide","url":"https://www.promptingguide.ai/introduction/basics"}]  },
    ]},
    { id: "pe-techniques", title: "Techniques", topics: [
      { id: "pe-fewshot", title: "Few-shot Prompting", summary: "Teach by example.", resources: [{"label":"Few-Shot Prompting Guide (DAIR.AI)","url":"https://www.promptingguide.ai/techniques/fewshot"}]  },
      { id: "pe-cot", title: "Chain-of-Thought", summary: "Make the model reason step by step.", resources: [{"label":"Chain-of-Thought Prompting (Wei et al. / DAIR.AI)","url":"https://www.promptingguide.ai/techniques/cot"}]  },
      { id: "pe-roles", title: "Roles & System Prompts", summary: "Set behavior and guardrails.", resources: [{"label":"Anthropic Claude Prompt Engineering Guide","url":"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"}]  },
    ]},
    { id: "pe-apply", title: "Building With Prompts", topics: [
      { id: "pe-rag", title: "RAG", summary: "Ground prompts in real data.", resources: [{ label: "AI Engineer Roadmap", url: "/roadmaps/ai-engineer" }] },
      { id: "pe-eval", title: "Evaluating Outputs", summary: "Measure prompt quality.", resources: [{ label: "What is AI model evaluation?", url: "/blog/what-is-ai-model-evaluation" }] },
      { id: "pe-safety", title: "Safety & Jailbreaks", summary: "Robust, safe prompting.", resources: [{"label":"OWASP Top 10 for Large Language Model Applications","url":"https://genai.owasp.org/llm-top-10/"}] , optional: true },
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
      { id: "cpp-pointers", title: "Pointers & Memory", summary: "The heart of C++ — and its sharp edges.", resources: [{"label":"learncpp.com Introduction to Pointers","url":"https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/"}]  },
      { id: "cpp-refs", title: "References & Const", summary: "Pass efficiently and safely.", resources: [{"label":"learncpp.com References & Const Values","url":"https://www.learncpp.com/cpp-tutorial/lvalue-references/"}]  },
    ]},
    { id: "cpp-oop", title: "OOP & RAII", topics: [
      { id: "cpp-classes", title: "Classes & Objects", summary: "Encapsulation and constructors.", resources: [{"label":"learncpp.com Object-Oriented Programming in C++","url":"https://www.learncpp.com/cpp-tutorial/introduction-to-object-oriented-programming/"}]  },
      { id: "cpp-raii", title: "RAII & Smart Pointers", summary: "Automatic, safe resource management.", resources: [{"label":"cppreference.com Resource Acquisition Is Initialization (RAII)","url":"https://en.cppreference.com/w/cpp/language/raii"},{"label":"learncpp.com Smart Pointers","url":"https://www.learncpp.com/cpp-tutorial/introduction-to-smart-pointers-move-semantics/"}]  },
      { id: "cpp-inheritance", title: "Inheritance & Polymorphism", summary: "Virtual functions and interfaces.", resources: [{"label":"learncpp.com Inheritance and Virtual Functions","url":"https://www.learncpp.com/cpp-tutorial/basic-inheritance-in-c/"}]  },
    ]},
    { id: "cpp-modern", title: "The STL & Modern C++", topics: [
      { id: "cpp-stl", title: "STL Containers & Algorithms", summary: "vector, map, and the algorithm library.", resources: [{"label":"cppreference.com Containers library (STL)","url":"https://en.cppreference.com/w/cpp/container"}]  },
      { id: "cpp-templates", title: "Templates", summary: "Generic, zero-cost abstractions.", resources: [{"label":"learncpp.com Function Templates and Class Templates","url":"https://www.learncpp.com/cpp-tutorial/function-templates/"}]  },
      { id: "cpp-modern-feat", title: "Modern Features (C++17/20)", summary: "auto, lambdas, move semantics.", resources: [{"label":"Modern C++ Features Cheatsheet (AnthonyCalandra/modern-cpp-features)","url":"https://github.com/AnthonyCalandra/modern-cpp-features"}] , optional: true },
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
      { id: "php-functions", title: "Functions", summary: "Define and reuse logic.", resources: [{"label":"PHP Official Manual — Functions","url":"https://www.php.net/manual/en/language.functions.php"}]  },
      { id: "php-forms", title: "Forms & Requests", summary: "Handle user input safely.", resources: [{"label":"PHP Handling Form Submissions & Superglobals","url":"https://www.php.net/manual/en/tutorial.forms.php"}]  },
    ]},
    { id: "php-oop", title: "OOP & Tooling", topics: [
      { id: "php-classes", title: "OOP", summary: "Classes, interfaces, traits.", resources: [{"label":"PHP Classes and Objects (OOP)","url":"https://www.php.net/manual/en/language.oop5.php"}]  },
      { id: "php-composer", title: "Composer", summary: "Dependency management.", resources: [{"label":"Composer Dependency Manager for PHP","url":"https://getcomposer.org/doc/00-intro.md"}]  },
      { id: "php-pdo", title: "Databases (PDO)", summary: "Query databases securely.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
    ]},
    { id: "php-frameworks", title: "Frameworks", topics: [
      { id: "php-laravel", title: "Laravel", summary: "The most popular PHP framework.", resources: [{"label":"Laravel Official Documentation","url":"https://laravel.com/docs"}]  },
      { id: "php-mvc", title: "MVC & Routing", summary: "Structure a real application.", resources: [{"label":"Laravel Routing & Controllers Guide","url":"https://laravel.com/docs/routing"}]  },
      { id: "php-api", title: "Building APIs", summary: "Serve JSON to clients.", resources: [{"label":"Building REST APIs with Laravel","url":"https://laravel.com/docs/eloquent-resources"}]  },
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
      { id: "sb-di", title: "Dependency Injection", summary: "The core of Spring.", resources: [{"label":"Spring Framework Inversion of Control & DI","url":"https://docs.spring.io/spring-framework/reference/core/beans.html"}]  },
      { id: "sb-boot", title: "Spring Boot Basics", summary: "Auto-configuration and starters.", resources: [{"label":"Spring Boot Official Documentation","url":"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/"}]  },
    ]},
    { id: "sb-web", title: "Web & Data", topics: [
      { id: "sb-rest", title: "REST Controllers", summary: "Build HTTP APIs.", resources: [{"label":"Building a RESTful Web Service with Spring Boot","url":"https://spring.io/guides/gs/rest-service/"}]  },
      { id: "sb-jpa", title: "Spring Data JPA", summary: "Persist data with repositories.", resources: [{"label":"Accessing Data with JPA in Spring Boot","url":"https://spring.io/guides/gs/accessing-data-jpa/"}]  },
      { id: "sb-validation", title: "Validation & Errors", summary: "Robust request handling.", resources: [{"label":"Validating Form Input in Spring Boot (Hibernate Validator)","url":"https://spring.io/guides/gs/validating-form-input/"}]  },
    ]},
    { id: "sb-production", title: "Production", topics: [
      { id: "sb-security", title: "Spring Security", summary: "Authentication and authorization.", resources: [{"label":"Securing a Web Application with Spring Security","url":"https://spring.io/guides/gs/securing-web/"}]  },
      { id: "sb-testing", title: "Testing", summary: "Unit and integration tests.", resources: [{"label":"Testing the Web Layer with Spring Boot","url":"https://spring.io/guides/gs/testing-web/"}]  },
      { id: "sb-actuator", title: "Observability", summary: "Actuator, metrics, and health.", resources: [{"label":"Spring Boot Actuator: Production-ready features","url":"https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html"}] , optional: true },
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
      { id: "rn-components", title: "Core Components", summary: "View, Text, Image, ScrollView.", resources: [{"label":"React Native Core Components & APIs","url":"https://reactnative.dev/docs/components-and-apis"}]  },
      { id: "rn-styling", title: "Styling", summary: "Flexbox and StyleSheet.", resources: [{"label":"React Native Style & Flexbox Layout","url":"https://reactnative.dev/docs/style"}]  },
    ]},
    { id: "rn-building", title: "Building Apps", topics: [
      { id: "rn-navigation", title: "Navigation", summary: "React Navigation between screens.", resources: [{"label":"React Navigation Official Documentation","url":"https://reactnavigation.org/"}]  },
      { id: "rn-state", title: "State & Data", summary: "Hooks, context, and data fetching.", resources: [{"label":"React Native Networking & State","url":"https://reactnative.dev/docs/network"}]  },
      { id: "rn-native", title: "Native APIs", summary: "Camera, storage, and device features.", resources: [{"label":"React Native Permissions & Device APIs","url":"https://docs.expo.dev/versions/latest/"}]  },
    ]},
    { id: "rn-ship", title: "Ship It", topics: [
      { id: "rn-expo", title: "Expo", summary: "The fastest way to build and ship.", resources: [{"label":"Expo Getting Started Documentation","url":"https://docs.expo.dev/"},{"label":"React Native Technology Guide","url":"/technologies/mobile/react-native"}]  },
      { id: "rn-perf", title: "Performance", summary: "Smooth lists and animations.", resources: [{"label":"React Native Performance Overview","url":"https://reactnative.dev/docs/performance"}] , optional: true },
      { id: "rn-publish", title: "Publishing", summary: "Release to both app stores.", resources: [{"label":"Expo EAS Deploy to App Stores","url":"https://docs.expo.dev/deploy/build-project/"}]  },
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
      { id: "tf-hcl", title: "HCL & Resources", summary: "Declare infrastructure.", resources: [{"label":"Terraform Configuration Language (HCL) Syntax","url":"https://developer.hashicorp.com/terraform/language"}]  },
      { id: "tf-providers", title: "Providers", summary: "AWS, Azure, GCP, and more.", resources: [{"label":"Terraform Registry — Providers","url":"https://registry.terraform.io/browse/providers"}]  },
    ]},
    { id: "tf-core", title: "Core Workflow", topics: [
      { id: "tf-plan", title: "plan & apply", summary: "Preview and deploy changes.", resources: [{"label":"Terraform CLI Commands (init, plan, apply)","url":"https://developer.hashicorp.com/terraform/cli/commands"}]  },
      { id: "tf-state", title: "State Management", summary: "Remote state and locking.", resources: [{"label":"Terraform State Management & Backends","url":"https://developer.hashicorp.com/terraform/language/state"}]  },
      { id: "tf-variables", title: "Variables & Outputs", summary: "Parameterize your config.", resources: [{"label":"Terraform Input Variables and Output Values","url":"https://developer.hashicorp.com/terraform/language/values/variables"}]  },
    ]},
    { id: "tf-scale", title: "At Scale", topics: [
      { id: "tf-modules", title: "Modules", summary: "Reusable infrastructure components.", resources: [{"label":"Terraform Modules Overview & Best Practices","url":"https://developer.hashicorp.com/terraform/language/modules"}]  },
      { id: "tf-workspaces", title: "Workspaces & Environments", summary: "Dev, staging, prod.", resources: [{"label":"Terraform Workspaces Documentation","url":"https://developer.hashicorp.com/terraform/language/state/workspaces"}]  },
      { id: "tf-cicd", title: "CI/CD", summary: "Automate infra changes.", resources: [{"label":"Automate Terraform with GitHub Actions","url":"https://developer.hashicorp.com/terraform/tutorials/automation/github-actions"}] , optional: true },
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
      { id: "dsys-principles", title: "Principles", summary: "Consistency, accessibility, scalability.", resources: [{"label":"Design Systems Handbook (DesignBetter)","url":"https://www.designbetter.co/design-systems-handbook"}]  },
      { id: "dsys-foundations-type", title: "Typography & Color", summary: "The visual language.", resources: [{"label":"Material Design 3 Typography & Color Systems","url":"https://m3.material.io/styles"}]  },
    ]},
    { id: "dsys-components", title: "Components", topics: [
      { id: "dsys-anatomy", title: "Component Anatomy", summary: "States, variants, and props.", resources: [{"label":"Radix UI Primitives (Accessible Component Anatomy)","url":"https://www.radix-ui.com/primitives"}]  },
      { id: "dsys-library", title: "Component Library", summary: "Build it in code (React, etc.).", resources: [{"label":"Storybook Component Workshop Documentation","url":"https://storybook.js.org/docs"}]  },
      { id: "dsys-a11y", title: "Accessibility", summary: "Usable by everyone.", resources: [{"label":"W3C WAI-ARIA Authoring Practices Guide (APG)","url":"https://www.w3.org/WAI/ARIA/apg/"}]  },
    ]},
    { id: "dsys-scale", title: "Scaling", topics: [
      { id: "dsys-docs", title: "Documentation", summary: "Make it easy to adopt.", resources: [{"label":"Shopify Polaris Design System Guidelines","url":"https://polaris.shopify.com/"}]  },
      { id: "dsys-versioning", title: "Versioning & Releases", summary: "Ship changes safely.", resources: [{"label":"Semantic Versioning (SemVer 2.0.0)","url":"https://semver.org/"}]  },
      { id: "dsys-governance", title: "Governance", summary: "Keep it healthy over time.", resources: [{"label":"Nathan Curtis — Team Models for Design Systems","url":"https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2f9d03be730"}] , optional: true },
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
      { id: "api-http", title: "HTTP Fundamentals", summary: "Methods, status codes, headers.", resources: [{"label":"MDN HTTP Overview & Protocol","url":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},{"label":"HTTP Response Status Codes (MDN)","url":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"}]  },
      { id: "api-rest", title: "REST Principles", summary: "Resources, statelessness, and naming.", resources: [{"label":"RESTful API Tutorial & Best Practices","url":"https://restfulapi.net/"}]  },
      { id: "api-formats", title: "Request/Response Design", summary: "Clean, consistent JSON.", resources: [{"label":"JSON:API Specification","url":"https://jsonapi.org/"}]  },
    ]},
    { id: "api-robust", title: "Robustness", topics: [
      { id: "api-versioning", title: "Versioning", summary: "Evolve without breaking clients.", resources: [{"label":"Microsoft REST API Versioning Guidelines","url":"https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#api-versioning"}]  },
      { id: "api-errors", title: "Error Handling", summary: "Clear, actionable error responses.", resources: [{"label":"RFC 7807 — Problem Details for HTTP APIs","url":"https://datatracker.ietf.org/doc/html/rfc7807"}]  },
      { id: "api-pagination", title: "Pagination & Filtering", summary: "Handle large collections.", resources: [{"label":"Google Cloud API Design Guide — Standard Methods & List Pagination","url":"https://cloud.google.com/apis/design/standard_methods#list"}]  },
    ]},
    { id: "api-secure", title: "Secure & Document", topics: [
      { id: "api-auth", title: "Authentication", summary: "API keys, OAuth, and JWT.", resources: [{"label":"OAuth 2.0 Simplified","url":"https://www.oauth.com/"},{"label":"JWT.io Introduction","url":"https://jwt.io/introduction"}]  },
      { id: "api-rate", title: "Rate Limiting", summary: "Protect your API.", resources: [{"label":"Cloudflare — What is Rate Limiting?","url":"https://www.cloudflare.com/learning/bots/what-is-rate-limiting/"}]  },
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
      { id: "cs-structures", title: "Core Data Structures", summary: "Arrays, lists, trees, graphs, hash tables.", resources: [{"label":"GeeksforGeeks Data Structures","url":"https://www.geeksforgeeks.org/data-structures/"},{"label":"Visualgo Visualizing Data Structures and Algorithms","url":"https://visualgo.net/en"}]  },
      { id: "cs-algorithms", title: "Algorithms", summary: "Sorting, searching, recursion, DP.", resources: [{"label":"Grokking Algorithms by Aditya Bhargava","url":"https://www.manning.com/books/grokking-algorithms"}]  },
      { id: "cs-complexity", title: "Big-O Complexity", summary: "Reason about time and space.", resources: [{"label":"Big-O Algorithm Complexity Cheat Sheet","url":"https://www.bigocheatsheet.com/"}]  },
    ]},
    { id: "cs-systems", title: "Systems", topics: [
      { id: "cs-os", title: "Operating Systems", summary: "Processes, memory, concurrency.", resources: [{"label":"Operating Systems: Three Easy Pieces (OSTEP Free)","url":"https://pages.cs.wisc.edu/~remzi/OSTEP/"}]  },
      { id: "cs-networks", title: "Computer Networks", summary: "How the internet works.", resources: [{"label":"Computer Networking: A Top-Down Approach (Kurose & Ross)","url":"https://gaia.cs.umass.edu/kurose_ross/online_lectures.htm"}]  },
      { id: "cs-db", title: "Databases", summary: "Storage, indexing, transactions.", resources: [{ label: "SQL Roadmap", url: "/roadmaps/sql" }] },
    ]},
    { id: "cs-theory", title: "Theory & Practice", topics: [
      { id: "cs-paradigms", title: "Programming Paradigms", summary: "OOP, functional, and more.", resources: [{"label":"Programming Paradigms Overview (Stanford CS107)","url":"https://see.stanford.edu/Course/CS107"}]  },
      { id: "cs-compilers", title: "How Code Runs", summary: "Compilation, interpretation, memory.", resources: [{"label":"Crafting Interpreters by Robert Nystrom (Free Online)","url":"https://craftinginterpreters.com/"}] , optional: true },
      { id: "cs-practice", title: "Practice (LeetCode)", summary: "Sharpen problem-solving.", resources: [{"label":"NeetCode 150 Structured Practice Path","url":"https://neetcode.io/practice"}]  },
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
