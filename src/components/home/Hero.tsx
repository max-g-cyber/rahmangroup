"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // 1. Import Framer Motion

/**
 * Dynamically import the 3D scene (same as before)
 */
const LogoScene = dynamic(() => import("@/components/home/LogoScene"), {
  ssr: false,
  loading: () => <div className="min-h-[250px] w-full" />
});

// Animation variants for the fade-in effect
const fadeInStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Stagger children animations by 0.2s
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const backgroundImagePath = "/hero-background.jpg";
  const textArtImagePath = "/rahman-group-text.png";
  const overlayClass = "bg-brand-dark/70"; // Using your new dark navy for the overlay (70% opacity)

  return (
    <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden py-20 md:min-h-screen">
      
      {/* 1. Background Image */}
      <Image
        src={backgroundImagePath}
        alt="Rahman Group Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* 2. Dark Overlay (Using your new brand color) */}
      <div className={`absolute inset-0 z-10 ${overlayClass}`} />

      {/* 3. Content Stack (Animated) */}
      <motion.div
        className="container relative z-20 mx-auto flex max-w-7xl flex-col items-center px-4 md:px-6"
        variants={fadeInStagger}
        initial="hidden"
        animate="visible" // This triggers the animation sequence on load
      >
        
        {/* Animated Hero Texts */}
        <motion.h1 variants={fadeIn} className="text-center text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Welcome to Rahman Group
        </motion.h1>
        <motion.p variants={fadeIn} className="mt-6 max-w-3xl text-center text-lg text-gray-200">
          A diversified portfolio of businesses driving innovation and quality.
        </motion.p>

        {/* 4. Circular Bounding Box (Your Request) + Composite Logo */}
        <motion.div
          variants={fadeIn}
          className="relative mt-8 flex h-72 w-72 flex-col items-center justify-center rounded-full border-2 border-accent/30 bg-brand-dark/20 p-4 shadow-xl md:h-96 md:w-96"
        >
          {/* Top (3D): Spinning "RG" logo */}
          <div className="h-[170px] w-full max-w-[250px] md:h-[220px]">
            <LogoScene />
          </div>

          {/* Bottom (Static): Textart Image */}
          <div className="w-full max-w-[220px] px-4 md:max-w-[300px]">
            <Image
              src={textArtImagePath}
              alt="Rahman Group Textart"
              width={400}
              height={100}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </motion.div>

        {/* Animated Buttons (Using new Yellow Accent) */}
        <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/?#concerns"
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-brand-dark shadow-sm hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Explore Our Businesses
          </Link>
          <Link
            href="/profile"
            className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20"
          >
            Company Profile
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}