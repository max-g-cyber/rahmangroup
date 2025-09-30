"use client"; // This page now manages state, so it must be a client component

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { FeaturedCarousel } from "@/components/gallery/FeaturedCarousel"; 
import { GalleryGrid } from "@/components/gallery/GalleryGrid"; // Note the updated file path
import { galleryCategories, GalleryImage } from "@/data/gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryPage() {
  // State for the lightbox is now managed here, at the top level
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = galleryCategories.flatMap(cat => cat.images);

  // This function will be passed down to the grid component
  const openLightbox = (image: GalleryImage) => {
    const imageIndex = allImages.findIndex(img => img.id === image.id);
    if (imageIndex > -1) {
      setLightboxIndex(imageIndex);
      setLightboxOpen(true);
    }
  };

  return (
    <>
      <PageHeader
        title="Our Gallery"
        subtitle="Highlights from our projects, events, and company achievements."
      />

      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl space-y-16 px-4 md:px-6">
          <FeaturedCarousel />
          
          {/* The Grid component now receives the openLightbox function as a prop */}
          <GalleryGrid onImageClick={openLightbox} />
        </div>
      </div>

      {/* The Lightbox component is now rendered at the top level of the page */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={allImages.map(img => ({ 
          src: img.src, 
          title: img.alt, 
          description: img.description 
        }))}
        index={lightboxIndex}
      />
    </>
  );
}