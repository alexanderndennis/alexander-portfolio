// Leadership timeline (most recent first) and education.

export type Role = {
  when: string;
  title: string;
  org: string;
  text?: string;
  /** Filled dot on the timeline. */
  key?: boolean;
  /** Shows the green "Elected" badge. */
  elected?: boolean;
};

export const leadership = {
  heading: 'Trusted to lead, again and again',
  intro:
    'From class president in Monrovia to elected office in India’s Liberian student community. Most recent first.',
};

export const experience: Role[] = [
  {
    when: '2026–27',
    title: 'Assistant Secretary General',
    org: 'Chandigarh University Liberian Students Association (CULSA)',
    text: 'Elected through CULSA’s Independent Election Commission and recognised with the Democratic Elected Leadership Award.',
    key: true,
    elected: true,
  },
  {
    when: '2026–27',
    title: 'Student Representative, 5th House of Parliament',
    org: 'Association of Liberian Students in India (ALSI)',
    text: 'Represents Chandigarh University’s Liberian students in the national student parliament.',
    key: true,
  },
  {
    when: '2025–26',
    title: 'Media & Communication Officer, Cabinet',
    org: 'CULSA',
    text: 'Ran the association’s communications, coverage and public voice.',
  },
  {
    when: '2024–25',
    title: 'First International Students Coordinator',
    org: 'Academic Unit 5 (AU-5), Chandigarh University',
    text: 'The first person to hold the role, appointed in my first year at CU.',
  },
  {
    when: 'Ongoing',
    title: 'Founding Member, Elite Squad FC',
    org: 'International students’ football club',
    text: 'Helped found a club that brings together players from Zimbabwe, Malawi, Liberia, Tanzania, South Sudan and India.',
  },
  { when: 'Ongoing', title: 'Influencer, NextGen Creators', org: 'Chandigarh University' },
  { when: 'CU', title: 'Semi-finalist, Student of the Year', org: 'Chandigarh University’s first-ever edition' },
  {
    when: '2022–23',
    title: 'Class Vice President, Grade 12',
    org: 'Class “Berenike” (Bringers of Victory), Sister Shirley Kolmer Memorial Catholic School',
  },
  {
    when: 'Grades 5–11',
    title: 'Class President, seven consecutive years',
    org: 'Sister Shirley Kolmer Memorial Catholic School',
  },
];

export type School = { school: string; years: string; detail: string; ranks?: string[] };

export const education: School[] = [
  {
    school: 'Chandigarh University',
    years: '2024 – present',
    detail: 'B.E. Computer Science & Engineering (General), 3rd year · Mohali, Punjab',
    ranks: [
      '#1 private university in India, QS Asia 2027 (4th year running)',
      '#104 in Asia',
      'Top 20 in India, NIRF 2025',
    ],
  },
  { school: 'Blue Crest University', years: '~2 years', detail: 'Network Engineering studies · Congo Town, Monrovia' },
  {
    school: 'Sister Shirley Kolmer Memorial Catholic School',
    years: 'Grade 4 – 2023',
    detail:
      'High school diploma · Bardnersville Estate, Monrovia · Class President (grades 5–11), Vice President of Class Berenike',
  },
  { school: 'St. Mary’s Catholic School', years: 'K – Grade 3', detail: 'Monrovia, Liberia' },
];
