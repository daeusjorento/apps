import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'US States Quiz', description: 'Can you name all 50 US states from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
