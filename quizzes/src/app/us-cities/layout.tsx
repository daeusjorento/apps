import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'US Cities by Population Quiz', description: 'Can you name the 25 most populous US cities from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
