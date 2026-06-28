export const FEATURED_PROJECTS = [
  {
    id: 'jomi-global',
    tag: 'Active Client · In Development',
    tagType: 'active',
    title: 'Jomi Global',
    subtitle: 'Luxury Brand E-Commerce Platform',
    description:
      'A full-stack luxury e-commerce platform for an international fashion brand built from the ground up with custom admin infrastructure, Flutterwave payment processing, and real-time revenue analytics.',
    problem:
      'Jomi Global needed more than a storefront. They required a complete business system: a polished customer-facing shop, a protected admin dashboard for inventory and order management, and real-time revenue visibility all under one codebase.',
    solution:
      'Built a PHP + MySQL full-stack application with a layered architecture: a public-facing luxury storefront, a protected admin panel with RBAC, Flutterwave payment integration with webhook handling, and a live revenue statistics dashboard.',
    stack: ['PHP', 'JavaScript', 'MySQL', 'Flutterwave', 'HTML/CSS'],
    highlights: [
      'Custom admin dashboard with revenue statistics and charts',
      'Flutterwave payment gateway with webhook verification',
      'Role-based access control admin vs customer',
      'User account system with order history',
      'Inventory management with stock tracking',
      'Responsive luxury UI built for premium feel',
    ],
    architecture: [
      'MVC-style PHP architecture for clean separation of concerns',
      'MySQL with normalised schema; products, orders, users, payments',
      'Flutterwave webhook handler with HMAC signature verification',
      'Server-side session authentication with role guards',
      'Admin panel protected by middleware-style access checks',
    ],
    accentColor: '#818CF8',
    status: 'in-progress',
    github: null,
    live: null,
  },
  {
    id: 'beauty-ecommerce',
    tag: 'Shipped · E-Commerce',
    tagType: 'shipped',
    title: 'Lip Care & Beauty Store',
    subtitle: 'Full E-Commerce Platform for Nigerian Beauty Brand',
    description:
      'A complete multi-page e-commerce platform for a Nigerian lip care and beauty brand featuring cart management, user authentication, WhatsApp ordering, and Nigeria-wide delivery logic.',
    problem:
      'The brand was taking orders manually via Instagram DMs, no cart, no inventory tracking, no order confirmation system. They needed a proper digital storefront that matched their brand identity and worked for Nigerian customers.',
    solution:
      'Built a full shopping experience with a Node.js backend, user authentication, persistent cart management, and a WhatsApp checkout integration that fits local market buying behaviour. Newsletter and delivery zone logic added for operational efficiency.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'],
    highlights: [
      'Multi-page shopping experience with category filtering',
      'Persistent cart with session management',
      'User login / logout authentication system',
      'WhatsApp ordering integration for local market fit',
      'Newsletter subscription with exclusive offer logic',
      'Nigeria-wide delivery system with zone pricing',
    ],
    architecture: [
      'Node.js + Express REST API for cart and auth endpoints',
      'MySQL database for products, users, orders, and subscribers',
      'Session-based authentication with secure cookie handling',
      'WhatsApp API integration for order notification flow',
      'Vanilla JS frontend with dynamic cart state management',
    ],
    accentColor: '#F472B6',
    status: 'shipped',
    github: '#',
    live: null,
  },
  {
    id: 'saas-analytics',
    tag: 'Concept · SaaS Architecture',
    tagType: 'concept',
    title: 'FlowMetrics SaaS',
    subtitle: 'Multi-Tenant Business Analytics Platform',
    description:
      'A SaaS analytics platform concept demonstrating multi-tenant architecture, JWT authentication, role-based access control, and a real-time dashboard the kind of system most Upwork clients actually need built.',
    problem:
      'Small SaaS teams need analytics dashboards but lack the backend infrastructure to support multi-tenant data isolation, tiered subscription access, and a secure API. Most freelancers build the UI but miss the architecture.',
    solution:
      'Designed a complete system architecture: a Node.js REST API with JWT auth, tenant-scoped database queries, RBAC with three roles, and a React dashboard that adapts per role and subscription tier.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    highlights: [
      'Multi-tenant data isolation at the query level',
      'JWT authentication with refresh token rotation',
      'Three-tier RBAC: owner, admin, member',
      'Subscription gating via payment webhook events',
      'Real-time dashboard with chart components',
      'API rate limiting and input validation middleware',
    ],
    architecture: [
      'Node.js + Express with modular router architecture',
      'MongoDB with tenant-scoped collections and indexed queries',
      'JWT access tokens (15min) + refresh tokens (7 days) in httpOnly cookies',
      'Middleware pipeline: rate-limit → authenticate → authorise → handler',
      'React frontend with protected routes and role-aware UI rendering',
    ],
    accentColor: '#34D399',
    status: 'concept',
    github: null,
    live: null,
  },
]

export const MINI_PROJECTS = [
  {
    id: 'stock-dashboard',
    title: 'Stock Analysis Dashboard',
    description:
      'Personal site featuring a full stock analysis tool; ticker search, market cap, revenue, EPS, historical price charts, and news sentiment analysis with word cloud.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Financial APIs'],
    github: '#',
  },
  {
    id: 'species-catalogue',
    title: 'Species Catalogue',
    description:
      'Interactive species search app. Search any organism by common or scientific name (e.g. Panthera leo) and get structured biological data from live APIs.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'REST API'],
    github: '#',
  },
]