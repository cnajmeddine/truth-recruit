import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';
import { APP_CONFIG } from '@/lib/constants';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: `${APP_CONFIG.name} - ${APP_CONFIG.tagline}`,
  description: APP_CONFIG.description,
  keywords: 'job search, company research, hiring intelligence, ghost jobs, job market analysis',
  authors: [{ name: APP_CONFIG.name }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: `${APP_CONFIG.name} - ${APP_CONFIG.tagline}`,
    description: APP_CONFIG.description,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_CONFIG.name} - ${APP_CONFIG.tagline}`,
    description: APP_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}