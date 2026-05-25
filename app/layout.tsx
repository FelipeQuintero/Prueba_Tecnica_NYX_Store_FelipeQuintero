import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Next.js incluye fuentes por defecto
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NYX eCommerce Prueba Técnica",
  description: "eCommerce construido con Next.js y Zustand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}