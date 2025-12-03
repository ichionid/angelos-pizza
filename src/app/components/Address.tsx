import React from "react";
import { MapPin } from "lucide-react";

const Address: React.FC = () => {
  const address = "Holzofenbäckerei Deitmerg, Lengelsen 6, 58791 Werdohl";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="flex items-start gap-2">
      <MapPin className="w-5 h-5 mt-1" />

      <div>
        <strong>Address:</strong>
        <br />
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Holzofenbäckerei Deitmerg
          <br />
          Lengelsen 6
          <br />
          58791 Werdohl
        </a>
      </div>
    </div>
  );
};

export default Address;
