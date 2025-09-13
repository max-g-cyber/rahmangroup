interface PageHeaderProps {
  title: string;
  subtitle: string;
}

/**
 * A reusable header component for all internal pages.
 * Uses your 'brand-dark' color for the background.
 */
export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-brand-dark py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}