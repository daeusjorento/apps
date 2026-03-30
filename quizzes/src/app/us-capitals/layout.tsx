import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'US Capitals Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
