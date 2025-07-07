import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "~/lib/hooks/use-cart";
import { ThemeProvider } from "~/ui/components/theme-provider";
import { WhatsAppFloatingButton } from "~/ui/components/whatsapp-floating-button";
import { CookieConsent } from "~/ui/components/cookie-consent";
import { GoogleAnalytics } from "~/lib/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://arcipres.vercel.app'),
  title: "Arcipres - Arcillas y Prefabricados",
  description: "Arcipres ofrece productos de arcilla y prefabricados de concreto de la más alta calidad para sus proyectos de construcción. Sardineles, bordillos, bloques, ladrillos y mobiliario urbano.",
  keywords: "arcilla, prefabricados, concreto, construcción, sardineles, bordillos, bloques, ladrillos, mobiliario urbano, Colombia",
  authors: [{ name: "Arcipres" }],
  creator: "Arcipres",
  publisher: "Arcipres",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Arcipres - Arcillas y Prefabricados",
    description: "Productos de arcilla y prefabricados de concreto para construcción",
    type: "website",
    locale: "es_CO",
    siteName: "Arcipres",
    images: [
      {
        url: "/Logo Arcipres.svg",
        width: 800,
        height: 600,
        alt: "Arcipres Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcipres - Arcillas y Prefabricados",
    description: "Productos de arcilla y prefabricados de concreto para construcción",
    images: ["/Logo Arcipres.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="flex min-h-screen flex-col">{children}</div>
            {/* Google Analytics 4 */}
            <GoogleAnalytics />
            {/* Botón flotante de WhatsApp */}
            <WhatsAppFloatingButton />
            {/* Banner de consentimiento de cookies */}
            <CookieConsent />
          </CartProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
