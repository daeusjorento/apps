import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'NHL Teams Quiz', description: 'Can you name all 32 NHL teams?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
