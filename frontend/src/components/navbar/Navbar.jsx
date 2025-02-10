import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { Menu, X } from "lucide-react"; // For the hamburger menu

const Navbar = () => {
  const { account } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="text-lg font-bold">Interview Hub</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg transition duration-200 ${
                isActive ? "bg-pink-600" : "hover:bg-pink-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contribute"
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg transition duration-200 ${
                isActive ? "bg-pink-600" : "hover:bg-pink-700"
              }`
            }
          >
            Contribute
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 py-2">
          <NavLink
            to="/"
            className="block py-2 px-4 text-center hover:bg-pink-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contribute"
            className="block py-2 px-4 text-center hover:bg-pink-700"
            onClick={() => setIsOpen(false)}
          >
            Contribute
          </NavLink>
        </div>
      )}

      {/* User Greeting */}
      {account && (
        <div className="hidden md:block text-sm text-center py-2">
          Welcome, {account.name}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
