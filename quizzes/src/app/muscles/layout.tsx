import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Muscles Quiz', description: 'Can you name the major muscles of the human body from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
