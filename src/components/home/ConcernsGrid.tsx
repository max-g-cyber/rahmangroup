"use client";

import { useState } from "react";
import { sisterConcernsData } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

// This is the individual accordion item component
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: typeof sisterConcernsData[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden border-b border-gray-200">
      {/* Header section that is always visible and clickable */}
      <button
        onClick={onToggle}
        className="relative flex w-full items-center justify-between text-left h-24 md:h-32 p-6 group"
      >
        {/* Placeholder Background Color */}
        <div className={`absolute inset-0 transition-opacity duration-300 group-hover:opacity-90 ${item.backgroundImage}`} />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for text readability */}

        <div className="relative z-10">
          <p className="text-sm font-medium text-gray-300">{item.sector}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{item.name}</h3>
        </div>
        <motion.div
          className="relative z-10"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </motion.div>
      </button>

      {/* Expandable content section */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-gray-50"
          >
            <div className="p-6">
              <p className="text-gray-600">{item.description}</p>
              <Link
                href={`/concern/${item.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// This is the main component that renders the accordion
export default function ConcernsGrid() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="concerns" className="bg-white py-5 sm:py-24 scroll-mt-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand">Our Businesses</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            The Sister Concerns of Rahman Group
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          {sisterConcernsData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}