export const personalInfo = {
  name: "Kiruthickraj",
  role: "Full-Stack Developer & API Architect",
  username: "kiruthickraj004",
  email: "kiruthickraj28@gmail.com",
  github: "https://github.com/kiruthickraj004",
  location: "India",
  status: "Available for Full-time Roles & High-Impact Projects",
  bio: "Full-Stack Engineer with deep expertise across modern backend ecosystems and reactive frontend architectures. Passionate about building robust RESTful APIs in Python (Django/DRF) and PHP (Laravel), pairing them with performant ReactJS interfaces, relational databases (PostgreSQL/MySQL), low-latency Redis caching, and Docker containerized deployments.",
  stats: [
    { label: "Core Technologies", value: "11+", detail: "Full-Stack Mastery" },
    { label: "APIs & Endpoints", value: "80+", detail: "Tested with Postman" },
    { label: "Architecture", value: "Dockerized", detail: "Multi-service Ready" },
    { label: "Caching Layer", value: "Sub-20ms", detail: "Optimized with Redis" }
  ]
};

export const skillsData = [
  {
    id: "python",
    name: "Python",
    category: "Backend",
    level: 94,
    experience: "3+ Years",
    tagline: "Core scripting, automation, backend logic & microservices",
    description: "Extensive background in writing clean, PEP-8 compliant asynchronous Python, building high-throughput APIs, data parsing pipelines, and backend services.",
    color: "#3b82f6",
    highlight: "Core Language",
    features: ["Object-Oriented Architecture", "AsyncIO & Threading", "Data Validation & Typing", "Clean Architecture"]
  },
  {
    id: "django",
    name: "Django",
    category: "Backend",
    level: 92,
    experience: "3+ Years",
    tagline: "High-level batteries-included Python web framework",
    description: "Designing enterprise-grade web applications leveraging Django ORM, authentication middleware, CSRF security, custom template tags, and migration workflows.",
    color: "#10b981",
    highlight: "Primary Framework",
    features: ["Django ORM & Query Optimization", "Middleware & Auth", "Signals & Background Tasks", "Admin Customization"]
  },
  {
    id: "drf",
    name: "Django REST Framework",
    category: "Backend",
    level: 95,
    experience: "3+ Years",
    tagline: "Standard-setting RESTful API engineering",
    description: "Developing robust REST APIs with serializers, ModelViewSets, nested routers, JWT token authentication, permission classes, pagination, and OpenAPI documentation.",
    color: "#ef4444",
    highlight: "API Specialty",
    features: ["ModelSerializers & Validation", "JWT & Bearer Tokens", "Throttling & Permissions", "Postman Documentation"]
  },
  {
    id: "php",
    name: "PHP",
    category: "Backend",
    level: 88,
    experience: "2+ Years",
    tagline: "Modern object-oriented server-side development",
    description: "Writing modern PHP (8.x) utilizing strict typing, PSR standards, composer packages, dependency injection, and secure session management.",
    color: "#8b5cf6",
    highlight: "Core Language",
    features: ["Modern PHP 8+ Features", "Composer & PSR Compliance", "Error Handling & Logging", "Secure Hashing & Auth"]
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "Backend",
    level: 90,
    experience: "2+ Years",
    tagline: "Elegant web application & API framework",
    description: "Building scalable web services using Eloquent ORM, Artisan CLI, Blade templating, service providers, queue listeners, and Laravel Sanctum for API tokens.",
    color: "#f43f5e",
    highlight: "Primary Framework",
    features: ["Eloquent ORM & Relations", "Artisan Commands", "Queues & Jobs", "Sanctum & API Resources"]
  },
  {
    id: "reactjs",
    name: "ReactJS",
    category: "Frontend",
    level: 91,
    experience: "3+ Years",
    tagline: "Reactive Single-Page Applications & component systems",
    description: "Building interactive, performant user interfaces using modern React hooks, Context API, state machines, component modularity, and seamless REST API integration.",
    color: "#06b6d4",
    highlight: "Frontend Specialty",
    features: ["Custom Hooks & State Flow", "Context API & Optimization", "Client-Side Routing", "REST / GraphQL Fetching"]
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Databases & Cache",
    level: 92,
    experience: "3+ Years",
    tagline: "Advanced enterprise relational database",
    description: "Designing normalized schemas, multi-table joins, B-Tree and GIN indexing, JSONB storage, transactions with ACID guarantees, and database query profiling.",
    color: "#336791",
    highlight: "Primary Database",
    features: ["Complex SQL & Joins", "Index Optimization (EXPLAIN)", "JSONB Semi-structured Data", "Transactions & Locks"]
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Databases & Cache",
    level: 89,
    experience: "3+ Years",
    tagline: "Fast, reliable relational database management",
    description: "Managing relational structures, foreign key constraints, stored procedures, replication setups, and schema migrations across Laravel and Django projects.",
    color: "#f59e0b",
    highlight: "Relational DB",
    features: ["InnoDB Engine & Indexing", "Schema Migrations", "Foreign Keys & Constraints", "Query Caching"]
  },
  {
    id: "redis",
    name: "Redis",
    category: "Databases & Cache",
    level: 87,
    experience: "2+ Years",
    tagline: "Ultra-low-latency in-memory data store & cache",
    description: "Implementing key-value caching layers, rate limiters, session stores, Pub/Sub channels, and distributed lock patterns to drop API response latency to sub-20ms.",
    color: "#dc2626",
    highlight: "Performance Multiplier",
    features: ["In-Memory Caching", "TTL & Eviction Policies", "Rate Limiting & Locks", "Pub/Sub Message Bus"]
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps & Tooling",
    level: 88,
    experience: "2+ Years",
    tagline: "Containerization & reproducible environments",
    description: "Writing multi-stage Dockerfiles, crafting Docker Compose multi-service networks (Frontend + Backend + DB + Redis), volume mounts, and production container builds.",
    color: "#2496ed",
    highlight: "Containerization",
    features: ["Multi-stage Dockerfile Builds", "Docker Compose Orchestration", "Network & Volume Management", "Environment Isolation"]
  },
  {
    id: "postman",
    name: "Postman",
    category: "DevOps & Tooling",
    level: 95,
    experience: "3+ Years",
    tagline: "API lifecycle, testing, mock servers & documentation",
    description: "Designing comprehensive API test collections, environment variables, automated pre-request scripts, regression testing, and sharing developer documentation.",
    color: "#ff6c37",
    highlight: "API Quality Assurance",
    features: ["Automated Test Collections", "Environment & Global Variables", "Pre-request Authentication Scripts", "Mock Servers & API Docs"]
  }
];

export const skillCategories = ["All", "Backend", "Frontend", "Databases & Cache", "DevOps & Tooling"];

export const projectsData = [
  {
    id: "nexus-drf-cloud",
    title: "NexusDRF Cloud Gateway & Microservices Hub",
    category: "Full Stack",
    tagline: "High-concurrency API gateway with Redis distributed caching and Docker orchestration.",
    description: "An enterprise-grade API hub built on Django REST Framework with decoupled microservice workers. Implements JWT authentication with Redis token revocation, automated rate-limiting, and comprehensive Postman automated test suites.",
    tech: ["Python", "Django", "Django REST Framework", "Docker", "Redis", "PostgreSQL", "ReactJS"],
    featured: true,
    github: "https://github.com/kiruthickraj004",
    demo: "#",
    metrics: {
      uptime: "99.95%",
      avgLatency: "24ms",
      cacheHitRatio: "91%"
    },
    architecture: {
      overview: "Multi-tier architecture running behind NGINX reverse proxy. Incoming API traffic is verified via JWT Bearer auth, Redis checks cached endpoints before querying PostgreSQL, and worker tasks run via Celery/Redis.",
      flow: ["React Client", "NGINX Gateway", "Django REST API", "Redis Cache Layer", "PostgreSQL Cluster"],
      snippet: `@api_view(['GET'])
@throttle_classes([ScopedRateThrottle])
def get_service_metrics(request):
    cache_key = f"metrics_{request.user.id}"
    cached_data = redis_client.get(cache_key)
    
    if cached_data:
        return Response(json.loads(cached_data), status=200)
        
    metrics = TelemetryService.calculate_for_user(request.user)
    redis_client.setex(cache_key, 60, json.dumps(metrics))
    return Response(metrics, status=status.HTTP_200_OK)`
    }
  },
  {
    id: "larapulse-erp",
    title: "LaraPulse Enterprise Operations & Workflow Engine",
    category: "PHP & Laravel",
    tagline: "Modular ERP platform with asynchronous queue processing and MySQL indexing.",
    description: "Robust business management portal handling complex inventory flows, automated billing pipelines, and granular Role-Based Access Control (RBAC). Utilizes Redis queue workers to generate asynchronous PDF statements and webhooks.",
    tech: ["PHP", "Laravel", "MySQL", "Redis", "Docker", "ReactJS", "Tailwind CSS"],
    featured: true,
    github: "https://github.com/kiruthickraj004",
    demo: "#",
    metrics: {
      throughput: "5k req/min",
      dbQueryAvg: "12ms",
      queueDelay: "< 1.5s"
    },
    architecture: {
      overview: "Layered Domain-Driven Design (DDD) with Repository-Service pattern. Asynchronous tasks like PDF rendering and notifications are offloaded to Redis queues processed by Laravel Artisan workers.",
      flow: ["React SPA", "Laravel API Routes", "Service / Repository", "Redis Queue Dispatch", "MySQL DB"],
      snippet: `public function dispatchReportGeneration(GenerateReportRequest $request): JsonResponse
{
    $reportJob = new ProcessMonthlyAuditJob($request->validated());
    
    // Dispatch to Redis queue for background execution
    Queue::pushOn('reports-high', $reportJob);
    
    return response()->json([
        'status' => 'queued',
        'job_id' => $reportJob->jobId,
        'estimated_latency_sec' => 2
    ], 202);
}`
    }
  },
  {
    id: "omnipost-api-suite",
    title: "OmniPost Interactive Developer API Playground",
    category: "React & APIs",
    tagline: "Postman-inspired API simulation and contract validation tool built in React.",
    description: "A lightweight in-browser API client and mock runner enabling engineers to test HTTP methods, inspect JSON payloads, view latency waterfalls, and export collections into Postman v2.1 schemas.",
    tech: ["ReactJS", "Postman", "Django REST Framework", "Docker", "Tailwind CSS"],
    featured: true,
    github: "https://github.com/kiruthickraj004",
    demo: "#",
    metrics: {
      formatSupport: "JSON / REST",
      latencySim: "10-100ms",
      collections: "Postman v2.1"
    },
    architecture: {
      overview: "Reactive client-side state machine handling HTTP headers, authorization bearer tokens, payload formatting with custom syntax highlighting, and request timing diagnostics.",
      flow: ["Request Dispatcher", "Header Interceptor", "Simulated Backend", "JSON Formatter"],
      snippet: `const sendApiRequest = async ({ endpoint, method, headers, payload }) => {
  const startTime = performance.now();
  const response = await fetch(endpoint, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    body: method !== 'GET' ? JSON.stringify(payload) : undefined
  });
  const latency = Math.round(performance.now() - startTime);
  const data = await response.json();
  return { status: response.status, latency, data };
};`
    }
  },
  {
    id: "rediscache-sentinel",
    title: "SentinelGuard Distributed Rate Limiter & Cache",
    category: "Python & Django",
    tagline: "High-throughput token bucket rate-limiting service powered by Redis and Python.",
    description: "A pluggable middleware service designed to protect REST APIs from DDoS and brute-force abuse. Employs Redis sliding window algorithms to throttle abusive clients with zero DB overhead.",
    tech: ["Python", "Redis", "Docker", "Django", "PostgreSQL"],
    featured: false,
    github: "https://github.com/kiruthickraj004",
    demo: "#",
    metrics: {
      latency: "1.2ms",
      protection: "Sliding Window",
      dropRate: "100% abusive"
    },
    architecture: {
      overview: "Redis Lua scripts execute atomic sliding-window log calculations, checking client IP and API token frequency in single-digit milliseconds.",
      flow: ["Incoming HTTP Req", "Redis Sentinel Lua Script", "Allow / 429 Throttle", "Application Service"],
      snippet: `local current_time = redis.call('TIME')[1]
local key = KEYS[1]
local window = ARGV[1]
local limit = ARGV[2]

redis.call('ZREMRANGEBYSCORE', key, 0, current_time - window)
local req_count = redis.call('ZCARD', key)

if req_count < tonumber(limit) then
    redis.call('ZADD', key, current_time, current_time)
    return 1
else
    return 0
end`
    }
  },
  {
    id: "devstore-headless",
    title: "DevStore Full-Stack Headless Commerce API",
    category: "Full Stack",
    tagline: "Modern e-commerce platform with Redis distributed inventory locking.",
    description: "A headless commerce backend preventing inventory overselling during flash sales through Redis atomic mutex locks. Features PostgreSQL relational integrity, DRF endpoints, and a snappy ReactJS storefront.",
    tech: ["ReactJS", "Django REST Framework", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    featured: false,
    github: "https://github.com/kiruthickraj004",
    demo: "#",
    metrics: {
      lockTime: "< 5ms",
      consistency: "ACID Guaranteed",
      concurrency: "1000+ orders/min"
    },
    architecture: {
      overview: "Checkout requests acquire a distributed Redis lock per SKU. If acquired, the order transaction commits to PostgreSQL under Serializable isolation, releasing the lock immediately.",
      flow: ["React Checkout", "DRF Order ViewSet", "Redis Lock Acquired", "PostgreSQL Transaction", "Redis Lock Released"],
      snippet: `with redis_client.lock(f"lock:sku:{sku_id}", timeout=5):
    with transaction.atomic():
        product = Product.objects.select_for_update().get(id=sku_id)
        if product.stock >= requested_qty:
            product.stock -= requested_qty
            product.save()
            Order.objects.create(user=user, product=product, qty=requested_qty)
            return Response({"status": "order_confirmed"}, status=201)
        return Response({"error": "out_of_stock"}, status=400)`
    }
  }
];

export const projectCategories = ["All", "Full Stack", "Python & Django", "PHP & Laravel", "React & APIs"];

export const interactiveEndpoints = [
  {
    name: "Developer Profile",
    method: "GET",
    url: "/api/v1/developer/profile",
    description: "Fetch comprehensive profile, bio, skills summary, and availability.",
    response: {
      name: "Kiruthickraj",
      title: "Full-Stack Developer",
      github: "kiruthickraj004",
      email: "kiruthickraj28@gmail.com",
      status: "Available for Hire",
      stack: ["Python", "Django", "DRF", "PHP", "Laravel", "ReactJS", "MySQL", "PostgreSQL", "Docker", "Redis", "Postman"],
      architectureFocus: "Scalable APIs, Clean Code, Microservices, Low-latency Caching"
    }
  },
  {
    name: "Backend Skills Matrix",
    method: "GET",
    url: "/api/v1/skills/backend",
    description: "Inspect backend frameworks, ORMs, and language capabilities.",
    response: {
      languages: [
        { name: "Python", frameworks: ["Django", "Django REST Framework"], orm: "Django ORM", status: "Primary" },
        { name: "PHP", frameworks: ["Laravel"], orm: "Eloquent ORM", status: "Production" }
      ],
      databases: [
        { name: "PostgreSQL", features: ["ACID", "JSONB", "Indexing"] },
        { name: "MySQL", features: ["InnoDB", "Replication", "Relational Keys"] }
      ],
      caching: {
        engine: "Redis",
        patterns: ["Cache-Aside", "Session Storage", "Rate Limiting", "Pub/Sub"]
      }
    }
  },
  {
    name: "DevOps & Containers",
    method: "GET",
    url: "/api/v1/devops/docker",
    description: "Retrieve Docker compose container manifest and virtualization layout.",
    response: {
      orchestrator: "Docker Compose",
      containers: [
        { service: "web_frontend", image: "kiruthick/react-app:latest", port: 3000, status: "healthy" },
        { service: "api_backend", image: "kiruthick/django-drf:v2.4", port: 8000, status: "healthy" },
        { service: "cache_store", image: "redis:7.2-alpine", port: 6379, status: "healthy" },
        { service: "db_postgres", image: "postgres:16-bullseye", port: 5432, status: "healthy" }
      ],
      healthCheck: "100% operational"
    }
  },
  {
    name: "Contact Ping",
    method: "POST",
    url: "/api/v1/contact/ping",
    description: "Simulate a direct ping handshake with Kiruthickraj's communication endpoint.",
    response: {
      message: "Handshake verified! Email dispatch route ready.",
      recipient: "kiruthickraj28@gmail.com",
      status: "201 Created",
      latency: "14ms",
      nextStep: "Use the Contact Form to send a direct collaboration message!"
    }
  }
];

export const experienceTimeline = [
  {
    period: "2023 - Present",
    title: "Full-Stack Software Engineer",
    company: "High-Growth Web Solutions",
    description: "Architecting backend systems in Django and Laravel, developing dynamic React dashboards, containerizing environments with Docker, and optimizing database queries in PostgreSQL/MySQL.",
    skills: ["Django", "DRF", "Laravel", "ReactJS", "PostgreSQL", "Docker", "Redis"]
  },
  {
    period: "2022 - 2023",
    title: "Backend & API Developer",
    company: "Digital Systems Lab",
    description: "Designed RESTful microservices with Django REST Framework and Postman automated testing collections. Scaled Redis caching layers to reduce database load by 60%.",
    skills: ["Python", "Django REST Framework", "MySQL", "Redis", "Postman"]
  },
  {
    period: "2021 - 2022",
    title: "Web Application Developer",
    company: "Core Tech Ventures",
    description: "Built modular web platforms with PHP, Laravel, and MySQL. Implemented responsive interfaces, authentication pipelines, and third-party API integrations.",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS"]
  }
];
