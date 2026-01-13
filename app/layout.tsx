import type { Metadata } from 'next';
import { Fraunces, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Nav } from '../components/Nav';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Yangyang Zhang | Portfolio',
  description: 'Software engineer focused on AI agent-era systems and product engineering.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen lg:grid lg:grid-cols-[220px_1fr]">
          <aside className="border-b border-ink/10 bg-[#101317] px-6 py-8 text-white lg:min-h-screen lg:border-b-0 lg:border-r">
            <Nav />
          </aside>
          <div className="section-shell py-10">
            <main className="mt-6 lg:mt-0">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
