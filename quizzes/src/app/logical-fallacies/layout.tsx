import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Logical Fallacies Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
