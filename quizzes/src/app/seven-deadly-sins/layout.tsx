import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Seven Deadly Sins Quiz', description: 'Can you name all 7 deadly sins from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
