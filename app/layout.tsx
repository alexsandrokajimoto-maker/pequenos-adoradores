import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pequenos Adoradores | AD Belém Setor 23',
  description: 'Ministério infantil Pequenos Adoradores da Igreja Assembleia de Deus do Belém, Setor 23.',
  keywords: ['Pequenos Adoradores', 'EBD Infantil', 'Assembleia de Deus do Belém', 'Setor 23', 'crianças', 'Jesus'],
  openGraph: {
    title: 'Pequenos Adoradores',
    description: 'Cuidando dos pequenos hoje, formando adoradores para toda a vida.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
