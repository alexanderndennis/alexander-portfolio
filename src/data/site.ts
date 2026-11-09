// ---------------------------------------------------------------------------
// Site-wide settings. Edit this file first — everything else reads from it.
// Items marked TODO are placeholders to replace with your own details.
// ---------------------------------------------------------------------------

export const site = {
  // TODO: your custom domain, including https:// and no trailing slash.
  url: 'https://example.com',

  name: 'Alexander Dennis',
  // TODO: one line that says what you do.
  role: 'Developer & Builder',
  // TODO: a one- or two-sentence pitch shown on the hero and in link previews.
  tagline:
    'I build thoughtful, reliable digital products — from idea to launch.',
  location: 'TODO: City, Country',

  // TODO: contact details. Remove any you don't want shown.
  email: 'hello@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/alexanderndennis' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/TODO' },
  ],

  // Put your CV at public/cv.pdf, or set this to null to hide the button.
  cvPath: '/cv.pdf' as string | null,
};

// TODO: replace with your own bio paragraphs.
export const about = [
  "I'm Alexander, a builder who enjoys turning messy problems into clear, useful products. This paragraph is a placeholder — tell visitors who you are and what you care about.",
  'Use a second paragraph for how you work, what you are learning, or what kind of opportunities you are looking for.',
];

// TODO: group your skills however makes sense for your field.
export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { group: 'Frameworks', items: ['React', 'Astro', 'Node.js', 'Tailwind CSS'] },
  { group: 'Tools', items: ['Git', 'GitHub Actions', 'Figma', 'Docker'] },
];
