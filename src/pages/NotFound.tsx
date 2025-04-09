import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* 404 Text */}
      <motion.h1
        className="text-7xl font-bold text-red-600 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Page Still in Training 💪
      </motion.h2>
      <p className="text-gray-400 mb-8 text-center px-4">
        Oops! Looks like this page isn’t ready for its big lift just yet. Stay tuned—it’s going to be worth the reps.
      </p>

      {/* Home Button */}
      <motion.a
        href="/"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full flex items-center transition duration-300"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <FaArrowLeft className="mr-2" />
        Go Back Home
      </motion.a>
    </section>
  );
};

export default NotFound;
