import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Osher Calisthenics',
  description: 'אפליקציית קליסטניקס בעברית ללימוד, אימון ומעקב התקדמות',
  manifest: '/manifest.webmanifest'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
