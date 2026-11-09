// TODO: replace with your real history, most recent first.

export type Role = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: 'Job Title',
    org: 'Company Name',
    period: '2024 — Present',
    points: [
      'An achievement, ideally with a measurable outcome.',
      'Another responsibility or win worth highlighting.',
    ],
  },
  {
    title: 'Previous Title',
    org: 'Previous Company',
    period: '2022 — 2024',
    points: ['What you did and the impact it had.'],
  },
  {
    title: 'Degree or Certification',
    org: 'School or Institution',
    period: '2018 — 2022',
    points: ['Relevant coursework, honours, or projects.'],
  },
];
