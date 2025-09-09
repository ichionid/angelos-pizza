import Image from "next/image";

export default function Home() {

  return (
    <main className="min-h-screen bg-red-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        {/* Hero Image */}
        <Image
          src="/hero.webp" // replace with your own image in /public
          alt="Delicious pizzaz"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-extrabold drop-shadow-lg">
            🍕 Angelo&apos;s Pizza
          </h1>
          <p className="mt-4 text-xl">
            Fresh, hot & handmade – since 1985
          </p>
          <a
            href="/menu"
            className="mt-6 inline-block bg-red-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-red-700 transition"
          >
            View Menu
          </a>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Margherita", price: "€8.00" },
            { name: "Pepperoni", price: "€9.50" },
            { name: "Funghi", price: "€9.00" },
          ].map((pizza, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">{pizza.name}</h3>
                <p className="text-gray-600 mt-2">
                  A tasty classic with fresh ingredients.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold">{pizza.price}</span>
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transitioninline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/menu"
            className="text-red-600 font-semibold hover:underline"
          >
            See full menu →
          </a>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            At Angelo&apos;s Pizza, we&apos;ve been serving authentic,
            wood-fired pizzas since 1985. From fresh mozzarella to hand-picked
            basil, every bite brings you closer to Napoli.
          </p>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="bg-red-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
          <p className="mb-2">📍 Main Street 42, Berlin</p>
          <p className="mb-4">🕒 Mon–Sun: 11:00 – 22:00</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl shadow hover:bg-red-700 transition"
          >
            Find Us on Google Maps
          </a>
        </div>
      </section>
    </main>
  );
}
