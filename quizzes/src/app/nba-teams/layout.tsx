import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'NBA Teams Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
