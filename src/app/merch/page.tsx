import Image from "next/image";

const merchItems = [
  {
    name: "Angelo's T-Shirt",
    description: "Klassisches T-Shirt mit Angelo's Logo",
    price: "€19.99",
    image: "/merch-tshirt.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Pizza Schürze",
    description: "Professionelle Küchenschürze für echte Pizzabäcker",
    price: "€24.99",
    image: "/merch-apron.jpg",
    sizes: ["Einheitsgröße"],
  },
  {
    name: "Angelo's Mütze",
    description: "Stylische Baseball-Cap mit gesticktem Logo",
    price: "€16.99",
    image: "/merch-cap.jpg",
    sizes: ["Einheitsgröße"],
  },
  {
    name: "Pizza Steinplatte",
    description: "Original Naturstein-Pizzaplatte für den Hausgebrauch",
    price: "€39.99",
    image: "/merch-stone.jpg",
    sizes: ["30cm Durchmesser"],
  },
  {
    name: "Angelo's Hoodie",
    description: "Warmer Kapuzenpullover mit großem Rückenprint",
    price: "€34.99",
    image: "/merch-hoodie.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Gewürz-Set",
    description: "Italienische Gewürzmischung wie bei Angelo's verwendet",
    price: "€12.99",
    image: "/merch-spices.jpg",
    sizes: ["4er Set"],
  },
];

export default function MerchPage() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Angelo's Merchandise</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nehmen Sie ein Stück Angelo's mit nach Hause! Von stylischen T-Shirts bis hin zu
          professionellem Pizzazubehör - hier finden Sie alles für echte Pizza-Liebhaber.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {merchItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <div className="mb-4">
                <span className="text-sm text-gray-500">Verfügbare Größen:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.sizes.map((size, sizeIndex) => (
                    <span
                      key={sizeIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600">{item.price}</span>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                  In den Warenkorb
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Bestellung & Versand</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">📦 Versand</h3>
            <p className="text-gray-600 mb-4">
              Kostenloser Versand ab €30 Bestellwert in Deutschland.
              Lieferzeit: 3-5 Werktage.
            </p>
            <h3 className="text-lg font-semibold mb-2">💳 Bezahlung</h3>
            <p className="text-gray-600">
              PayPal, Kreditkarte, SEPA-Lastschrift oder Kauf auf Rechnung möglich.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">🏪 Abholung</h3>
            <p className="text-gray-600 mb-4">
              Alle Artikel können auch direkt in unserem Restaurant abgeholt werden.
              Einfach vorher anrufen!
            </p>
            <h3 className="text-lg font-semibold mb-2">↩️ Rückgabe</h3>
            <p className="text-gray-600">
              30 Tage Rückgaberecht bei ungetragenen und unbenutzten Artikeln.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}