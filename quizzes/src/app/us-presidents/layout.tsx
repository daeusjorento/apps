import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'US Presidents Quiz', description: 'Can you name all US presidents from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
