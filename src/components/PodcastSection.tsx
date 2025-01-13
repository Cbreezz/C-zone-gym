import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaAppleAlt, FaHeartbeat } from 'react-icons/fa';

const PodcastSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-red-600 mb-12">Check Out Our Podcast - Coming Soon!</h2>
        <p className="text-lg mb-8">
          Stay tuned for our upcoming podcast where we'll dive into the latest fitness trends, expert advice, and motivational stories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <FaDumbbell className="text-4xl mb-4 text-red-600" /> 
            <h3 className="text-3xl font-semibold mb-4">Episode 1: Getting Started</h3>
            <p className="text-lg">
              Coming soon: Tips and tricks for beginners to kickstart their fitness journey.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaAppleAlt className="text-4xl mb-4 text-red-600" /> 
            <h3 className="text-3xl font-semibold mb-4">Episode 2: Nutrition Essentials</h3>
            <p className="text-lg">
              Coming soon: Essential nutrition tips to complement your workout regime.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaHeartbeat className="text-4xl mb-4 text-red-600" />
            <h3 className="text-3xl font-semibold mb-4">Episode 3: Staying Motivated</h3>
            <p className="text-lg">
              Coming soon: How to keep yourself motivated and stay on track.
            </p>
          </motion.div>
        </div>
        <a 
          href="#!" 
          className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105"
        >
          Subscribe for Updates
        </a>
      </div>
    </section>
  );
};

export default PodcastSection;
