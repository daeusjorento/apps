import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'The Wire Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
