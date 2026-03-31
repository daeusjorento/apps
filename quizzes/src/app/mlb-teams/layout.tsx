import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'MLB Teams Quiz', description: 'Can you name all 30 MLB teams from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
