"use client";

import { useState } from "react";
import { sisterConcernsData, Concern } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

interface AccordionItemProps {
  item: Concern;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    // UPDATE: Removed border between items
    <div className="overflow-hidden">
      {/* UPDATE: Tile background is now maroon, text is beige/white */}
      <button onClick={onToggle} className="flex w-full items-center justify-between p-6 text-left transition-colors bg-theme-primary hover:bg-theme-primary-dark group">
        <div className="z-10">
          <p className="text-sm font-medium text-theme-background/80">{item.sector}</p>
          <h3 className="mt-1 text-2xl font-bold text-white">{item.name}</h3>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-6 w-6 text-theme-background" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
           <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // The expanded area remains a light color for readability
            className="bg-theme-background-alt"
          >
            <div className="p-6">
              <p className="text-theme-text/90">{item.description}</p>
              <Link
                href={`/concern/${item.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-theme-primary hover:text-theme-primary-dark"
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

export default function ConcernsGrid() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="concerns" className="bg-theme-background py-16 sm:py-24 scroll-mt-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-base font-semibold leading-7 text-theme-primary">Our Businesses</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
            The Sister Concerns of Rahman Group of Companies Ltd.
          </p>
        </div>
        {/* UPDATE: Container for the new themed tiles */}
        <div className="mt-12 overflow-hidden rounded-lg shadow-lg">
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