import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext"; // 1. Importiamo il provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ferramenta e Colori SIMARI",
  description: "Ferramenta, vernici e duplicazione chiavi a Mileto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 2. Avvolgiamo children con CartProvider */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}