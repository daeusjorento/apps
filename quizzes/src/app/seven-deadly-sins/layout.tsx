import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Seven Deadly Sins Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
