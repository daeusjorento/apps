import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Emotion Wheel Quiz' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
