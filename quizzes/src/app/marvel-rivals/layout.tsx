import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Marvel Rivals Quiz', description: 'Can you name all Marvel Rivals characters from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
