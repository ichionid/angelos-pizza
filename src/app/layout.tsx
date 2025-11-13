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
    url: "https://angelos-ziavros.de",
    siteName: "Angelo's Pizza",
    images: [
      {
        url: "https://angelos-ziavros.de/chef.webp", // absolute URL
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
    images: ["https://angelos-ziavros.de/chef.webp"], // or just ["/chef.webp"] if using metadataBase
  },
  alternates: {
    canonical: "https://angelos-ziavros.de",
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
      <body className="bg-white text-gray-900">
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">Angelos Ziavros</h1>
            <nav className="space-x-4 hidden md:flex">
              <Link href="/">Über Angelos</Link>
              <Link href="#menu">Pizza in Werdohl</Link>
              <Link href="/impressum">Impressum</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-green-900 text-white p-4 mt-10">
          <div className="max-w-6xl mx-auto text-center">
            © 2025 Angelos Ziavros
          </div>
        </footer>
      </body>
    </html>
  );
}