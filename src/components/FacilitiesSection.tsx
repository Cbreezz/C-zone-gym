import React from 'react';
import { FaDumbbell, FaUserTie, FaArrowsAlt } from 'react-icons/fa'; // Importing icons

const FacilitiesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-red-600 mb-12 text-center">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <FaDumbbell className="text-4xl mb-4 text-red-600" />
            <h3 className="text-3xl font-semibold mb-4">State-of-the-Art Equipment</h3>
            <p className="text-lg">
              Experience the latest and most advanced fitness equipment available.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <FaUserTie className="text-4xl mb-4 text-red-600" />
            <h3 className="text-3xl font-semibold mb-4">Professional Trainers</h3>
            <p className="text-lg">
              Get guidance from certified professionals to reach your goals.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <FaArrowsAlt className="text-4xl mb-4 text-red-600" />
            <h3 className="text-3xl font-semibold mb-4">Spacious Workout Areas</h3>
            <p className="text-lg">
              Enjoy ample space for your workouts in our well-designed areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
