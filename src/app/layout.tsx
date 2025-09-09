import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Angelo's Pizza – Fresh Handmade Pizzas in Berlin",
  description:
    "Authentic Italian pizza in Berlin. Wood-fired, handmade, and always fresh. Order online or visit Angelo's Pizza today!",
  keywords: [
    "pizza",
    "italian restaurant",
    "pizzeria berlin",
    "wood-fired pizza",
    "order pizza online",
  ],
  authors: [{ name: "Angelo's Pizza" }],
  creator: "Angelo's Pizza",
  metadataBase: new URL("https://angelos-pizza.de"), // update when domain ready
  openGraph: {
    title: "Angelo's Pizza – Fresh Handmade Pizzas in Berlin",
    description:
      "Authentic Italian pizza in Berlin. Wood-fired, handmade, and always fresh.",
    url: "https://angelos-pizza.de",
    siteName: "Angelo's Pizza",
    images: [
      {
        url: "/og-pizza.jpg", // put an image in /public
        width: 1200,
        height: 630,
        alt: "Fresh handmade pizza from Angelo's",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelo's Pizza – Fresh Handmade Pizzas in Berlin",
    description:
      "Order authentic wood-fired pizza in Berlin. Fresh, hot & handmade since 1985.",
    images: ["/og-pizza.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <footer className="bg-red-700 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Angelo&apos;s Pizza</p>
        <div className="mt-2 space-x-4">
          <a href="/impressum" className="hover:underline">Impressum</a>
          <a href="/datenschutz" className="hover:underline">Datenschutz</a>
        </div>
      </footer>

    </html>
  );
}
