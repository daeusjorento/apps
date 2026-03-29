import Link from 'next/link';

export default function HubPage() {
  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Quiz Hub</h1>
      <ul className="space-y-2">
        <li><Link href="/us-states" className="text-blue-600 hover:underline">US States</Link></li>
        <li><Link href="/us-capitals" className="text-blue-600 hover:underline">US Capitals</Link></li>
      </ul>
    </div>
  );
}
