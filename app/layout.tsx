import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Next.js incluye fuentes por defecto
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NYX Store | Colección Japandi | Prueba Técnica Hi Beauty",
  description: "Una experiencia de eCommerce moderna y natural construida con Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Fondo de página: Crema cálido (Warm Cream) */}
      <body className={`${inter.className} bg-[#FDF9F3] text-stone-900 antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}