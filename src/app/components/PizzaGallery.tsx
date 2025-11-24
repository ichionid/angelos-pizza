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
              src="/mobile/pizza.webp"
              alt="frische Pizza"
              width={300}
              height={400}
              className="lg:hidden w-full h-auto rounded-lg"
            />
            {/* Desktop image */}
            <Image
              src="/desktop/pizza.webp"
              alt="frische Pizza"
              width={300}
              height={400}
              className="hidden lg:block w-full h-auto rounded-lg"
            />

        </div>

        {/* Bread/Dough image */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square relative">
          <Image
            src="/mobile/dove.webp"
            alt="Pizza Taube"
            width={300}
            height={400}
            className="lg:hidden w-full h-auto rounded-lg"
          />
          {/* Desktop image */}
          <Image
            src="/desktop/dove.webp"
            alt="Pizza Taube"
            width={300}
            height={400}
            className="hidden lg:block w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {/* Pizza in oven */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3] relative">
          <Image
            src="/mobile/oven.webp"
            alt="Pizza im Ofen"
            width={300}
            height={400}
            className="lg:hidden w-full h-auto rounded-lg"
          />
          {/* Desktop image */}
          <Image
            src="/desktop/oven.webp"
            alt="Pizza im Ofen"
            width={300}
            height={400}
            className="hidden lg:block w-full h-auto rounded-lg"
          />
        </div>

        {/* Wood-fired oven with pizzas */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[3/2]  relative">
          <Image
            src="/mobile/woodoven.webp"
            alt="Holzofen"
            width={300}
            height={400}
            className="lg:hidden w-full h-auto rounded-lg"
          />
          {/* Desktop image */}
          <Image
            src="/desktop/woodoven.webp"
            alt="Holzofen"
            width={300}
            height={400}
            className="hidden lg:block w-full h-auto rounded-lg"
          />
        </div>

        {/* Firewood/outdoor scene */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[3/4] relative">
           <Image
            src="/mobile/firewood.webp"
            alt="Brennholz"
            width={300}
            height={400}
            className="lg:hidden w-full h-auto rounded-lg"
          />
          {/* Desktop image */}
          <Image
            src="/desktop/firewood.webp"
            alt="Brennholz"
            width={300}
            height={400}
            className="hidden lg:block w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}