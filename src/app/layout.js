import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {/* Rimuoviamo Header e Footer da qui perché 
           li hai già inseriti dentro page.js. 
           Il layout deve solo gestire la struttura globale.
        */}
        {children}
      </body>
    </html>
  );
}