// frontend/src/pages/dashboard.tsx
import React from "react";
import DealCard from "@/components/DealCard";

// Mock data with enhanced deal types
const mockDeals = [
  {
    id: 1,
    departure: "JFK",
    destination: "LHR",
    price: "$350",
    airline: "Delta",
    type: "Error Fare",
    expires: "2025-01-15",
    savings: "60%",
    originalPrice: "$875"
  },
  {
    id: 2,
    departure: "LAX",
    destination: "CDG",
    price: "$450",
    airline: "Air France",
    type: "Flash Sale",
    expires: "2025-01-20",
    savings: "45%",
    originalPrice: "$820"
  },
];

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your Flight Deals</h1>
          <div className="flex items-center space-x-4">
            <select 
              className="px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
              aria-label="Filter deals"
            >
              <option value="all">All Deals</option>
              <option value="error">Error Fares</option>
              <option value="flash">Flash Sales</option>
            </select>
            <button 
              className="bg-[#007BFF] text-white px-4 py-2 rounded-md hover:bg-[#007BFF]/90 transition-colors"
              aria-label="Refresh deals"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
