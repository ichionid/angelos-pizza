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
  title: "Angelo's Pizza Werdohl – Authentische Italienische Pizza",
  description:
    "Angelo's Pizza in Werdohl – seit 1985. Authentische italienische Pizza, frisch gebacken im Holzofen. Besuchen Sie uns für den besten Geschmack Italiens.",
  keywords: [
    "Pizza Werdohl",
    "beste Pizza Werdohl",
    "italienisches Restaurant Werdohl",
    "Holzofenpizza Werdohl",
    "Angelo's Pizza",
    "Pizzeria Werdohl",
  ],
  openGraph: {
    title: "Angelo's Pizza Werdohl – Authentische Italienische Pizza",
    description:
      "Seit 1985 die beste Pizza in Werdohl. Handgemacht, frisch & im Holzofen gebacken.",
    url: "https://angelos-pizza-werdohl.de",
    siteName: "Angelo's Pizza",
    images: [
      {
        url: "/chef.webp", // replace with a nice OG image later (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Angelo's Pizza Werdohl – Holzofenpizza",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelo's Pizza Werdohl – Authentische Italienische Pizza",
    description:
      "Holzofenpizza & italienische Spezialitäten in Werdohl. Seit 1985 ein Stück Italien in Ihrer Stadt.",
    creator: "@angelospizza", // change if you have a Twitter/X handle
    images: ["/chef.webp"],
  },
  alternates: {
    canonical: "https://angelos-pizza-werdohl.de",
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
                Angelon&#39;s Pizza
              </Link>
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
              <p className="text-lg font-semibold">Angelon&#39;s Pizza Berlin</p>
              <p className="mt-2">© {new Date().getFullYear()} Angelon&#39;s Pizza - Alle Rechte vorbehalten</p>
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