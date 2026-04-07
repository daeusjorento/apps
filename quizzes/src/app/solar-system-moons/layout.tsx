import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Solar System Moons Quiz', description: 'Can you name the major moons of our solar system?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
