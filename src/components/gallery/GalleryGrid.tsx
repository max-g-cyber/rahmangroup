import { galleryCategories, GalleryImage } from "@/data/gallery";
import Image from "next/image";

interface Props {
  onImageClick: (image: GalleryImage) => void;
}

export function GalleryGrid({ onImageClick }: Props) {
  const allImages = galleryCategories.flatMap(cat => cat.images);

  return (
    <div className="border-t border-gray-200 pt-12 mt-12">
      <h3 className="text-center text-3xl font-bold text-brand-dark mb-8">
        Our Collection
      </h3>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {allImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-md"
            onClick={() => onImageClick(image)}
          >
            {/* === FINAL FIX === */}
            {/* Reverting to explicit width/height props instead of 'fill'.
              This is a more robust method for complex CSS grids and will solve the disappearing image issue.
              The 'h-full w-full' classes ensure the image still responsively fills the container.
            */}
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={300}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}