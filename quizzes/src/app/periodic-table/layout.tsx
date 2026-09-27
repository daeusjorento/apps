import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Periodic Table Quiz',
  description: 'Can you name all 118 chemical elements from memory?',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
