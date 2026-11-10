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
  items: [
    // { title: 'Meta Front-End Developer', issuer: 'Coursera', date: '2025-06', cat: 'Coursera', image: '/certifications/meta-front-end.jpg' },
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
