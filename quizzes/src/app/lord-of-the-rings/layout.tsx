import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Lord of the Rings Characters Quiz', description: 'Can you name the major characters from Lord of the Rings, The Hobbit, and The Silmarillion?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
