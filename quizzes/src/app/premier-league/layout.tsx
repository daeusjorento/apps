import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Premier League Teams Quiz', description: 'Can you name all 20 Premier League teams?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
