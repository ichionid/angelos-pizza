import Image from 'next/image';

interface PizzaGalleryProps {
  className?: string;
}

export default function PizzaGallery({ className = '' }: PizzaGalleryProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto my-8 ${className}`}>
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
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square relative">
          <Image
            src="/dove.jpg"
            alt="Fresh dough"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {/* Pizza in oven */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3] relative">
          <Image
            src="/oven.jpg"
            alt="Pizza in oven"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
          />
        </div>

        {/* Wood-fired oven with pizzas */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square relative">
          <Image
            src="/wood-oven.jpg"
            alt="Wood-fired oven"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Firewood/outdoor scene */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3] relative">
           <Image
            src="/firewood.jpg"
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