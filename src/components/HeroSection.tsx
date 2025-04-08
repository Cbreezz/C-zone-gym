import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // For routing
import Countdown from "./Countdown";
import heroBg from "../assets/hero-bg.jpg"; // Update with your image

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Unleash Your Potential
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Join the revolution. The next transformation bootcamp starts soon.
        </p>
        {/* Motivational call-out replacing the label */}
        <div className="mb-4">
          <p className="text-sm md:text-lg font-medium text-gray-300">
            Stop saying "I'll join someday." Make today count.
          </p>
          <Countdown targetDate="2025-05-01T00:00:00" />
        </div>
        {/* Button with hover effect */}
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#dc2626" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-red-600 rounded-full font-semibold text-white transition"
          >
            Join Now
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
