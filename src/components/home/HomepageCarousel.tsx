"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { homepageCarouselImages } from "@/data/gallery";
import Image from "next/image";

export function HomepageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    // Only fills its parent container. NO aspect ratio or fixed height here.
    <div className="overflow-hidden h-full w-full rounded-lg md:rounded-none" ref={emblaRef}> {/* Removed md:rounded-none if sharp edges desired */}
      <div className="flex h-full">
        {homepageCarouselImages.map((img) => (
          <div className="relative flex-shrink-0 flex-grow-0 basis-full h-full" key={img.id}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" // Optimization
            />
          </div>
        ))}
      </div>
    </div>
  );
}