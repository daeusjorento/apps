import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Emotion Wheel Quiz', description: 'Can you name all emotions on the Plutchik emotion wheel from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
