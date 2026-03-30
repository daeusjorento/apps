import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'The Wire Quiz', description: 'Can you name the characters from The Wire from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
