import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa'; 

const testimonials = [
  {
    name: 'Apollo',
    quote: 'The best gym experience I have ever had! The facilities are top-notch and the trainers are very supportive.',
  },
  {
    name: 'Cyrus',
    quote: 'A fantastic place to achieve your fitness goals. Highly recommend!',
  },
  {
    name: 'Nadia',
    quote: 'I love the variety of classes offered. The community here is so encouraging!',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-red-600 mb-12">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-4xl mb-4 text-red-600" /> {/* Adding an icon */}
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
