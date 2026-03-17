import type { Metadata } from 'next';
import { Poppins, Urbanist } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

const urbanist = Urbanist({ 
  subsets: ['latin'], 
  weight: ['700', '800'],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'Kelompok 1',
  description: 'Praktikum Rekayasa Sistem Informasi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${urbanist.variable}`}>
      <body className="font-poppins">{children}</body>
    </html>
  );
}