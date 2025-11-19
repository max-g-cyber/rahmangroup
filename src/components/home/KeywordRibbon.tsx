"use client";
import { motion, Transition } from "framer-motion"; // Import Transition type

const keywords = [
  "Textile", "Garments", "Import", "Export", "Sourcing", 
  "Procurement", "Real Estate", "Hospitality", "Recruitment", 
  "Global Trade", "Consultation", "Manufacturing"
];

// Define only the animation target values
const marqueeVariants = {
  animate: {
    x: [0, -1000], // Adjust -1000 based on keyword width if needed
  },
};

// Define the transition separately using the imported Transition type
const marqueeTransition: Transition = {
  repeat: Infinity,
  repeatType: "loop",
  duration: 30, // Adjust duration for speed
  ease: "linear",
};

export function KeywordRibbon() {
  return (
    <div className="w-full overflow-x-hidden py-3 bg-theme-accent/80 border-y border-theme-accent/20">
      <motion.div
        className="whitespace-nowrap flex"
        variants={marqueeVariants}
        animate="animate"
        // Apply the transition directly as a prop
        transition={marqueeTransition} 
      >
        {/* Render keywords twice for seamless loop */}
        {[...keywords, ...keywords].map((keyword, index) => (
          <span key={index} className="mx-4 text-sm font-medium text-theme-primary/80">
            {keyword}
          </span>
        ))}
      </motion.div>
    </div>
  );
}