export default function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    // Re-skinned: Forest Green background
    <div className="bg-theme-primary py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && (<p className="mt-6 max-w-3xl text-xl text-gray-200">{subtitle}</p>)}
      </div>
    </div>
  );
}