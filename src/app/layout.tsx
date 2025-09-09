import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-red-600">
                Angelo's Pizza
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-600 transition">
                  Home
                </Link>
                <Link href="/menu" className="text-gray-700 hover:text-red-600 transition">
                  Speisekarte
                </Link>
                <Link href="/merch" className="text-gray-700 hover:text-red-600 transition">
                  Merchandise
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-red-600 transition">
                  Kontakt
                </Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-red-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-red-700 text-white py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <p className="text-lg font-semibold">Angelo's Pizza Berlin</p>
              <p className="mt-2">© {new Date().getFullYear()} Angelo's Pizza - Alle Rechte vorbehalten</p>
              <div className="mt-4 space-x-6">
                <Link href="/impressum" className="hover:underline">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="hover:underline">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}