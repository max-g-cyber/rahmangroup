import { Metadata, ResolvingMetadata } from 'next';
import { sisterConcernsData } from "@/data/content";
import PageHeader from "@/components/layout/PageHeader";
import { notFound } from "next/navigation";
import Image from "next/image";

// Define the complete Props type, including searchParams
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateStaticParams(): { slug: string }[] {
  return sisterConcernsData.map((concern) => ({
    slug: concern.slug,
  }));
}

function getConcernBySlug(slug: string) {
  return sisterConcernsData.find((concern) => concern.slug === slug);
}

// === THE FIX (from Stack Overflow) ===
// This signature for generateMetadata is now complete, including the 'parent' parameter.
// This resolves the type inference issue for the entire file.
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const concern = getConcernBySlug(params.slug);
  if (!concern) {
    // This should ideally not happen if generateStaticParams is correct
    return {
      title: "Business Not Found",
    };
  }
  return {
    title: `${concern.name} | Rahman Group of Companies Ltd.`,
    description: concern.description,
  };
}

// The main page component can now use the simple props type without error.
export default function ConcernPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const concern = getConcernBySlug(slug);

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
            <div className="md:col-span-2">
              <article className="prose prose-lg max-w-none text-theme-text prose-headings:text-theme-primary">
                <h2>About {concern.name}</h2>
                <p>{concern.fullDescription}</p>
              </article>
            </div>
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