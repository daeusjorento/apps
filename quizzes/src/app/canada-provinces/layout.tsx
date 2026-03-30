import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Canada Provinces Quiz', description: 'Can you name all 13 Canadian provinces and territories from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
