import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Apple Varieties Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
