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
        <li><Link href="/us-cities" className="text-blue-600 hover:underline">US Cities</Link></li>
        <li><Link href="/nfl-teams" className="text-blue-600 hover:underline">NFL Teams</Link></li>
        <li><Link href="/nba-teams" className="text-blue-600 hover:underline">NBA Teams</Link></li>
        <li><Link href="/countries" className="text-blue-600 hover:underline">Countries of the World</Link></li>
        <li><Link href="/canada-provinces" className="text-blue-600 hover:underline">Canadian Provinces &amp; Territories</Link></li>
        <li><Link href="/bones" className="text-blue-600 hover:underline">Bones</Link></li>
        <li><Link href="/muscles" className="text-blue-600 hover:underline">Muscles</Link></li>
      </ul>
    </div>
  );
}
