"use client";

import { galleryCategories } from "@/data/gallery";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

export function FeaturedCarousel() {
  const featuredImages = galleryCategories.flatMap(cat => cat.images).filter(img => img.isFeatured);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const currentImage = featuredImages[selectedIndex];

  return (
    <div>
      {/* Title (Now appears ABOVE the image frame) */}
      <h3 className="text-center text-3xl font-bold text-brand-dark mb-4">
        {currentImage?.alt || 'Featured Image'}
      </h3>
      
      {/* The Image Carousel Frame */}
      <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
        <div className="flex">
          {featuredImages.map((img) => (
            <div className="relative flex-shrink-0 flex-grow-0 basis-full h-64 md:h-96" key={img.id}>
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Description (Now appears BELOW the image frame) */}
      {currentImage?.description && (
        <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
          {currentImage.description}
        </p>
      )}
    </div>
  );
}