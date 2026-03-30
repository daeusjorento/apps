import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Apple Varieties Quiz', description: 'Can you name well-known apple varieties from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
