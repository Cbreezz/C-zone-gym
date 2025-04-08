import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaRecycle } from "react-icons/fa"; // Update icons if needed

const Programs: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 text-white py-20 min-h-screen overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 opacity-20 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 opacity-30 rounded-full blur-2xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold text-red-600 mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Programs That Transform
        </motion.h1>

        {/* Horizontal Scrolling Cards */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide px-6">
          {/* Strength Training */}
          <motion.div
            className="flex-shrink-0 bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 w-80"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaDumbbell className="text-4xl mb-4 text-red-600" />
            <h3 className="text-3xl font-semibold mb-4">Strength Training</h3>
            <p className="text-lg mb-4">
              Build muscle and improve your endurance with advanced strength programs.
            </p>
            <button className="text-sm font-semibold mt-4 text-red-600 hover:text-red-500 transition">
              Learn More
            </button>
          </motion.div>

          {/* High Intensity */}
          <motion.div
            className="flex-shrink-0 bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 w-80"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaHeartbeat className="text-4xl mb-4 text-red-600" />
            <h3 className="text-3xl font-semibold mb-4">High Intensity</h3>
            <p className="text-lg mb-4">
              Boost your stamina and calorie burn with high-intensity training programs.
            </p>
            <button className="text-sm font-semibold mt-4 text-red-600 hover:text-red-500 transition">
              Learn More
            </button>
          </motion.div>

          {/* Recovery Programs */}
          <motion.div
            className="flex-shrink-0 bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 w-80"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaRecycle className="text-4xl mb-4 text-red-600" />
            <h3 className="text-3xl font-semibold mb-4">Recovery Programs</h3>
            <p className="text-lg mb-4">
              Enhance mobility and mindfulness with our recovery and stretching programs.
            </p>
            <button className="text-sm font-semibold mt-4 text-red-600 hover:text-red-500 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
