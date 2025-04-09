import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (serviceID && templateID && userID) {
      emailjs
        .send(serviceID, templateID, formData, userID)
        .then(() => {
          setSuccessMessage("Thank you! Your message has been sent.");
          setErrorMessage(""); // Clear error messages
        })
        .catch((error) => {
          setSuccessMessage("");
          setErrorMessage("Oops! Something went wrong. Please try again.");
          console.error("Failed to send email:", error);
        });
    } else {
      console.error("Missing environment variables");
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h1
          className="text-5xl font-bold text-red-600 mb-12 text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        {/* Contact Form */}
        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Name Input */}
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
            />
          </div>

          {/* Email Input */}
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
            />
          </div>

          {/* Message Input */}
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
            />
          </div>

          {/* Submit Button */}
          <motion.button
            className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Success/Error Messages */}
        {successMessage && (
          <motion.div
            className="text-center mt-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCheckCircle className="text-3xl text-green-500 mr-4" />
            <p className="text-lg">{successMessage}</p>
          </motion.div>
        )}
        {errorMessage && (
          <motion.div
            className="text-center mt-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-red-500">{errorMessage}</p>
          </motion.div>
        )}

        {/* Location Section */}
        <div className="mt-12 text-center">
          <FaMapMarkerAlt className="text-4xl text-red-600 mb-4" />
          <p className="text-lg font-semibold">How to Find C-ZONE Gym</p>
          <p className="text-gray-400">
            The gym is located behind the <strong>C-ZONE</strong> Shop.
          </p>
          <div className="mt-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-1.289868,36.878783"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Google Map */}
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

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Follow us on social media:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400">
              <FaFacebookF size={32} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400">
              <FaInstagram size={32} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400">
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
