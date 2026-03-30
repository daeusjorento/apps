import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Overwatch Quiz', description: 'Can you name all Overwatch 2 heroes from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
