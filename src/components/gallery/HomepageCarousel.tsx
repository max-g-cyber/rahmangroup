"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { homepageCarouselImages } from "@/data/gallery";
import Image from "next/image";

export function HomepageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <div className="overflow-hidden rounded-lg" ref={emblaRef}>
      <div className="flex">
        {homepageCarouselImages.map((img) => (
          <div className="relative flex-shrink-0 flex-grow-0 basis-full h-48 md:h-64" key={img.id}>
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