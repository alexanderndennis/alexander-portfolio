// TODO: replace these placeholder projects with your own (3–6 is ideal).
// `live` and `code` are optional — omit either to hide that link.

export type Project = {
  title: string;
  summary: string; // the problem and what you built
  role: string;
  tech: string[];
  live?: string;
  code?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Project One',
    summary:
      'Describe the problem this project solved, what you built, and the result (a number helps: users, time saved, performance gained).',
    role: 'Solo — design & development',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
    live: 'https://example.com',
    code: 'https://github.com/alexanderndennis',
    featured: true,
  },
  {
    title: 'Project Two',
    summary:
      'A short, concrete description. What was hard about it, and what are you proud of?',
    role: 'Lead developer, team of 3',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    code: 'https://github.com/alexanderndennis',
  },
  {
    title: 'Project Three',
    summary:
      'Side projects count. Show curiosity and range — an experiment, a tool you use daily, an open-source contribution.',
    role: 'Personal project',
    tech: ['Python', 'FastAPI'],
    live: 'https://example.com',
  },
];
