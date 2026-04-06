import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Countries of South America Quiz', description: 'Can you name all 12 countries in South America?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
