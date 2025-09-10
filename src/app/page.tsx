import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Willkommen bei Angelo&#39;s Pizza
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Authentische italienische Pizza in Berlin. Handgemacht,
            holzofengebacken und immer frisch seit 1985.
          </p>
          <div className="space-x-4">
            <Link
              href="#menu"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Speisekarte ansehen
            </Link>
            <Link
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition inline-block"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-lg text-gray-700 mb-4">
                Seit über 35 Jahren servieren wir die beste authentische
                italienische Pizza in Berlin. Angelo gründete unser Restaurant
                1985 mit der Vision, traditionelle italienische Aromen nach
                Deutschland zu bringen.
              </p>
              <p className="text-lg text-gray-700">
                Jede Pizza wird von Hand gemacht und in unserem original
                italienischen Holzofen gebacken. Wir verwenden nur die
                frischesten Zutaten und traditionelle Rezepte aus der Familie
                Angelo.
              </p>
            </div>
            <div className="relative w-full h-[400px]">
              <Image
                src="/chef.webp"
                alt="Angelo beim Pizzabacken"
                fill
                className="object-cover rounded-[2rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Warum Angelo&#39;s Pizza?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Holzofengebacken</h3>
              <p className="text-gray-600">
                Jede Pizza wird in unserem traditionellen Holzofen gebacken.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Frische Zutaten</h3>
              <p className="text-gray-600">
                Täglich frische Zutaten direkt vom Markt. Tomaten aus Italien,
                Mozzarella aus der Region.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Familienrezepte</h3>
              <p className="text-gray-600">
                Traditionelle Rezepte, die seit Generationen weitergegeben
                werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Image Section */}
      <section id="menu" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Unsere Speisekarte</h2>
          <div className="relative w-full h-[700px]">
            <Image
              src="/menu.webp"
              alt="Speisekarte"
              fill
              className="object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Galerie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[350px]">
              <Image
                src="/dove.webp"
                alt="Friedenstaube Symbol"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="relative h-[350px]">
              <Image
                src="/oven.webp"
                alt="Traditioneller Pizzaofen"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Besuchen Sie uns heute!</h2>
          <p className="text-xl mb-8">
            Erleben Sie den authentischen Geschmack Italiens mitten in Berlin.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-4 font-semibold">Adresse & Öffnungszeiten:</p>
              <p>Pizza Straße 1, 10115 Berlin</p>
              <p>Mo–So: 11:00 – 23:00 Uhr</p>
            </div>
            <div className="relative w-full h-[250px] bg-white p-4 rounded-xl">
              <Image
                src="/whatsapp-qr.webp"
                alt="WhatsApp QR Code"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Angelo&#39;s Pizza – Alle Rechte vorbehalten.</p>
      </footer>
    </>
  );
}
