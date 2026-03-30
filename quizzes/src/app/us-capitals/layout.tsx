import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'US Capitals Quiz', description: 'Can you name all 50 US state capitals from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
