import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa'; // Importing icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-red-600">C-ZONE Gym</h2>
          <p className="mt-2">Your fitness journey starts here.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/instagram" className="hover:text-red-600 transition duration-300">
            <FaInstagram size={24} />
          </Link>
          <Link to="/tiktok" className="hover:text-red-600 transition duration-300">
            <FaTiktok size={24} />
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 text-center">
        <p>&copy; 2025 C-ZONE Gym. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
