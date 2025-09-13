import { sisterConcernsData, Concern } from "@/data/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Card component: Updated to light theme
function ConcernCard({ concern }: { concern: Concern }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
      <div className="flex-1 p-6">
        <h3 className="text-sm font-medium text-brand">{concern.sector}</h3>
        <p className="mt-2 text-xl font-semibold text-zinc-900">{concern.name}</p>
        <p className="mt-3 text-base text-gray-600">{concern.description}</p>
      </div>
      <div className="border-t border-gray-100 bg-gray-50 p-6">
        <Link
          href={`/concern/${concern.slug}`}
          className="flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

// Grid component: Updated to light theme
export default function ConcernsGrid() {
  const hasData = sisterConcernsData && sisterConcernsData.length > 0;

  return (
    <section id="concerns" className="bg-white py-16 sm:py-24 scroll-mt-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-base font-semibold leading-7 text-brand">Our Businesses</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            The Sister Concerns of Rahman Group
          </p>
        </div>

        {hasData ? (
          // IF DATA EXISTS: Render the grid
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sisterConcernsData.map((concern) => (
              <ConcernCard key={concern.id} concern={concern} />
            ))}
          </div>
        ) : (
          // IF DATA IS EMPTY (Placeholder styling updated to light theme)
          <div className="mt-12 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50/50 p-12 text-center">
            <h3 className="text-xl font-semibold text-zinc-900">Business Portfolio Updating</h3>
            <p className="mt-3 text-gray-600">
              The portfolio of Rahman Group businesses is currently being updated. New information will be available shortly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}