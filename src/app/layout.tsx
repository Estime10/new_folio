import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Estime Vangu | Web & App Developer',
  description:
    'Portfolio de Estime Vangu, développeur web et mobile spécialisé en React, TypeScript et React Native. Découvrez mes projets et compétences en développement web et mobile.',
  keywords: [
    'développeur web',
    'développeur mobile',
    'React',
    'TypeScript',
    'React Native',
    'Next.js',
    'portfolio',
    'Estime Vangu',
  ],
  authors: [{ name: 'Estime Vangu' }],
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
    url: 'https://estimevangu.dev',
    title: 'Estime Vangu | Web & App Developer',
    description:
      'Portfolio de Estime Vangu, développeur web et mobile spécialisé en React, TypeScript et React Native.',
    siteName: 'Portfolio Estime Vangu',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Estime Vangu - Web & App Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estime Vangu | Web & App Developer',
    description:
      'Portfolio de Estime Vangu, développeur web et mobile spécialisé en React, TypeScript et React Native.',
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
    canonical: 'https://estimevangu.dev',
  },
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
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
