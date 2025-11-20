export interface GalleryImage {
  id: number;
  src: string; // The path to the image, e.g., '/gallery/01.jpg'
  alt: string;
  description?: string;
  isFeatured?: boolean; // To show in the top gallery carousel
}

export interface ImageCategory {
  id: string; // e.g., 'corporate'
  title: string; // e.g., 'Corporate Gallery'
  images: GalleryImage[];
}

// Data for the carousel on the homepage hero section.
export const homepageCarouselImages: GalleryImage[] = [
  { id: 1, src: "/hero-slide-1.jpg", alt: "Rahman Group Hero Image 1" },
  { id: 2, src: "/hero-slide-2.jpg", alt: "Rahman Group Hero Image 2" },
  { id: 3, src: "/hero-slide-3.jpg", alt: "Rahman Group Hero Image 3" },
];

// AData for the main /gallery page. All images are in one category for now.
export const galleryCategories: ImageCategory[] = [
  {
    id: "corporate",
    title: "Corporate Gallery",
    images: [
      { id: 101, src: "/gallery/01.jpg", alt: "Title", description: "description for image 01.jpg.", isFeatured: true },
      { id: 102, src: "/gallery/02.jpg", alt: "Title", description: "description for image 02.jpg." },
      { id: 103, src: "/gallery/03.jpg", alt: "Title", description: "description for image 03.jpg." },
      { id: 106, src: "/gallery/06.jpg", alt: "Title", description: "description for image 06.jpg.", isFeatured: true },
      { id: 107, src: "/gallery/07.jpg", alt: "Title", description: "description for image 07.jpg." },
      { id: 108, src: "/gallery/08.jpg", alt: "Title", description: "description for image 08.jpg.", isFeatured: true },
      { id: 109, src: "/gallery/09.jpg", alt: "Title", description: "description for image 09.jpg." },
      { id: 110, src: "/gallery/10.jpg", alt: "Title", description: "description for image 10.jpg." },
      { id: 111, src: "/gallery/11.jpg", alt: "Title", description: "description for image 11.jpg." },
      { id: 112, src: "/gallery/12.jpg", alt: "Title", description: "description for image 12.jpg." },
      { id: 115, src: "/gallery/15.jpg", alt: "Title", description: "description for image 15.jpg." },
      { id: 116, src: "/gallery/16.jpg", alt: "Title", description: "description for image 16.jpg." },
      { id: 117, src: "/gallery/17.jpg", alt: "Title", description: "description for image 17.jpg." },
    ],
  },
];