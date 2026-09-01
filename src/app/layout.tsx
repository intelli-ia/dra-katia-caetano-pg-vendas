import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W955QHGM');`,
          }}
        />
      </head>
      <body
        className={`${alegreyaSansHeading.variable} ${alegreyaSansBody.variable} ${alegreyaQuote.variable} font-body antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W955QHGM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
