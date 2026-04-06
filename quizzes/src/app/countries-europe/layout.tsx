import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Countries of Europe Quiz', description: 'Can you name all 44 countries in Europe?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
