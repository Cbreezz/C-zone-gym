import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Apollo",
    quote: "The best gym experience I have ever had! The facilities are top-notch and the trainers are very supportive.",
  },
  {
    name: "Cyrus",
    quote: "A fantastic place to achieve your fitness goals. Highly recommend!",
  },
  {
    name: "Nadia",
    quote: "I love the variety of classes offered. The community here is so encouraging!",
  },
  {
    name: "Diana",
    quote: "Truly transformative workouts! The environment is welcoming, and the trainers know their stuff.",
  },
  {
    name: "James",
    quote: "This gym helped me achieve my dream physique. Couldn't ask for better support!",
  },
  {
    name: "Sophia",
    quote: "I have never been more consistent with workouts thanks to the amazing energy here!",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-red-600"
        >
          What Our Members Say
        </motion.h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="p-8 rounded-xl text-center border border-gray-800 bg-gray-900"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <p className="text-xl italic mb-4 text-gray-300">"{testimonials[activeIndex].quote}"</p>
              <h3 className="text-2xl font-semibold text-white">{testimonials[activeIndex].name}</h3>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="text-gray-500 hover:text-red-600 text-3xl focus:outline-none transition transform hover:scale-110"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="text-gray-500 hover:text-red-600 text-3xl focus:outline-none transition transform hover:scale-110"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
