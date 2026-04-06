import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Countries of North America Quiz', description: 'Can you name all 23 countries in North America?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
