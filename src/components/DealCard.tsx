// frontend/src/components/DealCard.tsx
import React from "react";

interface DealProps {
  deal: {
    departure: string;
    destination: string;
    price: string;
    airline: string;
    type: string;
    expires: string;
    savings?: string;
    originalPrice?: string;
  };
}

const DealCard = ({ deal }: DealProps) => {
  const isErrorFare = deal.type === "Error Fare";
  const isFlashSale = deal.type === "Flash Sale";

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            {deal.departure} → {deal.destination}
          </h2>
          <span 
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isErrorFare 
                ? 'bg-[#FF5733]/10 text-[#FF5733]' 
                : 'bg-[#28A745]/10 text-[#28A745]'
            }`}
          >
            {deal.type}
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-[#007BFF]">{deal.price}</span>
            {deal.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {deal.originalPrice}
              </span>
            )}
          </div>
          {deal.savings && (
            <span className="text-sm text-[#28A745]">Save {deal.savings}</span>
          )}
        </div>

        {/* Details */}
        <div className="space-y-2 mb-6">
          <p className="text-gray-600">
            <span className="font-medium">Airline:</span> {deal.airline}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Expires:</span>{" "}
            <span className="text-[#FF5733]">{deal.expires}</span>
          </p>
        </div>

        {/* Action Button */}
        <button 
          className="w-full bg-[#007BFF] text-white px-4 py-2 rounded-md hover:bg-[#007BFF]/90 transition-colors font-medium"
          aria-label={`View deal for flight from ${deal.departure} to ${deal.destination}`}
        >
          View Deal
        </button>
      </div>
    </div>
  );
};

export default DealCard;
