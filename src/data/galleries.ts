// Certifications, Awards and Memories galleries — each has its own page.
//
// To add an item:
//   1. Put the image in public/certifications/, public/awards/ or public/memories/
//      (JPG, ideally under ~300 KB and no wider than 1200px). For awards and
//      memories also add a small "-t.jpg" thumbnail next to it (~520px).
//   2. Add an entry below. `image` is optional — items without one show a
//      maroon star placeholder. `date` is "YYYY-MM" (or "YYYY"); newest first.
//   3. `cat` must be one of the gallery's `cats`.

export type GalleryItem = {
  title: string;
  issuer?: string;
  date?: string;
  cat: string;
  image?: string;
  /** Extra photos shown in the slideshow after `image` (albums). */
  images?: string[];
  note?: string;
};

export type Gallery = {
  slug: 'certifications' | 'awards' | 'memories';
  eyebrow: string;
  title: string;
  desc: string;
  teaserEyebrow: string;
  teaserText: string;
  cats: string[];
  /** 'contain' shows the whole image (landscape certificates); default crops to fill. */
  fit?: 'cover' | 'contain';
  /** 'manual' keeps the order written below; default sorts newest first. */
  order?: 'date' | 'manual';
  /** 'wall' shows every photo as a plain tile with no captions (Memories). */
  layout?: 'cards' | 'wall';
  items: GalleryItem[];
};

export const certifications: Gallery = {
  slug: 'certifications',
  eyebrow: 'Proof of work',
  title: 'Certifications',
  desc: 'Courses and professional certificates from Coursera, LinkedIn Learning and other platforms.',
  teaserEyebrow: 'Coursera · LinkedIn Learning',
  teaserText: 'Courses completed across software engineering, web development, design thinking and business.',
  cats: ['Coursera', 'LinkedIn Learning', 'Professional skills', 'Other'],
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
    { title: 'Computer Architecture Essentials', issuer: 'LinkedIn Learning', date: '2025-10-29', cat: 'LinkedIn Learning', image: '/certifications/li-computer-architecture-essentials.jpg' },
    // Professional skills (LinkedIn Learning)
    { title: 'Agile Foundations', issuer: 'LinkedIn Learning', date: '2024-10-27', cat: 'Professional skills', image: '/certifications/li-agile-foundations.jpg' },
    { title: 'Agile at Work: Building Your Agile Team', issuer: 'LinkedIn Learning', date: '2024-10-20', cat: 'Professional skills', image: '/certifications/li-agile-at-work.jpg' },
    { title: 'Rapid Prototyping for Product Design', issuer: 'LinkedIn Learning', date: '2024-10-26', cat: 'Professional skills', image: '/certifications/li-rapid-prototyping.jpg' },
    { title: 'Miro for UX: Brainstorming and Collaboration', issuer: 'LinkedIn Learning', date: '2024-10-26', cat: 'Professional skills', image: '/certifications/li-miro-ux.jpg' },
    { title: 'Design Thinking: Understanding the Process', issuer: 'LinkedIn Learning', date: '2024-10-26', cat: 'Professional skills', image: '/certifications/li-design-thinking-understanding.jpg' },
    { title: 'Design Thinking: Implementing the Process', issuer: 'LinkedIn Learning', date: '2024-10-28', cat: 'Professional skills', image: '/certifications/li-design-thinking-implementing.jpg' },
    { title: 'Learning Design Thinking: Lead Change in Your Organization', issuer: 'LinkedIn Learning', date: '2024-10-28', cat: 'Professional skills', image: '/certifications/li-design-thinking-lead-change.jpg' },
    { title: 'Creating a Business Plan', issuer: 'LinkedIn Learning', date: '2025-02-03', cat: 'Professional skills', image: '/certifications/li-creating-business-plan.jpg' },
    { title: 'Consulting Foundations', issuer: 'LinkedIn Learning', date: '2025-02-03', cat: 'Professional skills', image: '/certifications/li-consulting-foundations.jpg' },
    { title: 'Understanding Intellectual Property', issuer: 'LinkedIn Learning', date: '2025-02-03', cat: 'Professional skills', image: '/certifications/li-understanding-ip.jpg' },
    { title: 'Leading with Innovation', issuer: 'LinkedIn Learning', date: '2025-02-03', cat: 'Professional skills', image: '/certifications/li-leading-with-innovation.jpg' },
    { title: 'Technical Writing: Quick Start Guides', issuer: 'LinkedIn Learning', date: '2025-02-01', cat: 'Professional skills', image: '/certifications/li-technical-writing.jpg' },
    { title: 'Business Writing Principles', issuer: 'LinkedIn Learning', date: '2025-02-02', cat: 'Professional skills', image: '/certifications/li-business-writing.jpg' },
  ],
};

const A = (n: string) => `/awards/${n}.jpg`;
const M = (n: string) => `/memories/${n}.jpg`;

export const awards: Gallery = {
  slug: 'awards',
  eyebrow: 'Honours',
  title: 'Awards & achievements',
  desc: 'Leadership, sport and campus recognition, plus the times Chandigarh University featured my work.',
  teaserEyebrow: 'Leadership · Sport · Campus',
  teaserText: 'Election certificates, leadership awards, tournament honours and campus recognition.',
  cats: ['Leadership', 'Sport', 'Campus', 'Featured'],
  order: 'manual',
  items: [
    // Leadership
    {
      title: 'Certificate of Election: Student Representative, Chandigarh University',
      issuer: 'ALSI Independent Election Commission',
      date: '2026-06',
      cat: 'Leadership',
      image: A('alsi-certificate'),
      note: 'Declared winner of the ALSI Election 2026 with the highest number of valid votes.',
    },
    {
      title: 'Democratic Elected Leadership Award & Certificate of Election',
      issuer: 'CULSA Independent Election Commission',
      date: '2026',
      cat: 'Leadership',
      image: '/images/alexander.jpg',
      note: 'Elected Assistant Secretary General, 2026–27.',
    },
    // Campus
    {
      title: 'Semi-finalist, Student of the Year 2025',
      issuer: 'Chandigarh University · Department of Art & Cultural Affairs',
      date: '2025-04',
      cat: 'Campus',
      image: A('soty-talent'),
      images: [A('soty-talent-stage'), A('soty-social'), A('soty-donation'), A('soty-donation-post'), A('soty-donation-board'),
        A('soty-strength-arm'), A('soty-strength'), A('soty-strength-group'), A('soty-treasure'), A('soty-poster')],
      note: 'First-ever edition. Rounds: Social Responsibility (Feb 2025), Donation Drive, Talent, Strength (Apr 2025) and Treasure Hunt.',
    },
    {
      title: 'Third Prize, Innovation Fair, 57th Engineers’ Day 2024',
      issuer: 'University Institute of Engineering (AU-5), Chandigarh University',
      date: '2024-09',
      cat: 'Campus',
      image: A('innovation-certificate'),
      images: [A('innovation-trophy-uie'), A('innovation-holding'), A('innovation-trophy-full'), A('innovation-selfie'),
        A('innovation-trophy'), A('innovation-winners')],
      note: '14 September 2024, Lab 605, Block C3.',
    },
    // Sport
    {
      title: 'Champions & Man of the Match (Final), YES Festival Football Championship',
      issuer: 'Youth Empowered Sports · Quest Christian Fellowship',
      date: '2025',
      cat: 'Sport',
      image: A('yes-mom'),
      images: [A('yes-trophy'), A('yes-podium'), A('yes-presentation'), A('yes-presentation-2'), A('yes-team'), A('yes-teammate'), A('yes-teammate-2')],
      note: 'Won the final with CUCF FC and was named Man of the Match. The same day, Elite Squad FC was founded: the birth of a great team.',
    },
    {
      title: '1st Runner-Up, Basketball (Men), International Students Sports Meet',
      issuer: 'Office of International Affairs, Chandigarh University',
      date: '2025-04',
      cat: 'Sport',
      image: A('issm-portrait'),
      images: [A('issm-stage'), A('issm-presentation'), A('issm-team'), A('issm-plaque'), A('issm-medal'), A('trophy-shelf')],
      note: '15–26 April 2025.',
    },
    {
      title: 'Champions, AASI-Punjab Christmas Tournament',
      issuer: 'AASI-Punjab · Kharar Stadium',
      date: '2025-12',
      cat: 'Sport',
      image: A('aasi-champions'),
      note: 'Won with CUCF Fellowship in a tournament for Christian fellowships.',
    },
    {
      title: 'Champions, Unity Football Cup 2026 “Kick Free” Season 3',
      issuer: 'Life Sports India',
      date: '2026-01',
      cat: 'Sport',
      image: A('unity-champions'),
      images: [A('unity-team'), A('unity-lineup'), A('unity-match'), A('unity-match-2'), A('unity-pitch')],
    },
    {
      title: 'Best Player (MVP) & Top Goal Scorer',
      issuer: 'Nawanshahr Tournament',
      date: '2026-02',
      cat: 'Sport',
      note: 'Won a TVS Platinum motorcycle as the prize.',
    },
    {
      title: 'Highest Rebounds Award, 2021 Boima Kiawu Youth Basketball Tournament',
      issuer: 'Mama Jama Ultimate Sports · Area B court, Bardnersville Estate',
      date: '2021',
      cat: 'Sport',
      image: A('mamajama-squad'),
      images: [A('mamajama-courtside')],
    },
    // Featured by Chandigarh University
    {
      title: 'Face of the CU admissions campaign 2025–26',
      issuer: 'Chandigarh University',
      date: '2025',
      cat: 'Featured',
      image: A('featured-admissions'),
      note: '“Join Our Vibrant Student Community.”',
    },
    {
      title: '“Where Diversity Meets Excellence” campaign',
      issuer: 'Chandigarh University on Instagram',
      cat: 'Featured',
      image: A('featured-diversity'),
      images: [A('featured-diversity-2')],
    },
    {
      title: '“International Talent, Indian Melody!”: Bollywood cover',
      issuer: 'Chandigarh University on Instagram',
      cat: 'Featured',
      image: A('featured-bollywood'),
      note: 'A Bollywood cover by an international student that travelled across CU’s accounts.',
    },
    {
      title: 'Representing Liberia at Folk Clock 3.0',
      issuer: 'Chandigarh University & DACA on Instagram',
      cat: 'Featured',
      image: A('featured-folkclock'),
      note: 'International Dance and Music Festival reel.',
    },
    {
      title: 'International Students Sports Competition',
      issuer: 'Office of International Affairs, Chandigarh University',
      date: '2025-04',
      cat: 'Featured',
      image: A('issm-post'),
    },
  ],
};

export const memories: Gallery = {
  slug: 'memories',
  eyebrow: 'Beyond code',
  title: 'Life beyond code',
  desc: 'Leadership, culture, service, faith and sport, from Monrovia to Punjab.',
  teaserEyebrow: 'Community · Culture · Sport',
  teaserText: 'Photos from campus, community, church and home.',
  cats: ['Campus', 'Community', 'Service', 'Faith', 'Sport', 'Roots'],
  fit: 'cover',
  order: 'manual',
  layout: 'wall',
  items: [
    // Campus
    { title: 'On the lawn at Chandigarh University', cat: 'Campus', image: M('campus-lawn') },
    { title: 'First year in the FEDE lab', cat: 'Campus', image: M('fede-1') },
    { title: 'Lab day at UIE', cat: 'Campus', image: M('lab-coats') },
    { title: 'Suited up at CU', cat: 'Campus', image: M('campus-mural') },
    { title: 'HackOverflow at CU', cat: 'Campus', image: M('hackoverflow') },
    { title: 'In the Engineering Physics lab', cat: 'Campus', image: M('lab-physics') },
    // Community
    { title: 'Liberia’s 178th Independence Day at CU', cat: 'Community', image: M('liberia-178-cu') },
    { title: 'Independence Day portrait', cat: 'Community', image: M('liberia-178-portrait') },
    { title: 'CULSA leadership at Nigeria’s Independence Day celebration', cat: 'Community', image: M('culsa-nigeria') },
    { title: 'The Liberia delegation at Folk Clock 3.0', cat: 'Community', image: M('folkclock-delegation') },
    { title: 'In Liberian country cloth', cat: 'Community', image: M('folkclock-portrait') },
    { title: 'Flying the flag at Folk Clock 3.0', cat: 'Community', image: M('folkclock-parade') },
    { title: 'International students at Christmas, CU', cat: 'Community', image: M('christmas-cu-steps') },
    // Service
    { title: 'Medical Health Camp outreach', cat: 'Service', image: M('medical-camp') },
    { title: 'Community outreach session', cat: 'Service', image: M('outreach') },
    // Faith
    { title: 'Filming for the LICI media team', cat: 'Faith', image: M('lici-media') },
    { title: 'Behind the camera at LICI', cat: 'Faith', image: M('lici-media-2') },
    { title: 'Speaking at the EYCMR retreat', cat: 'Faith', image: M('eycmr-1') },
    // Sport
    { title: 'Elite Squad FC training', cat: 'Sport', image: M('elite-juggle') },
    { title: 'Elite Squad 5–1 Bethel F.C.', cat: 'Sport', image: M('elite-fulltime') },
    { title: 'Grand Bassa #06', cat: 'Sport', image: M('grandbassa-1') },
    { title: 'Basketball at CU', cat: 'Sport', image: M('cu-basketball-air') },
    { title: 'Home court back in Liberia', cat: 'Sport', image: M('homecourt-1') },
    // Roots
    { title: 'Carrying the Liberian flag', cat: 'Roots', image: M('liberian-flag') },
    { title: 'With classmates at Blue Crest University', cat: 'Roots', image: M('blue-crest') },
    { title: 'High school graduation, Class of 2022–23', cat: 'Roots', image: M('hs-graduation') },
    { title: 'Traditional dress at Holy Martyrs’ Parish', cat: 'Roots', image: M('green-outfits') },
  ],
};

export const galleries = [certifications, awards, memories];
