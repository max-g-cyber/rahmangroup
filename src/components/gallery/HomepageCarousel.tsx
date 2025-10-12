"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { homepageCarouselImages } from "@/data/gallery";
import Image from "next/image";

export function HomepageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    // === THE DEFINITIVE FIX ===
    // Removed all 'aspect-ratio' classes.
    // Using a large, fixed height for mobile (h-80) that scales up for larger screens.
    // This is the only stable method.
    <div className="w-full h-80 sm:h-96 md:h-[80vh] md:w-[80vh] overflow-hidden rounded-2xl shadow-lg" ref={emblaRef}>
      <div className="flex h-full">
        {homepageCarouselImages.map((img) => (
          <div className="relative flex-shrink-0 flex-grow-0 basis-full h-full" key={img.id}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}