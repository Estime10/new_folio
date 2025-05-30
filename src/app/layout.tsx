import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Estime Vangu | Web & Mobile Developer',
  description:
    'Portfolio of Estime Vangu, web and mobile developer specialized in React, TypeScript and React Native. Discover my innovative projects and my skills in web and mobile development.',
  keywords: [
    'web developer',
    'mobile developer',
    'React',
    'TypeScript',
    'React Native',
    'Next.js',
    'portfolio',
    'Estime Vangu',
    'full stack',
    'belgian developer',
  ],
  authors: [{ name: 'Estime Vangu', url: 'https://estimevanguportfolio.vercel.app/' }],
  creator: 'Estime Vangu',
  publisher: 'Estime Vangu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://estimevanguportfolio.vercel.app/',
    title: 'Estime Vangu | Web & Mobile Developer',
    description:
      'Portfolio of Estime Vangu, web and mobile developer specialized in React, TypeScript and React Native.',
    siteName: 'Portfolio Estime Vangu',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Estime Vangu - Web & Mobile Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estime Vangu | Web & Mobile Developer',
    description:
      'Portfolio of Estime Vangu, web and mobile developer specialized in React, TypeScript and React Native.',
    images: ['/images/logo.png'],
    creator: '@estimevangu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
  alternates: {
    canonical: 'https://estimevanguportfolio.vercel.app/',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#121212',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo_2.png" />
        <meta name="theme-color" content="#121212" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
