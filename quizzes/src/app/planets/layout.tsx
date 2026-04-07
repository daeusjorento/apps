import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Planets Quiz', description: 'Can you name all 8 planets in our solar system?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
