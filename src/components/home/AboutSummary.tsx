export default function AboutSummary() {
  return (
    <section className="py-16 sm:py-24 bg-theme-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-theme-primary">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              A Legacy of Trust Since 1996
            </p>
            <p className="mt-6 text-lg leading-8 text-theme-text/80">
              Established in 1996, Rahman Group of Companies Ltd. has grown to become one of the top companies in Bangladesh. Our mission is built on a consciousness of Commitment, Swift Service, Reputation, and uncompromising Quality.
            </p>
          </div>
          {/* UPDATE: This box is now themed maroon and beige/white */}
          <div className="rounded-lg bg-theme-primary p-8 text-white">
            <h3 className="text-xl font-semibold text-white">Our Core Values</h3>
            <p className="mt-2 text-theme-background/80">Why partners choose Rahman Group:</p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-bold text-theme-primary">1</span>
                <span className="text-base text-theme-background">Conscious in <span className="font-semibold text-white">COMMITMENT</span></span>
              </li>
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-bold text-theme-primary">2</span>
                <span className="text-base text-theme-background">Conscious in <span className="font-semibold text-white">SWIFT SERVICE</span></span>
              </li>
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-bold text-theme-primary">3</span>
                <span className="text-base text-theme-background">Conscious in <span className="font-semibold text-white">REPUTATION</span></span>
              </li>
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-bold text-theme-primary">4</span>
                <span className="text-base text-theme-background">Conscious in <span className="font-semibold text-white">QUALITY</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}