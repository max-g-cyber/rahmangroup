import { Metadata, ResolvingMetadata } from 'next'; // Restored Metadata imports
import { sisterConcernsData } from "@/data/content";
import PageHeader from "@/components/layout/PageHeader";
import { notFound } from "next/navigation";
import Image from "next/image";

// No 'Props' type needed for this method
// type Props = ...

export async function generateStaticParams() {
  return sisterConcernsData.map((concern) => ({ slug: concern.slug }));
}

function getConcernBySlug(slug: string) {
  return sisterConcernsData.find((concern) => concern.slug === slug);
}

// === FIX 1: 'generateMetadata' signature aligned with Next.js 15 ===
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata // 'parent' is included for correct type inference
): Promise<Metadata> {
  const { slug } = await params; // Await params here
  const concern = getConcernBySlug(slug);
  if (!concern) { return { title: "Business Not Found" }; }
  return {
    title: `${concern.name} | Rahman Group of Companies Ltd.`,
    description: concern.description,
  };
}

// === FIX 2: 'ConcernPage' uses the same Next.js 15 signature ===
export default async function ConcernPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params here
  const concern = getConcernBySlug(slug);

  if (!concern) { notFound(); }

  const isRahtexPage = concern.slug === 'rahtex-industries';
  const isRahmanOverseasPage = concern.slug === 'rahman-overseas';

  return (
    <>
      <PageHeader title={concern.name} subtitle={concern.sector} />
      <div className="py-16 sm:py-24 bg-theme-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <article className="prose prose-lg max-w-none text-theme-text prose-headings:text-theme-primary prose-a:text-theme-accent prose-strong:text-theme-primary">
                <h2>About {concern.name}</h2>
                <p>{concern.fullDescription}</p>

                {/* === Rahtex Specific Sections === */}
                {isRahtexPage && (
                  <>
                    <hr className="my-8 border-theme-accent/20" />
                    <h2>Our Products</h2>
                    <p>We manufacture a wide variety of 100% export-oriented garments and textiles:</p>
                    
                    <h3>Children & Infant Items</h3>
                    <ul>
                      <li>Romper</li>
                      <li>Jumpsuit</li>
                      <li>T-Shirt</li>
                      <li>Baby Skirt</li>
                      <li>Baby Pyjama</li>
                    </ul>

                    <h3>Ladies Items (Knit & Woven)</h3>
                    <ul>
                      <li>Shorts</li>
                      <li>Skirt</li>
                      <li>Long Pants</li>
                      <li>Jogging Suit</li>
                      <li>Leggings</li>
                      <li>Bonded Fleece Jacket</li>
                      <li>Polar Fleece Jacket</li>
                      <li>Underwear</li>
                    </ul>

                    <h3>Men Items (Knit & Woven)</h3>
                    <ul>
                      <li>Long Pant</li>
                      <li>Shorts</li>
                      <li>T-Shirt</li>
                      <li>Pique Polo Shirt</li>
                      <li>Swim Shorts</li>
                      <li>Trouser</li>
                      <li>Spring Jacket</li>
                      <li>Polar Fleece Jacket</li>
                      <li>Bonded Fleece Jacket</li>
                      <li>Jogging Suit</li>
                    </ul>

                    <h3>Other Items</h3>
                    <ul>
                      <li>School Uniform</li>
                      <li>Security & Defense Uniform</li>
                      <li>Office Uniform</li>
                    </ul>
                    <hr className="my-8 border-theme-accent/20" />
                    <h2>Our Facilities</h2>
                    <p>
                      Rahtex Industries operates multiple production units. Our primary textile facility is located in Madhabdi, Norshingdi, famously known as the &quot;Manchester of Bangladesh&quot;. Our readymade garment (RMG) factories are situated in Baipail and Dosaid Bazar, within Ashulia, Savar. These facilities collectively span tens of thousands of square feet and are equipped with hundreds of modern machines, enabling substantial production capacities for the global market. We are committed to maintaining environmentally friendly operations across all our sites.
                    </p>
                  </>
                )}

                {/* === Rahman Overseas Specific Sections === */}
                {isRahmanOverseasPage && (
                  <>
                    <hr className="my-8 border-theme-accent/20" />
                    <h2>Our Services</h2>
                    <p>Rahman Overseas offers a comprehensive suite of services for international manpower recruitment:</p>
                    <ul>
                      <li><strong>Recruitment:</strong> Sourcing and placement of skilled, semi-skilled, and unskilled workers from Bangladesh.</li>
                      <li><strong>Global Reach:</strong> Supplying manpower to the Middle East, Southeast Asia, and other international destinations.</li>
                      <li><strong>Consultation:</strong> Providing guidance and support for individuals seeking employment opportunities abroad.</li>
                      <li><strong>Visa Processing:</strong> Handling all necessary documentation and formalities for visa applications with relevant embassies.</li>
                      <li><strong>Training & Development:</strong> Facilitating human resource development through our sister concern, the Bangladesh Institute for Vocational Training (BIVT).</li>
                      <li><strong>Travel Arrangements:</strong> Organizing international air tickets for deployed workers.</li>
                      <li><strong>Nepali Recruitment:</strong> Sourcing manpower from Nepal through trusted partners.</li>
                    </ul>

                    <hr className="my-8 border-theme-accent/20" />
                    <h2>Why Choose Us?</h2>
                    <p>Employers prefer Rahman Overseas for several key reasons:</p>
                    <ul>
                      <li><strong>Experience & Reputation:</strong> Decades of proven experience since 1997, recognized with awards for excellence in manpower export.</li>
                      <li><strong>Professionalism:</strong> A dedicated team and modern communication facilities ensure efficient and reliable service.</li>
                      <li><strong>Rigorous Selection:</strong> Our multi-stage selection process (physical, practical, viva, psychological) ensures candidates meet employer expectations precisely.</li>
                      <li><strong>Quality Workforce:</strong> We provide access to Bangladesh&apos;s diligent, honest, and hardworking labor force.</li>
                      <li><strong>Commitment:</strong> We operate under the principle that &quot;Our first success job will bring the next job,&quot; ensuring complete client satisfaction.</li>
                      <li><strong>Swift Service:</strong> We prioritize timely deployment according to employer demands.</li>
                    </ul>
                  </>
                )}
                
              </article>
            </div>
            {/* Restoring original aside styling */}
            <aside>
              <div className="sticky top-24 rounded-lg bg-white p-8 shadow-sm">
                {concern.logoSrc ? (
                  <Image src={concern.logoSrc} alt={`${concern.name} Logo`} width={200} height={100} className="w-full h-auto object-contain" />
                ) : ( <h3 className="text-2xl font-bold text-theme-primary">{concern.name}</h3> )}
                <div className="mt-6 border-t border-theme-primary/10 pt-6">
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