import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Overwatch Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
