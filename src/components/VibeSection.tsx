import { motion } from "framer-motion";
import { Dumbbell, Users, Flame, HeartPulse } from "lucide-react"; // Uses lucide icons
import { useState, useEffect } from "react";

// Custom hook for number count animation
const useCount = (target: number, shouldStart: boolean, duration: number = 2000): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldStart) {
      let start = 0;
      const increment = target / (duration / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [shouldStart, target, duration]);

  return count;
};

// Vibe data
const vibes = [
  {
    title: "Focused Training",
    description: "Our space is small but powerful. Every rep, every set — focused and intense.",
    icon: <Dumbbell size={40} />,
    targetNumber: 500,
    subtext: "Hours of Focused Training",
  },
  {
    title: "Tight-Knit Community",
    description: "We’re not a crowd — we’re a crew. Everyone here knows your name and your hustle.",
    icon: <Users size={40} />,
    targetNumber: 150,
    subtext: "Active Crew Members",
  },
  {
    title: "Serious Energy",
    description: "We bring the energy. Every. Single. Session.",
    icon: <Flame size={40} />,
    targetNumber: 100,
    subtext: "High-Energy Sessions",
  },
  {
    title: "Real Progress",
    description: "No fluff, no filters. Just consistency, coaching, and growth — on your terms.",
    icon: <HeartPulse size={40} />,
    targetNumber: 1000,
    subtext: "Goals Achieved",
  },
];

const VibeSection = () => {
  // State to control counting
  const [startCounting, setStartCounting] = useState(false);

  // Individual counters for each metric
  const countFocusedTraining = useCount(vibes[0].targetNumber, startCounting);
  const countTightKnitCommunity = useCount(vibes[1].targetNumber, startCounting);
  const countSeriousEnergy = useCount(vibes[2].targetNumber, startCounting);
  const countRealProgress = useCount(vibes[3].targetNumber, startCounting);

  // Bind counters to vibes array
  const vibesWithCounts = [
    { ...vibes[0], count: countFocusedTraining },
    { ...vibes[1], count: countTightKnitCommunity },
    { ...vibes[2], count: countSeriousEnergy },
    { ...vibes[3], count: countRealProgress },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setStartCounting(true)} // Trigger counting when section is in view
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          The C-Zone Difference
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {vibesWithCounts.map((vibe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4 text-red-500">{vibe.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{vibe.title}</h3>
              <p className="text-gray-400 text-sm">{vibe.description}</p>
              {/* Animated Number */}
              <div className="text-4xl font-bold text-red-600 mt-4">{vibe.count}+</div>
              <p className="text-gray-500 text-sm">{vibe.subtext}</p> {/* Added subtext */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeSection;
