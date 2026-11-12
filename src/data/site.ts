// ---------------------------------------------------------------------------
// Site-wide content. Strings rendered with `set:html` may contain simple inline
// markup such as <strong>; everything else is plain text.
// ---------------------------------------------------------------------------

export const site = {
  url: 'https://nyamieh.com',

  name: 'Alexander N. Dennis',
  nickname: 'The Indian Cowboy',
  title: 'Alexander N. Dennis | Full-Stack Engineer & Founder of Avenor OS',
  description:
    'Alexander N. Dennis is a Liberian full-stack engineer, founder of Avenor OS, Computer Science student at Chandigarh University and elected student leader, also known as The Indian Cowboy.',

  origin: 'Monrovia, Liberia → Punjab, India',
  /** HTML */
  lede:
    'Full-stack engineer and founder of <strong>Avenor OS</strong>, building multi-tenant software that helps churches and schools run on clean data instead of paper. Third-year Computer Science &amp; Engineering student at Chandigarh University, elected student leader, athlete and content creator.',
  roles: [
    'Full-stack engineer',
    'Founder · Avenor OS',
    'B.E. CSE · Chandigarh University',
    'Asst. Secretary General · CULSA',
  ],

  avatar: '/images/avatar.jpg',
  portrait: {
    src: '/images/alexander.jpg',
    alt: 'Alexander Dennis in a maroon blazer and green Assistant Secretary General sash, holding a framed certificate of election and a Democratic Elected Leadership Award',
    tagTitle: 'Elected, 2026–27',
    tagText: 'Assistant Secretary General, Chandigarh University Liberian Students Association',
    tagLink: 'https://culsa.org/',
  },

  facts: [
    { value: '2', label: 'Avenor OS products: Church OS live, School OS in build' },
    { value: '6', label: 'student leadership roles since 2024' },
    { value: '1M+', label: 'views on @indian_cowboy__' },
    { value: 'No. 1', label: 'private university in India: Chandigarh University, QS Asia 2027' },
  ],

  github: 'https://github.com/alexanderndennis',
  footerNote: 'Built with intent in Punjab',
  footerRoots: 'Rooted in Liberia',
};

export const story = {
  heading: 'An engineer’s son who builds systems people actually use.',
  places: 'Bardnersville · Congo Town · Kharar',
  /** HTML paragraphs */
  paragraphs: [
    'I grew up in Bardnersville, Kebbah Community, Monrovia, in a home where critical thinking was encouraged as a way to solve problems. My father, <strong>Joseph B. Dennis</strong>, is a Mechanical Engineer and an Assistant Professor at the College of Engineering, University of Liberia. Watching him work taught me that engineering is a way of life: serving people creatively, innovatively and productively to improve their wellbeing and that of society at large.',
    'After high school I spent almost two years studying Network Engineering at Blue Crest University in Congo Town, which gave me a grounding in how systems talk to each other. I then moved to India for my bachelor’s in Computer Science &amp; Engineering at <strong>Chandigarh University</strong>, where I found my focus: full-stack development.',
    'Years of serving in church leadership and media teams showed me how much community organisations struggle with records, finances and communication. That is the problem I set out to solve with <strong>Avenor OS</strong>. Outside the code, I lead student bodies, play football and basketball, and make content that brings Liberian and Indian culture together.',
  ],
  credo: { quote: 'Be the change you want to see.', cite: 'My personal philosophy' },
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'PHP', 'SQL'] },
  { group: 'Front end', items: ['React 19', 'Vite', 'Tailwind CSS', 'React Query & Zustand'] },
  { group: 'Back end & data', items: ['NestJS', 'Prisma ORM', 'PostgreSQL', 'MySQL'] },
  {
    group: 'Infra & tooling',
    items: ['Railway & Vercel', 'Cloudflare DNS', 'GitHub Actions CI', 'Networking fundamentals'],
  },
];

export const beyond = [
  {
    eyebrow: 'Football & basketball',
    big: 'MVP + Golden Boot',
    title: 'Nawanshahr Tournament, Feb 2026',
    text: 'Named Best Player and Top Goal Scorer, and won a TVS Platinum motorcycle as the prize.',
  },
  {
    eyebrow: 'Content creator',
    big: 'Millions of views',
    title: 'The Indian Cowboy',
    text: 'A signature cowboy style blended with a love for Indian culture: speaking Hindi, singing the songs and building friendships across campus. The nickname stuck.',
    link: { label: '@indian_cowboy__ →', href: 'https://www.instagram.com/indian_cowboy__/' },
  },
  {
    eyebrow: 'Community',
    big: '11 nations, 1 team',
    title: 'Elite Squad FC',
    text: 'A football family for international students in India, and proof that sport is the fastest way to turn strangers into a network.',
    link: { label: '@elite_squad2025 →', href: 'https://www.instagram.com/elite_squad2025/' },
  },
];

export const faith = {
  /** HTML list items */
  items: [
    '<b>St. Augustine Episcopal Church</b>, Bardnersville Road, Gardnersville: baptised and confirmed member.',
    '<b>Acolyte Guild</b>: served as an acolyte from 2020 to 2024, and as Vice President of the guild in 2023–24, under the Rev. Fr. Macdonald B. Freeman, Rector.',
    '<b>Secretary General</b>, St. Augustine Youth Fellowship.',
    '<b>Life Implication Church International (LICI)</b>, Kharar, Punjab: media team, under Ps. Charles Jacobs and Mt. Salome Jacobs.',
  ],
  credo: {
    quote:
      'I am who I am by God’s grace. God above all. I can do all things through Christ who strengthens me.',
    cite: 'Philippians 4:13',
  },
};

export const contact = {
  heading: 'Let’s build something',
  intro: 'Open to internships, collaborations and conversations about Avenor OS.',
  emails: [
    { label: 'Personal & opportunities', address: 'nyamiehdennis@gmail.com' },
    { label: 'Avenor OS for your church or school', address: 'theavenoros@gmail.com' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexander-dennis-256198329' },
    { label: 'GitHub', href: 'https://github.com/alexanderndennis' },
    { label: 'Instagram', href: 'https://www.instagram.com/indian_cowboy__/' },
    { label: 'Avenor Church OS', href: 'https://church.avenoros.com' },
  ],
};
