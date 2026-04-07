import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Quiz Hub' };

export default function HubPage() {
  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Quiz Hub</h1>
      <ul className="space-y-2">
        <li><Link href="/us-states" className="text-blue-600 hover:underline">US States</Link></li>
        <li><Link href="/us-capitals" className="text-blue-600 hover:underline">US Capitals</Link></li>
        <li><Link href="/us-presidents" className="text-blue-600 hover:underline">US Presidents</Link></li>
        <li><Link href="/us-cities" className="text-blue-600 hover:underline">US Cities by Population</Link></li>
        <li><Link href="/countries-africa" className="text-blue-600 hover:underline">Countries of Africa</Link></li>
        <li><Link href="/countries-asia" className="text-blue-600 hover:underline">Countries of Asia</Link></li>
        <li><Link href="/countries-europe" className="text-blue-600 hover:underline">Countries of Europe</Link></li>
        <li><Link href="/countries-north-america" className="text-blue-600 hover:underline">Countries of North America</Link></li>
        <li><Link href="/countries-south-america" className="text-blue-600 hover:underline">Countries of South America</Link></li>
        <li><Link href="/canada-provinces" className="text-blue-600 hover:underline">Canadian Provinces &amp; Territories</Link></li>
        <li><Link href="/nfl-teams" className="text-blue-600 hover:underline">NFL Teams</Link></li>
        <li><Link href="/nba-teams" className="text-blue-600 hover:underline">NBA Teams</Link></li>
        <li><Link href="/nhl-teams" className="text-blue-600 hover:underline">NHL Teams</Link></li>
        <li><Link href="/mlb-teams" className="text-blue-600 hover:underline">MLB Teams</Link></li>
        <li><Link href="/wnba-teams" className="text-blue-600 hover:underline">WNBA Teams</Link></li>
        <li><Link href="/premier-league" className="text-blue-600 hover:underline">Premier League Teams</Link></li>
        <li><Link href="/disney-movies" className="text-blue-600 hover:underline">Disney Animated Movies</Link></li>
        <li><Link href="/planets" className="text-blue-600 hover:underline">Planets of the Solar System</Link></li>
        <li><Link href="/solar-system-moons" className="text-blue-600 hover:underline">Solar System Moons</Link></li>
        <li><Link href="/us-wars" className="text-blue-600 hover:underline">US Wars</Link></li>
        <li><Link href="/global-wars" className="text-blue-600 hover:underline">Deadliest Wars in History</Link></li>
        <li><Link href="/bones" className="text-blue-600 hover:underline">Bones</Link></li>
        <li><Link href="/muscles" className="text-blue-600 hover:underline">Muscles</Link></li>
        <li><Link href="/organs" className="text-blue-600 hover:underline">Human Organs</Link></li>
        <li><Link href="/the-wire" className="text-blue-600 hover:underline">The Wire Characters</Link></li>
        <li><Link href="/red-rising" className="text-blue-600 hover:underline">Red Rising Characters</Link></li>
        <li><Link href="/lord-of-the-rings" className="text-blue-600 hover:underline">Lord of the Rings Characters</Link></li>
        <li><Link href="/currencies" className="text-blue-600 hover:underline">World Currencies</Link></li>
        <li><Link href="/overwatch" className="text-blue-600 hover:underline">Overwatch 2 Heroes</Link></li>
        <li><Link href="/marvel-rivals" className="text-blue-600 hover:underline">Marvel Rivals Characters</Link></li>
        <li><Link href="/seven-deadly-sins" className="text-blue-600 hover:underline">Seven Deadly Sins</Link></li>
        <li><Link href="/elite-schools" className="text-blue-600 hover:underline">Ivy League &amp; NESCAC Schools</Link></li>
      </ul>
    </div>
  );
}
