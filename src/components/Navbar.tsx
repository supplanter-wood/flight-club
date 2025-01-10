// frontend/src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#007BFF] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight hover:text-white/90"
            aria-label="Flight Club Home"
          >
            Flight Club
          </Link>
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                href="/dashboard" 
                className="hover:text-white/90 transition-colors"
                aria-label="View Dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/preferences" 
                className="hover:text-white/90 transition-colors"
                aria-label="Set Preferences"
              >
                Preferences
              </Link>
            </li>
            <li>
              <Link 
                href="/subscriptions"
                className="bg-white text-[#007BFF] px-4 py-2 rounded-md hover:bg-white/90 transition-colors"
                aria-label="Manage Subscription"
              >
                Upgrade
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
