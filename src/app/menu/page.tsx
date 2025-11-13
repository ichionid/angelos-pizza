import Image from "next/image";

export default function MenuPage() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Unsere Speisekarte</h1>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <Image
            src="/menu.webp" // Replace with your actual menu image path
            alt="Pizza Menu"
            width={800}
            height={1000}
            className="w-full h-auto rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}