import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'NBA Teams Quiz', description: 'Can you name all 30 NBA teams from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
