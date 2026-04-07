import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'US Wars Quiz', description: 'Can you name the major wars involving the United States?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
