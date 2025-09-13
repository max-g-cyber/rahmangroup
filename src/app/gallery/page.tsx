import PageHeader from "@/components/layout/PageHeader";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Gallery"
        subtitle="Highlights from our projects, events, and company achievements."
      />

      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          {/* Re-using the standard placeholder style */}
          <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50/50 p-16 text-center">
            <h3 className="text-2xl font-semibold text-zinc-900">Gallery Coming Soon</h3>
            <p className="mt-4 text-lg text-gray-600">
              We are currently curating our media assets. This gallery will be updated shortly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}