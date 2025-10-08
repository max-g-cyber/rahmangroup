"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { HomepageCarousel } from "@/components/gallery/HomepageCarousel";
import { SisterConcernLogos } from "@/components/home/SisterConcernLogos";

const LogoScene = dynamic(() => import("@/components/home/LogoScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }};

export default function Hero() {
  const textArtImagePath = "/rahman-group-text.png";

  return (
    <section className="relative min-h-screen w-full">
{/* Desktop Background Image (hidden on mobile) */}
<Image
  src="/hero-background3.jpg"
  alt="Background"
  fill
  className="object-cover hidden md:block"
  priority
/>
{/* Mobile Background Image (visible only on mobile) */}
<Image
  src="/hero-background-mobile.jpg"
  alt="Background"
  fill
  className="object-cover block md:hidden"
  priority
/>      <div className="absolute inset-0 bg-theme-background/60 z-10" />

      {/* DESKTOP LAYOUT */}
      <div className="relative z-20 hidden min-h-screen w-full items-center md:flex">
        <div className="container mx-auto grid max-w-7xl grid-cols-5 items-center gap-12 px-6">
          <div className="col-span-3 flex flex-col items-start text-left">
            <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-5xl lg:text-6xl font-bold tracking-tight text-theme-primary">
              Welcome to Rahman Group of Companies Ltd.
            </motion.h1>
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-8 flex items-center gap-4">
              <div className="h-28 w-28 flex-shrink-0"><LogoScene /></div>
              <Image src={textArtImagePath} alt="Rahman Group Textart" width={400} height={90} />
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-12 w-full"><SisterConcernLogos /></motion.div>
          </div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="col-span-2 w-full">
             {/* Simplified wrapper */}
            <div className="shadow-xl"><HomepageCarousel /></div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="relative z-20 flex min-h-screen w-full flex-col justify-start px-4 pt-16 pb-12 text-center md:hidden">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl font-bold tracking-tight text-theme-primary">
          Welcome to Rahman Group of Companies Ltd.
        </motion.h1>
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-4 flex items-center justify-center gap-2">
          <div className="h-20 w-20 flex-shrink-0"><LogoScene /></div>
          <Image src={textArtImagePath} alt="Rahman Group Textart" width={300} height={70} className="w-48 h-auto" />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-8 w-full"><SisterConcernLogos /></motion.div>
        <div className="flex-grow flex mt-6">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="w-full">
            {/* Simplified wrapper */}
            <div className="shadow-xl"><HomepageCarousel /></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}