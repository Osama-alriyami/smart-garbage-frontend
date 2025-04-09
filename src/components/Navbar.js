import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current route

  return (
    <nav className="navbar bg-neutral text-white px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg font-bold whitespace-nowrap">
        Smart Garbage
      </div>

      {/* Navigation Links (Wrapped in a flex container) */}
      <div className="flex gap-3">
        <Link
          to="/"
          className={`px-3 py-2 rounded-md text-sm ${
            location.pathname === "/" ? "bg-white text-black font-bold" : "hover:bg-gray-700 hover:text-white"
          }`}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
