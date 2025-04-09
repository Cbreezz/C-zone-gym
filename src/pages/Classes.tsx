import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaRecycle, FaRunning } from "react-icons/fa"; // Icons for classes

const Classes: React.FC = () => {
  // Define classes with details
  const classes = [
    {
      id: "yoga",
      name: "Yoga",
      description: "Stretch, relax, and strengthen your body and mind.",
      icon: <FaRecycle size={40} className="text-red-600" />,
    },
    {
      id: "crossfit",
      name: "CrossFit",
      description: "High-intensity training for serious results.",
      icon: <FaRunning size={40} className="text-red-600" />,
    },
    {
      id: "weightlifting",
      name: "Weightlifting",
      description: "Build strength and master your lifts.",
      icon: <FaDumbbell size={40} className="text-red-600" />,
    },
    {
      id: "zumba",
      name: "Zumba",
      description: "Dance your way to fitness with fun cardio sessions.",
      icon: <FaHeartbeat size={40} className="text-red-600" />,
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Classes
        </motion.h1>

        {/* Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((classItem) => (
            <motion.div
              key={classItem.id}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Class Icon */}
              <div className="flex justify-center mb-4">{classItem.icon}</div>
              {/* Class Name */}
              <h2 className="text-2xl font-semibold text-red-500 mb-4">{classItem.name}</h2>
              {/* Class Description */}
              <p className="text-gray-400 mb-6">{classItem.description}</p>
              {/* Learn More Button */}
              <Link
                to={`/classes/${classItem.id}-coming-soon`} // Non-existent path to trigger 404
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
