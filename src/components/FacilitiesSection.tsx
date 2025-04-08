import { motion } from "framer-motion";
// Importing the existing images from the src/assets directory
import equipmentImg from "../assets/equipment.jpg";
import groupSessionImg from "../assets/group-session.jpg";

const facilities = [
  {
    title: "Modern Outdoor Equipment",
    description: "Train with top-tier gear in an open, fresh-air setting designed for freedom and performance.",
    image: equipmentImg,
  },
  {
    title: "Group Workouts & Community",
    description: "Join bootcamps, HIIT sessions, and motivational group vibes with certified trainers.",
    image: groupSessionImg,
  },
];

const FacilitiesSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-black text-white overflow-hidden">
      {/* Gradient overlay (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 -z-10" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Why Train With Us</h2>

        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center mb-20 gap-10`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={facility.image}
                alt={facility.title}
                className="rounded-2xl shadow-xl w-full object-cover h-[300px] md:h-[420px] brightness-75"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{facility.title}</h3>
              <p className="text-lg text-gray-300">{facility.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;
