// Projects shown in the "Build" chapter. `points` entries are HTML (may use <b>).

export type Status = 'live' | 'dev' | 'paused';

export type Product = {
  name: string;
  status: Status;
  statusLabel: string;
  intro?: string;
  points: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  /** HTML shown instead of links, e.g. a call to action. */
  note?: string;
};

export type Flagship = {
  eyebrow: string;
  name: string;
  summary: string;
  products: Product[];
};

export const flagship: Flagship = {
  eyebrow: 'Founder & lead engineer',
  name: 'Avenor OS',
  summary:
    'A family of multi-tenant management systems for community institutions. Each organisation gets its own secure workspace for its branches, people, roles, money and messages.',
  products: [
    {
      name: 'Church OS',
      status: 'live',
      statusLabel: 'Live',
      points: [
        '<b>Multi-tenant SaaS</b>: every church registers its own workspace, with tenant isolation enforced from the signed access token.',
        '<b>Role-based access control</b> with granular permissions, account lockout and rate-limited sign-in.',
        '<b>Finance ledger</b>: funds, tithes, offerings, pledges, budgets and approved expenses. Records are voided with a reason, never deleted, and parent churches roll up their branches.',
        '<b>Messaging engine</b>: email and SMS to whole congregations or targeted groups, through a queued worker with retries and per-recipient status.',
        '<b>Member portal</b> with passwordless sign-in, plus nightly encrypted database backups.',
      ],
      stack: ['React 19', 'Vite', 'NestJS 11', 'Prisma', 'PostgreSQL', 'Tailwind', 'Railway', 'Vercel'],
      links: [{ label: 'church.avenoros.com →', href: 'https://church.avenoros.com' }],
    },
    {
      name: 'School OS',
      status: 'dev',
      statusLabel: 'In development',
      points: [
        'The next Avenor product, built on the same multi-tenant, permission-driven foundation as Church OS.',
        'Designed for schools to manage students, staff, academic records and parent communication from one workspace.',
        'Reuses the proven core: workspace onboarding, roles and permissions, audit trails, messaging and secure data export.',
      ],
      stack: ['TypeScript', 'React', 'NestJS', 'PostgreSQL'],
      note: 'Interested in a pilot? <a href="/#contact">Talk to Avenor</a>',
    },
  ],
};

export type SideProject = Product & { diagramLabel?: string; diagram?: string };

export const sideProjects: SideProject[] = [
  {
    name: 'CampusBite',
    status: 'paused',
    statusLabel: 'Archived · revival planned',
    intro:
      'A campus food-ordering platform that lets students order ahead from university canteens and lets vendors manage menus and orders in real time.',
    points: [
      'Separate experiences for <b>students, vendors and admins</b>.',
      'Cart, checkout and an order lifecycle from pending to ready for pickup.',
      'Vendor dashboard for menu management and order status updates.',
    ],
    stack: ['PHP', 'MySQL', 'HTML/CSS'],
    links: [{ label: 'View source →', href: 'https://github.com/alexanderndennis/campusbite' }],
    diagramLabel: 'Data model',
    diagram: `users ─┬─< canteens ──< food_items
       │       │              │
       └─< orders ──< order_items
               │
               └── payments (UPI · card · wallet)

order_status: pending → accepted → preparing
              → ready → completed | cancelled`,
  },
];
