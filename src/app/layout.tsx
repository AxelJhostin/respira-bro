import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { NavBar } from "@/components/NavBar";
import Script from 'next/script'; // <--- Importamos el componente de scripts

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Respira, Bro | Herramientas de salud mental para hombres",
  description: "Una caja de herramientas simple para regular el estrés. Sin cuentas, sin costo, sin tonterías.",
  openGraph: {
    title: "Respira, Bro | ¿Te sientes agotado?",
    description: "Herramientas de regulación emocional para hombres. Entra, respira, sigue.",
    siteName: "Respira, Bro",
    locale: "es_EC",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* suppressHydrationWarning es necesario para next-themes */}
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>

        {/* --- TU ANALÍTICA PRIVADA (UMAMI) --- */}
        <Script 
          src="https://umami-production-2d07.up.railway.app/script.js" 
          data-website-id="6ffce6e7-14cc-42ae-9b8c-bbbd61e4c8bc"
          strategy="afterInteractive" 
        />
        
      </body>
    </html>
  );
}