import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Deadliest Wars Quiz', description: 'Can you name the deadliest wars in history by estimated casualty count?' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
