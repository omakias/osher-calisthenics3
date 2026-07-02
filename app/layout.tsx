import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Osher Calisthenics',
  description: 'Own Your Strength - אפליקציית קליסטניקס בעברית',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
