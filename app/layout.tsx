import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Yangyang Zhang — Systems · AI',
  description:
    'Systems engineer for the AI era: self-hosted voice-AI platform in production, Mitacs-funded LLM-serving research, and a dozen shipped products.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans text-[0.9375rem] leading-relaxed">
        <Nav />
        <main className="shell pb-24 pt-10 md:pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
