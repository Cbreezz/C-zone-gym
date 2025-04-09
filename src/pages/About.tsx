import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import image2 from "../assets/image2.jpg";
import { Link } from "react-router-dom";

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

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <LazyLoadImage
            src={image2}
            alt="About C-ZONE Gym"
            effect="blur"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-lg flex items-center justify-center">
            <p className="text-3xl font-semibold text-white px-4 text-center">
              A space where transformations happen—every single day.
            </p>
          </div>
        </motion.div>

        {/* Mission and Values */}
        <div className="md:flex md:space-x-12">
          <div className="md:w-1/2">
            <motion.h2
              className="text-3xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              At C-ZONE Gym, we aim to empower individuals to exceed their
              limits, fostering strength, resilience, and community every step
              of the way.
            </motion.p>
            <motion.h2
              className="text-3xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Our Values
            </motion.h2>
            <motion.ul
              className="list-disc list-inside text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <li>Inclusivity: Everyone belongs, no matter where they start.</li>
              <li>Community: Together, we are stronger and unstoppable.</li>
              <li>Growth: Focused progress that’s consistent and empowering.</li>
            </motion.ul>
          </div>

          {/* Transformations Section */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h2 className="text-3xl font-bold text-red-600 mb-6">
              Every Journey Matters
            </h2>
            <p className="text-lg mb-6">
              Over the years, C-ZONE Gym has transformed countless lives,
              building confidence, strength, and resilience. It’s not about
              where you start—it’s about taking the first step and committing to
              change.
            </p>
            <p className="text-lg mb-6">
              Whether it’s your first workout or your hundredth, we’re here to
              celebrate every success, no matter how big or small.
            </p>
          </motion.div>
        </div>

        {/* Call-to-Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-lg mb-4">
            Your story starts here. Join us and take the next step toward
            transformation.
          </p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold text-white transition">
              Start Your Journey
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
