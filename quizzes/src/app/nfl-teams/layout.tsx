import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'NFL Teams Quiz', description: 'Can you name all 32 NFL teams from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
