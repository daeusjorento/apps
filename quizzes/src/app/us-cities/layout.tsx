import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'US Cities Quiz', description: 'Can you name the 25 most populous US cities from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
