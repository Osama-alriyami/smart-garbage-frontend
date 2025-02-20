import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Smart Garbage System</h1>
      <div>
        <Link to="/" className="mx-4">Dashboard</Link>
        <Link to="/add" className="mx-4">Add Garbage</Link>
      </div>
    </nav>
  );
};

export default Navbar;
