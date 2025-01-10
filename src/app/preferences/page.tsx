"use client";

import React, { useState } from "react";
import type { ChangeEvent } from "react";

// Define types according to guidelines
type PreferenceFormData = {
  departure: string;
  destination: string;
  priceRange: string;
};

const PreferencesPage = () => {
  // Use early return pattern with state
  const [formData, setFormData] = useState<PreferenceFormData>({
    departure: "",
    destination: "",
    priceRange: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Save preferences logic (mock for now)
    alert("Preferences saved!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6" role="heading" aria-level={1}>
        Set Your Preferences
      </h1>
      <form className="max-w-md space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label 
            htmlFor="departure"
            className="block font-semibold text-gray-700"
          >
            Departure Airport:
          </label>
          <input
            id="departure"
            name="departure"
            type="text"
            value={formData.departure}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="e.g., JFK"
            aria-label="Departure Airport"
          />
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="destination"
            className="block font-semibold text-gray-700"
          >
            Destination Airport:
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            value={formData.destination}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="e.g., LAX"
            aria-label="Destination Airport"
          />
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="priceRange"
            className="block font-semibold text-gray-700"
          >
            Price Range:
          </label>
          <input
            id="priceRange"
            name="priceRange"
            type="text"
            value={formData.priceRange}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="e.g., $300-$600"
            aria-label="Price Range"
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Save Preferences"
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default PreferencesPage;
