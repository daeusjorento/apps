import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Greek & Roman Gods Quiz', description: 'Can you name all the major Greek and Roman deities?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
