import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Osher Calisthenics',
  description: 'Own Your Strength - אפליקציית קליסטניקס בעברית',
  manifest: './manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#39ff14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
