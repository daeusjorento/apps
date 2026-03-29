import Link from 'next/link';

const quizzes = [
  {
    slug: 'us-states',
    title: 'US States',
    description: 'Can you name all 50 US states from memory?',
    count: '50 states',
  },
];

export default function HubPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Quiz Hub</h1>
      <p className="text-gray-500 mb-12 text-base">Pick a quiz and test your knowledge</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-3xl">
        {quizzes.map(q => (
          <Link
            key={q.slug}
            href={`/${q.slug}`}
            className="block border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all group"
          >
            <div className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-2">
              {q.count}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {q.title}
            </h2>
            <p className="text-gray-500 text-sm">{q.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
