import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'US States Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
