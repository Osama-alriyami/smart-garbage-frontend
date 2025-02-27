import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 bg-neutral text-neutral-content">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Smart Grabage</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li> <Link className="mx-4 px-3 py-2 rounded-md text-white hover:text-gray-300 focus:bg-white focus:text-black active:bg-white active:text-black" to="/">Dashboard</Link></li>
        <li><Link className="mx-4 px-3 py-2 rounded-md text-white hover:text-gray-300 focus:bg-white focus:text-black active:bg-white active:text-black" to="/add" >Add Garbage</Link></li>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
