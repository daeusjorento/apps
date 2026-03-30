import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Organs Quiz', description: 'Can you name the major human organs from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
