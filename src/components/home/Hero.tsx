"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { KeywordRibbon } from "@/components/home/KeywordRibbon";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { homepageCarouselImages } from "@/data/gallery";
import { AnimatedActivities } from "@/components/home/AnimatedActivities";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
};

// --- Integrated Carousel Component ---
function IntegratedCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
  
  return (
    // The responsive sizing classes are on this viewport
    <div 
      className="relative w-full overflow-hidden aspect-square md:aspect-auto md:h-full" 
      ref={emblaRef}
    >
      <div className="flex h-full">
        {homepageCarouselImages.map((img) => (
          <div className="relative flex-shrink-0 flex-grow-0 basis-full h-full" key={img.id}>
            {/*
              * === THE FIX ===
              * Removed 'fill' prop.
              * Added explicit 'width' and 'height' props (ratio 1:1)
              * Added 'h-full w-full' to className to fill the slide container.
              * This resolves the "height: 0" error from next/image.
            */}
            <Image
              src={img.src}
              alt={img.alt}
              width={800} // /* ADJUSTABLE: Optimization prop, 1:1 ratio */
              height={800} // /* ADJUSTABLE: Optimization prop, 1:1 ratio */
              className="object-cover h-full w-full" // Fills the slide
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Main Hero Component ---
export default function Hero() {
  return (
    // Root uses flex-col to position ribbon at the bottom
    <section className="relative flex flex-col bg-theme-background">

      {/* 1. Main Content (Image + Text) */}
      <div className="order-1 flex flex-col pt-16 md:grid md:grid-cols-2 md:min-h-screen">

        {/* --- Image Slideshow Block --- */}
        <div className="relative order-1 w-full md:order-2 md:h-full">
          <IntegratedCarousel />
        </div>

        {/* --- Text Content Block --- */}
        <div className="order-2 w-full md:order-1 flex flex-col justify-center">
          <motion.div
            className="w-full px-4 py-12 text-center md:px-6 md:py-16 md:text-left lg:px-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Logo - Only on Mobile */}
            <div className="mb-6 md:hidden">
              <Image
                src="/logos/rg-logo.png"
                alt="Rahman Group Logo"
                // === TYPO FIX ===
                // Corrected '10SameSite' to '100'
                width={100}
                height={100}
                className="mx-auto h-20 w-auto"
              />
            </div>

            {/* Updated Title */}
            <h1 className="text-4xl font-bold tracking-tight text-theme-primary sm:text-5xl md:text-6xl">
              Welcome to Rahman Group of Companies Ltd.
            </h1>
            <p className="mt-4 text-lg text-theme-text/80 md:text-xl">
              A diversified portfolio of businesses driving innovation and quality.
            </p>
            <div className="mt-8">
              <h2 className="text-lg font-medium text-theme-text">What We Do?</h2>
              <AnimatedActivities />
            </div>
          </motion.div>
        </div>
        
      </div>

      {/* 2. Keyword Ribbon (Bottom on all sizes) */}
      <div className="order-2"> {/* order-2 places it at the bottom of the flex container */}
        <KeywordRibbon />
      </div>

    </section>
  );
}