import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Quiz Hub' };

const CATEGORIES = [
  {
    name: 'Geography',
    quizzes: [
      { href: '/us-states', label: 'US States' },
      { href: '/us-capitals', label: 'US Capitals' },
      { href: '/us-cities', label: 'US Cities by Population' },
      { href: '/canada-provinces', label: 'Canadian Provinces & Territories' },
      { href: '/countries-africa', label: 'Countries of Africa' },
      { href: '/countries-asia', label: 'Countries of Asia' },
      { href: '/countries-europe', label: 'Countries of Europe' },
      { href: '/countries-north-america', label: 'Countries of North America' },
      { href: '/countries-south-america', label: 'Countries of South America' },
      { href: '/currencies', label: 'World Currencies' },
    ],
  },
  {
    name: 'History',
    quizzes: [
      { href: '/us-presidents', label: 'US Presidents' },
      { href: '/us-wars', label: 'US Wars' },
      { href: '/global-wars', label: 'Deadliest Wars in History' },
    ],
  },
  {
    name: 'Sports',
    quizzes: [
      { href: '/nfl-teams', label: 'NFL Teams' },
      { href: '/nba-teams', label: 'NBA Teams' },
      { href: '/nhl-teams', label: 'NHL Teams' },
      { href: '/mlb-teams', label: 'MLB Teams' },
      { href: '/wnba-teams', label: 'WNBA Teams' },
      { href: '/premier-league', label: 'Premier League Teams' },
    ],
  },
  {
    name: 'Space',
    quizzes: [
      { href: '/planets', label: 'Planets of the Solar System' },
      { href: '/solar-system-moons', label: 'Solar System Moons' },
    ],
  },
  {
    name: 'Anatomy',
    quizzes: [
      { href: '/bones', label: 'Bones' },
      { href: '/muscles', label: 'Muscles' },
      { href: '/organs', label: 'Human Organs' },
    ],
  },
  {
    name: 'Entertainment & Games',
    quizzes: [
      { href: '/disney-movies', label: 'Disney Animated Movies' },
      { href: '/the-wire', label: 'The Wire Characters' },
      { href: '/lord-of-the-rings', label: 'Lord of the Rings Characters' },
      { href: '/red-rising', label: 'Red Rising Characters' },
      { href: '/overwatch', label: 'Overwatch 2 Heroes' },
      { href: '/marvel-rivals', label: 'Marvel Rivals Characters' },
      { href: '/seven-deadly-sins', label: 'Seven Deadly Sins' },
      { href: '/greek-roman-gods', label: 'Greek & Roman Gods' },
    ],
  },
  {
    name: 'Schools',
    quizzes: [
      { href: '/elite-schools', label: 'Ivy League & NESCAC Schools' },
    ],
  },
];

export default function HubPage() {
  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Quiz Hub</h1>
      <div className="space-y-8">
        {CATEGORIES.map(cat => (
          <section key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">{cat.name}</h2>
            <ul className="space-y-1.5">
              {cat.quizzes.map(q => (
                <li key={q.href}>
                  <Link href={q.href} className="text-blue-600 hover:underline">{q.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
