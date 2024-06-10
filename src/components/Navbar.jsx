import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-4">
      <ul className="flex space-x-4 justify-end">
        <li>
          <Link to="/" className="text-gray-800 hover:text-red-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/owner" className="text-gray-800 hover:text-red-500">
            Owner
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
