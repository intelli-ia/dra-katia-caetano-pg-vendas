import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const alegreyaSansHeading = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
  variable: "--font-heading",
});

const alegreyaSansBody = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-body",
});

// Serifada da mesma superfamília — usada só nos sinais tipográficos (aspas)
const alegreyaQuote = Alegreya({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  variable: "--font-quote",
});

export const metadata: Metadata = {
  title: "MAPA | Conceitualização de casos com clareza e direção clínica",
  description:
    "Com o MAPA, você organiza os dados clínicos, visualiza como os elementos do caso se relacionam e transforma a conceitualização em direção para sua prática.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${alegreyaSansHeading.variable} ${alegreyaSansBody.variable} ${alegreyaQuote.variable} font-body antialiased`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
