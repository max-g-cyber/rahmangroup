export default function AboutSummary() {
  return (
    // Update: Switched to light theme and new 'brand' accent color
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-brand">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              A Legacy of Trust Since 1996
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Established in 1996, Rahman Group has grown to become one of the top companies in Bangladesh. Our mission is built on a consciousness of Commitment, Swift Service, Reputation, and uncompromising Quality.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-8 ring-1 ring-gray-900/5">
            <h3 className="text-xl font-semibold text-zinc-900">Our Core Values</h3>
            <p className="mt-2 text-gray-600">Why partners choose Rahman Group:</p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">1</span>
                <span className="text-base text-gray-700">Conscious in <span className="font-semibold text-zinc-900">COMMITMENT</span></span>
              </li>
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">2</span>
                <span className="text-base text-gray-700">Conscious in <span className="font-semibold text-zinc-900">SWIFT SERVICE</span></span>
              </li>
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">3</span>
                <span className="text-base text-gray-700">Conscious in <span className="font-semibold text-zinc-900">REPUTATION</span></span>
              </li>
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">4</span>
                <span className="text-base text-gray-700">Conscious in <span className="font-semibold text-zinc-900">QUALITY</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}