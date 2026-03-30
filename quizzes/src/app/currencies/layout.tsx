import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Currencies Quiz', description: 'Can you name world currencies from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
