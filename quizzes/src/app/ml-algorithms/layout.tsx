import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Machine Learning Algorithms Quiz', description: 'Can you name the most well-known machine learning algorithms from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
