import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'WNBA Teams Quiz', description: 'Can you name all 13 WNBA teams?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
