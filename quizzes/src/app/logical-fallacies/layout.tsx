import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Logical Fallacies Quiz', description: 'Can you name common logical fallacies from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
