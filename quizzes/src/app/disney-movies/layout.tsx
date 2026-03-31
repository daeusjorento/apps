import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Disney Animated Movies Quiz', description: 'Can you name all classic and modern Disney animated films from memory?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
