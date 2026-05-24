/**
 * =======================================================
 * PROJETO DESENVOLVIDO POR: TUCTECH DIGITAL
 * DOMÍNIO OFICIAL: tuctech.com.br
 * =======================================================
 */
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { WhatsAppFloat } from "@/src/components/WhatsAppFloat";
import { CookieConsent } from "@/src/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: {
    default: 'Renata Sibele | Imóveis em João Pessoa',
    template: '%s | Renata Sibele Imóveis',
  },
  description: 'Encontre os melhores imóveis em Manaíra e região com a corretora Renata Sibele. CRECI 13018-PB.',
  openGraph: {
    title: 'Renata Sibele | Imóveis de Alto Padrão em João Pessoa',
    description: 'Corretora especialista em Manaíra e região. Imóveis exclusivos com segurança e transparência.',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
