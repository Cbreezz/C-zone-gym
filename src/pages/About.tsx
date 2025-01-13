import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const About: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1 
          className="text-5xl font-bold text-red-600 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        <div className="md:flex md:space-x-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <LazyLoadImage
              src="/public/images/image2.jpg" 
              alt="About C-ZONE Gym" 
              effect="blur"
              className="w-full h-auto rounded-lg shadow-lg mb-8 md:mb-0"
            />
          </motion.div>
          <div className="md:w-1/2">
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Welcome to C-ZONE Gym, where your fitness goals become reality. Our state-of-the-art facilities and professional trainers are here to support you every step of the way.
            </motion.p>
            <motion.h2 
              className="text-3xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Our mission is to provide a welcoming and inspiring environment for everyone. We are dedicated to helping you achieve your fitness goals through personalized training, diverse classes, and community support.
            </motion.p>
            <motion.h2 
              className="text-3xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              Our Values
            </motion.h2>
            <motion.ul 
              className="list-disc list-inside text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <li>Inclusivity: Everyone is welcome, regardless of fitness level.</li>
              <li>Motivation: We encourage and support each other.</li>
              <li>Excellence: We strive for the highest standards in all we do.</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
