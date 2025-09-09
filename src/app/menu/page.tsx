import Image from "next/image";

const pizzas = [
  {
    name: "Margherita",
    description: "Tomatensauce, Mozzarella, frisches Basilikum",
    price: "€8.00",
    image: "/pizza-placeholder.jpg", // replace later
  },
  {
    name: "Salami",
    description: "Tomatensauce, Mozzarella, würzige Salami",
    price: "€9.50",
    image: "/pizza-placeholder.jpg",
  },
  {
    name: "Funghi",
    description: "Tomatensauce, Mozzarella, frische Champignons",
    price: "€9.00",
    image: "/pizza-placeholder.jpg",
  },
  {
    name: "Quattro Formaggi",
    description: "Vier Käsesorten auf knusprigem Boden",
    price: "€10.50",
    image: "/pizza-placeholder.jpg",
  },
];

export default function MenuPage() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Unsere Speisekarte</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {pizzas.map((pizza, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={pizza.image}
                alt={pizza.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{pizza.name}</h2>
                <p className="text-gray-600 mt-2">{pizza.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg">{pizza.price}</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
