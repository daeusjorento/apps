import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Countries of Africa Quiz', description: 'Can you name all 54 countries in Africa?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
