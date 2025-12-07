import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { NavBar } from "@/components/NavBar";

// Configuramos la fuente Inter (se ve muy profesional y limpia)
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
      </body>
    </html>
  );
}