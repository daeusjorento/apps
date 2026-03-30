import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Countries Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
