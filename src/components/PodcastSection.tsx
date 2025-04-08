import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaAppleAlt, FaHeartbeat } from "react-icons/fa";

const PodcastSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-75 -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-12"
        >
          Check Out Our Podcast - Coming Soon!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-12"
        >
          Stay tuned for our upcoming podcast where we'll dive into the latest fitness trends, expert advice, and motivational stories.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Episode 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg shadow-md p-8 text-left transition transform bg-opacity-5 hover:shadow-lg hover:bg-opacity-20 hover:scale-105 border border-gray-800"
          >
            <FaDumbbell className="text-4xl text-red-600 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Episode 1: Getting Started</h3>
            <p className="text-gray-400">
              Coming soon: Tips and tricks for beginners to kickstart their fitness journey.
            </p>
          </motion.div>

          {/* Episode 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg shadow-md p-8 text-left transition transform bg-opacity-5 hover:shadow-lg hover:bg-opacity-20 hover:scale-105 border border-gray-800"
          >
            <FaAppleAlt className="text-4xl text-red-600 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Episode 2: Nutrition Essentials</h3>
            <p className="text-gray-400">
              Coming soon: Essential nutrition tips to complement your workout regime.
            </p>
          </motion.div>

          {/* Episode 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-lg shadow-md p-8 text-left transition transform bg-opacity-5 hover:shadow-lg hover:bg-opacity-20 hover:scale-105 border border-gray-800"
          >
            <FaHeartbeat className="text-4xl text-red-600 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Episode 3: Staying Motivated</h3>
            <p className="text-gray-400">
              Coming soon: How to keep yourself motivated and stay on track.
            </p>
          </motion.div>
        </div>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          href="#!"
          className="mt-12 inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full text-lg transition transform hover:scale-105"
        >
          Subscribe for Updates
        </motion.a>
      </div>
    </section>
  );
};

export default PodcastSection;
