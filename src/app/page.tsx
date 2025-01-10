import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Affordable Flights
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Save big with curated flight deals tailored for you.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-8 py-3 bg-white text-[#007BFF] rounded-md font-semibold hover:bg-white/90 transition-colors"
            aria-label="Get Started with Flight Club"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#007BFF] to-[#28A745] inline-block text-transparent bg-clip-text">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-[#007BFF]">
                Exclusive Deals
              </h3>
              <p className="text-gray-600">
                Find deals you won't see elsewhere, including error fares and last-minute sales.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-[#28A745]">
                Tailored Alerts
              </h3>
              <p className="text-gray-600">
                Set your preferences and get deals that match your travel needs.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-[#FF5733]">
                Save More
              </h3>
              <p className="text-gray-600">
                Join thousands of users saving hundreds on every trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#007BFF]">Ready to Start Saving?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Flight Club today and never miss another amazing flight deal.
          </p>
          <Link
            href="/subscriptions"
            className="inline-flex items-center px-8 py-3 bg-[#28A745] text-white rounded-md font-semibold hover:bg-[#28A745]/90 transition-colors"
            aria-label="View Subscription Plans"
          >
            View Plans
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
