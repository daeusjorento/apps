import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Psychology Biases Quiz', description: 'Can you name common cognitive biases from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
