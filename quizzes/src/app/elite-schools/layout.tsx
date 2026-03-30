import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Elite Schools Quiz', description: 'Can you name all 8 Ivy League and 11 NESCAC schools from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
