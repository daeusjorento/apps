import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Bones Quiz', description: 'Can you name 30 major bones of the human body from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
