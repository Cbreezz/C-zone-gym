import React from 'react';
import { motion } from 'framer-motion';
import { FaOm, FaDumbbell, FaHeartbeat } from 'react-icons/fa'; 

const Classes: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1 
          className="text-5xl font-bold text-red-600 mb-12 text-center"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Our Classes
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FaOm className="text-4xl mb-4 text-red-600" /> 
            <h3 className="text-3xl font-semibold mb-4">Yoga</h3>
            <p className="text-lg mb-4">
              Experience the tranquility and flexibility of our Yoga classes.
            </p>
            <ul className="list-disc list-inside">
              <li>Improve flexibility</li>
              <li>Reduce stress</li>
              <li>Enhance mindfulness</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaDumbbell className="text-4xl mb-4 text-red-600" /> 
            <h3 className="text-3xl font-semibold mb-4">Pilates</h3>
            <p className="text-lg mb-4">
              Strengthen your core with our comprehensive Pilates programs.
            </p>
            <ul className="list-disc list-inside">
              <li>Build core strength</li>
              <li>Enhance posture</li>
              <li>Increase flexibility</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaHeartbeat className="text-4xl mb-4 text-red-600" /> 
            <h3 className="text-3xl font-semibold mb-4">HIIT</h3>
            <p className="text-lg mb-4">
              Boost your endurance with high-intensity interval training.
            </p>
            <ul className="list-disc list-inside">
              <li>Burn calories quickly</li>
              <li>Improve cardiovascular health</li>
              <li>Increase stamina</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
