interface PizzaGalleryProps {
  className?: string;
}

export default function PizzaGallery({ className = '' }: PizzaGalleryProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl ${className}`}>
      {/* Left Column */}
      <div className="space-y-4">
        {/* Large pizza image */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square">
          <img 
            src="/pizza.svg" 
            alt="Fresh pizza" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bread/Dough image */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-5/4">
          <img 
            src="/dove.svg" 
            alt="Fresh dough" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {/* Pizza in oven */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3]">
          <img 
            src="/oven.svg" 
            alt="Pizza in oven" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Wood-fired oven with pizzas */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square">
          <img 
            src="/wood-oven.svg" 
            alt="Wood-fired oven" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Firewood/outdoor scene */}
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3]">
           <img 
            src="/firewood.svg" 
            alt="Fire wood" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}