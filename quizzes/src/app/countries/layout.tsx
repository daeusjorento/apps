import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Countries Quiz', description: 'Can you name all 195 countries of the world from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
