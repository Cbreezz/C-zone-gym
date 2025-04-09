import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        <Link to="/" className="flex items-center">
          <span className="logo-icon mr-2">🏋️‍♂️</span> C-ZONE
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-white">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/classes" className="hover:underline">
            Classes
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="outline-none mobile-menu-button">
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-white" />
          ) : (
            <FaBars className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          <FaTimes />
        </button>
        <ul className="space-y-8 text-center">
          <li>
            <Link
              to="/"
              className="block text-lg font-semibold hover:underline"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-lg font-semibold hover:underline"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/classes"
              className="block text-lg font-semibold hover:underline"
              onClick={toggleMenu}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-lg font-semibold hover:underline"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
