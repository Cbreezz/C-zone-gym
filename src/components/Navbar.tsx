import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-white font-bold text-xl">
        <Link to="/" className="flex items-center">
          <span className="logo-icon mr-2">🏋️‍♂️</span> C-ZONE
        </Link>
      </div>
      <ul className="hidden md:flex space-x-6 text-white">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/classes" className="hover:underline">Classes</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="outline-none mobile-menu-button">
          {isOpen ? <FaTimes className="w-6 h-6 text-white" /> : <FaBars className="w-6 h-6 text-white" />}
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="space-y-4 text-center">
          <li><Link to="/" className="block text-sm px-2 py-4 text-white hover:bg-red-600 transition duration-300" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className="block text-sm px-2 py-4 text-white hover:bg-red-600 transition duration-300" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/classes" className="block text-sm px-2 py-4 text-white hover:bg-red-600 transition duration-300" onClick={toggleMenu}>Classes</Link></li>
          <li><Link to="/contact" className="block text-sm px-2 py-4 text-white hover:bg-red-600 transition duration-300" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
