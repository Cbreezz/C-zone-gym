import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaRegCommentDots, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData); // Debugging log

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (serviceID && templateID && userID) {
      emailjs.send(
        serviceID,
        templateID,
        formData,
        userID
      )
      .then((result) => {
        console.log('Email successfully sent!', result.text); // Debugging log
        setSuccessMessage('Thank you! Your message has been sent.');
      }, (error) => {
        console.log('Failed to send email.', error.text); // Debugging log
        setSuccessMessage('Oops! Something went wrong. Please try again.');
      });
    } else {
      console.error('Missing environment variables');
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1 
          className="text-5xl font-bold text-red-600 mb-12 text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.form 
          className="space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex items-center space-x-8">
            <FaUser className="text-2xl text-red-600" />
            <motion.input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" 
              className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              whileFocus={{ scale: 1.05 }}
              style={{ paddingLeft: '2rem' }} // Add padding-left to input
            />
          </div>
          <div className="flex items-center space-x-8">
            <FaEnvelope className="text-2xl text-red-600" />
            <motion.input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" 
              className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              whileFocus={{ scale: 1.05 }}
              style={{ paddingLeft: '2rem' }} // Add padding-left to input
            />
          </div>
          <div className="flex items-center space-x-8">
            <FaRegCommentDots className="text-2xl text-red-600" />
            <motion.textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message" 
              className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              rows={4}
              whileFocus={{ scale: 1.05 }}
              style={{ paddingLeft: '2rem' }} // Add padding-left to textarea
            />
          </div>
          <motion.button 
            className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        {successMessage && <p className="text-center mt-8 text-lg">{successMessage}</p>}
        <div className="mt-12 text-center">
          <FaMapMarkerAlt className="text-4xl text-red-600 mb-4" />
          <p className="text-lg">
            Visit us at: Buruburu Phase 3, Nairobi, Kenya
          </p>
        </div>
        <div className="mt-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d296.46987802106133!2d36.87878390314228!3d-1.2898682347556045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1736427046192!5m2!1sen!2ske" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            title="Google Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
