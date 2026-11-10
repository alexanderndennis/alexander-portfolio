// Certifications and Awards galleries — each has its own page.
//
// To add an item:
//   1. Put the image in public/certifications/ or public/awards/
//      (JPG/PNG/WebP, ideally under ~500 KB and no wider than 1800px).
//   2. Add an entry below. `image` is optional — items without one show a
//      maroon star placeholder. `date` is "YYYY-MM" (or "YYYY"); newest first.
//   3. `cat` must be one of the gallery's `cats`.

export type GalleryItem = {
  title: string;
  issuer?: string;
  date?: string;
  cat: string;
  image?: string;
  note?: string;
};

export type Gallery = {
  slug: 'certifications' | 'awards';
  eyebrow: string;
  title: string;
  desc: string;
  teaserEyebrow: string;
  teaserText: string;
  cats: string[];
  /** 'contain' shows the whole image (landscape certificates); default crops to fill. */
  fit?: 'cover' | 'contain';
  items: GalleryItem[];
};

export const certifications: Gallery = {
  slug: 'certifications',
  eyebrow: 'Proof of work',
  title: 'Certifications',
  desc: 'Courses and professional certificates from Coursera, LinkedIn Learning and other platforms.',
  teaserEyebrow: 'Coursera · LinkedIn Learning',
  teaserText: 'Courses completed across software engineering, web development and professional skills.',
  cats: ['Coursera', 'LinkedIn Learning', 'Other'],
  fit: 'contain',
  items: [
    // Coursera
    { title: 'Object-Oriented Programming and Functions', issuer: 'Packt · Coursera', date: '2026-01-15', cat: 'Coursera', image: '/certifications/coursera-oop-functions.jpg' },
    { title: 'Development Methodologies Overview', issuer: 'LearnQuest · Coursera', date: '2026-01-16', cat: 'Coursera', image: '/certifications/coursera-development-methodologies.jpg' },
    { title: 'Introduction to Software Engineering', issuer: 'IBM · Coursera', date: '2026-01-16', cat: 'Coursera', image: '/certifications/coursera-intro-software-engineering.jpg' },
    { title: 'Java Programming for Beginners', issuer: 'IBM · Coursera', date: '2026-01-17', cat: 'Coursera', image: '/certifications/coursera-java-beginners.jpg' },
    { title: 'Operating Systems and You: Becoming a Power User', issuer: 'Google · Coursera', date: '2026-01-17', cat: 'Coursera', image: '/certifications/coursera-operating-systems.jpg' },
    // LinkedIn Learning
    { title: 'Become a Full-Stack Web Developer', issuer: 'LinkedIn Learning', date: '2026-01-30', cat: 'LinkedIn Learning', image: '/certifications/li-full-stack-web-developer.jpg', note: 'Learning path · 105 hours' },
    { title: 'CSS Essential Training (2023)', issuer: 'LinkedIn Learning', date: '2026-01-18', cat: 'LinkedIn Learning', image: '/certifications/li-css-essential.jpg' },
    { title: 'DevOps Foundations', issuer: 'LinkedIn Learning', date: '2026-01-30', cat: 'LinkedIn Learning', image: '/certifications/li-devops-foundations.jpg' },
    { title: 'Git Essential Training', issuer: 'LinkedIn Learning', date: '2026-01-23', cat: 'LinkedIn Learning', image: '/certifications/li-git-essential.jpg' },
    { title: 'HTML Essential Training', issuer: 'LinkedIn Learning', date: '2026-01-23', cat: 'LinkedIn Learning', image: '/certifications/li-html-essential.jpg' },
    { title: 'JavaScript Essential Training', issuer: 'LinkedIn Learning', date: '2026-01-18', cat: 'LinkedIn Learning', image: '/certifications/li-javascript-essential.jpg' },
    { title: 'Learning ECMAScript 6+ (ES6+)', issuer: 'LinkedIn Learning', date: '2026-01-23', cat: 'LinkedIn Learning', image: '/certifications/li-es6.jpg' },
    { title: 'Learning REST APIs', issuer: 'LinkedIn Learning', date: '2026-01-23', cat: 'LinkedIn Learning', image: '/certifications/li-rest-apis.jpg' },
    { title: 'Node.js Essential Training', issuer: 'LinkedIn Learning', date: '2026-01-23', cat: 'LinkedIn Learning', image: '/certifications/li-nodejs-essential.jpg' },
    { title: 'NoSQL Essential Training', issuer: 'LinkedIn Learning', date: '2026-01-23', cat: 'LinkedIn Learning', image: '/certifications/li-nosql-essential.jpg' },
    { title: 'Programming Foundations: Algorithms', issuer: 'LinkedIn Learning', date: '2026-02-02', cat: 'LinkedIn Learning', image: '/certifications/li-pf-algorithms.jpg' },
    { title: 'Programming Foundations: APIs and Web Services', issuer: 'LinkedIn Learning', date: '2026-02-04', cat: 'LinkedIn Learning', image: '/certifications/li-pf-apis-web-services.jpg' },
    { title: 'Programming Foundations: Beyond the Fundamentals', issuer: 'LinkedIn Learning', date: '2026-01-18', cat: 'LinkedIn Learning', image: '/certifications/li-pf-beyond-fundamentals.jpg' },
    { title: 'Programming Foundations: Data Structures', issuer: 'LinkedIn Learning', date: '2026-02-04', cat: 'LinkedIn Learning', image: '/certifications/li-pf-data-structures.jpg' },
    { title: 'Programming Foundations: Databases', issuer: 'LinkedIn Learning', date: '2026-02-04', cat: 'LinkedIn Learning', image: '/certifications/li-pf-databases.jpg' },
    { title: 'Programming Foundations: Design Patterns', issuer: 'LinkedIn Learning', date: '2026-02-04', cat: 'LinkedIn Learning', image: '/certifications/li-pf-design-patterns.jpg' },
    { title: 'Programming Foundations: Fundamentals', issuer: 'LinkedIn Learning', date: '2026-01-18', cat: 'LinkedIn Learning', image: '/certifications/li-pf-fundamentals.jpg' },
    { title: 'Programming Foundations: Memory, Pointers, and Garbage Collection', issuer: 'LinkedIn Learning', date: '2026-02-04', cat: 'LinkedIn Learning', image: '/certifications/li-pf-memory-pointers-gc.jpg' },
    { title: 'Programming Foundations: Object-Oriented Design', issuer: 'LinkedIn Learning', date: '2026-02-04', cat: 'LinkedIn Learning', image: '/certifications/li-pf-object-oriented-design.jpg' },
    { title: 'Programming Foundations: Secure Coding (2018)', issuer: 'LinkedIn Learning', date: '2026-02-04', cat: 'LinkedIn Learning', image: '/certifications/li-pf-secure-coding.jpg' },
    { title: 'Programming Foundations: Software Testing/QA', issuer: 'LinkedIn Learning', date: '2026-02-16', cat: 'LinkedIn Learning', image: '/certifications/li-pf-software-testing-qa.jpg' },
    { title: 'Programming Foundations: Test-Driven Development', issuer: 'LinkedIn Learning', date: '2026-02-16', cat: 'LinkedIn Learning', image: '/certifications/li-pf-test-driven-development.jpg' },
    { title: 'React Essential Training', issuer: 'LinkedIn Learning', date: '2026-01-23', cat: 'LinkedIn Learning', image: '/certifications/li-react-essential.jpg' },
    { title: 'Search Techniques for Web Developers', issuer: 'LinkedIn Learning', date: '2026-01-18', cat: 'LinkedIn Learning', image: '/certifications/li-search-techniques.jpg' },
    { title: 'SQL Essential Training', issuer: 'LinkedIn Learning', date: '2026-01-23', cat: 'LinkedIn Learning', image: '/certifications/li-sql-essential.jpg' },
  ],
};

export const awards: Gallery = {
  slug: 'awards',
  eyebrow: 'Honours',
  title: 'Awards & achievements',
  desc: 'Leadership, sport and campus recognition, with the certificates and trophies behind them.',
  teaserEyebrow: 'Leadership · Sport · Campus',
  teaserText: 'Election certificates, leadership awards, tournament honours and campus recognition.',
  cats: ['Leadership', 'Sport', 'Campus', 'Other'],
  items: [
    {
      title: 'Democratic Elected Leadership Award & Certificate of Election',
      issuer: 'CULSA Independent Election Commission',
      cat: 'Leadership',
      image: '/images/alexander.jpg',
      note: 'Elected Assistant Secretary General, 2026–27.',
    },
    {
      title: 'Best Player (MVP) & Top Goal Scorer',
      issuer: 'Nawanshahr Tournament',
      date: '2026-02',
      cat: 'Sport',
      note: 'Won a TVS Platinum motorcycle as the prize.',
    },
    {
      title: 'Semi-finalist, Student of the Year',
      issuer: 'Chandigarh University · first-ever edition',
      cat: 'Campus',
    },
  ],
};

export const galleries = [certifications, awards];
