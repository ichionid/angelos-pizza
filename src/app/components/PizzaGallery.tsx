import Image from 'next/image';

interface PizzaGalleryProps {
  className?: string;
}

export default function PizzaGallery({ className = '' }: PizzaGalleryProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl ${className}`}>
      {/* Left Column */}
      <div className="space-y-4">
        {/* Large pizza image */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square relative">
          <Image
            src="/pizza.jpg"
            alt="Fresh pizza"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Bread/Dough image */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-5/4 relative">
          <Image
            src="/dove.svg"
            alt="Fresh dough"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {/* Pizza in oven */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3] relative">
          <Image
            src="/oven.svg"
            alt="Pizza in oven"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Wood-fired oven with pizzas */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square relative">
          <Image
            src="/wood-oven.svg"
            alt="Wood-fired oven"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Firewood/outdoor scene */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3] relative">
           <Image
            src="/firewood.svg"
            alt="Fire wood"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}