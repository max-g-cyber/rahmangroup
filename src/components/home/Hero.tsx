"use client";
// Note: We are only modifying this file to replace the buttons with the new carousel.
// All other animations, text, and the 3D logo remain the same.

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { HomepageCarousel } from "@/components/gallery/HomepageCarousel"; // Import the new carousel

const LogoScene = dynamic(() => import("@/components/home/LogoScene"), {
  ssr: false,
  loading: () => <div className="min-h-[250px] w-full" />
});

const fadeInStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  const textArtImagePath = "/rahman-group-text.png";

  return (
    <section className="flex min-h-[90vh] w-full items-center overflow-hidden bg-gray-50 py-20 md:min-h-screen">
      <motion.div
        className="container mx-auto flex max-w-7xl flex-col items-center px-4 md:px-6"
        variants={fadeInStagger} initial="hidden" animate="visible"
      >
        <motion.h1 variants={fadeIn} className="text-center text-3xl font-bold tracking-tight text-brand-dark sm:text-5xl">
          Welcome to Rahman Group
        </motion.h1>
        <motion.p variants={fadeIn} className="mt-6 max-w-3xl text-center text-lg text-gray-600">
          A diversified portfolio of businesses driving innovation and quality.
        </motion.p>
        <motion.div variants={fadeIn}
          className="relative mt-8 flex h-72 w-72 flex-col items-center justify-center rounded-full border border-gray-200 bg-white p-4 shadow-md md:h-96 md:w-96"
        >
          <div className="h-[170px] w-full max-w-[250px] md:h-[220px]"><LogoScene /></div>
          <div className="w-full max-w-[220px] px-4 md:max-w-[300px]">
            <Image src={textArtImagePath} alt="Rahman Group Textart" width={400} height={100} style={{ width: '100%', height: 'auto' }}/>
          </div>
        </motion.div>
        
        {/* === UPDATE: Buttons are replaced by the new Carousel === */}
        <motion.div variants={fadeIn} className="mt-10 w-full max-w-md">
          <HomepageCarousel />
        </motion.div>
      </motion.div>
    </section>
  );
}