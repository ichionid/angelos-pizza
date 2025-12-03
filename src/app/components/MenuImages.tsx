import Image from "next/image";
import React from "react";

const MenuImages: React.FC = () => {
  return (
    <div>
      {/* Mobile image */}
      <Image
        src="/mobile/menu.webp"
        alt="Angelos Ziavros"
        width={300}
        height={400}
        className="lg:hidden w-full h-auto rounded-lg"
      />

      {/* Desktop image */}
      <Image
        src="/desktop/menu.webp"
        alt="Angelos Ziavros"
        width={300}
        height={400}
        className="hidden lg:block w-3/4 max-w-md h-auto rounded-lg"
      />
    </div>
  );
};

export default MenuImages;
