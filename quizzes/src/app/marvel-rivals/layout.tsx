import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Marvel Rivals Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
