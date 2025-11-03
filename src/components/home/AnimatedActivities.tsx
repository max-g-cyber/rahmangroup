"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder list - Replace with your actual activities
const activities = [
  "Textile Manufacturing",
  "Garments Production",
  "Global Trade Solutions",
  "Real Estate Development",
  "Manpower Recruitment",
  "Hospitality Services",
];

export function AnimatedActivities() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 3000); // Change activity every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="mt-4 h-8 md:h-10 overflow-hidden"> {/* Container with fixed height */}
      <AnimatePresence mode="wait">
        <motion.span
          key={activities[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="block text-xl md:text-2xl font-semibold text-theme-accent" // Gold accent color
        >
          {activities[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}