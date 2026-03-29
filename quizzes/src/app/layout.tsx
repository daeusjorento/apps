import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Name All 50 States',
  description: 'Can you name all 50 US states from memory?',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
