import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Countries of Asia Quiz', description: 'Can you name all 49 countries in Asia?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
