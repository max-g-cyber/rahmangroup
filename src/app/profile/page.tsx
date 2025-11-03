import PageHeader from "@/components/layout/PageHeader";
export default function ProfilePage() {
  return (
    <>
      <PageHeader title="Company Profile" subtitle="A Legacy of Trust, Quality, and Commitment Since 1996." />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          {/* Re-skinned: Typography now uses new theme colors */}
          <article className="prose prose-lg max-w-none prose-headings:text-theme-primary prose-a:text-theme-accent">
            <h2>Our Mission</h2>
            <p>(Placeholder Text): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
            <h2>Our Vision</h2>
            <p>(Placeholder Text): Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himelenos.</p>
            <h2>Our Core Values</h2>
            <ul>
              <li>Conscious in <strong>COMMITMENT</strong></li>
              <li>Conscious in <strong>SWIFT SERVICE</strong></li>
              <li>Conscious in <strong>REPUTATION</strong></li>
              <li>Conscious in <strong>QUALITY</strong></li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
}