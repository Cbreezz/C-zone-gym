import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input className="w-full p-2 bg-gray-800 text-white rounded" type="text" placeholder="Your Name" />
          <input className="w-full p-2 bg-gray-800 text-white rounded" type="email" placeholder="Your Email" />
          <textarea className="w-full p-2 bg-gray-800 text-white rounded" placeholder="Your Message" rows={4}></textarea>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
