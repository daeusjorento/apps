import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'NFL Teams Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
