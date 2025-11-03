import { sisterConcernsData } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

// This is the new Company Card component
function CompanyCard({ concern }: { concern: (typeof sisterConcernsData)[0] }) {
  return (
    <Link
      href={`/concern/${concern.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="relative h-40 w-full">
        {concern.logoSrc ? (
          <Image
            src={concern.logoSrc}
            alt={`${concern.name} Logo`}
            fill
            className="object-contain p-8"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-4">
            <h3 className="text-xl font-bold text-theme-primary">{concern.name}</h3>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-theme-text">{concern.name}</h3>
        <p className="mt-1 text-sm text-theme-text/70">{concern.sector}</p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-theme-accent transition-colors group-hover:text-theme-primary">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  );
}

// This is the main component that renders the grid
export default function ConcernsGrid() {
  return (
    <section id="concerns" className="bg-theme-background py-16 sm:py-24 scroll-mt-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-base font-semibold leading-7 text-theme-accent">Our Businesses</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-theme-primary sm:text-4xl">
            The Sister Concerns
          </p>
        </div>

        {/* The new 3-column grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sisterConcernsData.map((concern) => (
            <CompanyCard key={concern.id} concern={concern} />
          ))}
        </div>
      </div>
    </section>
  );
}