import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'paolo gourmet',
  description: 'Tablas de queso seleccionadas para cada ocasión.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RSWBK19Z6R"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RSWBK19Z6R');
          `}
        </Script>
      </body>
    </html>
  );
}
