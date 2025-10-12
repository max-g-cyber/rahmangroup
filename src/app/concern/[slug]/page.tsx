import { sisterConcernsData } from "@/data/content";
import PageHeader from "@/components/layout/PageHeader";
import { notFound } from "next/navigation";
import Image from "next/image";

// This function finds the correct business data based on the URL's "slug"
function getConcernBySlug(slug: string) {
  return sisterConcernsData.find((concern) => concern.slug === slug);
}

// This function dynamically sets the page title in the browser tab
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const concern = getConcernBySlug(params.slug);
  if (!concern) {
    return { title: "Business Not Found" };
  }
  return {
    title: `${concern.name} | Rahman Group of Companies Ltd.`,
    description: concern.description,
  };
}

export default function ConcernPage({ params }: { params: { slug: string } }) {
  const concern = getConcernBySlug(params.slug);

  // If no matching business is found, show a 404 Not Found page
  if (!concern) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={concern.name}
        subtitle={concern.sector}
      />

      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="md:col-span-2">
              <article className="prose prose-lg max-w-none text-theme-text prose-headings:text-theme-primary">
                <h2>About {concern.name}</h2>
                <p>
                  {concern.fullDescription}
                </p>
                {/* You can add more sections here like "Our Services", etc. */}
              </article>
            </div>

            {/* Sidebar with Logo */}
            <aside>
              <div className="sticky top-24 rounded-lg bg-theme-background-alt p-8">
                {concern.logoSrc ? (
                  <Image
                    src={concern.logoSrc}
                    alt={`${concern.name} Logo`}
                    width={200}
                    height={100}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <h3 className="text-2xl font-bold text-theme-primary">{concern.name}</h3>
                )}
                <div className="mt-6 border-t border-theme-primary/20 pt-6">
                  <h4 className="font-semibold text-theme-text">Industry</h4>
                  <p className="mt-1 text-theme-text/80">{concern.sector}</p>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}