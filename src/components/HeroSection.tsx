import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col justify-center items-center text-center relative">
      <video
        className="absolute inset-0 w-full h-full object-cover video-bg"
        src="/videos/welcome.mp4"
        loop
        autoPlay
        muted
      />
      <motion.div 
        className="relative z-10 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-6xl font-bold" 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to C-ZONE Gym
        </motion.h1>
        <motion.h2 
          className="text-4xl" 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the Difference
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;
