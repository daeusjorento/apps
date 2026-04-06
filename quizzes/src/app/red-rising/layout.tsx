import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Red Rising Characters Quiz', description: 'Can you name the major characters from the Red Rising saga?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
